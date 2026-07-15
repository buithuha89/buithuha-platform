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
.ndtc .alabox{margin-top:24px;background:var(--card);border:1px solid var(--line);border-radius:16px;padding:24px 26px}
.ndtc .alahead{font-weight:800;font-size:17px;margin-bottom:4px}
.ndtc .alasub{color:var(--muted);font-size:13.5px;margin-bottom:16px}
.ndtc .alagrid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}
.ndtc .ala{border:1px solid var(--line);border-radius:10px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;gap:10px;background:var(--paper)}
.ndtc .ala b{font-size:14px;font-weight:600;line-height:1.3}
.ndtc .ala .r2{display:flex;align-items:center;gap:9px;flex-shrink:0}
.ndtc .ala .p2{font-family:var(--mono);font-size:12.5px;color:var(--muted)}
.ndtc .alabtn{background:none;border:1px solid var(--go);color:var(--go);font-weight:700;font-size:12px;padding:6px 11px;border-radius:7px;cursor:pointer;font-family:inherit;white-space:nowrap}
.ndtc .alabtn:hover{background:var(--go-tint)}
.ndtc .decoy{margin-top:18px;background:var(--go-tint);border:1px solid var(--go-line);border-radius:10px;padding:18px 20px;font-size:14.5px;color:var(--ink);text-align:center}
.ndtc .decoy b{color:var(--go-deep)}
.ndtc .decoy .btn{margin-top:14px;width:100%;max-width:360px}
.ndtc .posn{margin-top:12px;background:linear-gradient(135deg,var(--deep) 0%,var(--go-deep) 100%);color:#fff;border-radius:18px;padding:38px 34px;position:relative;overflow:hidden}
.ndtc .posn .k{font-size:11.5px;letter-spacing:.2em;text-transform:uppercase;color:#AEC0F7;font-weight:800;margin-bottom:14px;display:block}
.ndtc .posn h3{font-size:clamp(21px,3.3vw,31px);color:#fff;margin:0 0 16px;max-width:24ch;line-height:1.2;letter-spacing:-.02em}
.ndtc .posn p{color:#D3DEFF;font-size:15.6px;margin:0;max-width:64ch;text-wrap:pretty}
.ndtc .posn .line{margin-top:22px;display:flex;align-items:baseline;gap:14px;flex-wrap:wrap}
.ndtc .posn .strike{color:#9FB2EE;text-decoration:line-through;font-weight:600;font-size:17px}
.ndtc .posn .big{font-size:clamp(30px,6vw,50px);font-weight:800;color:#fff;letter-spacing:-.03em}
.ndtc .posn .to{color:#AEC0F7;font-weight:800}
.ndtc .hero .kill{border-left:3px solid var(--go);padding-left:14px}
.ndtc .tgrid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-top:30px}
.ndtc .tcard{background:var(--paper);border:1px solid var(--line);border-radius:14px;padding:24px}
.ndtc .tcard .stars{color:#F5A623;font-size:14px;letter-spacing:2px;margin-bottom:10px}
.ndtc .tcard p{font-size:15.4px;color:var(--ink);margin:0 0 16px;text-wrap:pretty}
.ndtc .tcard .who{display:flex;align-items:center;gap:12px}
.ndtc .tcard .av{width:44px;height:44px;border-radius:50%;background:var(--go-tint);color:var(--go-deep);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:17px;flex-shrink:0}
.ndtc .tcard .nm{font-weight:800;font-size:14.5px}
.ndtc .tcard .rl{color:var(--muted);font-size:12.8px}
.ndtc .fab{position:fixed;right:15px;bottom:88px;z-index:55;display:flex;flex-direction:column;gap:9px}
.ndtc .fab a{display:inline-flex;align-items:center;gap:8px;padding:10px 15px;border-radius:30px;color:#fff;text-decoration:none;font-weight:800;font-size:13px;box-shadow:0 8px 22px rgba(0,0,0,.22)}
.ndtc .fab .zl{background:#0068FF} .ndtc .fab .fb{background:#1877F2}
.ndtc .fab a:hover{filter:brightness(1.06)}
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
.ndtc .gap{grid-template-columns:1fr} .ndtc .pillars{grid-template-columns:1fr} .ndtc .alagrid{grid-template-columns:1fr}
.ndtc .stats{grid-template-columns:repeat(2,1fr)} .ndtc .stats .stat:last-child{grid-column:span 2}
.ndtc .ledger,.ndtc .offercta,.ndtc .price,.ndtc .offerhead{padding-left:20px;padding-right:20px}
.ndtc .guar,.ndtc .scarce{margin-left:20px;margin-right:20px}
.ndtc .tgrid{grid-template-columns:1fr} .ndtc .posn{padding:28px 22px}
.ndtc .fab a{padding:9px 13px;font-size:12px} .ndtc .fab{bottom:80px;right:12px}
}
`;

export default function LandingClient() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [err, setErr] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const rootRef = useRef<HTMLDivElement>(null);

  // Lời chứng thực THẬT — chờ chị Hà cung cấp (tên + chức danh + cho phép dùng).
  // Điền vào mảng này là khối testimonial tự hiện lên trang. KHÔNG dựng review giả.
  const testimonials: { quote: string; name: string; role: string }[] = [
    // { quote: "…", name: "…", role: "Giám đốc, Công ty …" },
  ];

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
          <span className="lbl">Người Tắt Đèn Cuối Cùng · Hệ 6 Năng Lực Giải Phóng Người Chủ™</span>
          <h1>Doanh nghiệp của bạn phải chạy được — <em>cả khi bạn vắng mặt</em>.</h1>
          <p className="sub">Bạn dựng cơ ngơi này để được tự do. Hôm nay, người bị trói chặt nhất trong đó — <b>chính là bạn</b>. Tự do bắt đầu từ ngày bạn <b>thôi ôm hết</b>.</p>
          <p className="sub kill">Không cần bỏ việc để đi học, không cần giỏi quản lý bẩm sinh. <b>6 khóa online</b>, học <b>trọn đời</b>, có <b>biểu mẫu áp dụng ngay trong tuần đầu</b>.</p>
          <CTA cls="lg">Đăng ký ngay →</CTA>
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
          <span className="lbl">Hệ 6 Năng Lực Giải Phóng Người Chủ™</span>
          <h2>6 năng lực để bước ra khỏi vòng lặp ôm việc.</h2>
          <p className="lead">Mỗi năng lực là một khóa gọn, đi kèm <b style={{ color: "var(--ink)" }}>câu chuyện thật · mô hình chuẩn · biểu mẫu áp dụng được ngay</b>. Học theo lộ trình 180 ngày để mỗi năng lực thành thói quen — nhưng truy cập trọn đời, học theo nhịp của bạn.</p>
          <div className="pillars">
            <div className="pil"><span className="n">01</span><b>Tư duy người quản lý</b><span>Cách thoát khỏi vòng lặp ôm việc — nhìn ra việc nào đáng làm, việc nào phải buông.</span></div>
            <div className="pil"><span className="n">02</span><b>Giao việc &amp; uỷ quyền</b><span>Kèm biểu mẫu: giao mà vẫn giữ chuẩn, không phải kiểm từng ly hay làm lại.</span></div>
            <div className="pil"><span className="n">03</span><b>Đào tạo đội ngũ &amp; onboarding</b><span>Lộ trình đưa người mới tự đứng được — thay vì bạn kèm mãi.</span></div>
            <div className="pil"><span className="n">04</span><b>Khung năng lực cơ bản</b><span>Để tuyển đúng người, đánh giá công bằng, đào tạo có đích.</span></div>
            <div className="pil"><span className="n">05</span><b>Nhận sai không mất uy tín</b><span>Cách xử lý khi mình sai mà vẫn giữ được vị thế trước đội ngũ.</span></div>
            <div className="pil"><span className="n">06</span><b>Phản hồi &amp; nói chuyện khó</b><span>Góp ý, xử lý sai phạm — nói thẳng mà không mất người.</span></div>
          </div>
          <div className="center" style={{ marginTop: 34 }}><CTA>Xem gói học ưu đãi →</CTA></div>
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

        {/* TESTIMONIALS — chỉ hiện khi có lời chứng thực THẬT */}
        {testimonials.length > 0 && (
          <section><div className="wrap reveal">
            <span className="lbl">Người học nói gì</span>
            <h2>Họ đã bước ra khỏi vòng lặp.</h2>
            <div className="tgrid">
              {testimonials.map((t, i) => (
                <div className="tcard" key={i}>
                  <div className="stars">★★★★★</div>
                  <p>“{t.quote}”</p>
                  <div className="who">
                    <div className="av">{t.name.trim().charAt(0)}</div>
                    <div><div className="nm">{t.name}</div><div className="rl">{t.role}</div></div>
                  </div>
                </div>
              ))}
            </div>
          </div></section>
        )}

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

        {/* POSITIONING GIÁ */}
        <section><div className="wrap reveal">
          <span className="lbl">Vì sao chỉ 1.999.000đ?</span>
          <div className="posn">
            <span className="k">Cùng một hệ thống — một mức giá khác hẳn</span>
            <h3>Cùng năng lực “giải phóng người chủ” mà nhiều nơi dạy offline vài chục triệu — tôi đóng gói online để bạn học trọn đời.</h3>
            <p>Tôi không mở lớp offline chục triệu. Tôi lấy đúng 6 năng lực cốt lõi đúc kết từ 15 năm đứng lớp cho Vingroup, FPT Telecom, TokyoLife, gói thành khóa online kèm biểu mẫu dùng ngay — để một người chủ trả <b style={{ color: "#fff" }}>một lần</b>, <b style={{ color: "#fff" }}>dùng trọn đời</b>, không phải bỏ việc đi học xa.</p>
            <div className="line">
              <span className="strike">Giá trị thật 6.900.000đ</span>
              <span className="to">→</span>
              <span className="big">1.999.000đ</span>
            </div>
          </div>
        </div></section>

        {/* OFFER */}
        <section id="dangky" style={{ background: "var(--card)", borderTop: "1px solid var(--line)" }}>
          <div className="wrap reveal">
            <span className="lbl" style={{ color: "var(--gold)" }}>Ưu đãi Founding Member · chỉ 15 suất đầu tiên</span>
            <h2>Bạn nhận được gì</h2>
            <div className="offerbox">
              <div className="offerhead"><b>Gói trọn — 6 khóa nâng cao năng lực quản lý</b><small>Học online (LMS) · truy cập TRỌN ĐỜI · 6 buổi Zoom tháo gỡ · cộng đồng trọn đời</small></div>
              <div className="ledger">
                <div className="row"><div className="t"><b>6 khóa (6 năng lực) trên LMS — truy cập trọn đời</b><small>Tư duy thoát vòng lặp · Giao việc &amp; uỷ quyền · Đào tạo đội ngũ &amp; onboarding · Khung năng lực · Nhận sai không mất uy tín · Phản hồi &amp; nói chuyện khó.</small></div><div className="v">2.940.000đ</div></div>
                <div className="row"><div className="t"><b>6 buổi Zoom tháo gỡ vướng mắc (nhóm)</b><small>Mang đúng tình huống của bạn ra để cùng gỡ trực tiếp.</small></div><div className="v">2.400.000đ</div></div>
                <div className="row"><div className="t"><b>Bộ biểu mẫu áp dụng được ngay</b><small>Biểu mẫu giao việc &amp; uỷ quyền, khung năng lực theo vị trí, quy trình onboarding theo JD, kịch bản 10 cuộc nói chuyện khó.</small></div><div className="v">990.000đ</div></div>
                <div className="row"><div className="t"><b>Cộng đồng trọn đời — case study quản trị + biểu mẫu</b><small>Nơi bạn hỏi được những câu không hỏi được với nhân viên.</small></div><div className="v">570.000đ</div></div>
              </div>
              <div className="price">
                <div className="l">Giá gốc: <b style={{ color: "var(--ink)" }}>6.900.000đ</b><br /><span style={{ fontSize: 13 }}>Ưu đãi khách hàng đầu tiên · truy cập trọn đời</span></div>
                <div className="r"><s>6.900.000đ</s> 1.999.000đ</div>
              </div>
              <div className="guar"><span className="t">✓ Cam kết bảo đảm.</span> Xem hết <b>3 khóa đầu</b>, nếu bạn không thấy giá trị, nhắn tôi trong <b>14 ngày</b> — tôi <b>hoàn 100% học phí</b>. Rủi ro để tôi lo, không phải bạn.</div>
              <ul className="scarce">
                <li><i>◆</i><div>Giá <b>1.999.000đ</b> (thay vì 6.900.000đ) + <b>truy cập trọn đời</b> chỉ mở cho <b>15 khách hàng đầu tiên</b> — hết suất, giá về 6.900.000đ.</div></li>
                <li><i>◆</i><div>Khóa mở ngay sau khi đăng ký. 6 buổi Zoom tháo gỡ nhóm bắt đầu đợt đầu từ <b>15/09/2026</b>.</div></li>
              </ul>
              <div className="offercta"><CTA cls="lg">Đăng ký ngay — 1.999.000đ</CTA></div>
            </div>
          </div>
        </section>

        {/* MUA LẺ — chim mồi */}
        <section style={{ background: "var(--card)", borderTop: "1px solid var(--line)" }}>
          <div className="wrap reveal">
            <span className="lbl">Chưa muốn cả gói?</span>
            <h2>Mua lẻ từng khóa — chỉ 490.000đ/khóa.</h2>
            <div className="alabox">
              <div className="alahead">6 khóa, mua riêng khóa nào bạn cần</div>
              <div className="alasub">Học phí khóa lẻ được trừ thẳng vào gói trọn nếu bạn nâng cấp trong 30 ngày.</div>
              <div className="alagrid">
                <div className="ala"><b>1. Tư duy người quản lý — thoát vòng lặp</b><div className="r2"><span className="p2">490.000đ</span><button className="alabtn" onClick={() => setOpen(true)}>Mua lẻ</button></div></div>
                <div className="ala"><b>2. Giao việc &amp; uỷ quyền (+ biểu mẫu)</b><div className="r2"><span className="p2">490.000đ</span><button className="alabtn" onClick={() => setOpen(true)}>Mua lẻ</button></div></div>
                <div className="ala"><b>3. Đào tạo đội ngũ &amp; onboarding</b><div className="r2"><span className="p2">490.000đ</span><button className="alabtn" onClick={() => setOpen(true)}>Mua lẻ</button></div></div>
                <div className="ala"><b>4. Khung năng lực cơ bản</b><div className="r2"><span className="p2">490.000đ</span><button className="alabtn" onClick={() => setOpen(true)}>Mua lẻ</button></div></div>
                <div className="ala"><b>5. Nhận sai mà không mất uy tín</b><div className="r2"><span className="p2">490.000đ</span><button className="alabtn" onClick={() => setOpen(true)}>Mua lẻ</button></div></div>
                <div className="ala"><b>6. Phản hồi &amp; nói chuyện khó</b><div className="r2"><span className="p2">490.000đ</span><button className="alabtn" onClick={() => setOpen(true)}>Mua lẻ</button></div></div>
              </div>
              <div className="decoy">
                Mua lẻ chỉ <b>4 khóa</b> đã là <b>1.960.000đ</b> — gần bằng cả gói trọn <b>1.999.000đ</b>, mà gói có tới <b>6 khóa + 6 buổi Zoom + biểu mẫu + cộng đồng trọn đời</b>.<br />
                <CTA cls="lg">Lấy cả gói cho hời — 1.999.000đ</CTA>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section><div className="wrap reveal">
          <span className="lbl">Hỏi &amp; Đáp</span>
          <h2>Câu hỏi thường gặp</h2>
          <div style={{ marginTop: 26 }}>
            <details><summary>Học thế nào, bắt đầu khi nào?</summary><div className="body">6 khóa nằm sẵn trên LMS — đăng ký xong học được ngay, mọi lúc, <b>truy cập trọn đời</b>. Lộ trình gợi ý 180 ngày để mỗi năng lực thành thói quen. Riêng <b>6 buổi Zoom tháo gỡ nhóm</b> bắt đầu đợt đầu từ <b>15/09/2026</b>, mỗi buổi cách nhau ~2 tuần (có ghi hình).</div></details>
            <details><summary>Online hay offline?</summary><div className="body"><b>100% online</b>: khóa học trên LMS (xem lại không giới hạn) + 6 buổi Zoom nhóm (có ghi hình). Không sợ lỡ buổi nào vì việc đột xuất.</div></details>
            <details><summary>Doanh nghiệp bao nhiêu người thì hợp?</summary><div className="body">Hợp nhất với chủ SME <b>5–50 nhân sự</b>, quản lý đã có đội, và cả người đang <b>làm một mình</b> chuẩn bị tuyển người đầu tiên.</div></details>
            <details><summary>Thanh toán &amp; hoá đơn?</summary><div className="body">Học phí ưu đãi <b>1.999.000đ</b>, thanh toán 1 lần là truy cập trọn đời. Có <b>xuất hoá đơn VAT</b> nếu bạn cần cho doanh nghiệp.</div></details>
            <details><summary>Sau khóa có hỗ trợ tiếp không?</summary><div className="body">Có — bạn ở lại <b>Cộng đồng trọn đời</b>: case study quản trị và biểu mẫu được cập nhật, hỏi đáp cùng cộng đồng chủ doanh nghiệp &amp; quản lý.</div></details>
            <details><summary>Vẫn còn phân vân?</summary><div className="body">Để lại thông tin, tôi sẽ liên hệ tư vấn trực tiếp — nếu chương trình không hợp với bạn lúc này, tôi nói thẳng. Hoặc nhắn tôi ngay qua <a href={siteConfig.socials.zalo} target="_blank" rel="noopener noreferrer" style={{ color: "var(--go)", fontWeight: 600 }}>Zalo</a> / <a href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" style={{ color: "var(--go)", fontWeight: 600 }}>Facebook</a>.</div></details>
          </div>
        </div></section>

        {/* FINAL CTA */}
        <section className="final"><div className="wrap reveal">
          <h2>Sẵn sàng thôi làm người tắt đèn cuối cùng?</h2>
          <p>Năm sau, doanh nghiệp của bạn sẽ chạy bằng hệ thống — hoặc vẫn chạy bằng sức của bạn. Cả hai đều là một lựa chọn.</p>
          <CTA cls="lg">Đăng ký ngay →</CTA>
          <div className="mini">Chỉ 1.999.000đ · Truy cập trọn đời · Hoàn 100% trong 14 ngày · Ưu đãi khách hàng đầu tiên</div>
        </div></section>

        <footer>Hà Bùi Academy — Học viện Quản trị &amp; Kỹ năng thiết yếu · buithuha.com</footer>

        <div className="fab">
          <a className="zl" href={siteConfig.socials.zalo} target="_blank" rel="noopener noreferrer" aria-label="Chat Zalo">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3C6.5 3 2 6.6 2 11c0 2.5 1.4 4.7 3.6 6.2-.1 1-.6 2.4-1.3 3.3-.2.3.1.7.4.6 1.9-.4 3.3-1 4.2-1.6 1 .3 2 .4 3.1.4 5.5 0 10-3.6 10-8S17.5 3 12 3z" /></svg>Zalo
          </a>
          <a className="fb" href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Nhắn Facebook">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3C6.5 3 2 6.6 2 11c0 2.5 1.4 4.7 3.6 6.2-.1 1-.6 2.4-1.3 3.3-.2.3.1.7.4.6 1.9-.4 3.3-1 4.2-1.6 1 .3 2 .4 3.1.4 5.5 0 10-3.6 10-8S17.5 3 12 3z" /></svg>Facebook
          </a>
        </div>

        <div className="sticky"><div className="inner"><CTA>Đăng ký ngay — chỉ 1.999.000đ (trọn đời)</CTA></div></div>
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
