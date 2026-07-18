"use client";

import { useState } from "react";

export default function LeadCTA({
  title,
  desc,
  btnLabel,
  modalTitle,
  modalDesc,
  doneMsg,
}: {
  title: string;
  desc: string;
  btnLabel: string;
  modalTitle: string;
  modalDesc: string;
  doneMsg: string;
}) {
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

  const openModal = () => { setStatus("idle"); setErr(""); setOpen(true); };

  return (
    <>
      <div className="ctaband">
        <h3>{title}</h3>
        <p>{desc}</p>
        <button className="btn" onClick={openModal}>{btnLabel}</button>
      </div>

      {open && (
        <div className="rsc-ov" onClick={() => status !== "loading" && setOpen(false)}>
          <div className="rsc-modal" onClick={(e) => e.stopPropagation()}>
            <button className="x" onClick={() => status !== "loading" && setOpen(false)} aria-label="Đóng">×</button>
            {status === "done" ? (
              <div className="ok">
                <div className="big">🎁</div>
                <h3>Đã nhận!</h3>
                <p className="desc">{doneMsg}</p>
              </div>
            ) : (
              <>
                <h3>{modalTitle}</h3>
                <p className="desc">{modalDesc}</p>
                {err && <div className="err">{err}</div>}
                <form onSubmit={submit}>
                  <label>Họ và tên</label>
                  <input required value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} placeholder="Nguyễn Văn A" />
                  <label>Email</label>
                  <input required type="email" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} placeholder="ban@email.com" />
                  <label>Số điện thoại (không bắt buộc)</label>
                  <input type="tel" value={form.phone} onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))} placeholder="0912345678" />
                  <button className="go" type="submit" disabled={status === "loading"}>
                    {status === "loading" ? "Đang gửi..." : btnLabel}
                  </button>
                  <p className="fine">Tôi chỉ dùng email để gửi tài liệu &amp; nội dung hữu ích. Không spam.</p>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
