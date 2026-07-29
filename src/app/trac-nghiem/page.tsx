import type { Metadata } from "next";
import TracNghiemClient from "./TracNghiemClient";

export const metadata: Metadata = {
  title: "Trắc nghiệm: Bạn là quản lý ôm hết việc, hay biết dẫn dắt? | Hà Bùi Academy",
  description:
    "Bài tự chẩn đoán 2 phút cho chủ doanh nghiệp & quản lý: bạn đang ôm hết mọi việc, hay đã biết dẫn dắt để đội tự chạy? 12 câu, nhận kết quả + gợi ý lộ trình riêng.",
  alternates: { canonical: "https://buithuha.com/trac-nghiem" },
  openGraph: {
    title: "Bạn là quản lý ôm hết việc, hay biết dẫn dắt?",
    description:
      "Bài tự chẩn đoán 2 phút: bạn là nút thắt của doanh nghiệp, hay người dẫn dắt để đội tự chạy?",
    type: "website",
    url: "https://buithuha.com/trac-nghiem",
  },
};

export default function Page() {
  return <TracNghiemClient />;
}
