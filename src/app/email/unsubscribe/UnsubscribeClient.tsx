"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { siteConfig, getBaseUrl } from "@/lib/site-config";

const REASONS = [
  { value: "", label: "-- Chọn lý do (tuỳ chọn) --" },
  { value: "too_many", label: "Nhận quá nhiều email" },
  { value: "not_relevant", label: "Nội dung không phù hợp" },
  { value: "not_subscribed", label: "Không đăng ký" },
  { value: "other", label: "Khác" },
];

function UnsubscribeContent() {
  const searchParams = useSearchParams();
  const sid = searchParams.get("sid") || "";
  const emailParam = searchParams.get("email") || "";

  const [email, setEmail] = useState(emailParam);
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [alreadyUnsubscribed, setAlreadyUnsubscribed] = useState(false);

  // Fetch subscriber info on load
  useEffect(() => {
    if (!emailParam) return;

    const params = new URLSearchParams();
    params.set("email", emailParam);
    if (sid) params.set("sid", sid);

    fetch(`/api/email/unsubscribe?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.subscriber?.already_unsubscribed) {
          setAlreadyUnsubscribed(true);
        }
      })
      .catch(() => {
        // Silent — page still works
      });
  }, [emailParam, sid]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/email/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          send_id: sid || undefined,
          reason: reason || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Đã có lỗi xảy ra. Vui lòng thử lại.");
        return;
      }

      setSuccess(true);
    } catch {
      setError("Đã có lỗi xảy ra. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        background: "var(--bg)",
      }}
    >
      <div style={{ width: "100%", maxWidth: "440px" }}>
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div style={{ marginBottom: "16px" }}>
            <img src={siteConfig.owner.avatar} alt={siteConfig.owner.name} style={{ width: "56px", height: "56px", borderRadius: "16px", objectFit: "cover" as const, display: "inline-block" }} />
          </div>
        </div>

        {/* Card */}
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "12px",
            padding: "32px",
          }}
        >
          {success ? (
            /* Success state */
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "rgb(var(--accent-rgb) / 0.1)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "var(--fg)",
                  marginBottom: "8px",
                }}
              >
                Bạn đã huỷ đăng ký thành công
              </h2>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--fg-muted)",
                  marginBottom: "24px",
                }}
              >
                Email <strong style={{ color: "var(--fg)" }}>{email}</strong> sẽ
                không nhận thêm email từ chúng tôi.
              </p>
              <a
                href={getBaseUrl()}
                style={{
                  display: "inline-block",
                  padding: "10px 24px",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, var(--accent), var(--accent-hover))",
                  color: "var(--fg)",
                  fontWeight: 600,
                  fontSize: "14px",
                  textDecoration: "none",
                }}
              >
                Quay về trang chủ
              </a>
            </div>
          ) : alreadyUnsubscribed ? (
            /* Already unsubscribed state */
            <div style={{ textAlign: "center" }}>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "var(--fg)",
                  marginBottom: "8px",
                }}
              >
                Đã huỷ đăng ký
              </h2>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--fg-muted)",
                  marginBottom: "24px",
                }}
              >
                Email <strong style={{ color: "var(--fg)" }}>{email}</strong> đã
                được huỷ đăng ký trước đó.
              </p>
              <a
                href={getBaseUrl()}
                style={{
                  display: "inline-block",
                  padding: "10px 24px",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, var(--accent), var(--accent-hover))",
                  color: "var(--fg)",
                  fontWeight: 600,
                  fontSize: "14px",
                  textDecoration: "none",
                }}
              >
                Quay về trang chủ
              </a>
            </div>
          ) : (
            /* Unsubscribe form */
            <>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "var(--fg)",
                  marginBottom: "4px",
                  textAlign: "center",
                }}
              >
                Huỷ đăng ký nhận email
              </h2>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--fg-muted)",
                  textAlign: "center",
                  marginBottom: "24px",
                }}
              >
                Chúng tôi sẽ ngừng gửi email đến địa chỉ này.
              </p>

              {error && (
                <div
                  style={{
                    marginBottom: "16px",
                    padding: "12px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    color: "var(--danger)",
                    background: "rgb(var(--danger-rgb) / 0.08)",
                    border: "1px solid rgb(var(--danger-rgb) / 0.2)",
                  }}
                >
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Email display */}
                <div style={{ marginBottom: "16px" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "var(--fg-muted)",
                      marginBottom: "6px",
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    readOnly={!!emailParam}
                    placeholder="your@email.com"
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      border: "1px solid var(--border)",
                      background: emailParam ? "#111" : "var(--surface)",
                      color: "var(--fg)",
                      fontSize: "14px",
                      outline: "none",
                      boxSizing: "border-box",
                      opacity: emailParam ? 0.7 : 1,
                    }}
                  />
                </div>

                {/* Reason select */}
                <div style={{ marginBottom: "24px" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "var(--fg-muted)",
                      marginBottom: "6px",
                    }}
                  >
                    Lý do (tuỳ chọn)
                  </label>
                  <select
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      border: "1px solid var(--border)",
                      background: "var(--surface)",
                      color: "var(--fg)",
                      fontSize: "14px",
                      outline: "none",
                      boxSizing: "border-box",
                      cursor: "pointer",
                      WebkitAppearance: "none",
                      appearance: "none" as const,
                    }}
                  >
                    {REASONS.map((r) => (
                      <option key={r.value} value={r.value}>
                        {r.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading || !email}
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "8px",
                    border: "none",
                    background: loading ? "#991b1b" : "var(--danger)",
                    color: "var(--fg)",
                    fontWeight: 600,
                    fontSize: "14px",
                    cursor: loading ? "not-allowed" : "pointer",
                    opacity: loading || !email ? 0.7 : 1,
                    transition: "background 0.2s, opacity 0.2s",
                  }}
                >
                  {loading ? "Đang xử lý..." : "Xác nhận huỷ đăng ký"}
                </button>
              </form>

              {/* Home link */}
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <a
                  href={getBaseUrl()}
                  style={{
                    fontSize: "14px",
                    color: "var(--accent)",
                    textDecoration: "none",
                  }}
                >
                  Quay về trang chủ
                </a>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <p
          style={{
            textAlign: "center",
            fontSize: "12px",
            color: "var(--fg-subtle)",
            marginTop: "24px",
          }}
        >
          {siteConfig.domain}
        </p>
      </div>
    </div>
  );
}

export default function UnsubscribePage() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--bg)",
            color: "var(--fg-muted)",
          }}
        >
          Đang tải...
        </div>
      }
    >
      <UnsubscribeContent />
    </Suspense>
  );
}
