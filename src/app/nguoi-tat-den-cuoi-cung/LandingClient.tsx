"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const CSS = `
.ndtc{--paper:#FBFAF7;--card:#FFFFFF;--ink:#1A2422;--muted:#667471;--line:#E6E4DC;--line-2:#F0EEE7;
--go:#0FA37F;--go-deep:#0B7D62;--go-tint:#E7F7F2;--go-line:#9CDCC8;
--pain:#E2664A;--pain-tint:#FDEEE9;--pain-line:#F6C4B5;
--value:#DFA22E;--value-tint:#FDF4E3;--value-line:#F0D398;
--f:"Be Vietnam Pro",system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;
--mono:ui-monospace,"Cascadia Mono",Consolas,"SF Mono",monospace;--maxw:940px;
background:var(--paper);color:var(--ink);font-family:var(--f);line-height:1.62;
-webkit-font-smoothing:antialiased;overflow-x:hidden;min-height:100vh;padding-bottom:80px}
.ndtc *{box-sizing:border-box}
.ndtc .wrap{max-width:var(--maxw);margin:0 auto;padding:0 22px}
.ndtc .lbl{font-size:11.5px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--go);display:block;margin-bottom:14px}
.ndtc .lbl.pain{color:var(--pain)} .ndtc .lbl.value{color:var(--value)}
.ndtc h1,.ndtc h2{margin:0;letter-spacing:-.022em;text-wrap:balance;line-height:1.16}
.ndtc h2{font-size:clamp(25px,4.2vw,37px);font-weight:800;margin-bottom:14px}
.ndtc .lead{color:var(--muted);font-size:clamp(15px,2vw,17.5px);max-width:64ch}
.ndtc section{padding:70px 0;border-top:1px solid var(--line-2)}
.ndtc .btn{display:inline-flex;align-items:center;gap:10px;justify-content:center;background:var(--go);color:#fff;
font-weight:700;font-size:15.5px;padding:15px 30px;border-radius:8px;text-decoration:none;border:0;cursor:pointer;
box-shadow:0 8px 22px rgba(15,163,127,.26);transition:background .15s,transform .12s;font-family:inherit}
.ndtc .btn:hover{background:var(--go-deep);transform:translateY(-1px)}
.ndtc .nav{position:sticky;top:0;z-index:40;background:rgba(251,250,247,.92);backdrop-filter:blur(10px);border-bottom:1px solid var(--line)}
.ndtc .nav .wrap{display:flex;align-items:center;justify-content:space-between;height:60px}
.ndtc .brand{font-weight:800;font-size:15px;text-decoration:none;color:var(--ink)}
.ndtc .brand small{display:block;font-weight:500;font-size:11px;color:var(--muted)}
.ndtc .nav .btn{padding:9px 18px;font-size:13.5px}
.ndtc .hero{position:relative;overflow:hidden;border-top:0;padding:80px 0 64px;background:linear-gradient(170deg,var(--go-tint) 0%,var(--paper) 62%)}
.ndtc .hero .swirl{position:absolute;right:-90px;top:-70px;width:440px;height:440px;opacity:.5;pointer-events:none}
.ndtc .hero .wrap{position:relative}
.ndtc .hero h1{font-size:clamp(29px,5vw,47px);font-weight:800;max-width:21ch;margin-bottom:20px}
.ndtc .hero h1 em{font-style:normal;color:var(--go)}
.ndtc .hero .sub{color:var(--muted);font-size:clamp(15px,2.05vw,18px);max-width:60ch;margin:0 0 30px}
.ndtc .hero .sub b{color:var(--ink)}
.ndtc .credline{margin-top:28px;padding-top:18px;border-top:1px solid var(--line);display:flex;flex-wrap:wrap;gap:6px 20px;font-size:13.4px;color:var(--muted)}
.ndtc .credline b{color:var(--ink);font-weight:600}
.ndtc .credline i{font-style:normal;color:var(--go);margin-right:6px}
.ndtc .story{background:var(--card);border:1px solid var(--line);border-left:4px solid var(--pain);border-radius:10px;padding:28px 30px;margin-top:26px}
.ndtc .story p{margin:0 0 14px;font-size:16.2px;color:var(--ink)}
.ndtc .story p.dim{color:var(--muted)}
.ndtc .story p.beat{font-weight:700;font-size:17.5px}
.ndtc .story .clock{font-family:var(--mono);font-size:12.5px;color:var(--pain);font-weight:700;letter-spacing:.06em;display:block;margin-bottom:2px}
.ndtc .story hr{border:0;border-top:1px dashed var(--line);margin:20px 0}
.ndtc .story .turn{background:var(--go-tint);border:1px solid var(--go-line);border-radius:8px;padding:18px 20px;margin-top:20px}
.ndtc .story .turn p{margin:0 0 10px} .ndtc .story .turn p:last-child{margin:0}
.ndtc .story .turn b{color:var(--go-deep)}
.ndtc .pains{display:grid;margin:26px 0 24px;border:1px solid var(--line);border-radius:10px;overflow:hidden;background:var(--card)}
.ndtc .pain{display:grid;grid-template-columns:auto 1fr;gap:16px;padding:18px 22px;border-bottom:1px solid var(--line-2)}
.ndtc .pain:last-child{border-bottom:0}
.ndtc .pain .k{font-family:var(--mono);font-size:12px;color:var(--pain);font-weight:700;padding-top:4px}
.ndtc .pain b{display:block;margin-bottom:2px;font-size:16px}
.ndtc .pain span{color:var(--muted);font-size:14.6px}
.ndtc .turnline{margin-top:22px;font-size:17.5px;font-weight:600}
.ndtc .turnline b{color:var(--go)}
.ndtc .three{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:26px 0 6px}
.ndtc .t3{background:var(--go-tint);border:1px solid var(--go-line);border-radius:10px;padding:20px}
.ndtc .t3 b{display:block;color:var(--go-deep);font-size:15.5px;margin-bottom:4px}
.ndtc .t3 span{color:var(--muted);font-size:14px}
.ndtc .steps{display:grid;gap:11px;margin-top:24px}
.ndtc .step{display:grid;grid-template-columns:auto 1fr;gap:18px;background:var(--card);border:1px solid var(--line);border-radius:10px;padding:19px 22px;align-items:start}
.ndtc .step .n{font-family:var(--mono);font-size:13px;font-weight:700;color:#fff;background:var(--go);width:34px;height:34px;border-radius:8px;display:grid;place-items:center}
.ndtc .step b{display:block;font-size:16.3px;margin-bottom:2px}
.ndtc .step span{color:var(--muted);font-size:14.6px}
.ndtc .solo{margin-top:18px;background:var(--card);border:1px solid var(--go-line);border-radius:10px;padding:18px 22px;font-size:14.8px;color:var(--muted)}
.ndtc .solo b{color:var(--ink)}
.ndtc .stats{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin:24px 0 4px}
.ndtc .stat{background:var(--card);border:1px solid var(--line);border-radius:10px;padding:20px 10px;text-align:center}
.ndtc .stat .v{font-family:var(--mono);font-variant-numeric:tabular-nums;font-size:clamp(19px,2.9vw,27px);font-weight:700;color:var(--go-deep);letter-spacing:-.02em}
.ndtc .stat .l{font-size:11.8px;color:var(--muted);margin-top:5px;line-height:1.35}
.ndtc .obj{background:var(--card);border:1px solid var(--line);border-radius:10px;padding:19px 22px;margin-bottom:11px}
.ndtc .obj .q{font-weight:700;font-size:15.8px;margin-bottom:5px}
.ndtc .obj .a{color:var(--muted);font-size:14.6px}
.ndtc .exclude{margin-top:16px;text-align:center;color:var(--muted);font-size:14px;font-style:italic}
.ndtc .offerbox{background:var(--card);border:1.5px solid var(--value-line);border-radius:12px;margin-top:24px;overflow:hidden}
.ndtc .offerhead{background:var(--value-tint);border-bottom:1px solid var(--value-line);padding:20px 26px}
.ndtc .offerhead b{font-size:17px}
.ndtc .offerhead small{display:block;color:var(--muted);font-size:13px;margin-top:2px}
.ndtc .ledger{padding:6px 26px}
.ndtc .row{display:grid;grid-template-columns:1fr auto;gap:16px;padding:15px 0;border-bottom:1px solid var(--line-2);align-items:start}
.ndtc .row:last-of-type{border-bottom:0}
.ndtc .row .t b{font-size:15.4px}
.ndtc .row .t small{display:block;color:var(--muted);font-size:13.6px;margin-top:2px}
.ndtc .row .v{font-family:var(--mono);font-size:13px;color:var(--value);font-weight:700;white-space:nowrap;padding-top:3px}
.ndtc .price{background:var(--value-tint);padding:18px 26px;border-top:2px solid var(--value-line);display:flex;flex-wrap:wrap;justify-content:space-between;align-items:baseline;gap:12px}
.ndtc .price .l{color:var(--muted);font-size:14.5px}
.ndtc .price .r{font-size:19px;font-weight:800;color:var(--value)}
.ndtc .price s{color:var(--muted);font-weight:500;font-size:14px;margin-right:8px}
.ndtc .guar{margin:20px 26px;background:var(--go-tint);border:1px solid var(--go-line);border-radius:10px;padding:18px 20px;color:var(--muted);font-size:14.7px}
.ndtc .guar b{color:var(--ink)} .ndtc .guar .t{color:var(--go-deep);font-weight:800}
.ndtc .scarce{list-style:none;padding:16px 20px;margin:0 26px 22px;display:grid;gap:9px;background:var(--pain-tint);border:1px solid var(--pain-line);border-radius:10px}
.ndtc .scarce li{display:grid;grid-template-columns:auto 1fr;gap:11px;color:var(--muted);font-size:14.7px}
.ndtc .scarce i{font-style:normal;color:var(--pain);font-weight:800}
.ndtc .scarce b{color:var(--ink)}
.ndtc .offercta{padding:0 26px 26px;text-align:center}
.ndtc .offercta .btn{width:100%;max-width:380px}
.ndtc details{background:var(--card);border:1px solid var(--line);border-radius:10px;margin-bottom:10px;overflow:hidden}
.ndtc summary{cursor:pointer;padding:17px 20px;font-weight:600;font-size:15.4px;list-style:none;display:flex;justify-content:space-between;gap:14px;align-items:center}
.ndtc summary::-webkit-details-marker{display:none}
.ndtc summary::after{content:"+";color:var(--go);font-size:19px;font-weight:700}
.ndtc details[open] summary::after{content:"–"}
.ndtc details .body{padding:15px 20px 18px;color:var(--muted);font-size:14.6px;border-top:1px solid var(--line-2)}
.ndtc footer{padding:36px 0 26px;text-align:center;color:var(--muted);font-size:13px;border-top:1px solid var(--line)}
.ndtc .sticky{position:fixed;left:0;right:0;bottom:0;z-index:50;padding:11px 16px calc(11px + env(safe-area-inset-bottom));background:rgba(251,250,247,.94);backdrop-filter:blur(10px);border-top:1px solid var(--line)}
.ndtc .sticky .inner{max-width:520px;margin:0 auto}
.ndtc .sticky .btn{width:100%}
.ndtc .center{text-align:center}
.ndtc .reveal{opacity:0;transform:translateY(14px)}
.ndtc .reveal.in{opacity:1;transform:none;transition:opacity .55s ease,transform .55s ease}
@media (prefers-reduced-motion:reduce){.ndtc .reveal{opacity:1;transform:none;transition:none}}
.ndtc-modal{position:fixed;inset:0;z-index:60;display:flex;align-items:center;justify-content:center;padding:16px}
.ndtc-modal .bg{position:absolute;inset:0;background:rgba(15,25,22,.6);backdrop-filter:blur(3px)}
.ndtc-modal .box{position:relative;width:100%;max-width:430px;background:#fff;border-radius:14px;padding:26px;
font-family:var(--f);color:#1A2422;max-height:92vh;overflow-y:auto;box-shadow:0 30px 80px rgba(0,0,0,.3)}
.ndtc-modal h3{margin:0 0 4px;font-size:20px;font-weight:800}
.ndtc-modal p.s{margin:0 0 18px;color:#667471;font-size:14px}
.ndtc-modal label{display:block;font-size:13.5px;font-weight:600;margin:0 0 5px}
.ndtc-modal input{width:100%;padding:11px 13px;border:1px solid #DDE1DE;border-radius:8px;font-size:15px;
margin-bottom:13px;font-family:inherit;color:#1A2422;background:#fff}
.ndtc-modal input:focus{outline:2px solid #0FA37F;outline-offset:1px;border-color:#0FA37F}
.ndtc-modal .go{width:100%;background:#0FA37F;color:#fff;border:0;padding:13px;border-radius:8px;
font-weight:700;font-size:15.5px;cursor:pointer;font-family:inherit}
.ndtc-modal .go:disabled{opacity:.6}
.ndtc-modal .x{position:absolute;top:12px;right:14px;border:0;background:none;font-size:22px;cursor:pointer;color:#8A9490;line-height:1}
.ndtc-modal .err{background:#FDEEE9;border:1px solid #F6C4B5;color:#B4442A;padding:9px 12px;border-radius:8px;font-size:13.5px;margin-bottom:12px}
.ndtc-modal .ok{text-align:center;padding:14px 0}
.ndtc-modal .ok .big{font-size:40px}
@media (max-width:720px){
.ndtc section{padding:52px 0}
.ndtc .step{grid-template-columns:1fr}
.ndtc .stats{grid-template-columns:repeat(2,1fr)} .ndtc .stats .stat:last-child{grid-column:span 2}
.ndtc .three{grid-template-columns:1fr}
.ndtc .story{padding:22px 20px}
.ndtc .ledger,.ndtc .offercta,.ndtc .price,.ndtc .offerhead{padding-left:18px;padding-right:18px}
.ndtc .guar,.ndtc .scarce{margin-left:18px;margin-right:18px}
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

  const CTA = ({ children, full }: { children: React.ReactNode; full?: boolean }) => (
    <button className="btn" style={full ? { width: "100%", maxWidth: 380 } : undefined} onClick={() => setOpen(true)}>
      {children}
    </button>
  );

  return (
    <div className="ndtc" ref={rootRef}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <div className="nav"><div className="wrap">
        <Link href="/" className="brand">Hà Bùi Academy<small>Học viện Quản trị &amp; Kỹ năng thiết yếu</small></Link>
        <CTA>Giữ chỗ</CTA>
      </div></div>

      <header className="hero">
        <svg className="swirl" viewBox="0 0 200 200" fill="none" aria-hidden="true">
          <path d="M100 20a80 80 0 1 1-56 137 66 66 0 1 0 46-113 52 52 0 1 1 37 89 40 40 0 1 0-28-68 28 28 0 1 1 20 48"
            stroke="#0FA37F" strokeOpacity=".28" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
        <div className="wrap">
          <span className="lbl">Chương trình · Người Tắt Đèn Cuối Cùng</span>
          <h1>Bạn bắt đầu tất cả vì hai chữ <em>tự do</em>. Giờ người bị trói chặt nhất trong bộ máy này là bạn — và cũng là người không còn muốn làm nữa.</h1>
          <p className="sub">
            Bạn không kẹt vì kém. Bạn kẹt vì <b>giỏi</b> — mọi tiêu chuẩn, mọi cách làm đúng đều nằm trong đầu bạn, nên việc gì cuối cùng cũng quay về bạn. Càng cố, vòng xoáy càng siết.
            <br /><br />
            Đường ra không phải chạy nhanh hơn. <b>90 ngày</b> — câu chuyện thật, mô hình chuẩn, hướng dẫn thực hành cụ thể — để công việc chạy mà không phải qua tay bạn. <b>Và bạn được ngủ.</b>
          </p>
          <CTA>Giữ chỗ Founding Member →</CTA>
          <div className="credline">
            <span><i>◆</i><b>MBA</b></span>
            <span><i>◆</i><b>15 năm</b> đào tạo</span>
            <span><i>◆</i>Đang <b>trực tiếp quản lý nhân sự</b></span>
          </div>
        </div>
      </header>

      <section>
        <div className="wrap reveal">
          <span className="lbl pain">Câu chuyện</span>
          <h2>Bạn không còn mệt nữa. Bạn chỉ chai lì.</h2>
          <div className="story">
            <p><span className="clock">5:40 SÁNG</span>Bạn tỉnh trước chuông báo thức — không phải vì ngủ đủ, mà vì cái đầu không chịu tắt. Mắt cay, tim đập nhanh vô cớ. Tay với điện thoại trước khi chân chạm đất: hai mươi mấy tin nhắn. Ngày mới của bạn bắt đầu bằng việc dọn hậu quả của ngày cũ.</p>
            <p><span className="clock">7:00</span>Bạn ngồi ăn sáng cùng gia đình, nhưng mắt ở trong màn hình. Con hỏi hai lần bạn mới nghe.</p>
            <p><span className="clock">8:30 → TRƯA</span>Bạn tự hứa dành buổi sáng cho việc lớn — việc mà chỉ bạn làm được. 9 giờ 10, một bạn nhân viên đứng ở cửa: <em>&ldquo;Sếp xem giúp em cái này.&rdquo;</em> Bạn xem. Xem xong thì sửa. Sửa xong thì làm luôn cho nhanh. Đến trưa, việc lớn vẫn nằm nguyên chỗ cũ.</p>
            <p><span className="clock">CHIỀU</span>Một chuỗi bạn không nhớ nổi: duyệt, gỡ, xin lỗi khách, dỗ một người vừa nhắn xin nghỉ, ký cái mà bạn không kịp đọc. Bạn ăn trưa lúc 3 giờ — đứng, bằng một tay.</p>
            <p><span className="clock">19:00</span>Đèn văn phòng vẫn sáng, vì bạn còn ngồi đó. Mọi người về hết. Lúc đó bạn mới bắt đầu làm việc của bạn.</p>
            <p><span className="clock">23:00</span>Cơm nguội. Nhà ngủ rồi. Bạn xả nước nóng lên cái vai cứng như đá. Cơn ho vặt ba tuần chưa dứt. Dạ dày râm ran. Bạn không nhớ nổi lần cuối mình ngủ một giấc trọn vẹn.</p>
            <hr />
            <p className="beat">Rồi thứ đáng sợ hơn xuất hiện: bạn hết mệt.</p>
            <p className="dim">Không phải vì nhẹ đi — mà vì bạn <b>chai</b>. Việc gấp không còn làm tim bạn đập nhanh. Lời khen trôi qua như nước. Ai đó báo tin xấu, bạn gật đầu, mở laptop, xử lý, không cảm giác gì. Ngày xưa bạn làm nghề này bằng <b>lửa</b>. Giờ bạn làm bằng <b>quán tính</b>.</p>
            <p><span className="clock">NỬA ĐÊM</span>Đèn đã tắt. Bạn ngồi một mình trong bóng tối, điện thoại còn sáng trong tay. Rồi câu hỏi đó lại đến — cái câu bạn không dám nói to:</p>
            <p className="beat" style={{ textAlign: "center", fontStyle: "italic" }}>&ldquo;Bạn làm tất cả những thứ này… để làm gì?&rdquo;</p>
            <hr />
            <p className="dim">Bạn từng nghĩ chỉ cần gồng thêm một quý. Rồi quý sau. Rồi năm sau. Hôm nay y hệt hôm qua, năm nay y hệt năm ngoái — bạn giỏi hơn, chạy nhanh hơn, mà vẫn ở nguyên chỗ cũ, chỉ mòn thêm một vòng.</p>
            <p className="beat">Càng chạy nhanh, việc càng dồn về bạn — vì bạn làm nhanh nhất, đúng nhất, ít sai nhất. Bạn chính là cái nút thắt mà bạn đang cố gỡ.</p>
            <div className="turn">
              <p>Vòng xoáy siết chặt <b>không phải vì bạn yếu</b> — mà vì mọi tiêu chuẩn, mọi cái giỏi của công việc <b>đang nằm trong đầu bạn</b>; nên việc gì cũng phải quay về bạn.</p>
              <p>Ngày bạn đưa nó <b>ra khỏi đầu</b>, biến nó thành khung, thành hệ thống ai cũng dùng được — là ngày bạn thôi vận hành bằng <b>sức</b> (thứ có trần) và bắt đầu vận hành bằng <b>năng lực</b> (thứ học được, và trao đi được).</p>
              <p>Đó là lý do tôi làm chương trình này: không phải để bạn chạy nhanh hơn, mà để bạn <b>bước ra khỏi vòng xoáy</b> — câu chuyện thật, mô hình chuẩn, hướng dẫn thực hành cụ thể. 90 ngày, 6 chặng, mỗi chặng ra một sản phẩm dùng được ngay.</p>
              <p style={{ fontSize: 17 }}><b>Đèn vẫn sáng sau khi bạn về. Chỉ là bạn không còn phải là người tắt đèn cuối cùng.</b></p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap reveal">
          <span className="lbl pain">Bạn có đang ở đây không?</span>
          <h2>Dấu hiệu bạn đã trở thành nút thắt của chính doanh nghiệp mình</h2>
          <div className="pains">
            <div className="pain"><div className="k">01</div><div><b>Việc gì cũng phải qua tay bạn duyệt.</b><span>Không phải vì bạn thích ôm — mà vì bạn là nơi duy nhất cất giữ câu trả lời.</span></div></div>
            <div className="pain"><div className="k">02</div><div><b>Giao việc xong vẫn phải kiểm, thậm chí làm lại.</b><span>Giải thích cho xong một việc còn lâu hơn tự làm. Thôi, để mình làm cho nhanh.</span></div></div>
            <div className="pain"><div className="k">03</div><div><b>Đội nhóm không dám tự quyết.</b><span>Mọi thứ dội ngược lên bàn bạn — kể cả việc lẽ ra họ xử được.</span></div></div>
            <div className="pain"><div className="k">04</div><div><b>Bạn không dám nghỉ.</b><span>Nghỉ một ngày là bồn chồn. Nghỉ ba ngày là việc dồn ứ chờ bạn về.</span></div></div>
            <div className="pain"><div className="k">05</div><div><b>Tuyển mãi không ra người &ldquo;làm được như mình&rdquo;.</b><span>Vì chưa ai được nhìn thấy cái đích một cách rõ ràng.</span></div></div>
            <div className="pain"><div className="k">06</div><div><b>Làm một mình thì càng kẹt.</b><span>Không có ai để giao. Doanh nghiệp không thể lớn hơn 24 giờ mỗi ngày của một người.</span></div></div>
          </div>
          <p className="turnline">Nếu bạn gật đầu từ <b>3 điều trở lên</b> — vấn đề không phải ở nhân viên. Nó nằm ở chỗ <b>cái chuẩn vẫn còn vô hình</b>.</p>
        </div>
      </section>

      <section>
        <div className="wrap reveal">
          <span className="lbl">Cách chương trình vận hành</span>
          <h2>Tôi không giảng lý thuyết. Tôi chia sẻ đúng thứ tôi đang làm mỗi ngày.</h2>
          <div className="three">
            <div className="t3"><b>Câu chuyện thật</b><span>Tình huống có thật từ doanh nghiệp — của tôi và của chính bạn.</span></div>
            <div className="t3"><b>Mô hình chuẩn</b><span>Khung bài bản, đã chạy được ở quy mô lớn — rút gọn cho doanh nghiệp nhỏ.</span></div>
            <div className="t3"><b>Hướng dẫn thực hành cụ thể</b><span>Làm được ngay, không phải về nhà tự đoán.</span></div>
          </div>
          <p className="lead" style={{ marginTop: 22 }}>Chương trình nâng cao <b style={{ color: "var(--ink)" }}>toàn bộ năng lực quản trị chủ chốt</b> — 6 nhóm năng lực quyết định việc bạn có thoát được vòng xoáy hay không. Bạn mang chính đội nhóm của mình vào, mỗi chặng đi ra một <b style={{ color: "var(--ink)" }}>sản phẩm dùng được ngay</b>.</p>
          <div className="steps">
            <div className="step"><div className="n">01</div><div><b>Hoạch định &amp; ưu tiên.</b><span>Thoát khỏi việc vặt: nhìn ra đâu là việc thật sự quyết định doanh nghiệp — và dám buông phần còn lại.</span></div></div>
            <div className="step"><div className="n">02</div><div><b>Giao việc &amp; uỷ quyền.</b><span>Giao đúng người, đúng mức độ, có điểm kiểm — để bạn buông tay mà vẫn nắm, không phải làm lại.</span></div></div>
            <div className="step"><div className="n">03</div><div><b>Xây &amp; phát triển đội ngũ.</b><span>Nâng người lên thay vì gánh thay họ: khung năng lực theo vị trí, lộ trình phát triển, onboarding 30-60-90 ngày.</span></div></div>
            <div className="step"><div className="n">04</div><div><b>Tạo động lực &amp; giữ người giỏi.</b><span>Hiểu điều thật sự khiến người ta ở lại và cống hiến — thường không phải là tiền.</span></div></div>
            <div className="step"><div className="n">05</div><div><b>Giao tiếp &amp; xử lý xung đột.</b><span>Nói chuyện khó, góp ý, xử lý sai phạm — nói thẳng mà không mất người.</span></div></div>
            <div className="step"><div className="n">06</div><div><b>Quản trị hiệu suất &amp; coaching.</b><span>Đo được, kèm được — để đội tự chịu trách nhiệm và tự chạy khi bạn vắng mặt.</span></div></div>
          </div>
          <div className="solo"><b>Bạn đang làm một mình, chưa có nhân viên?</b> Vẫn đúng — thậm chí quan trọng hơn. Bạn đóng gói năng lực của mình thành quy trình để <b>nhân bản chính bạn</b>: thuê ngoài được, tự động hoá được, và một ngày giao được — thay vì dừng lại là sập.</div>
        </div>
      </section>

      <section>
        <div className="wrap reveal">
          <span className="lbl">Người đồng hành cùng bạn</span>
          <h2>Tôi vẫn đang ngồi trong ghế nóng — cùng chỗ với bạn.</h2>
          <p className="lead">Tôi không đứng ngoài nhìn vào. Tôi vẫn giao việc, vẫn xử lý người, vẫn xây khung năng lực mỗi tuần — nên tôi hiểu bài toán của bạn từ bên trong, không phải từ sách.</p>
          <div className="stats">
            <div className="stat"><div className="v">10.000+</div><div className="l">học viên đã đào tạo</div></div>
            <div className="stat"><div className="v">350+</div><div className="l">chương trình đào tạo</div></div>
            <div className="stat"><div className="v">1.000+</div><div className="l">lớp học đã đứng</div></div>
            <div className="stat"><div className="v">15</div><div className="l">năm trong nghề</div></div>
            <div className="stat"><div className="v">MBA</div><div className="l">Quản trị Kinh doanh</div></div>
          </div>
          <p className="turnline" style={{ fontSize: 15, fontWeight: 500, color: "var(--muted)" }}>
            Từng phụ trách đào tạo quản lý tại <b style={{ color: "var(--ink)" }}>Vingroup · FPT Telecom · TokyoLife</b>.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap reveal">
          <span className="lbl">Giải tỏa e ngại</span>
          <h2>Những băn khoăn rất thật — tôi trả lời thẳng</h2>
          <div style={{ marginTop: 24 }}>
            <div className="obj"><div className="q">&ldquo;Doanh nghiệp tôi nhỏ, khung năng lực là chuyện của tập đoàn chứ?&rdquo;</div><div className="a">Ngược lại. Tập đoàn có nhiều lớp đệm nên chịu được sự mơ hồ. Doanh nghiệp nhỏ thì mọi mơ hồ đổ hết lên đầu người chủ. Càng nhỏ càng nên xây sớm — bản cho SME gọn hơn nhiều.</div></div>
            <div className="obj"><div className="q">&ldquo;Tôi bận muốn chết, lấy đâu thời gian?&rdquo;</div><div className="a">Bạn bận chính vì chưa có hệ thống. Mỗi tuần chỉ cần <b>2 giờ học + khoảng 1 giờ áp dụng</b>, và mỗi chặng đi ra một sản phẩm dùng được ngay — đây là thời gian để <b>bớt bận về sau</b>, không phải thêm việc.</div></div>
            <div className="obj"><div className="q">&ldquo;Tôi giao rồi, mà không ai làm được như tôi.&rdquo;</div><div className="a">Đúng — vì tiêu chuẩn &ldquo;thế nào là được&rdquo; đang nằm trong đầu bạn, chưa ai nhìn thấy. Khi cái chuẩn hết vô hình, người ta tự soi và tự sửa được.</div></div>
            <div className="obj"><div className="q">&ldquo;Nhân viên tôi yếu, có hệ thống cũng vô ích.&rdquo;</div><div className="a">Phần lớn &ldquo;yếu&rdquo; là do chưa được nhìn thấy đích. Sau khi có khung, bạn cũng sẽ biết rõ ai <b>không</b> phù hợp — và ra quyết định dứt khoát hơn.</div></div>
            <div className="obj"><div className="q">&ldquo;Tôi làm một mình, chưa có nhân viên.&rdquo;</div><div className="a">Vẫn học được — và nên học sớm. Bạn đóng gói năng lực thành quy trình để thuê ngoài, tự động hoá, hoặc giao cho người đầu tiên.</div></div>
            <div className="obj"><div className="q">&ldquo;Lỡ không hợp thì sao?&rdquo;</div><div className="a">Tôi có cam kết bảo đảm rõ ràng ở ngay dưới. Rủi ro thuộc về tôi.</div></div>
          </div>
          <p className="exclude">Chương trình <b>không</b> dành cho người tìm mẹo quản lý nhanh — nó dành cho người sẵn sàng ngồi xuống xây lại cái gốc.</p>
        </div>
      </section>

      <section id="dangky">
        <div className="wrap reveal">
          <span className="lbl value">Trọn bộ — Suất Founding Member</span>
          <h2>Bạn nhận được gì</h2>
          <div className="offerbox">
            <div className="offerhead"><b>Người Tắt Đèn Cuối Cùng — Chương trình nâng cao năng lực quản lý</b><small>90 ngày · Dành cho chủ doanh nghiệp SME · quản lý lâu năm · người làm một mình</small></div>
            <div className="ledger">
              <div className="row"><div className="t"><b>Lõi chương trình — 90 ngày · 12 buổi · online (Zoom, có ghi hình)</b><small>6 nhóm năng lực quản trị chủ chốt. Mỗi chặng: câu chuyện thật + mô hình chuẩn + hướng dẫn thực hành cụ thể.</small></div><div className="v">18.000.000đ</div></div>
              <div className="row"><div className="t"><b>6 buổi tư vấn &ldquo;soi nút thắt&rdquo; trực tiếp cùng tôi</b><small>Nhóm nhỏ. Mang đúng doanh nghiệp của bạn ra để cùng gỡ.</small></div><div className="v">12.000.000đ</div></div>
              <div className="row"><div className="t"><b>Bộ mẫu Khung năng lực &amp; lộ trình theo vị trí</b><small>Điền được ngay cho doanh nghiệp bạn — không phải xây từ số 0.</small></div><div className="v">5.000.000đ</div></div>
              <div className="row"><div className="t"><b>Bộ công cụ Giao việc &amp; Uỷ quyền</b><small>Để bạn thôi phải kiểm từng ly và làm lại việc của nhân viên.</small></div><div className="v">3.000.000đ</div></div>
              <div className="row"><div className="t"><b>Khung Onboarding 30-60-90 ngày</b><small>Người mới cứng nghề sau 3 tháng, không phải 9 tháng.</small></div><div className="v">3.000.000đ</div></div>
              <div className="row"><div className="t"><b>Kịch bản 10 cuộc nói chuyện khó</b><small>Để bạn hết mất ngủ trước buổi nhắc nhở, góp ý, xử lý sai phạm.</small></div><div className="v">2.000.000đ</div></div>
              <div className="row"><div className="t"><b>Cộng đồng chủ doanh nghiệp &amp; quản lý (12 tháng)</b><small>Nơi bạn hỏi được những câu không hỏi được với nhân viên.</small></div><div className="v">4.000.000đ</div></div>
            </div>
            <div className="price">
              <div className="l">Tổng giá trị: <b style={{ color: "var(--ink)" }}>47.000.000đ</b><br /><span style={{ fontSize: 13 }}>Giá chính thức khi mở bán: <b style={{ color: "var(--ink)" }}>25.000.000đ</b></span></div>
              <div className="r"><s>25.000.000đ</s> Founding Member: 14.900.000đ<br /><span style={{ fontSize: 13, fontWeight: 500, color: "var(--muted)" }}>hoặc trả góp 2 kỳ × 7.450.000đ</span></div>
            </div>
            <div className="guar"><span className="t">✓ Cam kết bảo đảm.</span> Học đủ <b>4 buổi đầu</b> và làm bài áp dụng — nếu bạn thấy <b>chưa có chuyển biến nào</b> trong cách doanh nghiệp mình vận hành, nhắn cho tôi trong <b>14 ngày</b>, tôi <b>hoàn lại 100% học phí</b>. Rủi ro để tôi lo.</div>
            <ul className="scarce">
              <li><i>◆</i><div><b>Giới hạn 15 suất</b> — vì mỗi người mang một doanh nghiệp thật vào lớp, tôi phải kèm sát từng người.</div></li>
              <li><i>◆</i><div><b>Ưu đãi Founding Member đến hết 31/08/2026</b> — sau đó học phí về 25.000.000đ.</div></li>
              <li><i>◆</i><div>Founding Member được <b>giữ giá trọn đời</b> cho mọi chương trình sau + <b>1 buổi tư vấn riêng 1-1 (60 phút)</b> với tôi.</div></li>
            </ul>
            <div className="offercta"><CTA full>Giữ chỗ Founding Member →</CTA></div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap reveal">
          <span className="lbl">Hỏi &amp; Đáp</span>
          <h2>Câu hỏi thường gặp</h2>
          <div style={{ marginTop: 24 }}>
            <details><summary>Chương trình bắt đầu khi nào?</summary><div className="body">Kỳ Founding Member đầu tiên khai giảng <b>15/09/2026</b>. Lịch: <b>1 buổi/tuần, tối thứ Năm 20:00–22:00</b>, xen kẽ 6 buổi tư vấn nhóm. Tổng 12 buổi trong 90 ngày.</div></details>
            <details><summary>Online hay offline?</summary><div className="body"><b>Online</b> qua Zoom — có <b>ghi hình xem lại</b>, nên bạn không sợ lỡ buổi nào vì việc đột xuất.</div></details>
            <details><summary>Doanh nghiệp bao nhiêu người thì hợp?</summary><div className="body">Hợp nhất với chủ SME đang có <b>5–50 nhân sự</b>, quản lý đã có đội, và cả người đang <b>làm một mình</b> chuẩn bị tuyển người đầu tiên.</div></details>
            <details><summary>Tôi có phải mang số liệu thật của doanh nghiệp vào lớp không?</summary><div className="body">Có — nhưng chỉ ở mức bạn thoải mái. Càng mang tình huống thật, bạn càng đi ra sản phẩm dùng được ngay.</div></details>
            <details><summary>Trả góp / xuất hóa đơn?</summary><div className="body">Có. Trả góp <b>2 kỳ × 7.450.000đ</b> (kỳ 2 sau 45 ngày). Có <b>xuất hoá đơn VAT</b> cho doanh nghiệp.</div></details>
            <details><summary>Sau chương trình có hỗ trợ tiếp không?</summary><div className="body">Có — bạn ở lại Cộng đồng chủ doanh nghiệp &amp; quản lý <b>12 tháng</b> để tiếp tục hỏi đáp và đồng hành.</div></details>
          </div>
          <div className="center" style={{ marginTop: 26 }}><CTA>Giữ chỗ Founding Member →</CTA></div>
        </div>
      </section>

      <footer>Hà Bùi Academy — Học viện Quản trị &amp; Kỹ năng thiết yếu · buithuha.com</footer>

      <div className="sticky"><div className="inner">
        <CTA>Giữ chỗ Founding Member — chỉ 15 suất · 14.900.000đ</CTA>
      </div></div>

      {open && (
        <div className="ndtc-modal">
          <div className="bg" onClick={() => status !== "loading" && setOpen(false)} />
          <div className="box">
            <button className="x" onClick={() => status !== "loading" && setOpen(false)} aria-label="Đóng">×</button>
            {status === "done" ? (
              <div className="ok">
                <div className="big">✅</div>
                <h3>Đã nhận đăng ký của bạn</h3>
                <p className="s">Tôi sẽ liên hệ trong 24h để xác nhận suất Founding Member và gửi lịch chi tiết. Kiểm tra cả hộp thư Spam giúp tôi nhé.</p>
              </div>
            ) : (
              <>
                <h3>Giữ chỗ Founding Member</h3>
                <p className="s">Chỉ 15 suất · 14.900.000đ (giá chính thức 25.000.000đ). Tôi sẽ liên hệ lại trong 24h.</p>
                {err && <div className="err">{err}</div>}
                <form onSubmit={submit}>
                  <label htmlFor="ndtc-n">Họ và tên</label>
                  <input id="ndtc-n" required value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} placeholder="Nguyễn Văn A" />
                  <label htmlFor="ndtc-e">Email</label>
                  <input id="ndtc-e" type="email" required value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} placeholder="ban@email.com" />
                  <label htmlFor="ndtc-p">Số điện thoại (để tôi gọi tư vấn)</label>
                  <input id="ndtc-p" type="tel" value={form.phone} onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))} placeholder="0912345678" />
                  <button className="go" type="submit" disabled={status === "loading"}>
                    {status === "loading" ? "Đang gửi..." : "Giữ chỗ ngay"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
