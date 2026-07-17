import type { Metadata } from "next";
import EbookClient from "./EbookClient";

export const metadata: Metadata = {
  title: "Ebook: 7 câu hỏi tự nhìn vào bản thân | Hà Bùi Academy",
  description:
    "Bộ câu hỏi tự vấn cho người quản lý & chủ doanh nghiệp đang ôm quá nhiều việc. Đọc ngay 7 câu hỏi + gợi ý suy ngẫm, hoặc tải bản PDF để in và ngồi lại với chính mình.",
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
