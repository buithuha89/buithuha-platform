"use client";

import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";
import { RESOURCE_CSS } from "@/components/resource/resourceCss";
import { createClient } from "@/lib/supabase/client";
import { siteConfig } from "@/lib/site-config";

const SLUG = "/ebook/giao-viec-ma-khong-phai-lam-lai";
const PRICE = "99.000đ";
const nw: CSSProperties = { whiteSpace: "nowrap" };

const PAINS = [
  "“Giải thích cho nó xong thì tôi làm xong rồi.”",
  "“Giao rồi nhưng vẫn phải để mắt, không thì hỏng.”",
  "“Tôi cũng muốn buông lắm chứ, nhưng buông là chết.”",
];

const WHAT_YOU_GET = [
  { t: "Mô hình 5G trọn vẹn — Gạn · Giao · Giới hạn · Giám sát · Gặt", d: "Một hệ thống đủ 5 bước, không phải vài mẹo rời rạc — từ chọn đúng việc để giao cho đến biến việc vừa xong thành năng lực của đội ngũ." },
  { t: "Cuộc hội thoại bảy phút", d: "Cấu trúc 6 bước cho một lần giao việc — bảy phút đổi lấy bảy giờ không phải ngồi sửa lại." },
  { t: "Bảy nấc quyền quyết định", d: "Cách vẽ ranh giới “dưới X em tự quyết, trên X hỏi tôi” — câu trả lời cho nỗi sợ “nếu hỏng thì tôi chịu”." },
  { t: "Bốn câu chặn khỉ + bốn quy tắc nuôi khỉ", d: "Để việc đã giao đi không tự bò ngược về vai bạn — kể cả qua bảy “cửa” quen thuộc nhất." },
  { t: "Chương riêng về văn hóa Việt Nam", d: "Năm thứ mà sách nước ngoài không nói: nể nang, ngại nói thẳng, quan hệ trên dưới — và cách giao việc trong thực tế đó." },
  { t: "Bảng tra nhanh 5G in được", d: "Một trang duy nhất — dán ở chỗ bạn nhìn thấy trước mỗi lần giao việc, kèm nguyên văn từng câu nói ra." },
  { t: "Bài tập cuối mỗi chương", d: "Không chỉ đọc — mỗi chương có phần để bạn áp ngay vào chính đội ngũ của bạn trong tuần này." },
];

const CHAPTERS = [
  { part: "Phần một — Tại sao bạn không giao được", items: ["Vòng lặp mười một giờ đêm — tại sao ôm việc luôn có vẻ là lựa chọn đúng", "Bốn con quỷ trong đầu người giao việc", "Con khỉ trên vai ai — vì sao việc bạn giao đi cứ tự bò về"] },
  { part: "Phần hai — Mô hình 5G", items: ["GẠN — việc nào được giao, việc nào không", "GIAO — cuộc hội thoại bảy phút", "GIỚI HẠN — bảy nấc quyền quyết định", "GIÁM SÁT — theo dõi mà không bóp nghẹt", "GẶT — biến việc vừa xong thành năng lực lần sau"] },
  { part: "Phần ba — Khi lý thuyết va vào thực tế", items: ["Người không chịu nhận việc — bốn kiểu từ chối", "Việc giao rồi bị trả ngược — bảy cửa mà con khỉ dùng để bò về", "Giao việc trong văn hóa Việt Nam", "Bảy câu hỏi bạn đang nghĩ trong đầu", "Những gì cuốn sách này không làm được — nói thẳng để bạn không phí thời gian"] },
];

const FOR_WHOM = [
  { who: "Chủ doanh nghiệp vừa và nhỏ", fear: "“Mười hai người mà việc gì cũng đến tay tôi. Đi vắng ba ngày là điện thoại cháy máy.”" },
  { who: "Quản lý cấp trung", fear: "“Trên ép xuống, dưới đẩy lên. Tôi thành cái phễu — mọi thứ đều phải chảy qua tôi.”" },
  { who: "Người vừa được thăng chức", fear: "“Tôi lên vị trí này nhờ giỏi chuyên môn. Nhưng chưa ai nói cho tôi biết quản trị là một nghề khác.”" },
];

function BuyGate() {
  const [state, setState] = useState<"loading" | "guest" | "user">("loading");

  useEffect(() => {
    const supabase = createClient();
    supabase.auth
      .getUser()
      .then(({ data: { user } }) => setState(user ? "user" : "guest"))
      .catch(() => setState("guest"));
  }, []);

  return (
    <div className="ctaband" id="mua">
      {state === "loading" && <p style={{ color: "#C9C0B1", margin: 0 }}>Đang kiểm tra tài khoản…</p>}

      {state === "guest" && (
        <>
          <h3>Mời tôi một buổi cà phê — {PRICE}</h3>
          <p>
            Không phải một khóa học, không phải lý thuyết. Là một buổi ngồi nghe chuyện thật của{" "}
            <span style={nw}>mười ba</span> năm làm nghề — những lần <span style={nw}>mắc kẹt</span>, những bài học trả
            giá thật — mà bạn giữ được mãi, đọc lại bao nhiêu lần tùy bạn. Đăng nhập để mua trọn bộ 13 chương.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
            <Link className="btn" href={`/login?redirect=${SLUG}`}>Đăng nhập để mua</Link>
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

      {state === "user" && (
        <>
          <h3>Mời tôi buổi cà phê này — {PRICE}</h3>
          <p>
            Trọn bộ 13 chương — mô hình 5G, cuộc hội thoại bảy phút, bảy nấc quyền quyết định, bảng tra nhanh in được.
            Thanh toán một lần · tải về ngay · đọc trên mọi thiết bị.
          </p>
          <a className="btn" href={siteConfig.socials.zalo} target="_blank" rel="noopener noreferrer">
            Mời tôi buổi cà phê này — {PRICE}
          </a>
          <p style={{ color: "#9A8F7D", fontSize: 12.5, marginTop: 12, marginBottom: 0 }}>
            Nhắn “Mua ebook Giao việc” qua Zalo để nhận link thanh toán &amp; bản đầy đủ.
          </p>
        </>
      )}
    </div>
  );
}

export default function GiaoViecClient() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: RESOURCE_CSS }} />
      <div className="rsc">
        <div className="top"><div className="wrap">
          <Link href="/" className="brand">Hà Bùi Academy<small>Học viện Quản trị &amp; Kỹ năng thiết yếu</small></Link>
          <Link href="/ebook" className="back">← Ebook</Link>
        </div></div>

        <div className="wrap">
          <div className="head">
            <span className="eyebrow">Ebook · 13 chương · Mô hình 5G</span>
            <h1>Giao việc mà không phải <span style={nw}>làm lại</span></h1>
            <p className="lead">
              Hệ thống giao việc và ủy quyền dành cho chủ doanh nghiệp vừa và nhỏ và{" "}
              <span style={nw}>quản lý</span> cấp trung — xây từ các trường hợp có thật tại doanh nghiệp Việt Nam.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
              <span style={{ fontSize: 20, fontWeight: 800, color: "var(--accent-hover)" }}>{PRICE}</span>
              <span style={{ fontSize: 13.5, color: "var(--fg-muted)" }}>· giá một buổi cà phê — đọc thử miễn phí bên dưới</span>
            </div>
          </div>

          <div className="body">
            <div className="card">
              <p className="intro">
                Bạn giao một việc cho người khác. Họ làm xong. Và bạn vẫn phải ngồi sửa lại nó từ đầu — đến mức bạn tự
                nhủ: <i>thà tự làm ngay từ đầu còn nhanh hơn.</i> Khi ấy, câu trả lời phổ biến nhất mà chúng ta tự đưa
                ra là: <b>tại vì đội ngũ chưa đủ giỏi.</b> Câu trả lời đó nghe rất hợp lý. Nó cũng gần như luôn luôn
                sai — và cuốn sách này bắt đầu từ chỗ đó.
              </p>
            </div>

            <div className="card">
              <div className="ctitle"><span className="ic">🕚</span> Ba câu tôi nghe nhiều nhất trong mười lăm năm</div>
              <ul style={{ listStyle: "none", margin: "14px 0 0", padding: 0, display: "grid", gap: 11 }}>
                {PAINS.map((t, i) => (
                  <li key={i} style={{ fontSize: 15.2, fontStyle: "italic", color: "var(--fg-muted)" }}>{t}</li>
                ))}
              </ul>
              <p className="csub" style={{ marginTop: 14, marginBottom: 0 }}>
                Cả ba câu đều đúng — trong ngắn hạn. Nhưng cả ba đều chỉ mô tả cái giá của <i>một lần giao việc</i>,
                chứ không mô tả cái giá của việc <b>không bao giờ giao</b>: bạn thành điểm nghẽn duy nhất, đội ngũ
                không lớn lên, và ngày làm việc của bạn không bao giờ kết thúc trước mười một giờ đêm.
              </p>
            </div>

            <div className="card">
              <div className="ctitle"><span className="ic">🎯</span> Trong cuốn sách, bạn sẽ có</div>
              <ul style={{ listStyle: "none", margin: "14px 0 0", padding: 0, display: "grid", gap: 13 }}>
                {WHAT_YOU_GET.map((it, i) => (
                  <li key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 11, alignItems: "start" }}>
                    <span style={{ color: "#0C6070", fontWeight: 800 }}>✓</span>
                    <span style={{ fontSize: 15.2 }}>
                      <b>{it.t}</b>
                      <span style={{ display: "block", color: "var(--fg-muted)", fontSize: 14.2, marginTop: 2 }}>{it.d}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="csub" style={{ marginTop: 14, marginBottom: 0 }}>
                Một buổi đào tạo doanh nghiệp về đúng kỹ năng này có giá vài chục triệu đồng cho một ngày. Cuốn sách
                này là bản đúc kết của chính những buổi đó — với giá <b style={{ color: "var(--fg)" }}>{PRICE}</b>,
                bằng một buổi cà phê, và bạn giữ được mãi.
              </p>
            </div>

            <div className="card">
              <div className="ctitle"><span className="ic">🗺️</span> 13 chương — đi từ chẩn đoán đến hệ thống</div>
              {CHAPTERS.map((p, i) => (
                <div key={i} style={{ marginTop: i === 0 ? 14 : 18 }}>
                  <div style={{ fontWeight: 800, fontSize: 15 }}>{p.part}</div>
                  <ul style={{ margin: "8px 0 0", paddingLeft: 20, display: "grid", gap: 5 }}>
                    {p.items.map((c, j) => (
                      <li key={j} style={{ fontSize: 14.4, color: "var(--fg-muted)" }}>{c}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="card">
              <div className="ctitle"><span className="ic">👥</span> Viết cho ba kiểu người đang ôm quá nhiều việc</div>
              <ul style={{ listStyle: "none", margin: "14px 0 0", padding: 0, display: "grid", gap: 14 }}>
                {FOR_WHOM.map((it, i) => (
                  <li key={i}>
                    <div style={{ fontWeight: 800, fontSize: 15.5 }}>{it.who}</div>
                    <div style={{ color: "var(--fg-muted)", fontSize: 14.4, marginTop: 3 }}>{it.fear}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <div className="ctitle"><span className="ic">📖</span> Đọc thử — trang đầu tiên của cuốn sách</div>
              <div style={{ borderLeft: "3px solid var(--accent)", paddingLeft: 16, marginTop: 14, display: "grid", gap: 12, fontSize: 15.2, lineHeight: 1.75 }}>
                <p style={{ margin: 0, fontWeight: 700 }}>Bức thư gửi người đang đọc lúc mười một giờ đêm</p>
                <p style={{ margin: 0 }}>Tôi đoán bạn không đọc những dòng này vào buổi sáng.</p>
                <p style={{ margin: 0 }}>
                  Tôi đoán bạn đọc nó vào buổi tối, sau khi cả nhà đã ngủ, hoặc trong lúc chờ một file được gửi đến —
                  file mà lẽ ra bạn đã nhận được từ ba ngày trước. Trên bàn bạn còn dở một việc mà bạn đã giao cho
                  người khác, họ làm xong rồi, và bạn đang ngồi sửa lại nó từ đầu.
                </p>
                <p style={{ margin: 0 }}>Và trong đầu bạn có một câu hỏi rất khó nói ra thành lời với ai:</p>
                <p style={{ margin: 0, fontWeight: 700 }}>Tại sao giao việc lại mệt hơn tự làm?</p>
                <p style={{ margin: 0 }}>
                  Đây là câu hỏi mà hầu hết các chủ doanh nghiệp vừa và nhỏ, hầu hết các <span style={nw}>quản lý</span>{" "}
                  cấp trung ở Việt Nam đều đã hỏi ít nhất một lần. Và câu trả lời phổ biến nhất mà họ tự đưa ra cho
                  mình là: <i>tại vì đội ngũ chưa đủ giỏi.</i>
                </p>
                <p style={{ margin: 0 }}>Câu trả lời đó nghe rất hợp lý. Nó cũng gần như luôn luôn sai.</p>
              </div>
              <p style={{ fontSize: 13, color: "#9A8E7B", marginTop: 12, marginBottom: 0 }}>
                Phần còn lại — 13 chương, mô hình 5G đầy đủ và toàn bộ tình huống mô phỏng — mở khóa khi mua.
              </p>
            </div>

            <BuyGate />

            <div className="card">
              <div className="ctitle"><span className="ic">🛡️</span> Cam kết “buổi cà phê đáng giá”</div>
              <p className="csub" style={{ marginBottom: 0 }}>
                Nếu đọc xong bạn thấy buổi cà phê này không đáng, nhắn tôi một câu — tôi hoàn đủ {PRICE}. Không hỏi
                thêm gì. Rủi ro nằm ở phía tôi, không nằm ở phía bạn.
              </p>
            </div>

            <div className="card">
              <p className="intro" style={{ fontSize: 15 }}>
                Toàn bộ tình huống trong sách — anh Dũng với hai mươi ba tin nhắn một tối, chị Trang với lần giao việc
                bảy phút — đều xây từ các trường hợp có thật tại doanh nghiệp Việt Nam mà tôi đã ngồi cùng trong{" "}
                <span style={nw}>mười ba</span> năm làm nghề đào tạo. Là người đến giờ vẫn đang trực tiếp{" "}
                <span style={nw}>quản lý</span> mỗi ngày, tôi viết ra thứ tôi vẫn dùng.
              </p>
            </div>

            <Link href="/ebook/nghe-thuat-thua-nhan-sai" className="card" style={{ display: "block", textDecoration: "none", color: "inherit" }}>
              <div className="ctitle"><span className="ic">📕</span> Cuốn tiếp theo trong tủ: Nghệ thuật thừa nhận sai</div>
              <p className="csub" style={{ marginBottom: 0 }}>
                Phản hồi thông minh dưới áp lực mà không mất uy tín · 61 trang · cũng là một buổi cà phê {PRICE} →
              </p>
            </Link>

            <Link href="/nguoi-tat-den-cuoi-cung" className="card" style={{ display: "block", textDecoration: "none", color: "inherit" }}>
              <div className="ctitle"><span className="ic">🕯️</span> Bước tiếp theo, nếu bạn muốn đi xa hơn một cuốn sách</div>
              <p className="csub" style={{ marginBottom: 0 }}>
                Chương trình tư vấn nâng cao năng lực <span style={nw}>quản lý</span> “Người Tắt Đèn Cuối Cùng” — làm
                việc trực tiếp với tôi trên chính đội ngũ của bạn →
              </p>
            </Link>
          </div>
        </div>

        <footer>Hà Bùi Academy · <Link href="/">buithuha.com</Link></footer>
      </div>
    </>
  );
}
