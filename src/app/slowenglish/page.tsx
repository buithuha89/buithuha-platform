import type { Metadata } from "next";
import SiloPage, { type SiloData } from "@/components/silo/SiloPage";
import { BookOpen, BarChart3, GraduationCap, ClipboardCheck, Wrench, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Nghề L&D — Hà Bùi Academy",
  description:
    "Chia sẻ của chị Hà về nghề Học & Phát triển trong doanh nghiệp. Cho người làm L&D, HR, hoặc Trainer muốn nâng cấp tay nghề từ người trong nghề.",
  alternates: { canonical: "https://buithuha.com/slowenglish" },
  openGraph: {
    title: "Nghề L&D — Hà Bùi Academy",
    description:
      "Học & Phát triển — góc nhìn người trong nghề. Chia sẻ thật từ chị Bùi Hà sau nhiều năm làm đào tạo doanh nghiệp.",
    type: "website",
    url: "https://buithuha.com/slowenglish",
  },
};

const data: SiloData = {
  slug: "nghe-l-and-d",
  num: 3,
  color: "#FBBF24",
  title: "Nghề L&D",
  subtitle: "Cho người làm Học & Phát triển trong doanh nghiệp",
  intro:
    "Chị làm L&D đã nhiều năm. Đây là một nghề rất riêng — không phải HR, không hẳn là trainer, cũng không phải tư vấn. Chị viết chủ đề này cho những người đang làm L&D / HR / Trainer muốn hiểu nghề sâu hơn.",
  story: {
    heading: "L&D không phải là \"tổ chức đào tạo\"",
    paragraphs: [
      "Nhiều công ty nghĩ L&D nghĩa là \"tổ chức khóa học cho nhân viên\". Đặt agenda, mời giảng viên, lên zoom, đánh giá 5 sao — xong. Nhưng đó chỉ là 10% nghề L&D.",
      "L&D thật sự là thiết kế cách một người (và cả tổ chức) học và phát triển. Là biết khi nào nên đào tạo, khi nào nên coaching, khi nào để người ta tự học. Là biết đào tạo có hiệu quả không — không phải bằng survey \"bạn có hài lòng không\".",
      "Chị chia sẻ ở đây những gì chị đã học được — từ việc làm sai, làm lại, và quan sát những L&D giỏi trong và ngoài Việt Nam.",
    ],
  },
  topics: [
    {
      icon: BookOpen,
      title: "L&D khác đào tạo nội bộ chỗ nào",
      desc: "Phân biệt rõ vai trò — và tại sao nhầm lẫn này khiến nhiều người làm L&D bị burnout.",
    },
    {
      icon: BarChart3,
      title: "Đo hiệu quả đào tạo",
      desc: "Không phải 4 levels của Kirkpatrick lý thuyết. Cách chị thực sự đo trong dự án nhỏ và lớn.",
    },
    {
      icon: GraduationCap,
      title: "Trainer giỏi và trainer hot khác nhau ở đâu",
      desc: "Có trainer rất hot trên Facebook mà học viên học xong không đổi gì. Có trainer thầm lặng mà tạo chuyển hóa thật.",
    },
    {
      icon: ClipboardCheck,
      title: "Thiết kế chương trình từ con số 0",
      desc: "Khi sếp giao bạn \"làm chương trình lãnh đạo cho team\" mà chưa có gì sẵn — bắt đầu từ đâu.",
    },
    {
      icon: Wrench,
      title: "Công cụ chị dùng hàng ngày",
      desc: "Không phải LMS đắt tiền. Chỉ là vài công cụ đơn giản chị đã dùng nhiều năm để làm việc hiệu quả.",
    },
    {
      icon: Users,
      title: "Khi học viên không học",
      desc: "Học viên đăng ký mà không vào học, hoặc học mà không áp dụng — vấn đề thường không phải ở học viên.",
    },
  ],
  audience: [
    "Bạn đang làm L&D / HR Training trong doanh nghiệp, muốn nâng cấp tay nghề",
    "Bạn là trainer freelance, muốn hiểu sâu hơn về thiết kế chương trình",
    "Bạn là quản lý cấp trung, được giao trách nhiệm phát triển team",
    "Bạn đang muốn chuyển sang nghề L&D nhưng chưa biết nghề này thật sự là gì",
  ],
  cta: {
    heading: "Bắt đầu từ cẩm nang miễn phí",
    body: "Cẩm nang \"7 câu hỏi tự nhìn vào bản thân\" — phù hợp cả khi bạn muốn nhìn lại chính nghề của mình.",
  },
};

export default function SlowEnglishPage() {
  return <SiloPage data={data} />;
}
