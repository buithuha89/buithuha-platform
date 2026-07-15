import type { Metadata } from "next";
import LandingClient from "./LandingClient";

export const metadata: Metadata = {
  title: "Người Tắt Đèn Cuối Cùng — Chương trình nâng cao năng lực quản lý | Hà Bùi Academy",
  description:
    "6 khóa nâng cao năng lực quản lý cho chủ doanh nghiệp SME, quản lý lâu năm và người làm một mình — để công việc chạy mà không phải qua tay bạn. Học online, truy cập trọn đời.",
  openGraph: {
    title: "Người Tắt Đèn Cuối Cùng — 6 khóa nâng cao năng lực quản lý",
    description:
      "Chương trình nâng cao năng lực quản lý dành cho chủ doanh nghiệp SME, quản lý lâu năm và người làm một mình.",
    type: "website",
  },
};

export default function Page() {
  return <LandingClient />;
}
