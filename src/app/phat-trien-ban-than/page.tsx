import type { Metadata } from "next";
import SiloPage, { type SiloData } from "@/components/silo/SiloPage";

export const metadata: Metadata = {
  title: "Phát triển bản thân — Hà Bùi Academy",
  description:
    "Chia sẻ của Hà về tự nhận thức, lập kế hoạch cá nhân, hiểu mình muốn gì. Cách tôi tự ngồi xuống với bản thân nhiều năm qua.",
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
  color: "var(--cat-lime)",
  title: "Phát triển bản thân",
  subtitle: "Hiểu mình rồi mới biết đi đâu",
  intro:
    "Tôi gặp nhiều người đi làm 5, 7, 10 năm vẫn loay hoay không biết mình muốn gì. Không phải vì họ lười — họ chưa có thời gian ngồi xuống với chính mình. Ở đây tôi chia sẻ những cách tôi đã dùng cho bản thân và cho học viên.",
  story: {
    heading: "Mình chưa biết mình muốn gì, không ai giúp được",
    paragraphs: [
      "Có giai đoạn tôi đi học MBA, đi làm quản lý, đi đào tạo — bên ngoài mọi thứ đều ổn. Nhưng bên trong, tôi không trả lời được câu đơn giản: \"Tôi thật sự muốn gì?\"",
      "Mọi người hay đợi đến lúc kiệt sức mới ngồi nhìn lại. Lúc đó muộn rồi. Tôi thấy việc tự nhìn vào bản thân nên là việc làm hàng ngày, không phải cứu hỏa lúc khủng hoảng.",
      "Trong chủ đề này tôi chia sẻ những công cụ thực dụng — không thiền cao siêu, không journaling chung chung. Chỉ là những câu hỏi cụ thể, bài tập cụ thể, mà tôi đã dùng cho bản thân.",
    ],
  },
  cost: {
    heading: "Đứng yên không miễn phí",
    paragraphs: [
      "Bận rộn mà không có hướng nhìn giống đang tiến — cho đến khi nhìn lại. Một năm đi qua với đầy việc, mà câu “tôi thật sự muốn gì?” vẫn nằm nguyên chỗ cũ. Cái giá không phải là những gì bạn làm sai, mà là những lựa chọn bạn chưa bao giờ đặt lên bàn — vì chưa từng ngồi xuống với chính mình.",
      "Và có một thứ hao hụt lặng lẽ hơn: cảm giác bạn còn điều khiển được đời mình. Mỗi năm trôi theo quán tính, niềm tin đó mòn đi một chút — đến lúc kiệt quệ mới ngồi nhìn lại thì mọi thứ khó hơn nhiều so với bắt đầu từ hôm nay.",
    ],
    question: "Nếu một năm nữa bạn vẫn bận y như bây giờ, và vẫn chưa trả lời được “mình thật sự muốn gì” — bạn có chấp nhận được không?",
  },
  topics: [
    { icon: "Compass", title: "7 câu hỏi tự nhìn vào bản thân", desc: "Bộ câu hỏi tôi dùng nhiều nhất — cho bản thân và cho học viên. Có trong cẩm nang miễn phí." },
    { icon: "Target", title: "Lập kế hoạch năm — cách tôi làm", desc: "Không phải SMART goals khô khan. Cách tôi lập kế hoạch năm có cả phần lý trí lẫn phần mong muốn." },
    { icon: "NotebookPen", title: "Viết để hiểu mình", desc: "Tôi viết tay mỗi sáng nhiều năm nay. Chia sẻ tại sao và bắt đầu thế nào nếu bạn chưa từng viết." },
    { icon: "BookOpen", title: "Sách tôi đọc đi đọc lại", desc: "Một danh sách nhỏ — không phải bestseller, không phải tiếng Anh chỉ. Chỉ là sách thật sự đã thay đổi tôi." },
    { icon: "RefreshCw", title: "Review cuộc sống mỗi quý", desc: "Bản đồ 4 góc tôi dùng để check mỗi 3 tháng: sự nghiệp / quan hệ / sức khỏe / bản thân." },
    { icon: "Sparkles", title: "Khi 30 tuổi mà chưa rõ mình muốn gì", desc: "Không phải khủng hoảng — là dấu hiệu bạn đã đủ trưởng thành để đặt câu hỏi đúng." },
  ],
  audience: [
    "Bạn đi làm vài năm rồi mà nhìn lại thấy mình đứng yên một chỗ",
    "Bạn muốn lập kế hoạch nghiêm túc cho năm tới, không phải resolution \"tập gym, đọc 50 cuốn sách\"",
    "Bạn cảm thấy bận rộn mà không thấy ý nghĩa",
    "Bạn muốn bắt đầu thói quen tự nhìn lại, mà chưa biết bắt đầu từ đâu",
  ],
  cta: {
    heading: "Bắt đầu từ 7 câu hỏi",
    body: "Cẩm nang miễn phí \"7 câu hỏi tự nhìn vào bản thân\" — chính là bộ câu hỏi đầu tiên tôi đưa cho ai muốn bắt đầu hành trình hiểu mình.",
  },
};

export default function SanPhamSoPage() {
  return <SiloPage data={data} />;
}
