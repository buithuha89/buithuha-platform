"use client";

import Link from "next/link";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import CheckoutModal from "@/components/checkout/CheckoutModal";
import { createClient } from "@/lib/supabase/client";
import { siteConfig } from "@/lib/site-config";
import { EBOOK_CATALOG } from "@/lib/ebooks";

interface ProductRow {
  id: string;
  slug: string;
  title: string;
  price: number;
  sale_price: number | null;
}

interface EbookBuyGateProps {
  slug: string; // products.slug của cuốn này
  comboSlug?: string; // products.slug của combo chứa cuốn này (nếu có)
  priceLabel: string; // "99.000đ"
  comboPriceLabel?: string; // "249.000đ"
  loginRedirect: string; // đường dẫn trang hiện tại để quay lại sau đăng nhập
  guestText: ReactNode; // mô tả ở trạng thái chưa đăng nhập
  readyText: ReactNode; // mô tả khi đã đăng nhập, sẵn sàng mua
  zaloMessage: string; // nội dung nhắn Zalo khi bán thủ công
}

type GateState = "loading" | "guest" | "ready" | "owned" | "manual";

export default function EbookBuyGate({
  slug,
  comboSlug,
  priceLabel,
  comboPriceLabel,
  loginRedirect,
  guestText,
  readyText,
  zaloMessage,
}: EbookBuyGateProps) {
  const [state, setState] = useState<GateState>("loading");
  const [product, setProduct] = useState<ProductRow | null>(null);
  const [comboProduct, setComboProduct] = useState<ProductRow | null>(null);
  const [ownedSlug, setOwnedSlug] = useState<string | null>(null);
  const [modalProduct, setModalProduct] = useState<{ id: string; name: string; price: number } | null>(null);

  const entry = EBOOK_CATALOG[slug];
  const autoAvailable = !!entry?.available;

  const refreshOwnership = useCallback(async (): Promise<boolean> => {
    try {
      const res = await fetch(`/api/ebooks/download?slug=${slug}&check=1`);
      const data = await res.json();
      if (data.owned) {
        setOwnedSlug(data.ownedSlug || slug);
        setState("owned");
        return true;
      }
    } catch {
      // giữ trạng thái hiện tại
    }
    return false;
  }, [slug]);

  useEffect(() => {
    let cancelled = false;
    const init = async () => {
      const supabase = createClient();
      let userId: string | null = null;
      try {
        const { data } = await supabase.auth.getUser();
        userId = data.user?.id ?? null;
      } catch {
        userId = null;
      }
      if (cancelled) return;

      if (!userId) {
        setState("guest");
        return;
      }

      if (!autoAvailable) {
        setState("manual");
        return;
      }

      // Lấy sản phẩm (đọc công khai các sản phẩm published)
      const slugs = comboSlug ? [slug, comboSlug] : [slug];
      const { data: rows } = await supabase
        .from("products")
        .select("id, slug, title, price, sale_price")
        .in("slug", slugs)
        .eq("status", "published");
      if (cancelled) return;

      const main = (rows ?? []).find((r) => r.slug === slug) ?? null;
      const combo = (rows ?? []).find((r) => r.slug === comboSlug) ?? null;
      setProduct(main);
      setComboProduct(combo);

      if (!main) {
        // Sản phẩm chưa có trong hệ thống → bán thủ công
        setState("manual");
        return;
      }

      const owned = await refreshOwnership();
      if (!cancelled && !owned) setState("ready");
    };
    init();
    return () => {
      cancelled = true;
    };
  }, [slug, comboSlug, autoAvailable, refreshOwnership]);

  const openCheckout = (p: ProductRow) => {
    setModalProduct({ id: p.id, name: p.title, price: p.sale_price ?? p.price });
  };

  const ownedEntry = ownedSlug ? EBOOK_CATALOG[ownedSlug] : null;
  const ownedIsCombo = !!(ownedSlug && comboSlug && ownedSlug === comboSlug);
  // Trên trang cuốn lẻ luôn tải theo slug cuốn lẻ (API tự nhận combo); trên trang nào slug đó là chính nó
  const downloadFiles = ownedIsCombo && ownedEntry ? ownedEntry.files : entry?.files ?? [];
  const downloadSlug = ownedIsCombo && ownedSlug ? ownedSlug : slug;

  return (
    <>
      <div className="ctaband" id="mua">
        {state === "loading" && <p style={{ color: "#C9C0B1", margin: 0 }}>Đang kiểm tra tài khoản…</p>}

        {state === "guest" && (
          <>
            <h3>Mời tôi một buổi cà phê — {priceLabel}</h3>
            <p>{guestText}</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
              <Link className="btn" href={`/login?redirect=${loginRedirect}`}>Đăng nhập để mua</Link>
              <Link
                className="btn"
                href="/register"
                style={{ background: "transparent", color: "var(--bg-alt)", boxShadow: "none", border: "1px solid #4A4A44" }}
              >
                Tạo tài khoản miễn phí
              </Link>
            </div>
          </>
        )}

        {state === "ready" && product && (
          <>
            <h3>Mời tôi buổi cà phê này — {priceLabel}</h3>
            <p>{readyText}</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
              <button className="btn" onClick={() => openCheckout(product)} style={{ cursor: "pointer", border: "none" }}>
                Mời tôi buổi cà phê này — {priceLabel}
              </button>
              {comboProduct && comboPriceLabel && (
                <button
                  className="btn"
                  onClick={() => openCheckout(comboProduct)}
                  style={{
                    cursor: "pointer",
                    background: "transparent",
                    color: "var(--bg-alt)",
                    boxShadow: "none",
                    border: "1px solid #4A4A44",
                  }}
                >
                  Mua trọn bộ 3 cuốn — {comboPriceLabel}
                </button>
              )}
            </div>
            <p style={{ color: "#9A8F7D", fontSize: 12.5, marginTop: 12, marginBottom: 0 }}>
              Quét QR chuyển khoản · hệ thống xác nhận tự động trong ~1 phút · sách gửi thẳng vào email của bạn.
            </p>
          </>
        )}

        {state === "owned" && (
          <>
            <h3>📚 Sách của bạn đã sẵn sàng</h3>
            <p>
              Cảm ơn bạn đã mời tôi một buổi cà phê. Bấm để tải về — bạn tải lại được bất cứ lúc nào khi đăng nhập.
              {ownedIsCombo && " Bạn đã mua trọn bộ, cả ba tập đều ở đây."}
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
              {downloadFiles.map((f, i) => (
                <a key={i} className="btn" href={`/api/ebooks/download?slug=${downloadSlug}&file=${i}`}>
                  📖 {f.label}
                </a>
              ))}
            </div>
            <p style={{ color: "#9A8F7D", fontSize: 12.5, marginTop: 12, marginBottom: 0 }}>
              Link tải cũng đã được gửi vào email của bạn. Có vấn đề gì, reply email đó — tôi hỗ trợ trong 24h.
            </p>
          </>
        )}

        {state === "manual" && (
          <>
            <h3>Mời tôi buổi cà phê này — {priceLabel}</h3>
            <p>{readyText}</p>
            <a className="btn" href={siteConfig.socials.zalo} target="_blank" rel="noopener noreferrer">
              Mời tôi buổi cà phê này — {priceLabel}
            </a>
            <p style={{ color: "#9A8F7D", fontSize: 12.5, marginTop: 12, marginBottom: 0 }}>
              Nhắn “{zaloMessage}” qua Zalo để nhận link thanh toán &amp; bản đầy đủ
              {comboSlug ? " — hoặc “Mua trọn bộ 3 cuốn” để lấy giá 249.000đ." : "."}
            </p>
          </>
        )}
      </div>

      {modalProduct && (
        <CheckoutModal
          product={modalProduct}
          onClose={() => setModalProduct(null)}
          onSuccess={() => {
            refreshOwnership();
          }}
        />
      )}
    </>
  );
}
