import type { Metadata } from "next";
import DaoTaoDoanhNghiepClient from "./DaoTaoDoanhNghiepClient";

export const metadata: Metadata = {
  title: "Đào tạo doanh nghiệp — Kỹ năng văn phòng & Năng lực quản trị | Hà Bùi Academy",
  description:
    "Đào tạo nội bộ cho doanh nghiệp lớn và SME: kỹ năng văn phòng cho nhân viên, năng lực quản trị cho quản lý các cấp. 15 năm đào tạo tại Vingroup, FPT Telecom, TokyoLife — thiết kế riêng theo bối cảnh doanh nghiệp.",
  alternates: { canonical: "https://buithuha.com/dao-tao-doanh-nghiep" },
  openGraph: {
    title: "Đào tạo doanh nghiệp — Hà Bùi Academy",
    description:
      "Kỹ năng văn phòng & năng lực quản trị, thiết kế riêng theo bối cảnh doanh nghiệp bạn. Nhận đề xuất chương trình.",
    type: "website",
    url: "https://buithuha.com/dao-tao-doanh-nghiep",
  },
};

export default function Page() {
  return <DaoTaoDoanhNghiepClient />;
}
