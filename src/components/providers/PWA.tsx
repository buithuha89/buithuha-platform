"use client";

/**
 * PWA — biến web thành "app điện thoại".
 *
 * Làm 2 việc:
 *   1. ĐĂNG KÝ service worker (/sw.js) → mở khoá offline + cài được về máy.
 *      Đây là "sợi dây điện" còn thiếu: file sw.js đã có sẵn nhưng chưa ai bật.
 *   2. Hiện nút "Cài ứng dụng" thân thiện:
 *        • Android / Chrome máy tính → dùng lời mời cài đặt của trình duyệt.
 *        • iPhone / iPad (Safari không hỗ trợ lời mời) → hiện hướng dẫn thủ công.
 *
 * Nút tự ẩn khi: đã cài (đang chạy dạng app), hoặc người dùng đã tắt lời mời
 * (nhớ trong 14 ngày). Render ở layout gốc nên có mặt trên mọi trang.
 */

import { useEffect, useState } from "react";

// Lời mời cài đặt của Chrome/Android (chuẩn BeforeInstallPromptEvent).
type InstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

const DISMISS_KEY = "habui-pwa-dismissed-at";
const DISMISS_DAYS = 14; // đã tắt thì im 14 ngày rồi mới mời lại

export default function PWA() {
  const [installEvent, setInstallEvent] = useState<InstallPromptEvent | null>(null);
  const [showIosGuide, setShowIosGuide] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isIos, setIsIos] = useState(false);

  // ── 1. Đăng ký service worker (chỉ ở bản chạy thật, tránh phá HMR khi dev) ──
  useEffect(() => {
    if (
      process.env.NODE_ENV !== "production" ||
      typeof navigator === "undefined" ||
      !("serviceWorker" in navigator)
    ) {
      return;
    }
    const register = () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        /* im lặng — không có SW thì web vẫn chạy bình thường */
      });
    };
    // Đợi trang tải xong mới đăng ký để không giành băng thông lúc mở trang.
    if (document.readyState === "complete") register();
    else {
      window.addEventListener("load", register);
      return () => window.removeEventListener("load", register);
    }
  }, []);

  // ── 2. Quyết định có mời cài đặt hay không ──
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Đang chạy dạng app rồi (đã cài) → không mời nữa.
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      // Safari iOS dùng cờ riêng
      (window.navigator as Navigator & { standalone?: boolean }).standalone === true;
    if (standalone) return;

    // Mới tắt lời mời gần đây → tôn trọng, chưa mời lại.
    const dismissedAt = Number(localStorage.getItem(DISMISS_KEY) || 0);
    if (dismissedAt && Date.now() - dismissedAt < DISMISS_DAYS * 864e5) return;

    const ua = window.navigator.userAgent;
    const ios = /iphone|ipad|ipod/i.test(ua);
    // Chỉ Safari trên iOS mới cài được về màn hình chính (Chrome iOS thì không).
    const iosSafari = ios && !/crios|fxios|edgios/i.test(ua);
    setIsIos(ios);

    if (iosSafari) {
      // iOS không bắn sự kiện beforeinstallprompt → mời sau 4s, bấm sẽ hiện hướng dẫn.
      const t = setTimeout(() => setVisible(true), 4000);
      return () => clearTimeout(t);
    }

    // Android / Chrome desktop: chờ trình duyệt bắn lời mời rồi mới hiện nút.
    const onPrompt = (e: Event) => {
      e.preventDefault(); // giữ lại lời mời để tự bấm khi người dùng sẵn sàng
      setInstallEvent(e as InstallPromptEvent);
      setVisible(true);
    };
    const onInstalled = () => {
      setVisible(false);
      setInstallEvent(null);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  const dismiss = () => {
    setVisible(false);
    setShowIosGuide(false);
    try {
      localStorage.setItem(DISMISS_KEY, String(Date.now()));
    } catch {
      /* localStorage bị chặn — bỏ qua */
    }
  };

  const handleInstall = async () => {
    if (isIos) {
      setShowIosGuide(true);
      return;
    }
    if (!installEvent) return;
    await installEvent.prompt();
    await installEvent.userChoice;
    setInstallEvent(null);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      {/* Thanh mời cài đặt — nổi ở đáy, gọn, tắt được */}
      <div
        role="dialog"
        aria-label="Cài ứng dụng Hà Bùi Academy"
        className="fixed inset-x-3 bottom-3 z-[9998] mx-auto flex max-w-md items-center gap-3 rounded-2xl border border-[var(--accent)]/30 bg-[var(--bg)] p-3 shadow-2xl sm:inset-x-auto sm:right-4 sm:mx-0"
        style={{ boxShadow: "0 10px 40px rgba(0,0,0,.25)" }}
      >
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-2xl"
          style={{ background: "var(--accent)" }}
          aria-hidden
        >
          📲
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold leading-tight" style={{ color: "var(--fg)" }}>
            Cài ứng dụng Hà Bùi
          </p>
          <p className="mt-0.5 text-xs leading-snug" style={{ color: "var(--fg)", opacity: 0.7 }}>
            Học mọi lúc, mở nhanh từ màn hình chính điện thoại.
          </p>
        </div>
        <button
          onClick={handleInstall}
          className="shrink-0 rounded-xl px-3.5 py-2 text-sm font-semibold"
          style={{ background: "var(--accent)", color: "var(--accent-fg)" }}
        >
          Cài
        </button>
        <button
          onClick={dismiss}
          aria-label="Đóng"
          className="shrink-0 rounded-lg px-1.5 text-xl leading-none"
          style={{ color: "var(--fg)", opacity: 0.5 }}
        >
          ×
        </button>
      </div>

      {/* Hướng dẫn cài trên iPhone/iPad (Safari không có nút cài tự động) */}
      {showIosGuide && (
        <div
          className="fixed inset-0 z-[9999] flex items-end justify-center bg-black/50 p-3 sm:items-center"
          onClick={dismiss}
        >
          <div
            className="w-full max-w-md rounded-2xl p-5"
            style={{ background: "var(--bg)", color: "var(--fg)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-base font-bold">Cài app trên iPhone/iPad</h2>
              <button
                onClick={dismiss}
                aria-label="Đóng"
                className="rounded-lg px-2 text-2xl leading-none"
                style={{ opacity: 0.5 }}
              >
                ×
              </button>
            </div>
            <ol className="space-y-3 text-sm" style={{ opacity: 0.9 }}>
              <li className="flex gap-3">
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                  style={{ background: "var(--accent)", color: "var(--accent-fg)" }}
                >
                  1
                </span>
                <span>
                  Bấm nút <b>Chia sẻ</b> <span aria-hidden>􀈂</span> (hình ô vuông có mũi tên
                  hướng lên) ở thanh dưới cùng của Safari.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                  style={{ background: "var(--accent)", color: "var(--accent-fg)" }}
                >
                  2
                </span>
                <span>
                  Kéo xuống, chọn <b>Thêm vào MH chính</b> (Add to Home Screen).
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                  style={{ background: "var(--accent)", color: "var(--accent-fg)" }}
                >
                  3
                </span>
                <span>
                  Bấm <b>Thêm</b> — icon Hà Bùi sẽ hiện ra màn hình như một ứng dụng.
                </span>
              </li>
            </ol>
          </div>
        </div>
      )}
    </>
  );
}
