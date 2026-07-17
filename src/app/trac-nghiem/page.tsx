import type { Metadata } from "next";
import TracNghiemClient from "./TracNghiemClient";

export const metadata: Metadata = {
  title: "Trắc nghiệm: Bạn đang GÁNH hay đang DẪN DẮT? | Hà Bùi Academy",
  description:
    "Bài tự chẩn đoán 2 phút cho chủ doanh nghiệp & quản lý: bạn đang GÁNH hết mọi việc, hay đang DẪN DẮT để đội tự chạy? 12 câu, nhận kết quả + gợi ý lộ trình riêng.",
  alternates: { canonical: "https://buithuha.com/trac-nghiem" },
  openGraph: {
    title: "Bạn đang GÁNH hay đang DẪN DẮT?",
    description:
      "Bài tự chẩn đoán 2 phút: bạn là nút thắt của doanh nghiệp, hay người dẫn dắt để đội tự chạy?",
    type: "website",
    url: "https://buithuha.com/trac-nghiem",
  },
};

export default function Page() {
  return <TracNghiemClient />;
}
