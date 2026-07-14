import type { Metadata } from "next";
import LandingClient from "./LandingClient";

export const metadata: Metadata = {
  title: "Người Tắt Đèn Cuối Cùng — Chương trình nâng cao năng lực quản lý | Hà Bùi Academy",
  description:
    "Bạn bắt đầu tất cả vì hai chữ tự do. Giờ người bị trói chặt nhất lại là bạn. 90 ngày nâng cao năng lực quản lý — để công việc chạy mà không phải qua tay bạn.",
  openGraph: {
    title: "Người Tắt Đèn Cuối Cùng — 90 ngày để công việc chạy mà không phải qua tay bạn",
    description:
      "Chương trình nâng cao năng lực quản lý dành cho chủ doanh nghiệp SME, quản lý lâu năm và người làm một mình.",
    type: "website",
  },
};

export default function Page() {
  return <LandingClient />;
}
