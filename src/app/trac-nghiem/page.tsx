import type { Metadata } from "next";
import TracNghiemClient from "./TracNghiemClient";

export const metadata: Metadata = {
  title: "Trắc nghiệm: Đâu là lỗ hổng khiến bạn đuối sức nơi công sở? | Hà Bùi Academy",
  description:
    "Bài tự soi 2 phút cho người đi làm: đâu là kỹ năng công sở bạn đang hụt nhất — nhận sai, giữ ranh giới, nói “không”, giữ năng lượng hay san sẻ việc? 15 câu, ra ngay lỗ hổng lớn nhất + cuốn nên đọc.",
  alternates: { canonical: "https://buithuha.com/trac-nghiem" },
  openGraph: {
    title: "Đâu là lỗ hổng khiến bạn đuối sức nơi công sở?",
    description:
      "Bài tự soi 2 phút: 5 kỹ năng sinh tồn công sở của bạn đang ở đâu, và lỗ hổng lớn nhất cần vá là gì?",
    type: "website",
    url: "https://buithuha.com/trac-nghiem",
  },
};

export default function Page() {
  return <TracNghiemClient />;
}
