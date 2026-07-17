import type { Metadata } from "next";
import BieuMauClient from "./BieuMauClient";

export const metadata: Metadata = {
  title: "Biểu mẫu & Form quản trị — điền là dùng | Hà Bùi Academy",
  description:
    "5 biểu mẫu quản trị thật: giao việc & uỷ quyền, khung năng lực theo vị trí, phiếu đánh giá nhân viên, kế hoạch onboarding, chuẩn bị họp 1-1. Xem cấu trúc ngay, nhận bản chỉnh sửa được miễn phí.",
  alternates: { canonical: "https://buithuha.com/bieu-mau" },
  openGraph: {
    title: "Biểu mẫu & Form quản trị — điền là dùng",
    description: "5 biểu mẫu quản trị thật cho chủ doanh nghiệp & quản lý — xem cấu trúc ngay, nhận bản chỉnh sửa được miễn phí.",
    type: "website",
    url: "https://buithuha.com/bieu-mau",
  },
};

export default function Page() {
  return <BieuMauClient />;
}
