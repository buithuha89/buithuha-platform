"use client";

import { useState } from "react";
import Link from "next/link";
import { RESOURCE_CSS } from "@/components/resource/resourceCss";
import type { Ebook } from "../ebooks";

const EXTRA = `
.ebk-hero{text-align:center}
.ebk-cover{font-size:58px;line-height:1;margin-bottom:6px}
.ebk-meta{color:var(--muted);font-size:13.5px;margin-top:12px}
.ebk-hook{max-width:60ch;margin:22px auto 0;text-align:left}
.ebk-hook p{font-size:16.5px;color:var(--ink);margin:0 0 14px;text-wrap:pretty}
.ebk-forwho{color:var(--muted);font-size:14.5px;font-style:italic;margin-top:2px}
.ebk-cta{text-align:center;margin:26px 0 4px}
.ebk-seclbl{text-align:center;font-size:11.5px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--gold-d);margin:44px 0 14px}
.ebk-sample h3{font-size:19px;font-weight:800;margin:22px 0 10px;letter-spacing:-.01em}
.ebk-sample h3:first-child{margin-top:0}
.ebk-sample p{font-size:16px;color:var(--ink);margin:0 0 14px;line-height:1.72;text-wrap:pretty}
.ebk-cliff{margin-top:18px;padding-top:16px;border-top:1px dashed var(--line);font-weight:700;color:var(--gold-d);font-size:15.5px}
.ebk-cliff .stop{display:block;font-weight:500;color:var(--faint);font-size:13.5px;margin-top:6px}
.ebk-buy{background:var(--surf);border:2px solid var(--gold-line);border-radius:18px;padding:28px 26px;text-align:center;box-shadow:0 26px 60px -40px rgba(169,116,26,.5)}
.ebk-price{font-size:34px;font-weight:800;color:var(--gold-d);letter-spacing:-.02em;line-height:1.1}
.ebk-price small{display:block;font-size:12.5px;color:var(--muted);font-weight:600;letter-spacing:0;margin-top:3px}
.ebk-incl{list-style:none;padding:0;margin:18px auto 22px;max-width:420px;text-align:left;display:grid;gap:10px}
.ebk-incl li{display:grid;grid-template-columns:auto 1fr;gap:11px;font-size:14.7px;color:var(--ink);align-items:start}
.ebk-incl li i{color:var(--teal);font-style:normal;font-weight:800}
.ebk-guar{margin-top:16px;font-size:13px;color:var(--muted);max-width:46ch;margin-left:auto;margin-right:auto}
`;

export default function EbookDetailClient({ ebook }: { ebook: Ebook }) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [err, setErr] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErr("");
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: form.name,
          email: form.email,
          phone: form.phone,
          password: crypto.randomUUID().slice(0, 12) + "Aa1",
          newsletter_opt_in: true,
        }),
      });
      const d = await res.json();
      if (res.ok && d.success) setStatus("done");
      else { setErr(d.error || "Có lỗi xảy ra. Vui lòng thử lại."); setStatus("idle"); }
    } catch {
      setErr("Lỗi kết nối. Vui lòng thử lại.");
      setStatus("idle");
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: RESOURCE_CSS + EXTRA }} />
      <div className="rsc">
        <div className="top"><div className="wrap">
          <Link href="/" className="brand">Hà Bùi Academy<small>Học viện Quản trị &amp; Kỹ năng thiết yếu</small></Link>
          <Link href="/ebook" className="back">← Ebook</Link>
        </div></div>

        <div className="wrap">
          {/* HOOK */}
          <div className="head ebk-hero">
            <div className="ebk-cover">{ebook.emoji}</div>
            <span className="eyebrow">Ebook · {ebook.pages} trang</span>
            <h1>{ebook.title}</h1>
            <p className="lead" style={{ marginLeft: "auto", marginRight: "auto" }}>{ebook.subtitle}</p>
            <div className="ebk-meta">🔒 {ebook.price} · đọc thử miễn phí bên dưới</div>
          </div>

          <div className="body">
            <div className="ebk-hook">
              {ebook.hook.map((p, i) => <p key={i}>{p}</p>)}
              <p className="ebk-forwho">{ebook.forWho}</p>
            </div>

            <div className="ebk-cta">
              <a href="#doc-thu" className="btn">Đọc thử miễn phí →</a>
            </div>

            {/* ĐỌC THỬ */}
            <div className="ebk-seclbl" id="doc-thu">{ebook.sampleLabel}</div>
            <div className="card ebk-sample">
              {ebook.sample.map((sec, i) => (
                <div key={i}>
                  {sec.heading && <h3>{sec.heading}</h3>}
                  {sec.paragraphs.map((p, j) => <p key={j}>{p}</p>)}
                </div>
              ))}
              <div className="ebk-cliff">
                {ebook.cliffhanger}
                <span className="stop">— Phần đọc thử miễn phí dừng ở đây —</span>
              </div>
            </div>

            <div className="ebk-cta">
              <a href="#mua" className="btn">Mua trọn cuốn — {ebook.price} →</a>
            </div>

            {/* MUA NGAY */}
            <div className="ebk-seclbl" id="mua">Nhận trọn cuốn</div>
            <div className="ebk-buy">
              <div className="ebk-price">{ebook.price}<small>{ebook.priceNote}</small></div>
              <ul className="ebk-incl">
                {ebook.included.map((it, i) => <li key={i}><i>✓</i><span>{it}</span></li>)}
              </ul>
              <button className="btn" onClick={() => { setStatus("idle"); setErr(""); setOpen(true); }}>Mua ngay — {ebook.price}</button>
              <div className="ebk-guar">✓ {ebook.guarantee}</div>
            </div>
          </div>
        </div>

        <footer>Hà Bùi Academy · <Link href="/">buithuha.com</Link></footer>
      </div>

      {open && (
        <div className="rsc-ov" onClick={() => status !== "loading" && setOpen(false)}>
          <div className="rsc-modal" onClick={(e) => e.stopPropagation()}>
            <button className="x" onClick={() => status !== "loading" && setOpen(false)} aria-label="Đóng">×</button>
            {status === "done" ? (
              <div className="ok">
                <div className="big">📕</div>
                <h3>Đã nhận đơn của bạn!</h3>
                <p className="desc">Mình sẽ liên hệ sớm để gửi bạn ebook “{ebook.title}” và hướng dẫn thanh toán. Kiểm tra email (cả mục Spam) giúp mình nhé.</p>
              </div>
            ) : (
              <>
                <h3>Mua ebook: {ebook.title}</h3>
                <p className="desc">{ebook.price} · để lại thông tin, mình gửi sách và hướng dẫn thanh toán.</p>
                {err && <div className="err">{err}</div>}
                <form onSubmit={submit}>
                  <label>Họ và tên</label>
                  <input required value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} placeholder="Nguyễn Văn A" />
                  <label>Email</label>
                  <input required type="email" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} placeholder="ban@email.com" />
                  <label>Số điện thoại</label>
                  <input required type="tel" value={form.phone} onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))} placeholder="0912345678" />
                  <button className="go" type="submit" disabled={status === "loading"}>
                    {status === "loading" ? "Đang gửi..." : `Đặt mua — ${ebook.price}`}
                  </button>
                  <p className="fine">Sau khi đặt, mình liên hệ gửi sách &amp; hướng dẫn thanh toán.</p>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
