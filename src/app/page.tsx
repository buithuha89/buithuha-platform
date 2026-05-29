import type { Metadata } from "next";
import { siteConfig, getBaseUrl } from "@/lib/site-config";
import HomePage from "./HomePage";

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    type: "website",
    url: BASE_URL,
    siteName: siteConfig.name,
    locale: "vi_VN",
  },
};

export default function Page() {
  return <HomePage />;
}
