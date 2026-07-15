"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const CSS = `
.ndtc{--paper:#FFFFFF;--card:#F6F8FC;--ink:#0B0E14;--muted:#5B616E;--line:#E6E9F0;--line-2:#F0F2F7;
--deep:#0A1B4D;--deep-2:#123A9E;--go:#1F4BFF;--go-deep:#153AD6;--go-bright:#4E77FF;--go-tint:#ECF1FF;--go-line:#C6D6FF;
--pain:#E23B4E;--pain-tint:#FDECEE;--pain-line:#F6C3C9;--gold:#0B0E14;--gold-tint:#F1F3F8;--gold-line:#DADEE8;
--f:"Be Vietnam Pro",system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;
--mono:ui-monospace,"Cascadia Mono",Consolas,"SF Mono",monospace;--maxw:1000px;
background:var(--paper);color:var(--ink);font-family:var(--f);line-height:1.6;-webkit-font-smoothing:antialiased;
overflow-x:hidden;min-height:100vh;padding-bottom:80px}
.ndtc *{box-sizing:border-box}
.ndtc .wrap{max-width:var(--maxw);margin:0 auto;padding:0 22px}
.ndtc h1,.ndtc h2,.ndtc h3{margin:0;letter-spacing:-.03em;text-wrap:balance;line-height:1.08;font-weight:800}
.ndtc h2{font-size:clamp(28px,5vw,46px);margin-bottom:16px}
.ndtc .lbl{font-size:11.5px;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--go);display:block;margin-bottom:16px}
.ndtc .lead{color:var(--muted);font-size:clamp(16px,2.1vw,19px);max-width:62ch;text-wrap:pretty}
.ndtc .story p,.ndtc .col li span,.ndtc .pil span,.ndtc .obj .a,.ndtc .row .t small{text-wrap:pretty}
.ndtc section{padding:82px 0}
.ndtc .btn{display:inline-flex;align-items:center;gap:10px;justify-content:center;background:var(--go);color:#fff;
font-weight:800;font-size:16px;letter-spacing:.02em;padding:18px 36px;border-radius:8px;text-decoration:none;border:0;
cursor:pointer;text-transform:uppercase;font-family:inherit;box-shadow:0 10px 28px rgba(31,75,255,.30);
transition:transform .12s ease,background .15s ease}
.ndtc .btn:hover{background:var(--go-deep);transform:translateY(-2px)}
.ndtc .btn:focus-visible{outline:3px solid var(--gold);outline-offset:3px}
.ndtc .btn.lg{font-size:17px;padding:20px 44px}
.ndtc .nav{position:sticky;top:0;z-index:40;background:rgba(255,255,255,.88);backdrop-filter:blur(10px);border-bottom:1px solid var(--line)}
.ndtc .nav .wrap{display:flex;align-items:center;justify-content:space-between;height:62px}
.ndtc .brand{font-weight:800;font-size:15px;text-decoration:none;color:var(--ink)}
.ndtc .brand small{display:block;font-weight:500;font-size:11px;color:var(--muted)}
.ndtc .nav .btn{padding:11px 22px;font-size:13px}
.ndtc .hero{background:linear-gradient(180deg,#EEF3FF 0%,#FFFFFF 72%);color:var(--ink);border-bottom:1px solid var(--line);
padding:96px 0 78px;position:relative;overflow:hidden}
.ndtc .hero::after{content:"";position:absolute;right:-140px;bottom:-160px;width:520px;height:520px;border-radius:50%;
background:radial-gradient(circle,rgba(31,75,255,.18),transparent 64%);filter:blur(48px)}
.ndtc .hero .wrap{position:relative}
.ndtc .hero .lbl{color:var(--go)}
.ndtc .hero h1{font-size:clamp(31px,6.2vw,66px);max-width:17ch;margin-bottom:22px;text-wrap:balance}
.ndtc .hero h1 em{font-style:normal;color:var(--go)}
.ndtc .hero .sub{color:var(--muted);font-size:clamp(16px,2.15vw,19px);max-width:54ch;margin:0 0 14px;text-wrap:pretty}
.ndtc .hero .sub:last-of-type{margin-bottom:34px}
.ndtc .hero .sub b{color:var(--ink)}
.ndtc .proofstrip{margin-top:38px;padding-top:22px;border-top:1px solid var(--line);display:flex;flex-wrap:wrap;gap:12px 34px}
.ndtc .proofstrip div{display:flex;flex-direction:column}
.ndtc .proofstrip .v{font-family:var(--mono);font-weight:800;font-size:22px;color:var(--ink);letter-spacing:-.02em}
.ndtc .proofstrip .l{font-size:11.5px;color:var(--muted);letter-spacing:.04em}
.ndtc .gap{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:34px}
.ndtc .col{border-radius:14px;padding:26px 26px 22px;border:1px solid var(--line);background:var(--card)}
.ndtc .col.now{border-color:var(--pain-line);background:var(--pain-tint)}
.ndtc .col.then{border-color:var(--go-line);background:var(--go-tint)}
.ndtc .col h3{font-size:13px;letter-spacing:.16em;text-transform:uppercase;margin-bottom:16px}
.ndtc .col.now h3{color:var(--pain)} .ndtc .col.then h3{color:var(--go-deep)}
.ndtc .col ul{list-style:none;padding:0;margin:0;display:grid;gap:11px}
.ndtc .col li{display:grid;grid-template-columns:auto 1fr;gap:11px;font-size:15.4px;color:var(--ink)}
.ndtc .col li i{font-style:normal;font-weight:800}
.ndtc .col.now li i{color:var(--pain)} .ndtc .col.then li i{color:var(--go-deep)}
.ndtc .arrowline{text-align:center;margin-top:26px;font-size:19px;font-weight:800;color:var(--go-deep)}
.ndtc .pillars{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:34px}
.ndtc .pil{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:26px 24px;transition:transform .15s ease,border-color .15s ease}
.ndtc .pil:hover{transform:translateY(-3px);border-color:var(--go)}
.ndtc .pil .n{font-family:var(--mono);font-size:12px;font-weight:700;color:var(--go);letter-spacing:.1em}
.ndtc .pil b{display:block;font-size:19px;font-weight:800;margin:8px 0 6px;letter-spacing:-.02em}
.ndtc .pil span{color:var(--muted);font-size:14.5px}
.ndtc .story{background:var(--paper);border:1px solid var(--line);border-left:4px solid var(--pain);border-radius:12px;padding:28px 30px;margin-top:30px}
.ndtc .story p{margin:0 0 13px;font-size:16px}
.ndtc .story p.dim{color:var(--muted)}
.ndtc .story p.beat{font-weight:800;font-size:18px}
.ndtc .story .clock{font-family:var(--mono);font-size:12px;color:var(--pain);font-weight:700;display:block;margin-bottom:2px}
.ndtc .story hr{border:0;border-top:1px dashed var(--line);margin:18px 0}
.ndtc .stats{display:grid;grid-template-columns:repeat(5,1fr);gap:12px;margin-top:32px}
.ndtc .stat{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:24px 12px;text-align:center}
.ndtc .stat .v{font-family:var(--mono);font-variant-numeric:tabular-nums;font-size:clamp(21px,3vw,30px);font-weight:700;color:var(--gold);letter-spacing:-.02em}
.ndtc .stat .l{font-size:12px;color:var(--muted);margin-top:5px}
.ndtc .obj{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:20px 22px;margin-bottom:11px}
.ndtc .obj .q{font-weight:800;font-size:16px;margin-bottom:5px}
.ndtc .obj .a{color:var(--muted);font-size:14.7px}
.ndtc .offerbox{background:var(--card);border:2px solid var(--gold-line);border-radius:16px;margin-top:30px;overflow:hidden}
.ndtc .offerhead{background:var(--gold-tint);border-bottom:1px solid var(--gold-line);padding:22px 28px}
.ndtc .offerhead b{font-size:18px;font-weight:800}
.ndtc .offerhead small{display:block;color:var(--muted);font-size:13px;margin-top:3px}
.ndtc .ledger{padding:8px 28px}
.ndtc .row{display:grid;grid-template-columns:1fr auto;gap:16px;padding:15px 0;border-bottom:1px solid var(--line-2);align-items:start}
.ndtc .row:last-of-type{border-bottom:0}
.ndtc .row .t b{font-size:15.5px}
.ndtc .row .t small{display:block;color:var(--muted);font-size:13.6px;margin-top:2px}
.ndtc .row .v{font-family:var(--mono);font-size:13px;color:var(--gold);font-weight:700;white-space:nowrap;padding-top:3px}
.ndtc .price{background:var(--gold-tint);padding:20px 28px;border-top:2px solid var(--gold-line);display:flex;flex-wrap:wrap;justify-content:space-between;align-items:baseline;gap:12px}
.ndtc .price .l{color:var(--muted);font-size:14.5px}
.ndtc .price .r{font-size:21px;font-weight:800;color:var(--gold)}
.ndtc .price s{color:var(--muted);font-weight:500;font-size:14px;margin-right:8px}
.ndtc .guar{margin:20px 28px;background:var(--go-tint);border:1px solid var(--go-line);border-radius:12px;padding:18px 20px;color:var(--muted);font-size:14.7px}
.ndtc .guar b{color:var(--ink)} .ndtc .guar .t{color:var(--go-deep);font-weight:800}
.ndtc .scarce{list-style:none;padding:16px 20px;margin:0 28px 22px;display:grid;gap:9px;background:var(--pain-tint);border:1px solid var(--pain-line);border-radius:12px}
.ndtc .scarce li{display:grid;grid-template-columns:auto 1fr;gap:11px;color:var(--muted);font-size:14.7px}
.ndtc .scarce i{font-style:normal;color:var(--pain);font-weight:800}
.ndtc .scarce b{color:var(--ink)}
.ndtc .offercta{padding:0 28px 28px;text-align:center}
.ndtc .offercta .btn{width:100%;max-width:420px}
.ndtc details{background:var(--card);border:1px solid var(--line);border-radius:12px;margin-bottom:10px;overflow:hidden}
.ndtc summary{cursor:pointer;padding:18px 22px;font-weight:700;font-size:15.5px;list-style:none;display:flex;justify-content:space-between;gap:14px;align-items:center}
.ndtc summary::-webkit-details-marker{display:none}
.ndtc summary::after{content:"+";color:var(--go);font-size:20px;font-weight:800}
.ndtc details[open] summary::after{content:"–"}
.ndtc details .body{padding:15px 22px 18px;color:var(--muted);font-size:14.7px;border-top:1px solid var(--line-2)}
.ndtc .final{background:linear-gradient(150deg,var(--deep) 0%,var(--deep-2) 52%,#1F4BFF 100%);color:#EAF0FF;text-align:center;padding:92px 0}
.ndtc .final h2{color:#fff;max-width:18ch;margin:0 auto 18px}
.ndtc .final p{color:#C6D2FF;font-size:18px;max-width:52ch;margin:0 auto 32px}
.ndtc .final .btn{background:#fff;color:var(--go-deep);box-shadow:0 10px 30px rgba(0,0,0,.22)}
.ndtc .final .btn:hover{background:#EAF0FF}
.ndtc .final .mini{margin-top:18px;font-size:13px;color:#AEC0F7}
.ndtc footer{padding:36px 0 28px;text-align:center;color:var(--muted);font-size:13px;border-top:1px solid var(--line)}
.ndtc .sticky{position:fixed;left:0;right:0;bottom:0;z-index:50;padding:11px 16px calc(11px + env(safe-area-inset-bottom));
background:rgba(255,255,255,.92);backdrop-filter:blur(10px);border-top:1px solid var(--line)}
.ndtc .sticky .inner{max-width:540px;margin:0 auto}
.ndtc .sticky .btn{width:100%}
.ndtc .center{text-align:center}
.ndtc .reveal{opacity:0;transform:translateY(16px)}
.ndtc .reveal.in{opacity:1;transform:none;transition:opacity .6s ease,transform .6s ease}
@media (prefers-reduced-motion:reduce){.ndtc .reveal{opacity:1;transform:none;transition:none}}
.ndtc-ov{position:fixed;inset:0;z-index:60;background:rgba(10,20,18,.55);backdrop-filter:blur(3px);display:flex;align-items:center;justify-content:center;padding:18px}
.ndtc-modal{position:relative;width:100%;max-width:420px;background:#fff;border-radius:16px;padding:30px 28px;box-shadow:0 30px 80px rgba(0,0,0,.3);font-family:"Be Vietnam Pro",system-ui,sans-serif;color:#141C1A}
.ndtc-modal h3{margin:0 0 5px;font-size:21px;font-weight:800;letter-spacing:-.02em}
.ndtc-modal .desc{margin:0 0 18px;font-size:14px;color:#5F6C68}
.ndtc-modal label{display:block;font-size:13.5px;font-weight:600;margin:0 0 5px}
.ndtc-modal input{width:100%;padding:11px 13px;border:1px solid #DDE1DE;border-radius:8px;font-size:15px;margin-bottom:13px;font-family:inherit;color:#141C1A;background:#fff}
.ndtc-modal input:focus{outline:2px solid #1F4BFF;outline-offset:1px;border-color:#1F4BFF}
.ndtc-modal .go{width:100%;background:#1F4BFF;color:#fff;border:0;padding:14px;border-radius:8px;font-weight:800;font-size:15.5px;cursor:pointer;font-family:inherit;text-transform:uppercase;letter-spacing:.02em}
.ndtc-modal .go:disabled{opacity:.6}
.ndtc-modal .x{position:absolute;top:12px;right:14px;border:0;background:none;font-size:22px;cursor:pointer;color:#8A9490;line-height:1}
.ndtc-modal .err{background:#FDEEE9;border:1px solid #F6C4B5;color:#B4442A;padding:9px 12px;border-radius:8px;font-size:13.5px;margin-bottom:12px}
.ndtc-modal .ok{text-align:center;padding:14px 0}
.ndtc-modal .ok .big{font-size:44px;line-height:1}
.ndtc-modal .ok h3{margin-top:10px}
@media (max-width:820px){
.ndtc section{padding:60px 0}
.ndtc .gap{grid-template-columns:1fr} .ndtc .pillars{grid-template-columns:1fr}
.ndtc .stats{grid-template-columns:repeat(2,1fr)} .ndtc .stats .stat:last-child{grid-column:span 2}
.ndtc .ledger,.ndtc .offercta,.ndtc .price,.ndtc .offerhead{padding-left:20px;padding-right:20px}
.ndtc .guar,.ndtc .scarce{margin-left:20px;margin-right:20px}
}
`;

export default function LandingClient() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [err, setErr] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = rootRef.current?.querySelectorAll(".reveal");
    if (!els?.length) return;
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

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

  const CTA = ({ children, cls }: { children: React.ReactNode; cls?: string }) => (
    <button className={"btn" + (cls ? " " + cls : "")} onClick={() => setOpen(true)}>{children}</button>
  );

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="ndtc" ref={rootRef}>

        <div className="nav"><div className="wrap">
          <Link href="/" className="brand">Hà Bùi Academy<small>Học viện Quản trị &amp; Kỹ năng thiết yếu</small></Link>
          <CTA>Giữ chỗ</CTA>
        </div></div>

        {/* HERO */}
        <header className="hero"><div className="wrap">
          <span className="lbl">Chương trình nâng cao năng lực quản lý</span>
          <h1>Tự do bắt đầu từ ngày bạn <em>thôi ôm hết</em>.</h1>
          <p className="sub">Bạn dựng cơ ngơi này để được tự do. Hôm nay, người bị trói chặt nhất trong đó — <b>chính là bạn</b>.</p>
          <p className="sub">Trong <b>180 ngày</b>, bạn <b>làm chủ 6 năng lực quản trị cốt lõi</b> — đủ thời gian để mỗi năng lực thành thói quen, và để cỗ máy chạy được cả khi bạn không có mặt.</p>
          <CTA cls="lg">Giữ chỗ ngay →</CTA>
          <div className="proofstrip">
            <div><span className="v">10.000+</span><span className="l">HỌC VIÊN</span></div>
            <div><span className="v">350+</span><span className="l">CHƯƠNG TRÌNH</span></div>
            <div><span className="v">1.000+</span><span className="l">LỚP HỌC</span></div>
            <div><span className="v">15</span><span className="l">NĂM</span></div>
            <div><span className="v">MBA</span><span className="l">QUẢN TRỊ KINH DOANH</span></div>
          </div>
        </div></header>

        {/* GAP */}
        <section><div className="wrap reveal">
          <span className="lbl">Khoảng cách</span>
          <h2>Giữa nơi bạn đang đứng — và nơi bạn có thể đến.</h2>
          <p className="lead">Khoảng cách đó không phải là năng lực. Là <span style={{ color: "var(--go)", fontWeight: 800, fontSize: "1.4em", letterSpacing: "-.02em", whiteSpace: "nowrap" }}>cách bạn đang vận hành</span>.</p>
          <div className="gap">
            <div className="col now">
              <h3>◆ Hôm nay</h3>
              <ul>
                <li><i>✕</i><span>Việc gì cũng phải qua tay bạn duyệt.</span></li>
                <li><i>✕</i><span>Giao xong vẫn phải kiểm — thậm chí làm lại.</span></li>
                <li><i>✕</i><span>Không ai dám tự quyết. Mọi thứ dội ngược lên bàn bạn.</span></li>
                <li><i>✕</i><span>Nghỉ ba ngày là việc dồn ứ chờ bạn về.</span></li>
                <li><i>✕</i><span>Tuyển mãi không ra người “làm được như mình”.</span></li>
                <li><i>✕</i><span>Bạn là người tắt đèn cuối cùng. Mỗi ngày.</span></li>
              </ul>
            </div>
            <div className="col then">
              <h3>◆ Sau 180 ngày</h3>
              <ul>
                <li><i>✓</i><span>Đội ngũ biết rõ đích đến — và tự đi tới đó.</span></li>
                <li><i>✓</i><span>Bạn giao việc một lần. Không phải làm lại.</span></li>
                <li><i>✓</i><span>Quản lý tự quyết, tự chịu trách nhiệm kết quả.</span></li>
                <li><i>✓</i><span>Bạn nghỉ một tuần — cỗ máy vẫn chạy.</span></li>
                <li><i>✓</i><span>Người mới cứng nghề sau 90 ngày, không phải 9 tháng.</span></li>
                <li><i>✓</i><span>Bạn dành giờ làm cho thứ thật sự đưa doanh nghiệp đi lên.</span></li>
              </ul>
            </div>
          </div>
          <p className="arrowline">↓ Bạn không cần cố gắng nhiều hơn. Bạn cần một cách làm khác. ↓</p>
        </div></section>

        {/* STORY */}
        <section style={{ background: "var(--card)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
          <div className="wrap reveal">
            <span className="lbl" style={{ color: "var(--pain)" }}>Sự thật</span>
            <h2>Bạn không còn mệt nữa. Bạn chỉ chai lì.</h2>
            <div className="story">
              <p><span className="clock">5:40 SÁNG</span>Bạn tỉnh trước chuông báo thức — không phải vì ngủ đủ, mà vì cái đầu không chịu tắt. Tay với điện thoại trước khi chân chạm đất: hai mươi mấy tin nhắn. Ngày mới bắt đầu bằng việc dọn hậu quả của ngày cũ.</p>
              <p><span className="clock">8:30 → TRƯA</span>Bạn tự hứa dành buổi sáng cho việc lớn. 9 giờ 10, một nhân viên đứng ở cửa: <em>“Sếp xem giúp em cái này.”</em> Bạn xem. Xem xong thì sửa. Sửa xong thì làm luôn cho nhanh. Đến trưa, việc lớn vẫn nằm nguyên chỗ cũ.</p>
              <p><span className="clock">19:00</span>Đèn văn phòng vẫn sáng, vì bạn còn ngồi đó. Mọi người về hết. Lúc đó bạn mới bắt đầu làm việc của bạn.</p>
              <p><span className="clock">23:00</span>Cơm nguội. Nhà ngủ rồi. Cái vai cứng như đá. Cơn ho vặt ba tuần chưa dứt. Bạn không nhớ nổi lần cuối mình ngủ một giấc trọn vẹn.</p>
              <hr />
              <p className="beat">Rồi thứ đáng sợ hơn xuất hiện: bạn hết mệt.</p>
              <p className="dim">Không phải vì nhẹ đi — mà vì bạn <b>chai</b>. Việc gấp không còn làm tim bạn đập nhanh. Lời khen trôi qua như nước. Ngày xưa bạn làm nghề này bằng <b>lửa</b>. Giờ bạn làm bằng <b>quán tính</b>.</p>
              <p className="beat">Càng chạy nhanh, việc càng dồn về bạn — vì bạn làm nhanh nhất, đúng nhất, ít sai nhất.<br />Bạn chính là cái nút thắt mà bạn đang cố gỡ.</p>
              <hr />
              <p className="beat" style={{ color: "var(--go-deep)" }}>Bạn không kẹt vì kém. Bạn kẹt vì giỏi.</p>
              <p className="dim">Mọi tiêu chuẩn, mọi cách làm đúng đều nằm trong đầu bạn — nên việc gì cũng phải quay về bạn. Ngày bạn đưa nó <b>ra khỏi đầu</b>, biến nó thành mô hình ai cũng dùng được, là ngày bạn thôi vận hành bằng <b>sức</b> (thứ có trần) và bắt đầu vận hành bằng <b>năng lực</b> (thứ học được, trao đi được).</p>
              <p className="beat">Đèn vẫn sáng sau khi bạn về. Chỉ là bạn không còn phải là người tắt đèn cuối cùng.</p>
            </div>
          </div>
        </section>

        {/* 6 TRỤ CỘT */}
        <section><div className="wrap reveal">
          <span className="lbl">6 trụ cột</span>
          <h2>Làm chủ 6 năng lực quyết định doanh nghiệp của bạn.</h2>
          <p className="lead">Không phải mẹo vặt. Mỗi trụ cột đi kèm <b style={{ color: "var(--ink)" }}>câu chuyện thật · mô hình chuẩn · hướng dẫn thực hành cụ thể</b> — và đi ra một sản phẩm dùng được ngay. 180 ngày cho bạn đủ thời gian để lần lượt gỡ từng năng lực, không nhồi nhét.</p>
          <div className="pillars">
            <div className="pil"><span className="n">01</span><b>Làm chủ ưu tiên</b><span>Nhìn ra đâu là việc thật sự quyết định doanh nghiệp — và dám buông phần còn lại.</span></div>
            <div className="pil"><span className="n">02</span><b>Làm chủ uỷ quyền</b><span>Giao đúng người, đúng mức, có điểm kiểm. Buông tay mà vẫn nắm.</span></div>
            <div className="pil"><span className="n">03</span><b>Làm chủ đội ngũ</b><span>Nâng người lên thay vì gánh thay họ: khung năng lực, lộ trình, onboarding 30-60-90.</span></div>
            <div className="pil"><span className="n">04</span><b>Làm chủ động lực</b><span>Hiểu điều thật sự giữ chân người giỏi — thường không phải là tiền.</span></div>
            <div className="pil"><span className="n">05</span><b>Làm chủ đối thoại</b><span>Nói chuyện khó, góp ý, xử lý sai phạm — nói thẳng mà không mất người.</span></div>
            <div className="pil"><span className="n">06</span><b>Làm chủ hiệu suất</b><span>Đo được, kèm được — để đội tự chạy khi bạn vắng mặt.</span></div>
          </div>
          <div className="center" style={{ marginTop: 34 }}><CTA>Bắt đầu 180 ngày của bạn →</CTA></div>
        </div></section>

        {/* PROOF */}
        <section style={{ background: "var(--card)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
          <div className="wrap reveal">
            <span className="lbl">Người đồng hành</span>
            <h2>Tôi vẫn đang ngồi trong ghế nóng — cùng chỗ với bạn.</h2>
            <p className="lead">Tôi không đứng ngoài nhìn vào. Tôi vẫn giao việc, vẫn xử lý người, vẫn xây khung năng lực mỗi tuần. <b style={{ color: "var(--ink)" }}>MBA · 15 năm đào tạo · từng phụ trách đào tạo quản lý tại Vingroup, FPT Telecom, TokyoLife · đang trực tiếp quản lý nhân sự.</b></p>
            <div className="stats" style={{ marginTop: 28 }}>
              <div className="stat"><div className="v">10.000+</div><div className="l">học viên đã đào tạo</div></div>
              <div className="stat"><div className="v">350+</div><div className="l">chương trình đào tạo</div></div>
              <div className="stat"><div className="v">1.000+</div><div className="l">lớp học đã đứng</div></div>
              <div className="stat"><div className="v">15</div><div className="l">năm trong nghề</div></div>
              <div className="stat"><div className="v">MBA</div><div className="l">Quản trị Kinh doanh</div></div>
            </div>
          </div>
        </section>

        {/* OBJECTIONS */}
        <section><div className="wrap reveal">
          <span className="lbl">Trả lời thẳng</span>
          <h2>Bạn đang nghĩ gì?</h2>
          <div style={{ marginTop: 28 }}>
            <div className="obj"><div className="q">“Doanh nghiệp tôi nhỏ, chuyện này là của tập đoàn chứ?”</div><div className="a">Ngược lại. Tập đoàn có nhiều lớp đệm nên chịu được sự mơ hồ. Doanh nghiệp nhỏ thì mọi mơ hồ đổ hết lên đầu người chủ. Càng nhỏ càng phải xây sớm.</div></div>
            <div className="obj"><div className="q">“Tôi bận muốn chết, lấy đâu thời gian?”</div><div className="a">Bạn bận chính vì chưa có hệ thống. Mỗi tuần 2 giờ học + 1 giờ áp dụng. Mỗi chặng đi ra một sản phẩm dùng được ngay — đây là thời gian để <b>bớt bận về sau</b>.</div></div>
            <div className="obj"><div className="q">“Tôi giao rồi, mà không ai làm được như tôi.”</div><div className="a">Đúng — vì tiêu chuẩn “thế nào là được” đang nằm trong đầu bạn, chưa ai nhìn thấy. Khi cái chuẩn hết vô hình, người ta tự soi và tự sửa được.</div></div>
            <div className="obj"><div className="q">“Tôi làm một mình, chưa có nhân viên.”</div><div className="a">Vẫn học được — và nên học sớm. Bạn đóng gói năng lực thành quy trình để thuê ngoài, tự động hoá, hoặc giao cho người đầu tiên mà không phải cầm tay chỉ việc.</div></div>
            <div className="obj"><div className="q">“Lỡ không hợp thì sao?”</div><div className="a">Tôi hoàn 100% học phí trong 14 ngày. Rủi ro thuộc về tôi, không phải bạn.</div></div>
          </div>
        </div></section>

        {/* OFFER */}
        <section id="dangky" style={{ background: "var(--card)", borderTop: "1px solid var(--line)" }}>
          <div className="wrap reveal">
            <span className="lbl" style={{ color: "var(--gold)" }}>Suất Founding Member</span>
            <h2>Bạn nhận được gì</h2>
            <div className="offerbox">
              <div className="offerhead"><b>Người Tắt Đèn Cuối Cùng — Chương trình nâng cao năng lực quản lý</b><small>180 ngày · Chủ doanh nghiệp SME · Quản lý lâu năm · Người làm một mình</small></div>
              <div className="ledger">
                <div className="row"><div className="t"><b>Lõi chương trình — 180 ngày · 12 buổi · online (có ghi hình)</b><small>6 trụ cột năng lực quản trị. Mỗi chặng: câu chuyện thật + mô hình chuẩn + hướng dẫn thực hành cụ thể.</small></div><div className="v">18.000.000đ</div></div>
                <div className="row"><div className="t"><b>6 buổi tư vấn “soi nút thắt” trực tiếp cùng tôi</b><small>Nhóm nhỏ. Mang đúng doanh nghiệp của bạn ra để cùng gỡ.</small></div><div className="v">12.000.000đ</div></div>
                <div className="row"><div className="t"><b>Bộ mẫu Khung năng lực &amp; lộ trình theo vị trí</b><small>Điền được ngay — không phải xây từ số 0.</small></div><div className="v">5.000.000đ</div></div>
                <div className="row"><div className="t"><b>Bộ công cụ Giao việc &amp; Uỷ quyền</b><small>Thôi phải kiểm từng ly và làm lại việc của nhân viên.</small></div><div className="v">3.000.000đ</div></div>
                <div className="row"><div className="t"><b>Khung Onboarding 30-60-90 ngày</b><small>Người mới cứng nghề sau 3 tháng, không phải 9 tháng.</small></div><div className="v">3.000.000đ</div></div>
                <div className="row"><div className="t"><b>Kịch bản 10 cuộc nói chuyện khó</b><small>Hết mất ngủ trước buổi nhắc nhở, góp ý, xử lý sai phạm.</small></div><div className="v">2.000.000đ</div></div>
                <div className="row"><div className="t"><b>Cộng đồng chủ doanh nghiệp &amp; quản lý (12 tháng)</b><small>Nơi bạn hỏi được những câu không hỏi được với nhân viên.</small></div><div className="v">4.000.000đ</div></div>
              </div>
              <div className="price">
                <div className="l">Tổng giá trị: <b style={{ color: "var(--ink)" }}>47.000.000đ</b><br /><span style={{ fontSize: 13 }}>Giá chính thức khi mở bán: <b style={{ color: "var(--ink)" }}>25.000.000đ</b></span></div>
                <div className="r"><s>25.000.000đ</s> 14.900.000đ<br /><span style={{ fontSize: 13, fontWeight: 500, color: "var(--muted)" }}>hoặc 2 kỳ × 7.450.000đ</span></div>
              </div>
              <div className="guar"><span className="t">✓ Cam kết bảo đảm.</span> Học đủ <b>4 buổi đầu</b> và làm bài áp dụng — nếu chưa thấy chuyển biến nào trong cách doanh nghiệp mình vận hành, nhắn tôi trong <b>14 ngày</b>, tôi <b>hoàn 100% học phí</b>. Rủi ro để tôi lo.</div>
              <ul className="scarce">
                <li><i>◆</i><div><b>15 suất</b> — mỗi người mang một doanh nghiệp thật vào lớp, tôi kèm sát từng người.</div></li>
                <li><i>◆</i><div><b>Ưu đãi đến hết 31/08/2026</b> — sau đó về 25.000.000đ. Khai giảng 15/09/2026.</div></li>
                <li><i>◆</i><div>Founding Member <b>giữ giá trọn đời</b> + <b>1 buổi tư vấn riêng 1-1 (60 phút)</b>.</div></li>
              </ul>
              <div className="offercta"><CTA cls="lg">Giữ chỗ ngay →</CTA></div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section><div className="wrap reveal">
          <span className="lbl">Hỏi &amp; Đáp</span>
          <h2>Câu hỏi thường gặp</h2>
          <div style={{ marginTop: 26 }}>
            <details><summary>Chương trình bắt đầu khi nào?</summary><div className="body">Khai giảng <b>15/09/2026</b>. Lịch: các buổi cách nhau khoảng 2 tuần, tối thứ Năm 20:00–22:00, xen kẽ 6 buổi tư vấn nhóm. Tổng 12 buổi, trải trong 180 ngày — đủ thời gian để bạn áp dụng từng năng lực vào doanh nghiệp giữa các buổi.</div></details>
            <details><summary>Online hay offline?</summary><div className="body"><b>Online</b> qua Zoom — có <b>ghi hình xem lại</b>, nên bạn không sợ lỡ buổi nào vì việc đột xuất.</div></details>
            <details><summary>Doanh nghiệp bao nhiêu người thì hợp?</summary><div className="body">Hợp nhất với chủ SME <b>5–50 nhân sự</b>, quản lý đã có đội, và cả người đang <b>làm một mình</b> chuẩn bị tuyển người đầu tiên.</div></details>
            <details><summary>Trả góp / xuất hóa đơn?</summary><div className="body">Có. Trả góp <b>2 kỳ × 7.450.000đ</b>. Có <b>xuất hoá đơn VAT</b> cho doanh nghiệp.</div></details>
            <details><summary>Sau chương trình có hỗ trợ tiếp không?</summary><div className="body">Có — bạn ở lại Cộng đồng chủ doanh nghiệp &amp; quản lý <b>12 tháng</b>.</div></details>
            <details><summary>Vẫn còn phân vân?</summary><div className="body">Để lại thông tin, tôi sẽ liên hệ tư vấn trực tiếp — nếu chương trình không hợp với bạn lúc này, tôi nói thẳng. Hoặc nhắn tôi ngay qua <a href={siteConfig.socials.zalo} target="_blank" rel="noopener noreferrer" style={{ color: "var(--go)", fontWeight: 600 }}>Zalo</a> / <a href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" style={{ color: "var(--go)", fontWeight: 600 }}>Facebook</a>.</div></details>
          </div>
        </div></section>

        {/* FINAL CTA */}
        <section className="final"><div className="wrap reveal">
          <h2>Sẵn sàng thôi làm người tắt đèn cuối cùng?</h2>
          <p>Năm sau, doanh nghiệp của bạn sẽ chạy bằng hệ thống — hoặc vẫn chạy bằng sức của bạn. Cả hai đều là một lựa chọn.</p>
          <CTA cls="lg">Giữ chỗ ngay →</CTA>
          <div className="mini">15 suất · Hoàn 100% học phí trong 14 ngày nếu không hiệu quả</div>
        </div></section>

        <footer>Hà Bùi Academy — Học viện Quản trị &amp; Kỹ năng thiết yếu · buithuha.com</footer>
        <div className="sticky"><div className="inner"><CTA>Giữ chỗ ngay — 15 suất · 14.900.000đ</CTA></div></div>
      </div>

      {/* MODAL */}
      {open && (
        <div className="ndtc-ov" onClick={() => status !== "loading" && setOpen(false)}>
          <div className="ndtc-modal" onClick={(e) => e.stopPropagation()}>
            <button className="x" onClick={() => status !== "loading" && setOpen(false)} aria-label="Đóng">×</button>
            {status === "done" ? (
              <div className="ok">
                <div className="big">✅</div>
                <h3>Đã nhận thông tin của bạn!</h3>
                <p className="desc">Tôi sẽ liên hệ sớm để tư vấn và xác nhận suất Founding Member. Kiểm tra email (cả mục Spam) giúp tôi nhé.</p>
              </div>
            ) : (
              <>
                <h3>Giữ chỗ Founding Member</h3>
                <p className="desc">Để lại thông tin — tôi sẽ liên hệ tư vấn trực tiếp và giữ suất cho bạn. Chỉ 15 suất.</p>
                {err && <div className="err">{err}</div>}
                <form onSubmit={submit}>
                  <label>Họ và tên</label>
                  <input required value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} placeholder="Nguyễn Văn A" />
                  <label>Số điện thoại</label>
                  <input required type="tel" pattern="^(0|\+84)[0-9]{9}$" value={form.phone} onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))} placeholder="0912345678" />
                  <label>Email</label>
                  <input required type="email" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} placeholder="ban@email.com" />
                  <button className="go" type="submit" disabled={status === "loading"}>
                    {status === "loading" ? "Đang gửi..." : "Giữ chỗ ngay"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
