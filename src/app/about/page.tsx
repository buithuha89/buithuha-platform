import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import {
  GraduationCap, Briefcase, BookOpen, PenLine, Heart, Coffee,
  MessageSquare, Compass, Award, Mail, ArrowRight, Download,
} from "lucide-react";

const FacebookIcon = (props: { size?: number; className?: string }) => (
  <svg width={props.size ?? 24} height={props.size ?? 24} viewBox="0 0 24 24" fill="currentColor" className={props.className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export const metadata: Metadata = {
  title: `Về ${siteConfig.owner.name} — ${siteConfig.name}`,
  description:
    "Bùi Hà — chuyên gia đào tạo nhiều năm, từng làm quản lý, học MBA. Hà Bùi Academy là nơi Hà ghi lại những gì đã làm, đã trải qua, và muốn chia sẻ.",
  alternates: { canonical: "https://buithuha.com/about" },
  openGraph: {
    title: `Về ${siteConfig.owner.name} — ${siteConfig.name}`,
    description:
      "Câu chuyện và background của Bùi Hà — người đào tạo, người quản lý, người thích đọc và viết.",
    type: "profile",
    url: "https://buithuha.com/about",
  },
};

const background = [
  { icon: GraduationCap, label: "MBA", desc: "Nền tảng phương pháp luận Hà mang theo trong mọi việc" },
  { icon: Briefcase, label: "Nhiều năm đào tạo", desc: "Làm L&D / đào tạo trong doanh nghiệp" },
  { icon: Award, label: "Từng làm quản lý", desc: "Hiểu áp lực của người ngồi ghế leader từ bên trong" },
  { icon: PenLine, label: "Đọc và viết hàng ngày", desc: "Thích chiêm nghiệm, ghi chép, và chia sẻ" },
];

const principles = [
  {
    title: "Không bán bí kíp",
    body: "Hà không có công thức nào kỳ diệu. Cuộc đời mỗi người khác nhau — bí kíp của người này có khi là bẫy của người kia.",
  },
  {
    title: "Không hứa thay đổi sau 30 ngày",
    body: "Chuyển hóa thật là hành trình của riêng mỗi người. Hà chỉ chia sẻ cách Hà đã đi qua — anh/chị đi qua theo cách của anh/chị.",
  },
  {
    title: "Cụ thể, không trừu tượng",
    body: "Hà viết về tình huống thật, có bối cảnh, có ngày tháng. Tránh nói chuyện chung chung kiểu motivational poster.",
  },
  {
    title: "Học từ sai lầm, không chỉ thành công",
    body: "Bài học giá trị nhất Hà có được đến từ những lần làm sai. Hà chia sẻ cả hai — đặc biệt là những lần sai.",
  },
];

const silos = [
  { num: 1, icon: MessageSquare, color: "#FBBF24", href: "/giao-tiep", title: "Giao tiếp & Quan hệ" },
  { num: 2, icon: Compass, color: "#84CC16", href: "/phat-trien-ban-than", title: "Phát triển bản thân" },
  { num: 3, icon: BookOpen, color: "#FBBF24", href: "/nghe-ld", title: "Nghề L&D" },
  { num: 4, icon: Award, color: "#84CC16", href: "/lanh-dao-quan-ly", title: "Lãnh đạo & Quản lý" },
];

export default function AboutPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      {/* HEADER nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/92 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src={siteConfig.owner.avatar} alt={siteConfig.owner.name} width={36} height={36} sizes="36px" className="w-9 h-9 rounded-lg object-cover" />
            <div className="text-sm font-bold leading-tight">{siteConfig.name}</div>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">Trang chủ</Link>
            <Link href="/#silos" className="text-sm text-gray-400 hover:text-white transition-colors">4 chủ đề</Link>
            <Link href="/blog" className="text-sm text-gray-400 hover:text-white transition-colors">Blog</Link>
            <Link href="/register" className="btn-green text-sm py-2 px-5"><Mail size={14} /> Nhận cẩm nang</Link>
          </div>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="pt-24 sm:pt-36 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-2">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden relative border border-white/10 max-w-sm mx-auto lg:mx-0">
                <Image
                  src={siteConfig.owner.avatar}
                  alt={siteConfig.owner.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center"
                  style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.85))" }}>
                  <div className="text-lg font-bold">{siteConfig.owner.name}</div>
                  <div className="text-sm text-[#FBBF24]">{siteConfig.name}</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
                style={{ background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.25)", color: "#FBBF24" }}>
                <Heart size={14} /> Về Hà
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
                Mình là <span className="text-[#FBBF24]">{siteConfig.owner.name}</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Nhiều năm làm đào tạo. Từng làm quản lý. Đã học xong MBA. Thích đọc, thích viết, thích ngồi yên suy nghĩ.
              </p>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Mình không tự nhận là coach, cũng không có công thức nào kỳ diệu. {siteConfig.name} là nơi mình tập hợp lại
                những gì mình đang làm và đã trải qua — để ai thấy hữu ích thì cùng đọc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STORY ═══ */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-[#0d0d0d]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-8">
            Tại sao mình mở <span className="text-[#FBBF24]">{siteConfig.name}</span>?
          </h2>

          <div className="space-y-5 text-base text-gray-300 leading-relaxed">
            <p>
              Nhiều năm đi làm, có lúc mình ngồi yên và nhận ra: những điều mình rút ra được từ trải nghiệm — không có chỗ
              nào để chia sẻ một cách tử tế. Một số chia sẻ qua các buổi đào tạo, nhưng bay đi rất nhanh. Một số ghi trong
              sổ tay, nhưng chỉ mình mình đọc.
            </p>
            <p>
              Mình thấy có nhiều bạn trẻ — và cả các quản lý lâu năm — đang vướng những điều mà mình đã từng vướng. Cãi nhau
              với người thân yêu. Lần đầu lên quản lý không biết bắt đầu thế nào. Đi làm vài năm rồi mà nhìn lại thấy mình
              đứng yên. Mở doanh nghiệp nhỏ mà team không theo kịp.
            </p>
            <p>
              Không phải vì anh/chị không giỏi. Mà vì không ai dạy mình những thứ này từ đầu — đặc biệt là theo cách phù hợp
              với văn hóa Việt, gia đình Việt, công sở Việt.
            </p>
            <p>
              <strong className="text-white">{siteConfig.name} là nơi mình ghi lại những điều đó.</strong> Không phải lớp học
              cao siêu. Không phải khóa coaching đắt tiền. Chỉ là một chỗ để Hà viết, anh/chị đọc, và nếu thấy hữu ích thì
              chúng ta cùng đi tiếp.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ BACKGROUND ═══ */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-10 sm:mb-14">
            Mình mang theo những gì khi <span className="text-[#FBBF24]">chia sẻ</span>?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {background.map((b, i) => (
              <div key={i} className="flex gap-4 bg-[#111] border border-white/5 rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(251,191,36,0.1)" }}>
                  <b.icon size={22} className="text-[#FBBF24]" />
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1">{b.label}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <blockquote className="mt-10 max-w-2xl mx-auto border-l-2 border-[#FBBF24] pl-5 italic text-gray-300 text-base sm:text-lg leading-relaxed">
            &quot;Mình chưa làm coach, cũng chưa có năng lực coach. Mình chỉ muốn chia sẻ những gì mình đang làm,
            đã từng trải qua thôi.&quot;
          </blockquote>
        </div>
      </section>

      {/* ═══ PRINCIPLES — Cách Hà làm việc ═══ */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-4">
            4 nguyên tắc khi <span className="text-[#84CC16]">Hà viết và chia sẻ</span>
          </h2>
          <p className="text-center text-gray-400 mb-10 sm:mb-14 max-w-2xl mx-auto">
            Không phải tuyên ngôn. Đây là cách Hà thật sự xuất hiện trong từng bài viết, từng buổi đào tạo.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {principles.map((p, i) => (
              <div key={i} className="bg-[#111] border border-white/5 rounded-2xl p-6">
                <h3 className="font-bold text-base mb-3 text-[#84CC16]">{p.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4 SILOS ═══ */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-10 sm:mb-14">
            4 chủ đề Hà <span className="text-[#FBBF24]">đang viết</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {silos.map((s) => (
              <Link key={s.num} href={s.href}
                className="flex items-center gap-4 bg-[#111] border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-colors group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${s.color}20` }}>
                  <s.icon size={22} style={{ color: s.color }} />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: s.color }}>Chủ đề {s.num}</div>
                  <div className="font-bold">{s.title}</div>
                </div>
                <ArrowRight size={16} className="text-gray-500 group-hover:text-white transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONNECT ═══ */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-[#0d0d0d]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Kết nối với <span className="text-[#FBBF24]">Hà</span>
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Hà đọc và phản hồi mọi tin nhắn — không hứa trong vòng 1 giờ, nhưng sẽ đọc và trả lời khi có thời gian.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <a href={siteConfig.socials.facebook || "#"} target="_blank" rel="noopener noreferrer"
              className="bg-[#111] border border-white/5 rounded-2xl p-6 hover:border-[#1877F2]/30 transition-colors group">
              <div className="text-[#1877F2] mx-auto mb-3 w-7 h-7"><FacebookIcon size={28} /></div>
              <div className="font-bold text-sm mb-1">Facebook</div>
              <div className="text-xs text-gray-500">Bài viết hàng tuần</div>
            </a>

            <Link href="/register"
              className="bg-[#111] border border-white/5 rounded-2xl p-6 hover:border-[#FBBF24]/30 transition-colors group">
              <Mail size={28} className="text-[#FBBF24] mx-auto mb-3" />
              <div className="font-bold text-sm mb-1">Newsletter</div>
              <div className="text-xs text-gray-500">Mỗi tuần 1 email ngắn</div>
            </Link>

            <Link href="/community"
              className="bg-[#111] border border-white/5 rounded-2xl p-6 hover:border-[#84CC16]/30 transition-colors group">
              <Coffee size={28} className="text-[#84CC16] mx-auto mb-3" />
              <div className="font-bold text-sm mb-1">Cộng đồng</div>
              <div className="text-xs text-gray-500">Chia sẻ và hỏi đáp</div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="py-12 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ background: "radial-gradient(circle at center, #FBBF24, transparent 60%)" }} />

        <div className="relative max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-4">
            Bắt đầu từ <span className="text-[#FBBF24]">một email</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Nếu anh/chị thấy hợp với cách Hà viết, đăng ký nhận cẩm nang miễn phí và bài viết hàng tuần.
            Hủy bất cứ lúc nào.
          </p>

          <Link href="/register" className="btn-green inline-flex text-base py-3.5 px-8 justify-center">
            <Download size={18} /> Nhận cẩm nang miễn phí
          </Link>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-white/5 py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>{siteConfig.footer.copyright} | buithuha.com</p>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-white transition-colors">Trang chủ</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Bảo mật</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Điều khoản</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
