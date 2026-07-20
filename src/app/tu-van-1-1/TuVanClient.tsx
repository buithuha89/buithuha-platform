"use client";

import Link from "next/link";
import { RESOURCE_CSS } from "@/components/resource/resourceCss";
import { siteConfig } from "@/lib/site-config";

const FOR_WHOM = [
  {
    icon: "🎓",
    who: "Sinh viên mới ra trường",
    pain: "Bạn có bằng, có vài kỳ thực tập, nhưng không biết mình thật sự hợp việc gì. Rải hồ sơ khắp nơi rồi nhận im lặng, và bắt đầu nghi ngờ chính mình.",
  },
  {
    icon: "📚",
    who: "Người làm L&D mới vào nghề",
    pain: "Bạn được giao tổ chức đào tạo, nhưng chưa ai chỉ cho bạn L&D thật sự làm gì ngoài việc đặt lịch và mời giảng viên. Bạn muốn đi sâu mà chưa biết đi hướng nào.",
  },
  {
    icon: "👔",
    who: "Quản lý mới lên",
    pain: "Hôm qua bạn còn làm chuyên môn giỏi nhất phòng. Hôm nay phải lo cho cả đội, kẹp giữa sếp và nhân viên — và không ai dạy bạn phần này.",
  },
];

const WHAT = [
  "Nhìn lại thật rõ bạn đang có gì: năng lực nào là thế mạnh thật, cái nào bạn tưởng là mạnh",
  "Chọn hướng đi phù hợp với con người bạn, không phải hướng đang được khen nhiều nhất",
  "Vạch lộ trình cụ thể theo mốc thời gian — học gì, làm gì, chứng minh bằng gì",
  "Gỡ những tình huống bạn đang vướng: phỏng vấn, thương lượng, va chạm với sếp hoặc nhân viên",
  "Kèm cặp tiếp khi bạn bắt tay vào làm và gặp chuyện ngoài kịch bản",
];

export default function TuVanClient() {
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
            <span className="eyebrow">Tư vấn 1-1</span>
            <h1>Tư vấn nghề nghiệp &amp; kèm cặp lộ trình phát triển</h1>
            <p className="lead">
              Dành cho người đang ở khúc quanh: mới ra trường, mới vào nghề L&amp;D, hoặc vừa được giao đội nhóm
              lần đầu. Ngồi xuống cùng nhau, nhìn cho rõ, rồi đi từng bước.
            </p>
          </div>

          <div className="body">
            <div className="card">
              <p className="intro">
                Tôi làm đào tạo <b>15 năm</b> và đến giờ vẫn <b>đang trực tiếp quản lý nhân sự mỗi ngày</b>. Nghĩa là
                tôi ngồi ở cả hai phía của cái bàn: phía người tuyển và đánh giá, lẫn phía người đang loay hoay tìm
                đường như bạn từng loay hoay.
              </p>
              <p className="intro" style={{ marginTop: 12 }}>
                Tôi không hứa đổi đời sau một buổi nói chuyện. Cái tôi làm được là giúp bạn thấy rõ mình đang đứng ở
                đâu, bỏ bớt những hướng không hợp, và có một lộ trình đủ cụ thể để bắt đầu ngay tuần này.
              </p>
            </div>

            <div className="card">
              <div className="ctitle"><span className="ic">👥</span> Tôi đồng hành với ba nhóm</div>
              <ul style={{ listStyle: "none", margin: "14px 0 0", padding: 0, display: "grid", gap: 16 }}>
                {FOR_WHOM.map((f, i) => (
                  <li key={i}>
                    <b style={{ fontSize: 15.5 }}>{f.icon} {f.who}</b>
                    <div style={{ color: "#6E6455", fontSize: 14.6, marginTop: 4 }}>{f.pain}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <div className="ctitle"><span className="ic">🧭</span> Buổi tư vấn giúp bạn</div>
              <ul style={{ listStyle: "none", margin: "14px 0 0", padding: 0, display: "grid", gap: 10 }}>
                {WHAT.map((t, i) => (
                  <li key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 11, fontSize: 15.2, alignItems: "start" }}>
                    <span style={{ color: "#0C6070", fontWeight: 800 }}>✓</span><span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <div className="purpose" style={{ marginBottom: 0 }}>
                <b>Nói trước cho thẳng:</b> tôi chưa qua chứng chỉ coach quốc tế và không tự nhận là coach. Tôi là
                người làm nghề, đang quản lý thật, và chia sẻ lại đúng những gì tôi dùng được. Nếu bạn cần một coach
                được chứng nhận theo chuẩn quốc tế thì tôi không phải người phù hợp — và tôi nói điều đó ngay từ đầu.
              </div>
            </div>

            <div className="ctaband">
              <h3>Đặt lịch một buổi trao đổi</h3>
              <p>
                Nhắn cho tôi bạn đang ở đâu và đang mắc chuyện gì. Tôi sẽ nói rõ tôi có giúp được không, buổi tư vấn
                sẽ diễn ra thế nào và chi phí bao nhiêu — trước khi bạn quyết định.
              </p>
              <a className="btn" href={siteConfig.socials.zalo} target="_blank" rel="noopener noreferrer">
                Nhắn để đặt lịch trao đổi
              </a>
              <p style={{ color: "#9A8F7D", fontSize: 12.5, marginTop: 12, marginBottom: 0 }}>
                Hoặc nhắn qua{" "}
                <a href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" style={{ color: "#E4A93A" }}>Facebook</a>.
                Chưa sẵn sàng? Làm thử{" "}
                <Link href="/trac-nghiem" style={{ color: "#E4A93A" }}>bài trắc nghiệm</Link> trước cũng được.
              </p>
            </div>
          </div>
        </div>

        <footer>Hà Bùi Academy · <Link href="/">buithuha.com</Link></footer>
      </div>
    </>
  );
}
