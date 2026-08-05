"use client";

import { useState } from "react";
import Link from "next/link";
import {
  QUIZ_QUESTIONS as QUESTIONS,
  QUIZ_OPTIONS as OPTIONS,
  computeResult,
} from "@/lib/trac-nghiem/quiz";

const CSS = `
.tnq{--paper:var(--bg);--surf:var(--surface);--surf2:var(--bg-alt);--ink:var(--fg);--muted:var(--fg-muted);--faint:#9A8E7B;
--line:var(--border);--line2:#F0E9DB;--night:#14171C;
--gold:var(--accent-hover);--gold-b:#E4A93A;--gold-d:var(--accent-hover);--gold-tint:#F6EAD1;--gold-line:#E7CE9C;
--teal:#0C6070;--teal-tint:#E4EEEF;--teal-line:#BAD7DB;--pain:#B4530A;--pain-tint:#FAEBDD;--ok:#2E8B57;
--f:"Be Vietnam Pro",system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;
background:var(--paper);color:var(--ink);font-family:var(--f);line-height:1.6;-webkit-font-smoothing:antialiased;min-height:100vh}
.tnq *{box-sizing:border-box}
.tnq .wrap{max-width:680px;margin:0 auto;padding:0 20px}
.tnq .top{background:var(--night);color:var(--bg-alt);padding:20px 0;text-align:center}
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
.tnq .rhead{text-align:center;margin-bottom:14px}
.tnq .remoji{font-size:46px;line-height:1}
.tnq .rband{font-size:12px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin:14px 0 6px}
.tnq .rtitle{font-size:clamp(21px,3.6vw,27px);font-weight:800;letter-spacing:-.02em}
.tnq .roverall{text-align:center;color:var(--muted);font-size:15px;margin:0 0 20px;text-wrap:pretty}
.tnq .barsttl{font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--faint);margin:6px 0 12px}
.tnq .bars{display:grid;gap:13px;margin-bottom:6px}
.tnq .brow{display:grid;gap:6px}
.tnq .bt{display:flex;justify-content:space-between;align-items:center;font-size:14px;font-weight:700;color:var(--muted)}
.tnq .bt .nm{color:var(--ink)}
.tnq .bt .tag{font-size:11px;font-weight:800;letter-spacing:.02em;color:var(--pain);background:var(--pain-tint);border:1px solid #ECCBA8;padding:2px 9px;border-radius:999px;margin-left:9px;white-space:nowrap}
.tnq .btrack{height:10px;background:var(--surf2);border-radius:999px;overflow:hidden}
.tnq .bfill{display:block;height:100%;border-radius:999px;background:linear-gradient(90deg,var(--ok),#7BB661);transition:width .5s ease}
.tnq .brow.weak .bfill{background:linear-gradient(90deg,var(--pain),var(--gold-b))}
.tnq .rbody{font-size:16px;color:var(--ink);margin:22px 0;text-wrap:pretty}
.tnq .rec{background:var(--gold-tint);border:1px solid var(--gold-line);border-radius:14px;padding:20px 22px;margin-top:20px}
.tnq .rec .rl{font-size:12px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--gold-d);margin-bottom:8px}
.tnq .rec b{color:var(--ink)}
.tnq .rec .btn{margin-top:16px;width:100%}
.tnq .rec .more{display:block;text-align:center;margin-top:12px;font-size:13.5px;color:var(--gold-d);text-decoration:underline;text-underline-offset:3px}
.tnq .again{text-align:center;margin-top:22px}
.tnq footer{padding:28px 0 40px;text-align:center;color:var(--faint);font-size:13px}
.tnq footer a{color:var(--gold-d);text-decoration:none;font-weight:600}
@media(max-width:560px){.tnq .stage{padding:32px 0 70px}.tnq .card{padding:24px 20px}.tnq .bt .tag{margin-left:6px}}
`;

export default function TracNghiemClient() {
  const [step, setStep] = useState<"intro" | "quiz" | "form" | "result">("intro");
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState<"idle" | "loading">("idle");
  const [err, setErr] = useState("");

  const outcome = computeResult(answers);
  const { result, dims, overallLine } = outcome;

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
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: form.name,
          email: form.email,
          phone: form.phone,
          source: "trac_nghiem",
          answers,
          quiz_score: outcome.total,
        }),
      });
      const d = await res.json().catch(() => ({}));
      if (res.ok && d.success) {
        setStep("result");
        return;
      }
      // Lỗi do người dùng nhập sai (400) hoặc gửi quá nhanh (429): báo để sửa rồi gửi lại.
      if (res.status === 400 || res.status === 429) {
        setErr(d.error || "Có lỗi xảy ra. Vui lòng thử lại.");
        setStatus("idle");
        return;
      }
      // Lỗi phía hệ thống: khách đã làm xong bài thì vẫn phải được xem kết quả.
      console.error("[TracNghiem] lưu lead thất bại:", res.status, d.error);
      setStep("result");
    } catch (e) {
      console.error("[TracNghiem] lỗi kết nối khi lưu lead:", e);
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
              <span className="lbl">Trắc nghiệm · ~2 phút</span>
              <h1>Đâu là <em>lỗ hổng</em> khiến bạn <em>đuối sức nơi công sở?</em></h1>
              <p className="lead">15 câu ngắn soi 5 kỹ năng “sinh tồn” chốn công sở — nhận sai, giữ ranh giới, nói “không”, giữ năng lượng và san sẻ việc. Kết quả chỉ ra <b>lỗ hổng lớn nhất</b> của bạn, kèm cuốn cẩm nang nên đọc để vá.</p>
              <div className="card">
                <p style={{ margin: 0, fontSize: 15.5, color: "var(--muted)" }}>Với mỗi câu, chọn mức đúng nhất với bạn <b style={{ color: "var(--ink)" }}>trong 3 tháng gần đây</b>. Không có đúng/sai — chỉ để nhìn rõ mình đang hụt ở đâu.</p>
                <div className="meta">
                  <span>⏱️ ~2 phút</span><span>📝 15 câu</span><span>🎯 5 kỹ năng</span>
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
                <p className="q">{QUESTIONS[idx].text}</p>
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
              <p className="lead">Nhập email để xem <b>lỗ hổng lớn nhất</b> của bạn và nhận <b>gợi ý cuốn nên đọc</b> để vá đúng chỗ.</p>
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
                  <div className="remoji">{result.emoji}</div>
                  <div className="rband">{result.band}</div>
                  <div className="rtitle">{result.title}</div>
                </div>
                <p className="roverall">{overallLine}</p>

                <div className="barsttl">5 kỹ năng sinh tồn của bạn — thanh càng dài càng vững</div>
                <div className="bars">
                  {dims.map((d) => (
                    <div key={d.dim} className={`brow${d.dim === result.dim ? " weak" : ""}`}>
                      <div className="bt">
                        <span className="nm">
                          {d.short}
                          {d.dim === result.dim && <span className="tag">điểm cần vá</span>}
                        </span>
                        <span>{d.strengthPct}%</span>
                      </div>
                      <div className="btrack"><span className="bfill" style={{ width: `${Math.max(d.strengthPct, 3)}%` }} /></div>
                    </div>
                  ))}
                </div>

                <p className="rbody">{result.body}</p>
                <div className="rec">
                  <div className="rl">{result.recLabel}</div>
                  <div>{result.recText}</div>
                  <Link href={result.ctaHref} className="btn">{result.ctaText}</Link>
                  <Link href="/ebook" className="more">Xem cả 5 cuốn cẩm nang công sở →</Link>
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
