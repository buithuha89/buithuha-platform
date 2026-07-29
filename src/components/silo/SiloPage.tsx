"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import {
  ArrowRight, Mail, Menu, X, Heart, Download, MessageCircle, Gift,
  MessageSquare, Users, HeartHandshake, Ear, Frown, Home,
  Compass, BookOpen, Target, Sparkles, NotebookPen, RefreshCw,
  BarChart3, GraduationCap, ClipboardCheck, Wrench,
  Award, ShieldAlert, UserCheck, MessagesSquare, Layers, Briefcase,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* Registry of icon names → component. Silo pages pass string names so the
 * data is fully serializable across the Server→Client component boundary. */
const ICONS: Record<string, LucideIcon> = {
  MessageSquare, Users, HeartHandshake, Ear, Frown, Home,
  Compass, BookOpen, Target, Sparkles, NotebookPen, RefreshCw,
  BarChart3, GraduationCap, ClipboardCheck, Wrench,
  Award, ShieldAlert, UserCheck, MessagesSquare, Layers, Briefcase,
};
export type IconName = keyof typeof ICONS;

export interface SiloTopic {
  icon: IconName;
  title: string;
  desc: string;
  /** Nếu có, thẻ chủ đề trở thành link tới bài viết đầy đủ */
  href?: string;
}

export interface SiloData {
  /** slug dùng cho heading + SEO */
  slug: string;
  /** Tiêu đề silo, vd "Giao tiếp & Quan hệ" */
  title: string;
  /** Phụ đề, 1 dòng */
  subtitle: string;
  /** Câu mở hero, 2-3 câu */
  intro: string;
  /** Story Hà kể, 2-4 đoạn */
  story: {
    heading: string;
    paragraphs: string[];
  };
  /** Bước 2 LA BÀN — cái giá của việc ở yên. 1-2 đoạn + 1 câu hỏi soi lại. */
  cost?: {
    heading: string;
    paragraphs: string[];
    question: string;
  };
  /** 4-6 chủ đề / bài viết / topic liên quan */
  topics: SiloTopic[];
  /**
   * Bước 4 LA BÀN — nếu true, topics render thành bản đồ hành trình có đánh số
   * thứ tự (đi lần lượt), thay vì lưới chủ đề rời rạc.
   */
  journey?: boolean;
  /** Câu dẫn dưới tiêu đề khu hành trình (chỉ dùng khi journey=true) */
  journeyIntro?: string;
  /** Ai phù hợp đọc/học silo này */
  audience: string[];
  /** Final CTA */
  cta: {
    heading: string;
    body: string;
    /** Đích của các nút CTA (mặc định /register) */
    href?: string;
    /** Nhãn nút CTA (mặc định "Nhận cẩm nang miễn phí") */
    label?: string;
  };
  /** Màu chủ đạo: FBBF24 hoặc 84CC16 */
  color: string;
  /** Mã chủ đề: 1-4 */
  num: number;
}

const navLinks = [
  { label: "Về Hà", href: "/#about" },
  { label: "4 chủ đề", href: "/#silos" },
  { label: "Khóa học", href: "/#courses" },
  { label: "Blog", href: "/blog" },
];

export default function SiloPage({ data }: { data: SiloData }) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const ctaHref = data.cta.href ?? "/register";
  const ctaLabel = data.cta.label ?? "Nhận cẩm nang miễn phí";

  return (
    <div className="bg-[var(--bg)] min-h-screen text-white overflow-x-hidden">
      {/* ═══ HEADER ═══ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)]/92 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src={siteConfig.owner.avatar} alt={siteConfig.owner.name} width={36} height={36} sizes="36px" className="w-9 h-9 rounded-lg object-cover" />
            <div className="text-sm font-bold leading-tight">{siteConfig.name}</div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <Link key={l.label} href={l.href} className="text-sm text-gray-400 hover:text-white transition-colors">{l.label}</Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/login" className="text-sm text-gray-400 hover:text-white transition-colors">Đăng nhập</Link>
            <Link href="/register" className="btn-green text-sm py-2 px-5">
              <Gift size={14} /> Nhận cẩm nang
            </Link>
          </div>

          <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden text-gray-400 p-2">
            {mobileMenu ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileMenu && (
          <div className="md:hidden bg-[var(--surface)] border-t border-white/5 px-4 py-4 space-y-3">
            {navLinks.map((l) => (
              <Link key={l.label} href={l.href} onClick={() => setMobileMenu(false)} className="block text-sm text-gray-300 py-2">{l.label}</Link>
            ))}
            <Link href="/register" onClick={() => setMobileMenu(false)} className="btn-green text-sm py-2 px-4 inline-flex">
              <Gift size={14} /> Nhận cẩm nang
            </Link>
          </div>
        )}
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="pt-24 sm:pt-36 pb-12 sm:pb-20 relative">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-15 blur-[80px] pointer-events-none"
          style={{ background: `radial-gradient(circle, ${data.color}, transparent 70%)` }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-5 sm:mb-8 text-xs sm:text-sm font-medium"
            style={{ background: `${data.color}1A`, border: `1px solid ${data.color}40`, color: data.color }}>
            <Heart size={14} /> Chủ đề {data.num} · {siteConfig.name}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] mb-4 sm:mb-6">
            {data.title}
          </h1>

          <p className="text-base sm:text-xl text-gray-300 mb-6">{data.subtitle}</p>

          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed text-left">
            {data.intro}
          </p>

          <Link href={ctaHref} className="btn-green inline-flex text-sm sm:text-base py-3 sm:py-3.5 px-5 sm:px-8 justify-center">
            <Download size={16} /> {ctaLabel}
          </Link>
        </div>
      </section>

      {/* ═══ STORY ═══ */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-[var(--bg-alt)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-8 sm:mb-10 leading-snug">
            {data.story.heading}
          </h2>

          <div className="space-y-5 text-base text-gray-300 leading-relaxed">
            {data.story.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COST — Bước 2 LA BÀN: cái giá của việc ở yên ═══ */}
      {data.cost && (
        <section className="py-12 sm:py-20 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 sm:mb-8 leading-snug">
              {data.cost.heading}
            </h2>
            <div className="space-y-5 text-base text-gray-300 leading-relaxed">
              {data.cost.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border p-6 sm:p-7 text-base sm:text-lg font-semibold leading-relaxed"
              style={{ background: `${data.color}12`, borderColor: `${data.color}40` }}>
              {data.cost.question}
            </div>
          </div>
        </section>
      )}

      {/* ═══ TOPICS — lưới chủ đề, hoặc bản đồ hành trình (Bước 4 LA BÀN) ═══ */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-4">
            {data.journey ? (
              <>Bản đồ <span style={{ color: data.color }}>hành trình</span> của chủ đề này</>
            ) : (
              <>Những điều tôi <span style={{ color: data.color }}>sẽ chia sẻ</span> trong chủ đề này</>
            )}
          </h2>
          {data.journey && data.journeyIntro && (
            <p className="text-sm sm:text-base text-gray-400 text-center max-w-2xl mx-auto mb-10 sm:mb-14 leading-relaxed">
              {data.journeyIntro}
            </p>
          )}
          {!data.journey && <div className="mb-6 sm:mb-10" />}

          {data.journey ? (
            /* Bản đồ hành trình: đường dọc có đánh số, đi lần lượt từ 1 → hết */
            <div className="max-w-2xl mx-auto relative">
              <div className="absolute left-[19px] top-6 bottom-6 w-px" style={{ background: `${data.color}40` }} />
              <div className="space-y-4">
                {data.topics.map((t, i) => {
                  const Icon = ICONS[t.icon];
                  const inner = (
                    <div className="flex items-start gap-4">
                      <div className="relative shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-sm"
                        style={{ background: `${data.color}1A`, border: `1.5px solid ${data.color}66`, color: data.color }}>
                        {i + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-base mb-1 flex items-center gap-2">
                          {Icon && <Icon size={16} style={{ color: data.color }} className="shrink-0" />}
                          {t.title}
                        </h3>
                        <p className="text-sm text-gray-400 leading-relaxed">{t.desc}</p>
                        {t.href && (
                          <span className="inline-block mt-2 text-sm font-semibold" style={{ color: data.color }}>
                            Đọc bài →
                          </span>
                        )}
                      </div>
                    </div>
                  );
                  const cls = "relative bg-[var(--surface)] border border-white/5 rounded-2xl p-5 sm:p-6 hover:border-white/10 transition-colors";
                  return t.href ? (
                    <Link key={i} href={t.href} className={`${cls} block`}>{inner}</Link>
                  ) : (
                    <div key={i} className={cls}>{inner}</div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {data.topics.map((t, i) => {
                const Icon = ICONS[t.icon];
                const inner = (
                  <>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: `${data.color}1A` }}>
                      {Icon && <Icon size={20} style={{ color: data.color }} />}
                    </div>
                    <h3 className="font-bold text-base mb-2">{t.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{t.desc}</p>
                    {t.href && (
                      <span className="inline-block mt-3 text-sm font-semibold" style={{ color: data.color }}>
                        Đọc bài →
                      </span>
                    )}
                  </>
                );
                const cls = "bg-[var(--surface)] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors";
                return t.href ? (
                  <Link key={i} href={t.href} className={`${cls} block`}>{inner}</Link>
                ) : (
                  <div key={i} className={cls}>{inner}</div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ═══ AUDIENCE ═══ */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-[var(--bg-alt)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-10">
            Phù hợp với <span style={{ color: data.color }}>bạn</span> nếu...
          </h2>

          <ul className="space-y-3">
            {data.audience.map((a, i) => (
              <li key={i} className="flex items-start gap-3 bg-[var(--surface)] border border-white/5 rounded-xl p-4">
                <span className="shrink-0 mt-0.5" style={{ color: data.color }}>✓</span>
                <span className="text-sm sm:text-base text-gray-300">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="py-12 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ background: `radial-gradient(circle at center, ${data.color}, transparent 60%)` }} />

        <div className="relative max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-4">
            {data.cta.heading}
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
            {data.cta.body}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={ctaHref} className="btn-green text-base py-3.5 px-8 justify-center inline-flex">
              <Download size={18} /> {ctaLabel}
            </Link>
            <a href={siteConfig.socials.facebook || "#"} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 py-3.5 px-8 rounded-lg text-base font-semibold border border-white/10 hover:border-white/20 transition-colors">
              <MessageCircle size={16} style={{ color: data.color }} /> Nhắn cho tôi
            </a>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-white/5 py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>{siteConfig.footer.copyright} | buithuha.com</p>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-white transition-colors">Trang chủ</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <a href={siteConfig.socials.facebook || "#"} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Liên hệ</a>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Bảo mật</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Điều khoản</Link>
          </div>
        </div>
      </footer>

      {/* ═══ STICKY CTA ═══ */}
      <div className="fixed bottom-0 left-0 right-0 z-40 pb-[env(safe-area-inset-bottom)]"
        style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.9) 30%)" }}>
        <div className="max-w-lg mx-auto px-4 pb-4 pt-6 flex items-center justify-center">
          <Link href={ctaHref}
            className="btn-success py-3 px-6 sm:px-8 text-sm sm:text-base rounded-full shadow-lg shadow-green-500/25 flex-1 max-w-sm justify-center inline-flex">
            <Mail size={16} /> {ctaLabel}
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
