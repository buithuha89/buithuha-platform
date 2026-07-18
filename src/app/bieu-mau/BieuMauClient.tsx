"use client";

import Link from "next/link";
import { RESOURCE_CSS } from "@/components/resource/resourceCss";
import LeadCTA from "@/components/resource/LeadCTA";

const FORMS = [
  {
    id: "giao-viec-uy-quyen", icon: "📋", title: "Biểu mẫu Giao việc & Uỷ quyền",
    purpose: "Giao việc một lần cho rõ để không phải giải thích lại ba lần, và không bị việc dội ngược về mình. Ép người giao phải nói rõ “xong nghĩa là gì” và trao đúng mức quyền để nhân viên tự chạy — đây là công cụ để thoát vòng lặp ôm việc.",
    fields: [
      "Việc cần giao (mô tả cụ thể trong 1 dòng, tránh nói chung chung)",
      "Lý do & bối cảnh (vì sao việc này cần làm, gắn với mục tiêu gì)",
      "Kết quả kỳ vọng — định nghĩa “xong” (tiêu chí nghiệm thu đo được, không phải “làm cho tốt”)",
      "Người chịu trách nhiệm chính (1 tên duy nhất, không giao cho “cả nhóm”)",
      "Hạn hoàn thành + mốc check-in giữa kỳ",
      "Mức uỷ quyền (1: làm rồi hỏi ý trước khi thực hiện → 5: toàn quyền quyết, chỉ báo kết quả)",
      "Nguồn lực & quyền hạn được cấp (ngân sách, người hỗ trợ, quyền truy cập)",
      "Ranh giới PHẢI hỏi mình trước (việc gì không được tự quyết)",
      "Cách & tần suất báo cáo tiến độ (kênh, khi nào)",
    ],
    howToUse: "Điền cùng nhân viên trong 10 phút khi giao việc, cho họ nhắc lại phần “định nghĩa xong” và “mức uỷ quyền” để chắc chắn hai bên hiểu giống nhau. Giữ lại bản này làm mốc đối chiếu khi nghiệm thu, thay vì tranh cãi cảm tính lúc bàn giao.",
  },
  {
    id: "khung-nang-luc-vi-tri", icon: "🎯", title: "Khung năng lực theo vị trí",
    purpose: "Chuẩn hoá “giỏi việc này nghĩa là gì” bằng hành vi quan sát được, để tuyển – đánh giá – đào tạo cùng dùng chung một thước. Hết cảnh mỗi người chấm một kiểu và không biết đào tạo cái gì cho ai.",
    fields: [
      "Nhóm năng lực (Chuyên môn / Kỹ năng quản lý / Thái độ – giá trị)",
      "Tên năng lực cụ thể (vd: Giao việc & uỷ quyền, Phản hồi, Xử lý số liệu)",
      "Định nghĩa bằng hành vi quan sát được (không dùng tính từ chung như “chủ động”, “nhiệt tình”)",
      "Mức yêu cầu của vị trí (1: Nhận biết – 2: Làm được – 3: Thành thạo – 4: Dẫn dắt/đào tạo lại)",
      "Biểu hiện ở từng mức (mô tả người ở mức 2 làm gì khác người ở mức 3)",
      "Cách đo / bằng chứng (đánh giá qua sản phẩm thật, quan sát tại việc, hay tình huống giả định)",
      "Mức ưu tiên (Bắt buộc / Quan trọng / Điểm cộng)",
      "Nguồn phát triển tương ứng (khoá học, kèm 1-1, hay giao việc thực chiến để lên mức)",
    ],
    howToUse: "Với mỗi vị trí, chọn 6–8 năng lực cốt lõi thôi — đừng liệt kê 20 dòng cho đẹp rồi không ai dùng. Bản này là gốc để ra đề phỏng vấn tuyển, ra tiêu chí ở Phiếu đánh giá, và ra lộ trình đào tạo; sửa lại định nghĩa hành vi mỗi khi thấy nó chấm ra kết quả lệch thực tế.",
  },
  {
    id: "phieu-danh-gia-nhan-vien", icon: "📊", title: "Phiếu đánh giá nhân viên",
    purpose: "Đánh giá dựa trên kết quả cam kết + hành vi theo khung năng lực, có bằng chứng cụ thể, để buổi phản hồi không thành cãi nhau cảm tính. Đây là cơ sở để nói chuyện thẳng mà vẫn giữ được quan hệ.",
    fields: [
      "Thông tin (Họ tên – Vị trí – Kỳ đánh giá – Người đánh giá)",
      "Mục tiêu/chỉ tiêu đã cam kết đầu kỳ",
      "Kết quả thực tế đạt được (kèm số liệu / bằng chứng, không chỉ nhận xét)",
      "Mức hoàn thành (Vượt / Đạt / Gần đạt / Chưa đạt)",
      "Đánh giá theo khung năng lực (đối chiếu hành vi từng năng lực với mức yêu cầu)",
      "Điểm mạnh nổi bật + ví dụ cụ thể đã quan sát",
      "Điểm cần cải thiện + ví dụ + tác động thực tế nó gây ra",
      "Nhân viên tự đánh giá (điền trước buổi họp, để so hai góc nhìn)",
      "Thống nhất hành động kỳ tới (việc – hỗ trợ cần từ quản lý – hạn)",
      "Đề xuất (đào tạo / điều chỉnh vai trò / lương – thăng tiến, nếu có)",
    ],
    howToUse: "Gửi phần tự đánh giá cho nhân viên điền trước 2–3 ngày, mình điền song song, rồi vào họp so chỗ lệch. Mọi nhận xét mạnh–yếu phải kèm ví dụ có thật — nếu không nêu được ví dụ thì bỏ dòng đó ra, vì nó là cảm tính.",
  },
  {
    id: "ke-hoach-onboarding", icon: "🚀", title: "Kế hoạch onboarding theo mô tả công việc",
    purpose: "Gắn từng đầu việc trong bản mô tả công việc với lộ trình 30–60–90 ngày để người mới vào việc nhanh và đúng chuẩn, thay vì thả cho tự bơi rồi 3 tháng sau mới biết làm sai. Giảm gánh cho quản lý vì đã có buddy và cột mốc rõ.",
    fields: [
      "Vị trí & định nghĩa thành công sau 90 ngày (làm được gì thì coi là qua thử việc)",
      "Đầu việc cốt lõi trích từ bản mô tả công việc (chọn 3–5 nhiệm vụ chính, không copy cả bản)",
      "Kiến thức/kỹ năng cần trang bị cho từng đầu việc",
      "Hoạt động onboarding tương ứng (đọc tài liệu → xem người khác làm → làm thử có giám sát → làm thật)",
      "Người phụ trách kèm (buddy/mentor) cho từng phần việc",
      "Cột mốc 30 – 60 – 90 ngày (mục tiêu cụ thể ở mỗi mốc)",
      "Tiêu chí “đã thạo việc” cho mỗi đầu việc (đo được, để biết khi nào buông tay)",
      "Lịch check-in & người đánh giá ở mỗi mốc",
      "Tài khoản/công cụ/quyền truy cập cần cấp ngay ngày đầu",
    ],
    howToUse: "Điền trước ngày người mới đến, gửi họ đọc trong ngày đầu để họ biết 90 ngày tới trông ra sao. Mỗi mốc 30–60–90 ngồi lại 30 phút đối chiếu tiêu chí “đã thạo việc” — đạt thì giao thêm và giảm giám sát, chưa đạt thì tìm đúng chỗ vướng để kèm, đừng để trôi tới hết thử việc.",
  },
  {
    id: "chuan-bi-hop-1-1", icon: "🗣️", title: "Mẫu chuẩn bị họp 1-1",
    purpose: "Biến 1-1 thành cuộc nói chuyện có chất về phát triển và gỡ vướng, không sa thành buổi báo cáo tiến độ. Có chỗ cố định cho những cuộc nói chuyện khó, để phản hồi được nói ra đúng lúc thay vì dồn nén rồi bùng.",
    fields: [
      "Thông tin (Người tham gia – Ngày – Tần suất họp)",
      "Cam kết từ 1-1 lần trước — đã làm tới đâu",
      "Tiến độ & vướng mắc hiện tại (nhân viên nêu trước, ngắn gọn)",
      "Chủ đề nhân viên muốn bàn (để họ chủ động đặt nội dung, không phải mình dẫn hết)",
      "Chủ đề quản lý muốn trao đổi (gồm phản hồi/cuộc nói chuyện khó cần nói thẳng)",
      "Phát triển nghề & mong muốn dài hạn (định kỳ chạm tới, không đợi tới kỳ đánh giá)",
      "Hỗ trợ nhân viên cần từ quản lý (nguồn lực, quyết định đang chờ, gỡ chặn)",
      "Việc chốt sau buổi (ai làm gì – hạn – cần mình hỗ trợ gì)",
    ],
    howToUse: "Cả hai điền phần của mình trước buổi họp; để nhân viên nói phần nội dung của họ trước, mình nghe rồi mới thêm chủ đề của mình. Nếu có điều khó cần nói, viết ra ô “chủ đề quản lý muốn trao đổi” để chắc chắn nói ra chứ không né; kết buổi luôn chốt việc và hạn ở dòng cuối.",
  },
];

export default function BieuMauClient() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: RESOURCE_CSS }} />
      <div className="rsc">
        <div className="top"><div className="wrap">
          <Link href="/" className="brand">Hà Bùi Academy<small>Học viện Quản trị &amp; Kỹ năng thiết yếu</small></Link>
          <Link href="/#he-sinh-thai" className="back">← Hệ sinh thái</Link>
        </div></div>

        <div className="wrap">
          <div className="head">
            <span className="eyebrow">Biểu mẫu & Form</span>
            <h1>5 biểu mẫu quản trị — điền là dùng</h1>
            <p className="lead">Mỗi biểu mẫu ở đây là một khung điền thật: nói rõ dùng để làm gì, gồm những trường nào và cách dùng. Xem cấu trúc ngay bên dưới, và nhận bản chỉnh sửa được (Word/Excel) để dùng cho đội của bạn.</p>
          </div>

          <div className="body">
            {FORMS.map((f) => (
              <div className="card" key={f.id}>
                <div className="ctitle"><span className="ic">{f.icon}</span>{f.title}</div>
                <div className="purpose">{f.purpose}</div>
                <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--faint)", marginBottom: 10 }}>Các trường trong biểu mẫu</div>
                <ol className="fields">
                  {f.fields.map((fld, j) => <li key={j}>{fld}</li>)}
                </ol>
                <div className="howto"><b>Cách dùng:</b> {f.howToUse}</div>
              </div>
            ))}

            <LeadCTA
              title="Nhận bản chỉnh sửa được"
              desc="Tôi gửi bạn trọn bộ 5 biểu mẫu ở bản Word/Excel điền được ngay, để dùng cho đội của bạn — miễn phí."
              btnLabel="Nhận bộ biểu mẫu miễn phí"
              modalTitle="Nhận trọn bộ 5 biểu mẫu"
              modalDesc="Để lại email, tôi gửi bạn bản chỉnh sửa được (Word/Excel) của 5 biểu mẫu này."
              doneMsg="Tôi sẽ gửi bộ biểu mẫu tới email của bạn sớm — nhớ kiểm tra cả mục Spam nhé."
            />
          </div>
        </div>

        <footer>Hà Bùi Academy · <Link href="/">buithuha.com</Link></footer>
      </div>
    </>
  );
}
