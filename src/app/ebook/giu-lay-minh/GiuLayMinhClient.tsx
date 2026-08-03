"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { RESOURCE_CSS } from "@/components/resource/resourceCss";
import EbookBuyGate from "@/components/ebook/EbookBuyGate";

const SLUG = "/ebook/giu-lay-minh";
const PRICE = "99.000đ";
const nw: CSSProperties = { whiteSpace: "nowrap" };

const PAINS = [
  "“Em không bị ai bắt nạt cả. Sếp tốt, đồng nghiệp ổn. Mà không hiểu sao em vẫn kiệt sức.”",
  "“Em đi làm về là nằm im như hết pin, cuối tuần cũng không thấy khỏe lại.”",
  "“Em thấy mình cứ trống rỗng dần.”",
];

const WHAT_YOU_GET = [
  { t: "Năm bước giữ lấy mình — Gọi · Giữ · Gỡ · Gốc · Gượng", d: "Gọi tên thứ đang bào mòn mình, giữ ranh giới bền, gỡ khỏi thao túng và mặc cảm tội lỗi, tìm lại gốc — phần con người tách khỏi công việc — và gượng dậy sau tổn thương." },
  { t: "Sáu loại ranh giới — và loại bạn đang mất nhiều nhất", d: "Ranh giới không phải để ngăn người khác vào, mà để bạn khỏi rò rỉ ra ngoài. Chương này giúp bạn tìm đúng chỗ đang rò." },
  { t: "Nói “không” với người khó nói không nhất", d: "Từng câu cụ thể cho từng đối tượng — kể cả khi người đó là sếp trực tiếp, hoặc là chính mặc cảm trong đầu bạn." },
  { t: "Thoát thao túng nhận thức: ba nấc và lối ra", d: "Khi bạn bắt đầu không còn chắc điều gì có thật nữa — đó không phải trí nhớ kém, đó là một cơ chế có tên gọi và có lối ra." },
  { t: "Quản lý năng lượng, không chỉ quản lý thời gian", d: "Thời gian được sắp xếp hoàn hảo trên một cơ thể đã cạn năng lượng thì vẫn dẫn thẳng tới kiệt sức." },
  { t: "Chiếc ghế một chân — và cách xây thêm những chân còn lại", d: "Không phải lời khuyên “hãy cân bằng công việc và cuộc sống” — là những trụ neo cụ thể ngoài văn phòng và cách dựng từng cái." },
  { t: "Phục hồi sau một môi trường độc hại — và khi giữ mình nghĩa là rời đi", d: "Hai chương cuối cho quyết định khó nhất, để bạn rời đi (nếu phải rời) một cách tỉnh táo chứ không phải bỏ chạy." },
];

const CHAPTERS = [
  { part: "Phần một — GỌI: bạn không sửa được thứ chưa gọi tên", items: ["Nhận ra mình đang cạn kiệt", "Quản lý năng lượng, không chỉ quản lý thời gian"] },
  { part: "Phần hai — GIỮ", items: ["Sáu loại ranh giới và loại bạn mất nhiều nhất", "Nói “không” với người khó nói không nhất"] },
  { part: "Phần ba — GỠ", items: ["Thoát thao túng nhận thức: ba nấc và lối ra", "Mặc cảm tội lỗi — cái bẫy giữ bạn cho đi mãi"] },
  { part: "Phần bốn — GỐC", items: ["Bạn không phải là công việc của bạn", "Neo mình vào đời sống ngoài văn phòng"] },
  { part: "Phần năm — GƯỢNG", items: ["Phục hồi sau một môi trường độc hại", "Khi giữ mình nghĩa là rời đi", "Điều cuốn sách này không làm được — nói thẳng để bạn không phí thời gian"] },
];

const FOR_WHOM = [
  { who: "Người đang kiệt sức mà không có ai để chỉ tay", fear: "“Không có kẻ xấu nào trong câu chuyện của mình cả — nên mình tự trách mình yếu đuối.”" },
  { who: "Người không từ chối được", fear: "“Ai nhờ gì mình cũng nhận. Mình sợ nói không thì thành người ích kỷ, khó gần.”" },
  { who: "Người vừa đi qua một môi trường độc hại", fear: "“Mình đã rời đi rồi, mà sao đầu óc vẫn ở lại chỗ cũ — vẫn giật mình khi thấy tin nhắn công việc.”" },
];

export default function GiuLayMinhClient() {
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
            <span className="eyebrow">Ebook · Tập 3/3 bộ người trẻ đi làm · 11 chương</span>
            <h1>Sếp tốt, đồng nghiệp ổn — sao tôi vẫn <span style={nw}>kiệt sức</span>?</h1>
            <p className="lead">
              Cẩm nang <span style={nw}>ranh giới</span> và sức khỏe tinh thần cho người trẻ đi làm — vì có một loại{" "}
              <span style={nw}>độc hại</span> không đến từ ai khác, mà đến từ cách chính bạn đối xử với bản thân mình
              ở nơi làm việc.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
              <span style={{ fontSize: 20, fontWeight: 800, color: "var(--accent-hover)" }}>{PRICE}</span>
              <span style={{ fontSize: 13.5, color: "var(--fg-muted)" }}>· giá một buổi cà phê — đọc thử miễn phí bên dưới</span>
            </div>
          </div>

          <div className="body">
            <div className="card">
              <p className="intro">
                Không có kẻ xấu nào trong câu chuyện này. Chỉ có một người trẻ đang cho đi nhiều hơn khả năng tái tạo
                của mình, mỗi ngày một chút, cho đến khi cạn kiệt hoàn toàn. <b>Kiệt sức không đến từ việc bạn làm quá
                nhiều. Nó đến từ việc bạn cho đi những thứ đáng lẽ phải giữ.</b>
              </p>
            </div>

            <div className="card">
              <div className="ctitle"><span className="ic">🪫</span> Một bạn trẻ từng nói với tôi, và tôi nhớ mãi</div>
              <ul style={{ listStyle: "none", margin: "14px 0 0", padding: 0, display: "grid", gap: 11 }}>
                {PAINS.map((t, i) => (
                  <li key={i} style={{ fontSize: 15.2, fontStyle: "italic", color: "var(--fg-muted)" }}>{t}</li>
                ))}
              </ul>
              <p className="csub" style={{ marginTop: 14, marginBottom: 0 }}>
                Mười lăm năm làm nghề <span style={nw}>nhân sự</span>, tôi thấy kiểu kiệt sức này nhiều không kém kiểu
                bị chèn ép — và nguy hiểm hơn ở chỗ nó âm thầm, không có ai để chỉ tay, nên người trẻ thường tự trách
                mình yếu đuối. <b>Sự thật không phải vậy.</b>
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
                Như hai cuốn trước, mỗi bước có nguồn nghiên cứu và tình huống cụ thể — không phải những lời khuyên
                chung chung. Tất cả với giá <b style={{ color: "var(--fg)" }}>{PRICE}</b>, bằng một buổi cà phê, và
                bạn giữ được mãi.
              </p>
            </div>

            <div className="card">
              <div className="ctitle"><span className="ic">🗺️</span> 11 chương — năm bước giữ lấy mình</div>
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
                  Hai cuốn trước, tôi viết về việc nhận diện môi trường độc hại và việc nói ra điều khó nói. Nhưng có
                  một loại độc hại không đến từ ai khác — nó đến từ cách chính bạn đối xử với bản thân mình ở nơi làm
                  việc. Cuốn này viết về loại đó.
                </p>
                <p style={{ margin: 0 }}>
                  Kiệt sức không đến từ việc bạn làm quá nhiều. Nó đến từ việc bạn cho đi những thứ đáng lẽ phải giữ —
                  và ranh giới không phải để ngăn người khác vào, mà để bạn khỏi rò rỉ ra ngoài.
                </p>
                <p style={{ margin: 0, fontWeight: 700 }}>
                  Sau cuốn này, bạn sẽ bảo vệ được năng lượng và ranh giới của mình một cách bền vững — thay vì cho đi
                  đến kiệt sức rồi đổ vỡ, hoặc đóng cửa với tất cả mọi người để khỏi bị tổn thương.
                </p>
              </div>
              <p style={{ fontSize: 13, color: "#9A8E7B", marginTop: 12, marginBottom: 0 }}>
                Phần còn lại — 11 chương, đủ năm bước và toàn bộ tình huống cụ thể — mở khóa khi mua.
              </p>
            </div>

            <EbookBuyGate
              slug="ebook-giu-lay-minh"
              comboSlug="ebook-tron-bo-nguoi-tre-di-lam"
              priceLabel={PRICE}
              comboPriceLabel="249.000đ"
              loginRedirect={SLUG}
              guestText={
                <>
                  Không phải lý thuyết, không phải “hãy yêu thương bản thân”. Là một buổi ngồi nghe chuyện thật từ{" "}
                  <span style={nw}>mười lăm</span> năm làm nghề <span style={nw}>nhân sự</span> — về kiểu kiệt sức âm
                  thầm mà người trẻ thường tự trách mình. Đăng nhập để mua trọn bộ 11 chương.
                </>
              }
              readyText={
                <>
                  Trọn bộ 11 chương — sáu loại ranh giới, ba nấc thao túng và lối ra, các trụ neo ngoài văn phòng.
                  Thanh toán một lần · tải về ngay · đọc trên mọi thiết bị.
                </>
              }
              zaloMessage="Mua ebook Giữ lấy mình"
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
                Đây là cuốn cuối trong bộ ba — <b>giữ lấy chính mình</b>, thứ nền tảng nhất, vì nếu không còn mình thì
                mọi kỹ năng khác cũng chẳng để làm gì. Mua cả bộ ba: 249.000đ thay vì 297.000đ.
              </p>
              <ul style={{ margin: 0, paddingLeft: 20, display: "grid", gap: 5 }}>
                <li style={{ fontSize: 14.4 }}><Link href="/ebook/khong-phai-do-ban-nhay-cam" style={{ color: "var(--accent-hover)" }}>Tập 1 — Không ai bắt nạt được bạn nữa</Link></li>
                <li style={{ fontSize: 14.4 }}><Link href="/ebook/noi-duoc-dieu-kho-noi" style={{ color: "var(--accent-hover)" }}>Tập 2 — Từ chối được, đòi lương được, không mất lòng ai</Link></li>
              </ul>
            </div>

            <div className="card">
              <p className="intro" style={{ fontSize: 15 }}>
                Mọi tình huống trong sách xây từ những chuyện có thật tôi đã ngồi cùng trong{" "}
                <span style={nw}>mười lăm</span> năm làm nghề <span style={nw}>nhân sự</span>. Là người đến giờ vẫn
                đang trực tiếp <span style={nw}>quản lý</span> mỗi ngày, tôi viết ra thứ tôi vẫn dùng — cho người
                trong đội ngũ của mình, và cho chính mình.
              </p>
            </div>

            <Link href="/tu-van-1-1" className="card" style={{ display: "block", textDecoration: "none", color: "inherit" }}>
              <div className="ctitle"><span className="ic">🧭</span> Bước tiếp theo, nếu bạn muốn có người đi cùng</div>
              <p className="csub" style={{ marginBottom: 0 }}>
                Tư vấn 1-1 lộ trình nghề nghiệp cho người mới đi làm — nhìn lại tình huống của chính bạn với tôi →
              </p>
            </Link>
          </div>
        </div>

        <footer>Hà Bùi Academy · <Link href="/">buithuha.com</Link></footer>
      </div>
    </>
  );
}
