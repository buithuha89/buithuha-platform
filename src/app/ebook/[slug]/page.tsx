import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EBOOKS, getEbook } from "../ebooks";
import EbookDetailClient from "./EbookDetailClient";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return EBOOKS.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const e = getEbook(slug);
  if (!e) return { title: "Ebook | Hà Bùi Academy" };
  return {
    title: `${e.title} — Ebook | Hà Bùi Academy`,
    description: `${e.subtitle}. Đọc thử miễn phí, mua bản đầy đủ ${e.pages} trang (${e.price}).`,
    alternates: { canonical: `https://buithuha.com/ebook/${e.slug}` },
    openGraph: { title: e.title, description: e.subtitle, type: "article", url: `https://buithuha.com/ebook/${e.slug}` },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const e = getEbook(slug);
  if (!e) notFound();
  return <EbookDetailClient ebook={e} />;
}
