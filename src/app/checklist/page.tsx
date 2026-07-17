import type { Metadata } from "next";
import ChecklistClient from "./ChecklistClient";

export const metadata: Metadata = {
  title: "Checklist quản lý dùng được ngay | Hà Bùi Academy",
  description:
    "6 checklist quản lý thật, tick được ngay: onboarding 30-60-90, giao việc & uỷ quyền, họp 1-1, phỏng vấn tuyển dụng, phản hồi & nói chuyện khó, đánh giá hiệu suất. Tải trọn bộ miễn phí.",
  alternates: { canonical: "https://buithuha.com/checklist" },
  openGraph: {
    title: "Checklist quản lý dùng được ngay",
    description: "6 checklist quản lý thật cho chủ doanh nghiệp & quản lý — dùng ngay trên trang, tải trọn bộ miễn phí.",
    type: "website",
    url: "https://buithuha.com/checklist",
  },
};

export default function Page() {
  return <ChecklistClient />;
}
