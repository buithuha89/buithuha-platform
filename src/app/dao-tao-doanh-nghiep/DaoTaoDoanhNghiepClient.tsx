"use client";

import Link from "next/link";
import { RESOURCE_CSS } from "@/components/resource/resourceCss";
import { siteConfig } from "@/lib/site-config";

const OFFICE_SKILLS = [
  "Giao tiếp và phản hồi ở nơi làm việc — nói điều khó nói mà không làm hỏng quan hệ",
  "Xử lý sai sót dưới áp lực mà không mất uy tín",
  "Tư duy dịch vụ và phối hợp liên phòng ban",
  "Quản lý công việc cá nhân: ưu tiên, cam kết, báo cáo",
];

const MANAGEMENT_SKILLS = [
  "Giao việc và uỷ quyền — giao xong không phải làm lại",
  "Đánh giá và phản hồi hiệu suất nhân viên",
  "Dẫn dắt đội nhóm: họp, ra quyết định, xử lý xung đột",
  "Xây khung năng lực và lộ trình phát triển cho đội ngũ",
  "Kèm cặp quản lý mới lên — nhóm dễ gãy nhất trong tổ chức",
];

const HOW = [
  { step: "1", title: "Khảo sát trước", desc: "Tôi hỏi chuyện người phụ trách và một vài người sẽ học, để biết vấn đề thật đang nằm ở đâu — không đào tạo theo giáo trình đóng gói sẵn." },
  { step: "2", title: "Thiết kế theo bối cảnh", desc: "Tình huống trong bài lấy từ chính công việc của đội ngũ bạn: sản phẩm gì, khách nào, mâu thuẫn nào hay lặp lại." },
  { step: "3", title: "Đào tạo và thực hành", desc: "Học viên xử lý tình huống thật ngay trên lớp, không ngồi nghe suông. Có kịch bản, có phản hồi trực tiếp." },
  { step: "4", title: "Bàn giao công cụ", desc: "Kết thúc chương trình, đội ngũ giữ lại bộ biểu mẫu và quy trình đã dùng — để việc học không bay hơi sau một tuần." },
];

export default function DaoTaoDoanhNghiepClient() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: RESOURCE_CSS }} />
      <div className="rsc">
        <div className="top"><div className="wrap">
          <Link href="/" className="brand">Hà Bùi Academy<small>Học viện Quản trị &amp; Kỹ năng thiết yếu</small></Link>
          <Link href="/" className="back">← Trang chủ</Link>
        </div></div>

        <div className="wrap">
          <div className="head">
            <span className="eyebrow">Đào tạo doanh nghiệp</span>
            <h1>Đào tạo nội bộ cho doanh nghiệp lớn và SME</h1>
            <p className="lead">
              Hai nhóm nội dung: <b>kỹ năng văn phòng</b> cho đội ngũ nhân viên, và <b>nhóm năng lực quản trị</b>
              cho quản lý các cấp. Thiết kế riêng theo bối cảnh của doanh nghiệp bạn, không dùng giáo trình đóng gói sẵn.
            </p>
          </div>

          <div className="body">
            <div className="card">
              <p className="intro">
                Tôi đã đào tạo trong doanh nghiệp <b>15 năm</b> — ở Vingroup, FPT Telecom, TokyoLife — với hơn
                <b> 10.000 học viên</b>, <b>350+ chương trình</b> và <b>1.000+ lớp</b>. Nhưng điều tôi nghĩ đáng giá hơn
                với bạn là: <b>đến giờ tôi vẫn đang trực tiếp quản lý nhân sự mỗi ngày.</b>
              </p>
              <p className="intro" style={{ marginTop: 12 }}>
                Nghĩa là những gì tôi mang vào lớp không phải lý thuyết của người đã rời trận địa mười năm trước.
                Đó là thứ tôi đang dùng, đang sai, và đang sửa — cùng lúc với chính đội ngũ của bạn.
              </p>
            </div>

            <div className="card">
              <div className="ctitle"><span className="ic">💼</span> Nhóm 1 — Kỹ năng văn phòng</div>
              <p className="csub">Cho nhân viên và chuyên viên. Thứ ai cũng tưởng biết rồi, nhưng va vào việc thật là vỡ.</p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 10 }}>
                {OFFICE_SKILLS.map((t, i) => (
                  <li key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 11, fontSize: 15.2, alignItems: "start" }}>
                    <span style={{ color: "#0C6070", fontWeight: 800 }}>✓</span><span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <div className="ctitle"><span className="ic">🎯</span> Nhóm 2 — Năng lực quản trị</div>
              <p className="csub">Cho quản lý cấp trung, trưởng nhóm, và quản lý mới lên.</p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 10 }}>
                {MANAGEMENT_SKILLS.map((t, i) => (
                  <li key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 11, fontSize: 15.2, alignItems: "start" }}>
                    <span style={{ color: "#A9741A", fontWeight: 800 }}>✓</span><span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <div className="ctitle"><span className="ic">🧭</span> Cách tôi làm việc</div>
              <ul style={{ listStyle: "none", margin: "14px 0 0", padding: 0, display: "grid", gap: 16 }}>
                {HOW.map((h) => (
                  <li key={h.step} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 13, alignItems: "start" }}>
                    <span style={{ fontFamily: "ui-monospace,monospace", fontSize: 12, fontWeight: 800, color: "#A9741A", background: "#F6EAD1", border: "1px solid #E7CE9C", width: 26, height: 26, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{h.step}</span>
                    <span>
                      <b style={{ fontSize: 15.5 }}>{h.title}</b>
                      <div style={{ color: "#6E6455", fontSize: 14.6, marginTop: 3 }}>{h.desc}</div>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <div className="ctitle"><span className="ic">🏢</span> Phù hợp với</div>
              <ul style={{ listStyle: "none", margin: "14px 0 0", padding: 0, display: "grid", gap: 14 }}>
                <li>
                  <b style={{ fontSize: 15.5 }}>Doanh nghiệp lớn</b>
                  <div style={{ color: "#6E6455", fontSize: 14.6, marginTop: 3 }}>Cần chuẩn hoá năng lực theo cấp bậc, đào tạo nội bộ quy mô, hoặc bổ sung mảng quản trị mà đội L&amp;D chưa phủ hết.</div>
                </li>
                <li>
                  <b style={{ fontSize: 15.5 }}>Doanh nghiệp SME</b>
                  <div style={{ color: "#6E6455", fontSize: 14.6, marginTop: 3 }}>Đội ngũ mỏng, quản lý đi lên từ chuyên môn và chưa ai chỉ cho cách dẫn người. Đây thường là chỗ tắc lớn nhất khi công ty muốn lớn thêm.</div>
                </li>
              </ul>
            </div>

            <div className="ctaband">
              <h3>Nhận đề xuất chương trình cho đội ngũ của bạn</h3>
              <p>
                Nói cho tôi biết đội ngũ đang vướng ở đâu và quy mô bao nhiêu người — tôi gửi lại đề xuất nội dung,
                thời lượng và báo giá phù hợp. Chưa cần cam kết gì ở bước này.
              </p>
              <a className="btn" href={siteConfig.socials.zalo} target="_blank" rel="noopener noreferrer">
                Trao đổi về chương trình đào tạo
              </a>
              <p style={{ color: "#9A8F7D", fontSize: 12.5, marginTop: 12, marginBottom: 0 }}>
                Hoặc nhắn qua{" "}
                <a href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" style={{ color: "#E4A93A" }}>Facebook</a>.
              </p>
            </div>
          </div>
        </div>

        <footer>Hà Bùi Academy · <Link href="/">buithuha.com</Link></footer>
      </div>
    </>
  );
}
