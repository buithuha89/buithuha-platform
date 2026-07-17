"use client";

import { useState } from "react";
import Link from "next/link";

const CSS = `
.tnq{--paper:#F7F3EC;--surf:#FFFDF9;--surf2:#F1EADD;--ink:#221E18;--muted:#6E6455;--faint:#9A8E7B;
--line:#E7DECE;--line2:#F0E9DB;--night:#14171C;
--gold:#CC8A22;--gold-b:#E4A93A;--gold-d:#A9741A;--gold-tint:#F6EAD1;--gold-line:#E7CE9C;
--teal:#0C6070;--teal-tint:#E4EEEF;--teal-line:#BAD7DB;--pain:#B4530A;--pain-tint:#FAEBDD;
--f:"Be Vietnam Pro",system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;
background:var(--paper);color:var(--ink);font-family:var(--f);line-height:1.6;-webkit-font-smoothing:antialiased;min-height:100vh}
.tnq *{box-sizing:border-box}
.tnq .wrap{max-width:680px;margin:0 auto;padding:0 20px}
.tnq .top{background:var(--night);color:#F3EEE4;padding:20px 0;text-align:center}
.tnq .top .brand{font-weight:800;font-size:14px;letter-spacing:.01em;color:#fff;text-decoration:none}
.tnq .top .brand small{display:block;font-weight:500;font-size:11px;color:#9A8F7D}
.tnq .stage{padding:44px 0 90px}
.tnq h1{font-size:clamp(24px,4.6vw,34px);line-height:1.15;letter-spacing:-.02em;margin:0 0 14px;text-wrap:balance;font-weight:800}
.tnq h1 em{font-style:normal;color:var(--gold-d)}
.tnq .lead{color:var(--muted);font-size:16.5px;margin:0 0 26px;text-wrap:pretty}
.tnq .card{background:var(--surf);border:1px solid var(--line);border-radius:18px;padding:28px 26px;box-shadow:0 26px 54px -34px rgba(34,30,24,.5)}
.tnq .lbl{display:inline-block;font-size:11.5px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--gold-d);background:var(--gold-tint);border:1px solid var(--gold-line);padding:5px 12px;border-radius:999px;margin-bottom:18px}
.tnq .btn{display:inline-flex;align-items:center;gap:9px;justify-content:center;background:var(--gold-b);color:#231A08;
font-weight:800;font-size:16px;letter-spacing:.02em;padding:16px 32px;border-radius:999px;border:0;cursor:pointer;font-family:inherit;
box-shadow:0 12px 30px rgba(204,138,34,.32);transition:transform .12s ease,background .15s ease;text-decoration:none}
.tnq .btn:hover{background:var(--gold);transform:translateY(-2px)}
.tnq .btn.full{width:100%}
.tnq .meta{display:flex;gap:16px;flex-wrap:wrap;color:var(--muted);font-size:13.5px;margin-top:18px}
.tnq .meta span{display:inline-flex;align-items:center;gap:6px}
/* progress */
.tnq .prog{display:flex;align-items:center;gap:12px;margin-bottom:24px}
.tnq .bar{flex:1;height:8px;background:var(--surf2);border-radius:999px;overflow:hidden}
.tnq .bar i{display:block;height:100%;background:linear-gradient(90deg,var(--gold),var(--gold-b));border-radius:999px;transition:width .3s ease}
.tnq .prog .n{font-family:ui-monospace,monospace;font-size:13px;font-weight:700;color:var(--muted);white-space:nowrap}
.tnq .q{font-size:clamp(18px,2.6vw,22px);font-weight:800;letter-spacing:-.01em;margin:0 0 22px;text-wrap:pretty;min-height:2.4em}
.tnq .opts{display:grid;gap:11px}
.tnq .opt{display:flex;align-items:center;gap:13px;text-align:left;background:var(--surf);border:1.5px solid var(--line);border-radius:12px;
padding:15px 18px;font-size:15.5px;font-weight:600;color:var(--ink);cursor:pointer;font-family:inherit;transition:border-color .12s ease,background .12s ease,transform .1s ease}
.tnq .opt:hover{border-color:var(--gold);background:var(--gold-tint);transform:translateX(2px)}
.tnq .opt .dot{width:20px;height:20px;border-radius:50%;border:2px solid var(--gold-line);flex-shrink:0}
.tnq .back{margin-top:18px;background:none;border:0;color:var(--muted);font-size:14px;cursor:pointer;font-family:inherit;text-decoration:underline;text-underline-offset:3px}
.tnq .back:hover{color:var(--ink)}
/* form */
.tnq label{display:block;font-size:13.5px;font-weight:600;margin:0 0 6px}
.tnq input{width:100%;padding:12px 14px;border:1px solid var(--line);border-radius:9px;font-size:15px;margin-bottom:14px;font-family:inherit;color:var(--ink);background:#fff}
.tnq input:focus{outline:2px solid var(--gold);outline-offset:1px;border-color:var(--gold)}
.tnq .err{background:var(--pain-tint);border:1px solid #ECCBA8;color:var(--pain);padding:10px 13px;border-radius:9px;font-size:13.5px;margin-bottom:14px}
.tnq .fine{color:var(--faint);font-size:12.5px;margin-top:8px;text-align:center}
/* result */
.tnq .rhead{text-align:center;margin-bottom:22px}
.tnq .remoji{font-size:46px;line-height:1}
.tnq .rband{font-size:12px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin:14px 0 6px}
.tnq .rtitle{font-size:clamp(23px,4vw,30px);font-weight:800;letter-spacing:-.02em}
.tnq .gauge{height:12px;background:linear-gradient(90deg,#2E8B57,#E4A93A,#B4530A);border-radius:999px;position:relative;margin:22px 0 8px}
.tnq .gauge .mk{position:absolute;top:-6px;width:4px;height:24px;background:var(--ink);border-radius:2px;transform:translateX(-50%);box-shadow:0 0 0 3px var(--surf)}
.tnq .gscale{display:flex;justify-content:space-between;font-size:11.5px;color:var(--faint);font-weight:700}
.tnq .rbody{font-size:16px;color:var(--ink);margin:22px 0;text-wrap:pretty}
.tnq .rec{background:var(--gold-tint);border:1px solid var(--gold-line);border-radius:14px;padding:20px 22px;margin-top:20px}
.tnq .rec .rl{font-size:12px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--gold-d);margin-bottom:8px}
.tnq .rec b{color:var(--ink)}
.tnq .rec .btn{margin-top:16px;width:100%}
.tnq .again{text-align:center;margin-top:22px}
.tnq footer{padding:28px 0 40px;text-align:center;color:var(--faint);font-size:13px}
.tnq footer a{color:var(--gold-d);text-decoration:none;font-weight:600}
@media(max-width:560px){.tnq .stage{padding:32px 0 70px}.tnq .card{padding:24px 20px}}
`;

const QUESTIONS = [
  "Việc quan trọng, tôi thấy tự làm cho chắc thay vì giao đi.",
  "Tôi thường phải kiểm lại, sửa lại việc đã giao cho nhân viên.",
  "Nghỉ một, hai ngày là công việc ùn lại chờ tôi về xử lý.",
  "Nhân viên hay hỏi lại tôi những việc đáng ra họ tự quyết được.",
  "Tôi khó tìm được người “làm được như mình”.",
  "Cuối ngày tôi mới bắt đầu làm phần việc thật sự của mình, sau khi lo cho mọi người.",
  "Tôi ôm nhiều đầu việc tới mức không nhớ hết mình đang gánh những gì.",
  "Tôi ngại giao việc vì giải thích còn lâu hơn tự làm.",
  "Đội của tôi giỏi “làm theo” hơn là chủ động tự quyết.",
  "Tôi thấy mình là nút cổ chai — nhiều việc phải qua tôi mới chạy tiếp.",
  "Tôi hiếm khi có thời gian cho việc lớn, tầm nhìn — vì bận việc vụn.",
  "Nếu tôi vắng mặt một tuần, tôi không chắc mọi thứ vẫn ổn.",
];

const OPTIONS = [
  { label: "Thường xuyên đúng với tôi", score: 2 },
  { label: "Thỉnh thoảng", score: 1 },
  { label: "Hiếm khi / không đúng", score: 0 },
];

const MAX = QUESTIONS.length * 2; // 24

const BANDS = [
  {
    min: 0, max: 6, emoji: "👑", band: "Người DẪN DẮT",
    title: "Bạn đang DẪN DẮT",
    body: "Đội của bạn tự chạy khá tốt và bạn đang ở đúng vai người dẫn dắt — không phải người làm thay. Việc của bạn giờ là nâng trần: xây lớp kế cận, chuẩn hoá để nhân bản mô hình cho quy mô lớn hơn.",
    recLabel: "Bước tiếp cho bạn",
    recText: "Đào sâu Khung năng lực & Quản trị hiệu suất để đội không chỉ tự chạy mà còn tự lớn.",
    ctaText: "Xem chủ đề Lãnh đạo & Quản lý →", ctaHref: "/lanh-dao-quan-ly",
  },
  {
    min: 7, max: 12, emoji: "🌤️", band: "Nghiêng về dẫn dắt",
    title: "Bạn nghiêng về DẪN DẮT — còn vài chỗ đang ôm",
    body: "Bạn đã giao được kha khá, nhưng vẫn còn vài mảng tự ôm “cho chắc”. Chỉ cần gỡ 2–3 nút thắt quen thuộc là đội có thể tự chạy hẳn, và bạn nhẹ gánh rõ rệt.",
    recLabel: "Bước tiếp cho bạn",
    recText: "Tập trung vào Giao việc & uỷ quyền — biến thứ trong đầu bạn thành quy trình ai cũng dùng được.",
    ctaText: "Xem chương trình Người Tắt Đèn Cuối Cùng →", ctaHref: "/nguoi-tat-den-cuoi-cung",
  },
  {
    min: 13, max: 18, emoji: "🔥", band: "Đang GÁNH là chính",
    title: "Bạn đang GÁNH là chính",
    body: "Bạn đang là nút cổ chai: nhiều việc phải qua tay bạn mới chạy tiếp, và bạn khó rời khỏi việc vụn để lo việc lớn. Đây là lúc chuyển từ “làm cho nhanh” sang “xây hệ thống” — trước khi kiệt sức.",
    recLabel: "Bước tiếp cho bạn",
    recText: "Chương trình 6 năng lực giúp bạn đưa việc ra khỏi đầu mình, để đội tự chạy mà vẫn giữ chuẩn.",
    ctaText: "Xem chương trình Người Tắt Đèn Cuối Cùng →", ctaHref: "/nguoi-tat-den-cuoi-cung",
  },
  {
    min: 19, max: 24, emoji: "🌙", band: "GÁNH gần như tất cả",
    title: "Bạn đang GÁNH gần như tất cả",
    body: "Doanh nghiệp/đội đang phụ thuộc gần như hoàn toàn vào một mình bạn — rủi ro lớn nhất là kiệt sức và không nhân bản được chính mình. Tin tốt: đây cũng là lúc một cách làm khác tạo ra thay đổi rõ nhất.",
    recLabel: "Bắt đầu từ đây",
    recText: "Bắt đầu chuyển giao ngay từ những việc lặp lại. Chương trình Người Tắt Đèn Cuối Cùng được thiết kế đúng cho tình huống này.",
    ctaText: "Xem chương trình Người Tắt Đèn Cuối Cùng →", ctaHref: "/nguoi-tat-den-cuoi-cung",
  },
];

export default function TracNghiemClient() {
  const [step, setStep] = useState<"intro" | "quiz" | "form" | "result">("intro");
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState<"idle" | "loading">("idle");
  const [err, setErr] = useState("");

  const total = answers.reduce((a, b) => a + b, 0);
  const band = BANDS.find((b) => total >= b.min && total <= b.max) || BANDS[0];
  const pct = Math.round((total / MAX) * 100);

  const pick = (score: number) => {
    const next = [...answers];
    next[idx] = score;
    setAnswers(next);
    if (idx < QUESTIONS.length - 1) setIdx(idx + 1);
    else setStep("form");
  };

  const back = () => {
    if (idx > 0) setIdx(idx - 1);
    else setStep("intro");
  };

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
      if (res.ok && d.success) setStep("result");
      else { setErr(d.error || "Có lỗi xảy ra. Vui lòng thử lại."); setStatus("idle"); }
    } catch {
      setErr("Lỗi kết nối. Vui lòng thử lại.");
      setStatus("idle");
    }
  };

  const restart = () => { setStep("intro"); setIdx(0); setAnswers([]); setStatus("idle"); setErr(""); };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="tnq">
        <div className="top"><Link href="/" className="brand">Hà Bùi Academy<small>Học viện Quản trị &amp; Kỹ năng thiết yếu</small></Link></div>

        <div className="stage"><div className="wrap">

          {step === "intro" && (
            <div>
              <span className="lbl">Trắc nghiệm · 2 phút</span>
              <h1>Bạn đang <em>GÁNH</em> hay đang <em>DẪN DẮT</em>?</h1>
              <p className="lead">12 câu hỏi ngắn giúp bạn tự soi: bạn đang là nút thắt mà mọi việc phải qua tay, hay đang dẫn dắt để đội tự chạy? Nhận kết quả + gợi ý lộ trình dành riêng cho bạn.</p>
              <div className="card">
                <p style={{ margin: 0, fontSize: 15.5, color: "var(--muted)" }}>Với mỗi câu, chọn mức đúng nhất với bạn <b style={{ color: "var(--ink)" }}>trong 3 tháng gần đây</b>. Không có đúng/sai — chỉ để nhìn rõ mình đang ở đâu.</p>
                <div className="meta">
                  <span>⏱️ ~2 phút</span><span>📝 12 câu</span><span>🎯 4 mức kết quả</span>
                </div>
                <button className="btn full" style={{ marginTop: 22 }} onClick={() => setStep("quiz")}>Bắt đầu →</button>
              </div>
            </div>
          )}

          {step === "quiz" && (
            <div>
              <div className="prog">
                <div className="bar"><i style={{ width: `${((idx) / QUESTIONS.length) * 100}%` }} /></div>
                <span className="n">{idx + 1}/{QUESTIONS.length}</span>
              </div>
              <div className="card">
                <span className="lbl">Câu {idx + 1}</span>
                <p className="q">{QUESTIONS[idx]}</p>
                <div className="opts">
                  {OPTIONS.map((o) => (
                    <button key={o.label} className="opt" onClick={() => pick(o.score)}>
                      <span className="dot" /> {o.label}
                    </button>
                  ))}
                </div>
                <button className="back" onClick={back}>← Quay lại</button>
              </div>
            </div>
          )}

          {step === "form" && (
            <div>
              <span className="lbl">Xong rồi!</span>
              <h1>Bài của bạn đã hoàn thành 🎉</h1>
              <p className="lead">Nhập email để xem <b>kết quả</b> và nhận <b>gợi ý lộ trình</b> dành riêng cho tình huống của bạn.</p>
              <div className="card">
                {err && <div className="err">{err}</div>}
                <form onSubmit={submit}>
                  <label>Họ và tên</label>
                  <input required value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} placeholder="Nguyễn Văn A" />
                  <label>Email</label>
                  <input required type="email" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} placeholder="ban@email.com" />
                  <label>Số điện thoại (không bắt buộc)</label>
                  <input type="tel" value={form.phone} onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))} placeholder="0912345678" />
                  <button className="btn full" type="submit" disabled={status === "loading"}>
                    {status === "loading" ? "Đang xử lý..." : "Xem kết quả của tôi →"}
                  </button>
                  <p className="fine">Tôi chỉ dùng email để gửi kết quả &amp; nội dung hữu ích. Không spam.</p>
                </form>
              </div>
            </div>
          )}

          {step === "result" && (
            <div>
              <div className="card">
                <div className="rhead">
                  <div className="remoji">{band.emoji}</div>
                  <div className="rband">{band.band}</div>
                  <div className="rtitle">{band.title}</div>
                </div>
                <div className="gauge"><span className="mk" style={{ left: `${pct}%` }} /></div>
                <div className="gscale"><span>DẪN DẮT</span><span>GÁNH</span></div>
                <p className="rbody">{band.body}</p>
                <div className="rec">
                  <div className="rl">{band.recLabel}</div>
                  <div>{band.recText}</div>
                  <Link href={band.ctaHref} className="btn">{band.ctaText}</Link>
                </div>
              </div>
              <div className="again"><button className="back" onClick={restart}>↺ Làm lại từ đầu</button></div>
            </div>
          )}

        </div></div>

        <footer>Hà Bùi Academy · <Link href="/">buithuha.com</Link></footer>
      </div>
    </>
  );
}
