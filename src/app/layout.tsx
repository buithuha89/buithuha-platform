import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { Suspense } from "react";
import PageTracker from "@/components/analytics/PageTracker";
import FacebookPixel from "@/components/analytics/FacebookPixel";
import AffiliateTracker from "@/components/affiliate/AffiliateTracker";
import CookieConsent from "@/components/CookieConsent";
import ErrorBoundary from "@/components/providers/ErrorBoundary";
import WebsiteJsonLd from "@/components/seo/WebsiteJsonLd";
import { siteConfig, getBaseUrl } from "@/lib/site-config";
import { validateEnv } from "@/lib/env-check";
import "./globals.css";

// Validate environment variables once at server startup
validateEnv();

/**
 * Be Vietnam Pro — designed specifically for Vietnamese script (in
 * collaboration with Lao Type). Tone-mark positioning and spacing are
 * tuned for Vietnamese diacritics, which Inter's generic Vietnamese
 * subset gets visibly wrong on ờ, ử, ằ, ẫ, ữ, ỡ, etc.
 */
const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: `${siteConfig.owner.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  keywords: `${siteConfig.owner.name}, ${siteConfig.shortName}`,
  manifest: "/manifest.json",
  metadataBase: new URL(getBaseUrl()),
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
  openGraph: {
    title: `${siteConfig.owner.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/images/about/portrait.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - ${siteConfig.owner.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.owner.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/images/about/portrait.jpg"],
  },
  icons: {
    // ?v=habui — cache-buster so browsers fetch the new Hà Bùi favicon
    // instead of the cached LĐK one. Safe to bump when the file changes again.
    icon: [
      { url: "/favicon.png?v=habui", type: "image/png" },
      { url: "/icon-192.png?v=habui", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png?v=habui", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png?v=habui",
    shortcut: "/favicon.png?v=habui",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: siteConfig.shortName,
  },
};

export const viewport: Viewport = {
  themeColor: "#D4A843",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={beVietnamPro.variable} suppressHydrationWarning>
      <body className="antialiased min-h-screen" style={{ background: "#0a0a0a", color: "#f5f5f5" }} suppressHydrationWarning>
        {/* Skip to main content — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#D4A843] focus:text-black focus:text-sm focus:font-semibold focus:outline-none"
        >
          Chuyển đến nội dung chính
        </a>
        <Suspense fallback={null}>
          <PageTracker />
          <FacebookPixel />
          <AffiliateTracker />
        </Suspense>
        <ErrorBoundary>
          <main id="main-content">{children}</main>
        </ErrorBoundary>
        <CookieConsent />
        <WebsiteJsonLd />
      </body>
    </html>
  );
}
