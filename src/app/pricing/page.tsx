import type { Metadata } from "next";
import PricingContent from "./PricingContent";

export const metadata: Metadata = {
  title: "Bảng Giá Khoá Học | Hà Bùi Academy",
  description:
    "Chọn gói học phù hợp tại Hà Bùi Academy — từ miễn phí đến Premium với tư vấn 1-1 và tài liệu độc quyền. Làm chủ Video AI & Thương Hiệu Cá Nhân.",
  alternates: {
    canonical: "https://buithuha.com/pricing",
  },
  openGraph: {
    title: "Bảng Giá Khoá Học | Hà Bùi Academy",
    description:
      "Chọn gói học phù hợp — Miễn phí, Standard hoặc Premium. Truy cập khoá học Video AI, chứng chỉ, tư vấn 1-1 và tài liệu độc quyền.",
    type: "website",
    url: "https://buithuha.com/pricing",
    images: [
      {
        url: "https://buithuha.com/og-pricing.jpg",
        width: 1200,
        height: 630,
        alt: "Bảng Giá Khoá Học — Hà Bùi Academy",
      },
    ],
  },
};

export default function PricingPage() {
  return <PricingContent />;
}
