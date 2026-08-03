import type { Metadata } from "next";
import GiuLayMinhClient from "./GiuLayMinhClient";

export const metadata: Metadata = {
  title: "Ebook: Sếp tốt, đồng nghiệp ổn — sao tôi vẫn kiệt sức? | Hà Bùi Academy",
  description:
    "Cẩm nang ranh giới và sức khỏe tinh thần cho người trẻ đi làm — sáu loại ranh giới, thoát thao túng, quản lý năng lượng, phục hồi sau môi trường độc hại. Tập 3 bộ ba cho người trẻ đi làm. Giá một buổi cà phê — 99.000đ.",
  alternates: { canonical: "https://buithuha.com/ebook/giu-lay-minh" },
  openGraph: {
    title: "Sếp tốt, đồng nghiệp ổn — sao tôi vẫn kiệt sức? — ebook cho người trẻ đi làm",
    description:
      "Kiệt sức không đến từ việc bạn làm quá nhiều. Nó đến từ việc bạn cho đi những thứ đáng lẽ phải giữ. Trọn cuốn bằng giá một buổi cà phê: 99.000đ.",
    url: "https://buithuha.com/ebook/giu-lay-minh",
  },
};

export default function Page() {
  return <GiuLayMinhClient />;
}
