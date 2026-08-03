import type { Metadata } from "next";
import GiaoViecClient from "./GiaoViecClient";

export const metadata: Metadata = {
  title: "Ebook: 7 phút giao việc, 7 giờ rảnh tay | Hà Bùi Academy",
  description:
    "Mô hình 5G — Gạn · Giao · Giới hạn · Giám sát · Gặt. Hệ thống giao việc và ủy quyền cho chủ doanh nghiệp vừa và nhỏ và quản lý cấp trung, xây từ các trường hợp có thật tại Việt Nam. 13 chương. Đọc thử miễn phí. 99.000đ.",
  alternates: { canonical: "https://buithuha.com/ebook/giao-viec-ma-khong-phai-lam-lai" },
  openGraph: {
    title: "7 phút giao việc, 7 giờ rảnh tay",
    description:
      "Tại sao giao việc lại mệt hơn tự làm? Mô hình 5G cho chủ doanh nghiệp và quản lý cấp trung — 13 chương, giá một buổi cà phê 99.000đ.",
    type: "book",
    url: "https://buithuha.com/ebook/giao-viec-ma-khong-phai-lam-lai",
  },
};

export default function Page() {
  return <GiaoViecClient />;
}
