import type { Metadata } from "next";
import SiloPage, { type SiloData } from "@/components/silo/SiloPage";

export const metadata: Metadata = {
  title: "Phát triển bản thân — Hà Bùi Academy",
  description:
    "Chia sẻ của Hà về tự nhận thức, lập kế hoạch cá nhân, hiểu mình muốn gì. Cách mình tự ngồi xuống với bản thân nhiều năm qua.",
  alternates: { canonical: "https://buithuha.com/phat-trien-ban-than" },
  openGraph: {
    title: "Phát triển bản thân — Hà Bùi Academy",
    description:
      "Hiểu mình rồi mới biết đi đâu. Chia sẻ thật từ Bùi Hà về tự nhìn vào bản thân và lập kế hoạch.",
    type: "website",
    url: "https://buithuha.com/phat-trien-ban-than",
  },
};

const data: SiloData = {
  slug: "phat-trien-ban-than",
  num: 2,
  color: "#84CC16",
  title: "Phát triển bản thân",
  subtitle: "Hiểu mình rồi mới biết đi đâu",
  intro:
    "Mình gặp nhiều người đi làm 5, 7, 10 năm vẫn loay hoay không biết mình muốn gì. Không phải vì họ lười — họ chưa có thời gian ngồi xuống với chính mình. Ở đây mình chia sẻ những cách mình đã dùng cho bản thân và cho học viên.",
  story: {
    heading: "Mình chưa biết mình muốn gì, không ai giúp được",
    paragraphs: [
      "Có giai đoạn mình đi học MBA, đi làm quản lý, đi đào tạo — bên ngoài mọi thứ đều ổn. Nhưng bên trong, mình không trả lời được câu đơn giản: \"Mình thật sự muốn gì?\"",
      "Mọi người hay đợi đến lúc kiệt sức mới ngồi nhìn lại. Lúc đó muộn rồi. Mình thấy việc tự nhìn vào bản thân nên là việc làm hàng ngày, không phải cứu hỏa lúc khủng hoảng.",
      "Trong chủ đề này mình chia sẻ những công cụ thực dụng — không thiền cao siêu, không journaling chung chung. Chỉ là những câu hỏi cụ thể, bài tập cụ thể, mà mình đã dùng cho chính mình.",
    ],
  },
  topics: [
    { icon: "Compass", title: "7 câu hỏi tự nhìn vào bản thân", desc: "Bộ câu hỏi mình dùng nhiều nhất — cho mình và cho học viên. Có trong cẩm nang miễn phí." },
    { icon: "Target", title: "Lập kế hoạch năm — cách mình làm", desc: "Không phải SMART goals khô khan. Cách mình lập kế hoạch năm có cả phần lý trí lẫn phần mong muốn." },
    { icon: "NotebookPen", title: "Viết để hiểu mình", desc: "Mình viết tay mỗi sáng nhiều năm nay. Chia sẻ tại sao và bắt đầu thế nào nếu anh/chị chưa từng viết." },
    { icon: "BookOpen", title: "Sách mình đọc đi đọc lại", desc: "Một danh sách nhỏ — không phải bestseller, không phải tiếng Anh chỉ. Chỉ là sách thật sự đã thay đổi mình." },
    { icon: "RefreshCw", title: "Review cuộc sống mỗi quý", desc: "Bản đồ 4 góc mình dùng để check mỗi 3 tháng: sự nghiệp / quan hệ / sức khỏe / bản thân." },
    { icon: "Sparkles", title: "Khi 30 tuổi mà chưa rõ mình muốn gì", desc: "Không phải khủng hoảng — là dấu hiệu anh/chị đã đủ trưởng thành để đặt câu hỏi đúng." },
  ],
  audience: [
    "Anh/chị đi làm vài năm rồi mà nhìn lại thấy mình đứng yên một chỗ",
    "Anh/chị muốn lập kế hoạch nghiêm túc cho năm tới, không phải resolution \"tập gym, đọc 50 cuốn sách\"",
    "Anh/chị cảm thấy bận rộn mà không thấy ý nghĩa",
    "Anh/chị muốn bắt đầu thói quen tự nhìn lại, mà chưa biết bắt đầu từ đâu",
  ],
  cta: {
    heading: "Bắt đầu từ 7 câu hỏi",
    body: "Cẩm nang miễn phí \"7 câu hỏi tự nhìn vào bản thân\" — chính là bộ câu hỏi đầu tiên mình đưa cho ai muốn bắt đầu hành trình hiểu mình.",
  },
};

export default function SanPhamSoPage() {
  return <SiloPage data={data} />;
}
