import type { Metadata } from "next";
import EbookClient from "./EbookClient";

export const metadata: Metadata = {
  title: "Tủ ebook: mỗi cuốn một buổi cà phê 99K | Hà Bùi Academy",
  description:
    "Đọc miễn phí bộ 7 câu hỏi tự nhìn vào bản thân, và tủ ebook đồng giá 99.000đ: 7 phút giao việc, 7 giờ rảnh tay · Nhận sai để thăng chức · và bộ ba cho người trẻ đi làm trong môi trường công sở độc hại. Chuyện thật từ mười lăm năm làm nghề, kèm cam kết hoàn tiền.",
  alternates: { canonical: "https://buithuha.com/ebook" },
  openGraph: {
    title: "7 câu hỏi tự nhìn vào bản thân",
    description: "Bộ câu hỏi tự vấn cho người quản lý đang ôm quá nhiều việc — đọc ngay, tải PDF miễn phí.",
    type: "article",
    url: "https://buithuha.com/ebook",
  },
};

export default function Page() {
  return <EbookClient />;
}
