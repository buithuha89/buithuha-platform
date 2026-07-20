import type { Metadata } from "next";
import TuVanClient from "./TuVanClient";

export const metadata: Metadata = {
  title: "Tư vấn 1-1: nghề nghiệp & lộ trình phát triển | Hà Bùi Academy",
  description:
    "Tư vấn nghề nghiệp và kèm cặp lộ trình phát triển cá nhân cho sinh viên mới ra trường, người làm L&D mới vào nghề và quản lý mới lên. Từ người có 15 năm đào tạo và vẫn đang trực tiếp quản lý.",
  alternates: { canonical: "https://buithuha.com/tu-van-1-1" },
  openGraph: {
    title: "Tư vấn 1-1: nghề nghiệp & lộ trình phát triển",
    description:
      "Cho người mới ra trường, mới vào nghề L&D, hoặc vừa lên quản lý. Nhìn rõ mình đang ở đâu và đi từng bước.",
    type: "website",
    url: "https://buithuha.com/tu-van-1-1",
  },
};

export default function Page() {
  return <TuVanClient />;
}
