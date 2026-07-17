import type { Metadata } from "next";
import ThuaNhanSaiClient from "./ThuaNhanSaiClient";

export const metadata: Metadata = {
  title: "Ebook: Nghệ thuật thừa nhận sai | Hà Bùi Academy",
  description:
    "Phản hồi thông minh dưới áp lực mà không mất uy tín — cho nhân viên, quản lý mới lên và lãnh đạo cấp cao. 61 trang, 12 tình huống mô phỏng, bộ công cụ ngôn ngữ, lộ trình 30 ngày. Đọc thử 15 trang miễn phí. 499.000đ.",
  alternates: { canonical: "https://buithuha.com/ebook/nghe-thuat-thua-nhan-sai" },
  openGraph: {
    title: "Nghệ thuật thừa nhận sai",
    description:
      "Không phải sai lầm giết chết uy tín, mà là cách bạn phản ứng với nó. Đọc thử 15 trang miễn phí — trọn bộ 499.000đ.",
    type: "book",
    url: "https://buithuha.com/ebook/nghe-thuat-thua-nhan-sai",
  },
};

export default function Page() {
  return <ThuaNhanSaiClient />;
}
