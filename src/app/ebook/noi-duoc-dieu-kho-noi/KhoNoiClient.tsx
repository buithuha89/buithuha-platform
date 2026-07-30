"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { RESOURCE_CSS } from "@/components/resource/resourceCss";
import EbookBuyGate from "@/components/ebook/EbookBuyGate";

const SLUG = "/ebook/noi-duoc-dieu-kho-noi";
const PRICE = "99.000đ";
const nw: CSSProperties = { whiteSpace: "nowrap" };

const PAINS = [
  "“Em biết mình cần nói gì rồi. Nhưng đến lúc mở miệng thì em vẫn nghẹn.”",
  "“Em nói ra thì hoặc là run bần bật, hoặc là lỡ lời gắt lên.”",
  "“Em nuốt vào thì mang ấm ức về nhà. Em nói thẳng thì mang tiếng khó ưa.”",
];

const WHAT_YOU_GET = [
  { t: "Mô hình 5T trọn vẹn — Tách · Tình · Tỏ · Tiếp · Tĩnh", d: "Tách sự thật khỏi câu chuyện, đọc tình trạng người nghe, tỏ bày bằng công thức, xử lý phản ứng tiếp theo, và giữ tĩnh khi hội thoại căng." },
  { t: "Bốn công thức nói điều khó", d: "Không phải “hãy khéo léo” chung chung — là bốn khung câu có cấu trúc, áp vào là dùng được, kèm tình huống mô phỏng với lời thoại cụ thể." },
  { t: "Từ chối mà không mất lòng", d: "Các câu từ chối theo từng đối tượng — kể cả với người khó từ chối nhất: sếp trực tiếp và đồng nghiệp thân." },
  { t: "Nói về tiền mà không ngượng", d: "Chương riêng về thương lượng lương và đòi hỏi chính đáng — điều người trẻ Việt Nam gần như không được ai chỉ." },
  { t: "Trụ qua ba giây phản ứng đầu tiên", d: "Khi người nghe giận, chối, hoặc im lặng — kỹ năng thật không nằm ở câu mở lời, mà ở việc trụ được sau khi nói." },
  { t: "Viết tin nhắn và email khi đang căng", d: "Chữ viết thiếu giọng điệu và nụ cười để làm dịu — người đọc tự gán cho nó cái giọng tệ nhất. Chương này chỉ cách viết điều khó bằng chữ." },
  { t: "Nói trước đám đông mà không run", d: "Phần lớn thành công được quyết định trước khi bạn đứng lên — ba việc chuẩn bị cụ thể." },
];

const CHAPTERS = [
  { part: "Phần một — TÁCH: sự thật thì khó cãi, câu chuyện thì dễ cãi", items: ["Vì sao lời thẳng của bạn hay bị nghe thành gây hấn", "Tách sự thật khỏi câu chuyện"] },
  { part: "Phần hai — TÌNH", items: ["Đọc người nghe trước khi mở lời"] },
  { part: "Phần ba — TỎ", items: ["Bốn công thức nói điều khó", "Từ chối mà không mất lòng", "Nói về tiền mà không ngượng"] },
  { part: "Phần bốn — TIẾP", items: ["Khi người nghe giận, chối, hoặc im lặng", "Viết tin nhắn và email khi đang căng", "Nói trước đám đông mà không run"] },
  { part: "Phần năm — TĨNH", items: ["Giữ được mình khi bị dồn — và khi mình sai", "Điều cuốn sách này không làm được — nói thẳng để bạn không phí thời gian"] },
];

const FOR_WHOM = [
  { who: "Người hay nuốt lời vào trong", fear: "“Thôi nhịn cho êm chuyện — rồi mang ấm ức về nhà, và chuyện thì vẫn lặp lại.”" },
  { who: "Người từng lỡ lời khi bị dồn", fear: "“Mình gắt lên đúng một lần — và bị nhớ mãi vì lần đó, thay vì mười lần mình đã nhịn.”" },
  { who: "Người sắp có cuộc nói chuyện khó", fear: "“Ngày mai phải nói chuyện lương / phải từ chối / phải góp ý — và tối nay không ngủ được.”" },
];

export default function KhoNoiClient() {
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
            <span className="eyebrow">Ebook · Tập 2/3 bộ người trẻ đi làm · 11 chương · Mô hình 5T</span>
            <h1>Nói được điều <span style={nw}>khó nói</span></h1>
            <p className="lead">
              Cẩm nang giao tiếp cho người trẻ: <span style={nw}>từ chối</span>, phản hồi,{" "}
              <span style={nw}>thương lượng</span> mà không run — và không phản bội chính mình.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
              <span style={{ fontSize: 20, fontWeight: 800, color: "var(--accent-hover)" }}>{PRICE}</span>
              <span style={{ fontSize: 13.5, color: "var(--fg-muted)" }}>· giá một buổi cà phê — đọc thử miễn phí bên dưới</span>
            </div>
          </div>

          <div className="body">
            <div className="card">
              <p className="intro">
                Biết mình cần nói gì là một chuyện. Nói ra được, đúng lúc, đúng lượng, giữ được giọng khi người đối
                diện cau mày — là một chuyện hoàn toàn khác. <b>Cuốn sách này viết cho khoảng cách giữa hai chuyện
                đó.</b>
              </p>
            </div>

            <div className="card">
              <div className="ctitle"><span className="ic">🗣️</span> Có quen không?</div>
              <ul style={{ listStyle: "none", margin: "14px 0 0", padding: 0, display: "grid", gap: 11 }}>
                {PAINS.map((t, i) => (
                  <li key={i} style={{ fontSize: 15.2, fontStyle: "italic", color: "var(--fg-muted)" }}>{t}</li>
                ))}
              </ul>
              <p className="csub" style={{ marginTop: 14, marginBottom: 0 }}>
                Người ta tưởng người giao tiếp giỏi là người nói hay, nói trôi, nói không vấp. Sai. <b>Người giao tiếp
                giỏi là người nói được điều khó</b> — lời từ chối, lời phản hồi thẳng, lời đòi hỏi chính đáng — mà
                không phá vỡ quan hệ, và không phản bội chính mình.
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
                Mỗi kỹ thuật đều có nguồn nghiên cứu tử tế và một tình huống mô phỏng với lời thoại cụ thể — vì bạn
                không học bơi bằng cách đọc về nước. Tất cả với giá{" "}
                <b style={{ color: "var(--fg)" }}>{PRICE}</b>, bằng một buổi cà phê, và bạn giữ được mãi.
              </p>
            </div>

            <div className="card">
              <div className="ctitle"><span className="ic">🗺️</span> 11 chương — năm chữ T</div>
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
              <div className="ctitle"><span className="ic">👥</span> Viết cho ba kiểu người</div>
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
              <div className="ctitle"><span className="ic">📖</span> Đọc thử — lời ngỏ của cuốn sách</div>
              <div style={{ borderLeft: "3px solid var(--accent)", paddingLeft: 16, marginTop: 14, display: "grid", gap: 12, fontSize: 15.2, lineHeight: 1.75 }}>
                <p style={{ margin: 0 }}>
                  Trong cuốn trước, tôi kể về một bạn trẻ nhắn cho tôi lúc mười một giờ đêm, hỏi có phải mình quá nhạy
                  cảm không. Cuốn này bắt đầu từ một tin nhắn khác, của chính bạn ấy, ba tháng sau: <i>“Chị ơi, giờ em
                  nhận ra vấn đề rồi, em biết mình cần nói gì rồi. Nhưng đến lúc mở miệng thì em vẫn nghẹn. Em nói ra
                  thì hoặc là run bần bật, hoặc là lỡ lời gắt lên. Làm sao để nói cho vừa đủ hả chị?”</i>
                </p>
                <p style={{ margin: 0 }}>Đó là một bước tiến, và cũng là một bức tường mới.</p>
                <p style={{ margin: 0 }}>
                  Người ta không ngại nói. Người ta ngại cái xảy ra sau khi nói — nên kỹ năng thật không nằm ở câu mở
                  lời, mà ở việc trụ được qua ba giây phản ứng đầu tiên của người nghe.
                </p>
                <p style={{ margin: 0, fontWeight: 700 }}>
                  Sau cuốn này, bạn sẽ nói ra điều cần nói một cách rõ ràng và vững vàng — thay vì nuốt tất cả vào
                  trong rồi mang ấm ức về nhà, hoặc bùng nổ rồi mang tiếng khó ưa.
                </p>
              </div>
              <p style={{ fontSize: 13, color: "#9A8E7B", marginTop: 12, marginBottom: 0 }}>
                Phần còn lại — 11 chương, mô hình 5T đầy đủ và toàn bộ tình huống mô phỏng — mở khóa khi mua.
              </p>
            </div>

            <EbookBuyGate
              slug="ebook-noi-duoc-dieu-kho-noi"
              comboSlug="ebook-tron-bo-nguoi-tre-di-lam"
              priceLabel={PRICE}
              comboPriceLabel="249.000đ"
              loginRedirect={SLUG}
              guestText={
                <>
                  Không phải lý thuyết. Là một buổi ngồi nghe chuyện thật từ <span style={nw}>mười lăm</span> năm làm
                  nghề đào tạo — và nếu phải chọn một kỹ năng bị hiểu lầm nhiều nhất, tôi chọn giao tiếp. Đăng nhập để
                  mua trọn bộ 11 chương.
                </>
              }
              readyText={
                <>
                  Trọn bộ 11 chương — mô hình 5T, bốn công thức, các câu từ chối, chương nói về tiền. Thanh toán một
                  lần · tải về ngay · đọc trên mọi thiết bị.
                </>
              }
              zaloMessage="Mua ebook Khó nói"
            />

            <div className="card">
              <div className="ctitle"><span className="ic">🛡️</span> Cam kết “buổi cà phê đáng giá”</div>
              <p className="csub" style={{ marginBottom: 0 }}>
                Nếu đọc xong bạn thấy buổi cà phê này không đáng, nhắn tôi một câu — tôi hoàn đủ {PRICE}. Không hỏi
                thêm gì. Rủi ro nằm ở phía tôi, không nằm ở phía bạn.
              </p>
            </div>

            <div className="card">
              <div className="ctitle"><span className="ic">📚</span> Trọn bộ 3 cuốn cho người trẻ đi làm — 249.000đ</div>
              <p className="csub">
                Cuốn này là tập 2 — <b>nói ra điều khó nói</b>. Tập 1 giúp bạn <b>nhận diện và ứng phó</b> khi bị đối
                xử tệ, tập 3 giúp bạn <b>giữ lấy chính mình</b> khỏi kiệt sức. Mua cả bộ ba: 249.000đ thay vì 297.000đ.
              </p>
              <ul style={{ margin: 0, paddingLeft: 20, display: "grid", gap: 5 }}>
                <li style={{ fontSize: 14.4 }}><Link href="/ebook/khong-phai-do-ban-nhay-cam" style={{ color: "var(--accent-hover)" }}>Tập 1 — Không phải do bạn nhạy cảm</Link></li>
                <li style={{ fontSize: 14.4 }}><Link href="/ebook/giu-lay-minh" style={{ color: "var(--accent-hover)" }}>Tập 3 — Giữ lấy mình</Link></li>
              </ul>
            </div>

            <Link href="/tu-van-1-1" className="card" style={{ display: "block", textDecoration: "none", color: "inherit" }}>
              <div className="ctitle"><span className="ic">🧭</span> Bước tiếp theo, nếu bạn muốn có người đi cùng</div>
              <p className="csub" style={{ marginBottom: 0 }}>
                Tư vấn 1-1 lộ trình nghề nghiệp cho người mới đi làm — luyện chính cuộc nói chuyện khó của bạn với tôi →
              </p>
            </Link>
          </div>
        </div>

        <footer>Hà Bùi Academy · <Link href="/">buithuha.com</Link></footer>
      </div>
    </>
  );
}
