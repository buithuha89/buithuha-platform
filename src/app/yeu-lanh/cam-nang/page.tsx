import type { Metadata } from "next";
import Link from "next/link";
import { RESOURCE_CSS } from "@/components/resource/resourceCss";

export const metadata: Metadata = {
  title: "Cẩm nang 7 ngày gọi tên — Yêu lành · Hà Bùi Academy",
  description:
    "7 ngày, mỗi ngày một bước dưới 5 phút và một câu checkpoint buổi tối — để bạn gọi tên điều mình đang trải qua trong tình yêu, và bắt đầu lấy lại chính mình. Miễn phí, làm một mình được.",
  alternates: { canonical: "https://buithuha.com/yeu-lanh/cam-nang" },
  openGraph: {
    title: "Cẩm nang 7 ngày gọi tên — Yêu lành",
    description: "Mỗi ngày một bước nhỏ dưới 5 phút + một câu checkpoint buổi tối. Miễn phí.",
    type: "website",
    url: "https://buithuha.com/yeu-lanh/cam-nang",
  },
};

const DAYS = [
  {
    day: 1,
    title: "Gọi tên",
    step: "Viết 3 câu bắt đầu bằng “Tôi đang cảm thấy…”. Không phân tích, không sửa chữ, không tự phán xét — chỉ gọi tên. Trống rỗng, tủi, mệt, tê — chữ nào đúng thì dùng chữ đó.",
    checkpoint: "Hôm nay mình gọi tên được cảm xúc nào? Cảm xúc nào khó gọi tên nhất?",
  },
  {
    day: 2,
    title: "Kiểm kê",
    step: "Liệt kê 3 điều bạn đã thôi làm từ khi vào mối quan hệ này — một sở thích, một thói quen, một mối quan hệ bạn bè. Chỉ liệt kê, chưa cần làm gì cả.",
    checkpoint: "Trong 3 điều đó, điều nào mình nhớ nhất khi viết ra?",
  },
  {
    day: 3,
    title: "Một nhu cầu chưa nói",
    step: "Viết ra (chưa cần nói với ai) một nhu cầu bạn đã nén lâu nhất, theo công thức: “Khi… tôi cảm thấy… vì tôi cần…”.",
    checkpoint: "Đọc lại câu vừa viết: nếu bạn thân mình nói câu này với người yêu cô ấy, mình có nghĩ cô ấy đòi hỏi quá không?",
  },
  {
    day: 4,
    title: "Nói ra — với người an toàn trước",
    step: "Nói câu của Ngày 3 (hoặc kể chuyện của bạn) với một người an toàn: bạn thân, chị em ruột — chưa phải người yêu. Mục tiêu hôm nay là tập nghe chính mình nói ra thành lời.",
    checkpoint: "Sau khi nói ra, cảm giác trong người mình là gì — nhẹ hơn, sợ hơn, hay lẫn cả hai?",
  },
  {
    day: 5,
    title: "Một ranh giới nhỏ",
    step: "Chọn một ranh giới nhỏ nhất bạn tin mình giữ được hôm nay: một buổi tối cho riêng mình, không hủy hẹn đã có vì kế hoạch phút chót của người khác, dừng một cuộc nói chuyện đang làm mình tổn thương.",
    checkpoint: "Mình giữ được không? Lúc suýt buông, điều gì kéo mình lại — hay điều gì làm mình buông?",
  },
  {
    day: 6,
    title: "Lấy lại một điều",
    step: "Làm lại một điều trong danh sách Ngày 2 — điều nhỏ nhất. Nghe lại bản nhạc cũ, nhắn cho người bạn lâu không gặp, quay lại một thói quen từng làm bạn vui.",
    checkpoint: "Cảm giác lúc làm có giống gặp lại một người quen cũ không? Người quen đó — chính là mình.",
  },
  {
    day: 7,
    title: "Nhìn lại",
    step: "Đọc lại toàn bộ những gì bạn viết trong 6 ngày qua. Rồi viết một câu cuối — cho chính bạn của hôm nay. Bất kỳ câu gì bạn cần nghe nhất.",
    checkpoint: "Bước tiếp theo nhỏ nhất của mình là gì? (Chỉ cần một bước — hướng đi quan trọng hơn tốc độ.)",
  },
];

export default function CamNang7NgayPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: RESOURCE_CSS }} />
      <div className="rsc">
        <div className="top"><div className="wrap">
          <Link href="/" className="brand">Hà Bùi Academy<small>Học viện Quản trị &amp; Kỹ năng thiết yếu</small></Link>
          <Link href="/yeu-lanh" className="back">← Chủ đề Yêu lành</Link>
        </div></div>

        <div className="wrap">
          <div className="head">
            <span className="eyebrow">Cẩm nang miễn phí · 7 ngày</span>
            <h1>7 ngày gọi tên</h1>
            <p className="lead">
              Dành cho bạn — người đang yêu hết lòng mà vẫn thấy mình không được ưu tiên, đang tự hỏi mình có
              đòi hỏi quá không. Mỗi ngày một bước dưới 5 phút, kèm một câu checkpoint buổi tối. Không cần kể
              với ai, không cần quyết định điều gì to tát. Chỉ cần một cuốn sổ, hoặc phần ghi chú trong điện thoại.
            </p>
          </div>

          <div className="body">
            <div className="card">
              <div className="ctitle"><span className="ic">🧭</span> Cách dùng cẩm nang này</div>
              <ol className="fields" style={{ marginTop: 14 }}>
                <li>Mỗi ngày chỉ làm đúng một bước — đừng làm dồn. Bước nhỏ đến mức không thể thất bại là chủ ý, không phải thiếu sót.</li>
                <li>Buổi tối, trả lời câu checkpoint bằng một dòng. Một dòng là đủ.</li>
                <li>Nếu lỡ một ngày, làm tiếp vào hôm sau — không cần làm lại từ đầu, không cần tự trách.</li>
              </ol>
              <div className="howto">
                <b>Vì sao bước phải nhỏ?</b> Người đang mệt không thiếu ý chí — chỉ đang cạn động lực. Mô hình Tiny
                Habits của BJ Fogg (Đại học Stanford) chỉ ra: khi động lực thấp, cách duy nhất để hành động vẫn xảy
                ra là hạ độ khó xuống thật thấp. Cẩm nang này được thiết kế đúng theo nguyên tắc đó.
              </div>
            </div>

            {DAYS.map((d) => (
              <div className="card" key={d.day}>
                <div className="ctitle"><span className="qnum">NGÀY {d.day}</span> — {d.title}</div>
                <p style={{ fontSize: 15.3, lineHeight: 1.75, color: "var(--ink)", margin: "12px 0 0" }}>{d.step}</p>
                <div className="howto"><b>Checkpoint buổi tối:</b> {d.checkpoint}</div>
              </div>
            ))}

            <div className="card">
              <div className="ctitle"><span className="ic">🌱</span> Sau Ngày 7 thì sao?</div>
              <p style={{ fontSize: 15.3, lineHeight: 1.75, color: "var(--muted)", margin: "12px 0 0" }}>
                Bảy ngày không thay đổi một mối quan hệ — nhưng nó thay đổi vị trí của bạn trong đó: từ người trôi
                tự động thành người quan sát được mình. Nếu bạn muốn đi tiếp, sáu bài chia sẻ trong chủ đề Yêu lành
                là bản đồ đầy đủ hơn: từ gọi tên cơ chế, phân biệt nhu cầu và đòi hỏi, dựng ranh giới, đến hình dung
                rõ thế nào là yêu mà vẫn giữ được chính mình.
              </p>
            </div>

            <div className="ctaband">
              <h3>Bạn không cần đi một mình</h3>
              <p>
                Tạo tài khoản miễn phí để nhận trọn bộ cẩm nang của Hà Bùi Academy và tham gia cộng đồng — nơi bạn
                có thể chia sẻ checkpoint mỗi ngày, ẩn danh hay hiện danh tùy bạn, cùng những người đồng cảnh ngộ.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
                <Link className="btn" href="/register">Tạo tài khoản miễn phí</Link>
                <Link className="btn" href="/yeu-lanh"
                  style={{ background: "transparent", color: "#EAF5EF", boxShadow: "none", border: "1px solid #4A5A50" }}>
                  Đọc 6 bài của chủ đề Yêu lành →
                </Link>
              </div>
            </div>
          </div>

          <footer>
            <Link href="/yeu-lanh">← Về chủ đề Yêu lành</Link> · <Link href="/">Trang chủ</Link>
          </footer>
        </div>
      </div>
    </>
  );
}
