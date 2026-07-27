import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RESOURCE_CSS } from "@/components/resource/resourceCss";
import { ARTICLES, getArticle } from "../articles";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} — Yêu lành · Hà Bùi Academy`,
    description: article.lead,
    alternates: { canonical: `https://buithuha.com/yeu-lanh/${article.slug}` },
    openGraph: {
      title: `${article.title} — Yêu lành`,
      description: article.lead,
      type: "article",
      url: `https://buithuha.com/yeu-lanh/${article.slug}`,
    },
  };
}

export default async function YeuLanhArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const next = article.next ? getArticle(article.next) : undefined;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: RESOURCE_CSS }} />
      <div className="rsc">
        <div className="top"><div className="wrap">
          <Link href="/" className="brand">Hà Bùi Academy<small>Học viện Quản trị &amp; Kỹ năng thiết yếu</small></Link>
          <Link href="/yeu-lanh" className="back">← Chủ đề Yêu lành</Link>
        </div></div>

        <div className="wrap">
          <div className="head">
            <span className="eyebrow">Yêu lành · Bài chia sẻ</span>
            <h1>{article.title}</h1>
            <p className="lead">{article.lead}</p>
          </div>

          <div className="body">
            {article.sections.map((s, i) => (
              <div className="card" key={i}>
                {s.h && <div className="ctitle">{s.h}</div>}
                {s.ps.map((p, j) => (
                  <p key={j} style={{ fontSize: 15.3, lineHeight: 1.75, color: "var(--muted)", margin: "12px 0 0" }}>{p}</p>
                ))}
                {s.bullets && (
                  <ol className="fields" style={{ marginTop: 14 }}>
                    {s.bullets.map((b, k) => <li key={k}>{b}</li>)}
                  </ol>
                )}
                {s.note && <div className="purpose" style={{ marginTop: 16, marginBottom: 0 }}>{s.note}</div>}
              </div>
            ))}

            <div className="card" style={{ borderColor: "rgb(var(--accent-rgb) / .35)" }}>
              <div className="ctitle"><span className="ic">🌱</span> Bước nhỏ của bài này</div>
              <p style={{ fontSize: 15.3, lineHeight: 1.75, color: "var(--ink)", margin: "12px 0 0" }}>{article.action.step}</p>
              <div className="howto"><b>Checkpoint buổi tối:</b> {article.action.checkpoint}</div>
            </div>

            <div className="ctaband">
              <h3>Đừng dừng ở việc đọc</h3>
              <p>Cẩm nang 7 ngày gọi tên — mỗi ngày một bước dưới 5 phút, kèm câu checkpoint buổi tối. Miễn phí, làm một mình được.</p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
                <Link className="btn" href="/yeu-lanh/cam-nang">Mở cẩm nang 7 ngày</Link>
                {next && (
                  <Link className="btn" href={`/yeu-lanh/${next.slug}`}
                    style={{ background: "transparent", color: "#EAF5EF", boxShadow: "none", border: "1px solid #4A5A50" }}>
                    Bài tiếp theo: {next.title} →
                  </Link>
                )}
              </div>
            </div>
          </div>

          <footer>
            <Link href="/yeu-lanh">← Về chủ đề Yêu lành</Link> · <Link href="/">Trang chủ</Link>
          </footer>
        </div>
      </div>
    </>
  );
}
