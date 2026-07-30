"use client";

import Link from "next/link";
import { RESOURCE_CSS } from "@/components/resource/resourceCss";
import EbookBuyGate from "@/components/ebook/EbookBuyGate";

const SLUG = "/ebook/nghe-thuat-thua-nhan-sai";
const PREVIEW_PDF = "/ebooks/nghe-thuat-thua-nhan-sai-doc-thu.pdf";
const PRICE = "99.000đ";

const WHAT_YOU_GET = [
  "Bốn lối tư duy phá vỡ phản xạ phòng thủ tự nhiên — để câu nói đúng không nghe giả tạo.",
  "Bốn điều kiện để biết khi nào nên thừa nhận, thừa nhận bao nhiêu, và kết thúc thế nào.",
  "Bộ công cụ ngôn ngữ — những câu nói cụ thể, dùng được ngay khi bị bắt lỗi giữa cuộc họp.",
  "Mười hai tình huống mô phỏng đầy đủ, mỗi tình huống có ba phiên bản: nhân viên · quản lý mới lên · lãnh đạo cấp cao.",
  "Lộ trình luyện tập 30 ngày để biến kiến thức thành phản xạ dưới áp lực.",
];

const FOR_WHOM = [
  { who: "Nhân viên văn phòng muốn thăng tiến", fear: "“Mình không sợ sai. Mình chỉ sợ người khác nghĩ mình kém cỏi khi mình sai.”" },
  { who: "Quản lý mới lên (6–18 tháng)", fear: "“Nhận sai trước nhân viên thì mất uy. Không nhận sai thì nhân viên mất niềm tin.”" },
  { who: "Lãnh đạo cấp cao", fear: "“Nếu mình thừa nhận sai ở tầm này, liệu tổ chức có mất niềm tin vào cả chiến lược không?”" },
];

export default function ThuaNhanSaiClient() {
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
            <span className="eyebrow">Ebook · 61 trang · Bản đầy đủ</span>
            <h1>Nghệ thuật thừa nhận sai</h1>
            <p className="lead">
              Phản hồi thông minh dưới áp lực mà không mất uy tín — cho nhân viên văn phòng, quản lý mới lên
              và lãnh đạo cấp cao.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
              <span style={{ fontSize: 20, fontWeight: 800, color: "var(--accent-hover)" }}>{PRICE}</span>
              <span style={{ fontSize: 13.5, color: "var(--fg-muted)" }}>· giá một buổi cà phê — đọc thử 15 trang miễn phí bên dưới</span>
            </div>
          </div>

          <div className="body">
            <div className="card">
              <p className="intro">
                Cuốn sách này bắt đầu bằng một cuộc họp. Tôi đứng trước hơn 30 người, bị hỏi về một con số tôi vừa
                trình bày — và tôi đã buột ra đúng cái câu tệ nhất có thể nói: <i>“Để em xem lại và báo cáo sau ạ.”</i>{" "}
                Hôm đó tôi hiểu ra một điều mà trước đó không ai nói cho tôi biết: <b>không phải sai lầm giết chết uy
                tín, mà là cách bạn phản ứng với sai lầm.</b>
              </p>
              <p className="intro" style={{ marginTop: 12 }}>
                Bạn không cần trở thành người hoàn hảo. Bạn chỉ cần xử lý sai lầm tốt hơn 95% người xung quanh — và đó
                là một kỹ năng học được, luyện được, đo được. Đây là bản đúc kết tôi dùng cho bản thân và trong hàng
                trăm buổi đào tạo nhân sự.
              </p>
            </div>

            <div className="card">
              <div className="ctitle"><span className="ic">🎯</span> Trong cuốn sách, bạn sẽ có</div>
              <ul style={{ listStyle: "none", margin: "14px 0 0", padding: 0, display: "grid", gap: 11 }}>
                {WHAT_YOU_GET.map((t, i) => (
                  <li key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 11, fontSize: 15.2, alignItems: "start" }}>
                    <span style={{ color: "#0C6070", fontWeight: 800 }}>✓</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <div className="ctitle"><span className="ic">👥</span> Viết cho ba nhóm người — mỗi tình huống có phiên bản riêng</div>
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
              <div className="ctitle"><span className="ic">📖</span> Đọc thử 15 trang đầu</div>
              <p className="csub">
                Miễn phí phần mở đầu + Chương 1 + mở màn Chương 2 (tình huống “con số sai giữa cuộc họp”).
                Phần còn lại mở khoá khi mua.
              </p>
              <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid var(--border)", background: "var(--surface)" }}>
                <iframe
                  src={`${PREVIEW_PDF}#view=FitH`}
                  title="Đọc thử: Nghệ thuật thừa nhận sai (15 trang đầu)"
                  style={{ width: "100%", height: "min(82vh, 820px)", border: 0, display: "block" }}
                />
              </div>
              <p style={{ fontSize: 13, color: "#9A8E7B", marginTop: 10, marginBottom: 0 }}>
                Không xem được trên máy của bạn?{" "}
                <a href={PREVIEW_PDF} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-hover)", fontWeight: 600 }}>
                  Mở bản đọc thử ở tab mới
                </a>
                .
              </p>
            </div>

            <EbookBuyGate
              slug="ebook-nghe-thuat-thua-nhan-sai"
              priceLabel={PRICE}
              loginRedirect={SLUG}
              guestText={
                <>
                  Không phải lý thuyết. 61 trang, 12 tình huống mô phỏng, bộ công cụ ngôn ngữ, lộ trình 30 ngày —
                  chuyện thật từ mười lăm năm làm nghề, đúng giá một buổi cà phê, và bạn giữ được mãi. Đăng nhập để
                  mua bản đầy đủ.
                </>
              }
              readyText={
                <>
                  Trọn bộ 61 trang — 12 tình huống mô phỏng, bộ công cụ ngôn ngữ, lộ trình 30 ngày. Thanh toán một lần
                  · tải về ngay · đọc trên mọi thiết bị.
                </>
              }
              zaloMessage="Mua ebook Thừa nhận sai"
            />

            <div className="card">
              <div className="ctitle"><span className="ic">🛡️</span> Cam kết “buổi cà phê đáng giá”</div>
              <p className="csub" style={{ marginBottom: 0 }}>
                Nếu đọc xong bạn thấy buổi cà phê này không đáng, nhắn tôi một câu — tôi hoàn đủ {PRICE}. Không hỏi
                thêm gì. Rủi ro nằm ở phía tôi, không nằm ở phía bạn.
              </p>
            </div>

            <div className="card">
              <p className="intro" style={{ fontSize: 15 }}>
                Tôi viết cuốn này từ nhiều năm làm L&amp;D — và từ chính những lần đứng hình như vậy. Mỗi kỹ thuật
                trong sách đều đã được dùng thật trong môi trường doanh nghiệp Việt Nam, không có lý thuyết nào chưa
                được ứng dụng. Là người đến giờ vẫn đang trực tiếp quản lý mỗi ngày, tôi viết ra thứ tôi vẫn dùng.
              </p>
            </div>

            <Link href="/ebook/giao-viec-ma-khong-phai-lam-lai" className="card" style={{ display: "block", textDecoration: "none", color: "inherit" }}>
              <div className="ctitle"><span className="ic">📗</span> Cuốn tiếp theo trong tủ: Giao việc mà không phải làm lại</div>
              <p className="csub" style={{ marginBottom: 0 }}>
                Mô hình 5G — hệ thống giao việc và ủy quyền cho chủ doanh nghiệp và quản lý cấp trung · cũng là một
                buổi cà phê {PRICE} →
              </p>
            </Link>
          </div>
        </div>

        <footer>Hà Bùi Academy · <Link href="/">buithuha.com</Link></footer>
      </div>
    </>
  );
}
