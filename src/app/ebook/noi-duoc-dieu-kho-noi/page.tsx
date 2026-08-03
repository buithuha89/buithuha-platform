import type { Metadata } from "next";
import KhoNoiClient from "./KhoNoiClient";

export const metadata: Metadata = {
  title: "Ebook: Từ chối được, đòi lương được, không mất lòng ai | Hà Bùi Academy",
  description:
    "Cẩm nang giao tiếp cho người trẻ: từ chối, phản hồi, thương lượng lương mà không run — mô hình 5T, bốn công thức nói điều khó, cách viết tin nhắn khi đang căng. Tập 2 bộ ba cho người trẻ đi làm. Giá một buổi cà phê — 99.000đ.",
  alternates: { canonical: "https://buithuha.com/ebook/noi-duoc-dieu-kho-noi" },
  openGraph: {
    title: "Từ chối được, đòi lương được, không mất lòng ai — ebook cho người trẻ đi làm",
    description:
      "Người ta không ngại nói. Người ta ngại cái xảy ra sau khi nói. Trọn cuốn bằng giá một buổi cà phê: 99.000đ.",
    url: "https://buithuha.com/ebook/noi-duoc-dieu-kho-noi",
  },
};

export default function Page() {
  return <KhoNoiClient />;
}
