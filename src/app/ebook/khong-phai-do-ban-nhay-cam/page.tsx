import type { Metadata } from "next";
import NhayCamClient from "./NhayCamClient";

export const metadata: Metadata = {
  title: "Ebook: Không phải do bạn nhạy cảm | Hà Bùi Academy",
  description:
    "Cẩm nang giữ bản lĩnh cho người trẻ trong môi trường công sở độc hại — khung 5B, tám kiểu người khiến bạn khổ sở, công thức nói điều khó nói. Tập 1 bộ ba cho người trẻ đi làm. Giá một buổi cà phê — 99.000đ.",
  alternates: { canonical: "https://buithuha.com/ebook/khong-phai-do-ban-nhay-cam" },
  openGraph: {
    title: "Không phải do bạn nhạy cảm — ebook cho người trẻ đi làm",
    description:
      "Người mới không bị bắt nạt vì họ yếu. Họ bị bắt nạt vì họ chưa gọi tên được trò chơi. Trọn cuốn bằng giá một buổi cà phê: 99.000đ.",
    url: "https://buithuha.com/ebook/khong-phai-do-ban-nhay-cam",
  },
};

export default function Page() {
  return <NhayCamClient />;
}
