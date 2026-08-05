"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import {
  ArrowRight, ChevronDown, CheckCircle,
  Users, BookOpen, Heart, GraduationCap, Briefcase,
  Mail, Shield, Gift, Menu, X, MessageSquare, MessageCircle,
  Compass, Layers, Award, Download, Coffee,
} from "lucide-react";
import PasswordInput from "@/components/auth/PasswordInput";
import SocialLoginButtons from "@/components/auth/SocialLoginButtons";

/* ─── Data ───────────────────────────────────────────────────── */

/* Khớp 1-1 với 6 nhóm trong `audiences` — cùng icon, cùng thứ tự; id trỏ về thẻ nhóm tương ứng */
const painPoints = [
  {
    id: "ai-sme",
    emoji: "🏢",
    title: "Chủ doanh nghiệp SME — việc gì cũng phải qua tay bạn",
    desc: "Giao việc xong vẫn phải kiểm. Muốn buông tay mà sợ rớt việc. Người làm thì có, nhưng người chịu trách nhiệm thì chỉ mình bạn.",
  },
  {
    id: "ai-solo",
    emoji: "🧑‍💻",
    title: "Làm một mình — nghỉ một ngày là mọi thứ dừng",
    desc: "Bạn tự cân hết: bán hàng, chăm khách, sổ sách. Không có ai để giao. Sợ ốm một hôm là cả guồng đứng lại.",
  },
  {
    id: "ai-quanly",
    emoji: "📋",
    title: "Quản lý — kẹp giữa sếp và nhân viên",
    desc: "Mới lên thì chưa ai chỉ phải bắt đầu thế nào. Làm lâu rồi thì việc vẫn dội tới tay, giao xong vẫn phải ngồi làm lại.",
  },
  {
    id: "ai-nhanvien",
    emoji: "💼",
    title: "Đi làm vài năm mà thấy mình đứng nguyên một chỗ",
    desc: "Mỗi ngày vẫn đến công ty, việc vẫn chạy. Nhưng chưa rõ mình muốn gì tiếp theo — đổi việc, học thêm, hay cứ thế, và động lực cứ mất dần.",
  },
  {
    id: "ai-ld",
    emoji: "🎓",
    title: "Làm L&D / HR mà toàn phải tự mò",
    desc: "Được giao dựng chương trình, đứng lớp, đo hiệu quả — nhưng không có phương pháp bài bản để dựa vào, làm tới đâu dò tới đó.",
  },
  {
    id: "ai-yeulanh",
    emoji: "🌱",
    title: "Yêu hết lòng mà vẫn thấy mình không được ưu tiên",
    desc: "Cho đi nhiều mà vẫn thấy trống. Tự hỏi mình có đang đòi hỏi quá không. Muốn yêu mà vẫn giữ được chính mình.",
  },
];

/* 4 chủ đề Hà viết */
const silos = [
  {
    num: 1, icon: MessageSquare, color: "var(--warn)",
    href: "/giao-tiep",
    title: "GIAO TIẾP & QUAN HỆ",
    subtitle: "Trong gia đình và ở chỗ làm",
    points: [
      "Vì sao mình hay tổn thương với người gần nhất",
      "3 câu hỏi khi đồng nghiệp khó hợp tác",
      "Cách lắng nghe mà không cắt ngang",
      "Nói ra điều khó nói — mà không làm tổn thương ai",
    ],
    quote: "Hiểu nhau cần thời gian. Cãi nhau thì chỉ cần một câu sai",
  },
  {
    num: 2, icon: Compass, color: "var(--cat-lime)",
    href: "/phat-trien-ban-than",
    title: "PHÁT TRIỂN BẢN THÂN",
    subtitle: "Hiểu mình rồi mới biết đi đâu",
    points: [
      "7 câu hỏi tự nhìn vào bản thân",
      "Lập kế hoạch năm — cách tôi làm",
      "Tự nhận thức bản thân — bắt đầu từ đâu",
      "Khi 30 tuổi mà chưa rõ mình muốn gì",
    ],
    quote: "Mình chưa biết mình muốn gì thì không ai giúp được",
  },
  {
    num: 3, icon: BookOpen, color: "var(--warn)",
    href: "/nghe-ld",
    title: "NGHỀ L&D",
    subtitle: "Cho người làm Học & Phát triển trong doanh nghiệp",
    points: [
      "L&D khác 'tổ chức đào tạo' chỗ nào",
      "Đo hiệu quả đào tạo — góc nhìn người trong nghề",
      "Trainer giỏi và trainer hot khác nhau ở đâu",
      "Xây lộ trình học cho team — bắt đầu từ con số 0",
    ],
    quote: "Người dạy giỏi là người vẫn còn đang học",
  },
  {
    num: 4, icon: Award, color: "var(--cat-lime)",
    href: "/lanh-dao-quan-ly",
    title: "LÃNH ĐẠO & QUẢN LÝ",
    subtitle: "Cho quản lý cấp trung và doanh chủ SME",
    points: [
      "Lần đầu lên quản lý — 5 nỗi sợ tôi từng có",
      "Giao việc mà vẫn yên tâm",
      "Khi team không theo kịp mình",
      "Cách nói chuyện khó với nhân viên",
    ],
    quote: "Quản lý là việc làm hàng ngày, không phải chức danh treo trên cửa",
  },
];

const fallbackCourses = [
  {
    emoji: "🌱",
    title: "Hành trình Hiểu Mình",
    badge: "Sắp ra mắt",
    desc: "Chương trình 8 tuần để bạn tự nhìn vào bên trong — hiểu giá trị, động lực, và hướng đi thật sự của mình.",
    stats: "⏰ Đang hoàn thiện | 🎁 Ưu tiên người đăng ký sớm",
    slug: null as string | null,
    thumbnail: null as string | null,
    price: 0, sale_price: null as number | null,
    lessonCount: 0, chapterCount: 0, _static: true,
  },
  {
    emoji: "🤝",
    title: "Lần Đầu Lên Quản Lý",
    badge: "Sắp ra mắt",
    desc: "Dành cho người vừa được giao team — học cách dẫn dắt mà không đánh mất chính mình. Kết hợp tâm lý + phương pháp luận thực chiến.",
    stats: "⏰ Đang hoàn thiện | 🎁 Ưu tiên người đăng ký sớm",
    slug: null as string | null,
    thumbnail: null as string | null,
    price: 0, sale_price: null as number | null,
    lessonCount: 0, chapterCount: 0, _static: true,
  },
];

/* Stats bar — đổi từ số học viên giả sang 4 giá trị cốt lõi của brand */
const valueBar = [
  { icon: BookOpen, label: "Học thuật", desc: "MBA + nhiều năm đào tạo" },
  { icon: Briefcase, label: "Thực chiến", desc: "Vẫn đang trực tiếp làm quản lý" },
  { icon: Heart, label: "Đồng cảm", desc: "Hiểu nỗi đau từ bên trong" },
  { icon: Coffee, label: "Chia sẻ", desc: "Như ngồi nói chuyện cafe" },
];

const faqs = [
  {
    q: "Hà có phải coach chuyên nghiệp không?",
    a: "Tôi chưa từng tự nhận là coach và cũng chưa qua chứng chỉ coach quốc tế. Tôi là người đào tạo nhiều năm, hiện vẫn trực tiếp làm quản lý, đã học MBA và là người thích chiêm nghiệm. Những gì chia sẻ ở đây là trải nghiệm thật của tôi — không phải lý thuyết tham khảo.",
  },
  {
    q: "Nội dung của Hà Bùi Academy phù hợp với ai?",
    a: "Người đi làm muốn phát triển bản thân, người lần đầu lên quản lý, quản lý cấp trung, doanh chủ SME, và người làm nghề L&D / HR / Trainer. Nếu bạn đang tìm câu trả lời cho 'mình là ai, mình muốn gì, mình dẫn dắt như thế nào' — thì đây là nơi dành cho bạn.",
  },
  {
    q: "Cách tiếp cận của Hà khác gì các chương trình khác trên thị trường?",
    a: "Tôi không bán 'công thức thần kỳ' hay lý thuyết suông. Tôi chia sẻ phương pháp luận có hệ thống (từ background MBA + đào tạo), kết hợp với trải nghiệm thực chiến (hiện vẫn đang trực tiếp làm quản lý), và quan trọng nhất là sự đồng cảm — vì tôi đang đi qua chính những nỗi đau đó.",
  },
  {
    q: "Khóa học bao nhiêu tiền? Có cam kết kết quả không?",
    a: "Các khóa học chính đang được hoàn thiện. Bạn có thể đăng ký nhận thông báo sớm để được ưu đãi early-bird. Tôi không cam kết 'thay đổi cuộc đời sau 30 ngày' — vì sự chuyển hóa là hành trình của riêng mỗi người. Tôi chỉ hứa sẽ đi cùng bạn một đoạn đường tử tế.",
  },
  {
    q: "Nếu bạn thấy không hợp với cách chia sẻ của tôi thì sao?",
    a: "Không sao cả. Mỗi người hợp với một người thầy / người chia sẻ khác nhau. Bạn có thể đăng ký nhận cẩm nang miễn phí + theo dõi blog một thời gian — nếu thấy hợp thì học tiếp, không thì tìm con đường khác. Tôi không muốn ai cố ép bản thân vào khuôn của tôi.",
  },
  {
    q: "Có cộng đồng học viên không?",
    a: "Có. Tôi đang xây cộng đồng nhỏ cho những người đã đăng ký nhận tin — nơi mọi người chia sẻ trải nghiệm, đặt câu hỏi, và tôi trả lời định kỳ. Không phải nhóm 'tự sướng' hay 'PR khóa học' — là không gian để cùng nhau chiêm nghiệm.",
  },
  {
    q: "Mình có thể đặt câu hỏi trực tiếp với Hà không?",
    a: "Sau khi đăng ký nhận tin, bạn có thể nhắn cho tôi qua Zalo hoặc email. Tôi không hứa trả lời ngay 24/7 (vì tôi cũng có cuộc sống riêng) nhưng sẽ đọc và phản hồi khi có thời gian. Câu hỏi hay sẽ được tôi viết thành bài chia sẻ chung.",
  },
];

const freeOfferItems = [
  {
    icon: Compass,
    title: "Phần 1: 7 câu hỏi tự nhìn vào bản thân",
    desc: "Bộ câu hỏi tôi dùng cho bản thân và đã chia sẻ với một số học viên.",
  },
  {
    icon: BookOpen,
    title: "Phần 2: Bài tập viết 7 ngày",
    desc: "Hướng dẫn cụ thể từng ngày. Mỗi ngày 1 chủ đề, viết 10-15 phút.",
  },
  {
    icon: Layers,
    title: "Phần 3: Bản đồ tự đánh giá 4 mảng",
    desc: "4 mảng: sự nghiệp / quan hệ / sức khỏe / bản thân. Cách tôi review mỗi quý.",
  },
];

/* ─── Page ────────────────────────────────────────────────────── */

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", password: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error" | "verify">("idle");
  const [formError, setFormError] = useState("");
  const [showLeadModal, setShowLeadModal] = useState(false);

  // Dynamic courses from API
  type DynCourse = typeof fallbackCourses[number];
  const [dynamicCourses, setDynamicCourses] = useState<DynCourse[]>(fallbackCourses);

  useEffect(() => {
    fetch("/api/courses/public")
      .then((r) => r.json())
      .then((data: { slug: string; title: string; description: string | null; price: number; sale_price: number | null; thumbnail: string | null; lessonCount: number; chapterCount: number }[]) => {
        if (!Array.isArray(data) || data.length === 0) return;
        const mapped: DynCourse[] = data.map((c) => ({
          emoji: "",
          title: c.title,
          badge: c.price === 0 ? "Miễn phí" : c.sale_price ? "Sale" : "",
          desc: c.description ?? "",
          stats: `${c.lessonCount} bài học | ${c.chapterCount} chương`,
          slug: c.slug,
          thumbnail: c.thumbnail,
          price: c.price,
          sale_price: c.sale_price,
          lessonCount: c.lessonCount,
          chapterCount: c.chapterCount,
          _static: false,
        }));
        setDynamicCourses(mapped);
      })
      .catch(() => {/* keep fallback */});
  }, []);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("loading");
    setFormError("");

    const fd = new FormData(e.currentTarget);
    const password = fd.get("popup_password") as string;
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          password: password,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setFormStatus("verify");
      } else {
        setFormError(data.error || "Có lỗi xảy ra.");
        setFormStatus("idle");
      }
    } catch {
      setFormError("Lỗi kết nối. Vui lòng thử lại.");
      setFormStatus("idle");
    }
  };

  const navLinks = [
    { label: "Hệ sinh thái", href: "#he-sinh-thai" },
    { label: "Trắc nghiệm", href: "/trac-nghiem" },
    { label: "Ebook", href: "/ebook" },
    { label: "Khóa học", href: "/courses" },
    { label: "Học liệu & công cụ", href: "#he-sinh-thai" },
    { label: "Blog", href: "/blog" },
    { label: "Về Hà", href: "/about" },
  ];

  // Lối đi theo từng nhóm khách (như logic phân khúc của vanhongteacher)
  const audiences = [
    { id: "ai-sme", icon: "🏢", title: "Chủ doanh nghiệp SME", btn: "Tôi là chủ doanh nghiệp SME", pain: "Doanh nghiệp phụ thuộc vào bạn — nghỉ một ngày là việc dồn ứ. Bạn cần đội tự chạy.", links: [{ label: "Chương trình chủ lực →", href: "/nguoi-tat-den-cuoi-cung" }, { label: "Chủ đề Lãnh đạo & Quản lý →", href: "/lanh-dao-quan-ly" }] },
    { id: "ai-solo", icon: "🧑‍💻", title: "Chủ doanh nghiệp 1 người", btn: "Tôi là chủ doanh nghiệp 1 người", pain: "Bạn ôm hết từ A đến Z. Cần đóng gói năng lực thành hệ thống để nhân bản chính mình.", links: [{ label: "Chương trình chủ lực →", href: "/nguoi-tat-den-cuoi-cung" }, { label: "Chủ đề Lãnh đạo & Quản lý →", href: "/lanh-dao-quan-ly" }] },
    { id: "ai-quanly", icon: "📋", title: "Quản lý cấp trung", btn: "Tôi là quản lý cấp trung", pain: "Kẹp giữa sếp và nhân viên, việc gì cũng dội tới tay. Cần giao việc & dẫn đội cho vững.", links: [{ label: "Đọc chủ đề Lãnh đạo & Quản lý →", href: "/lanh-dao-quan-ly" }] },
    { id: "ai-nhanvien", icon: "💼", title: "Nhân viên văn phòng", btn: "Tôi là nhân viên văn phòng", pain: "Muốn phát triển bản thân, giao tiếp tốt hơn và đi nhanh hơn trong sự nghiệp.", links: [{ label: "Đọc chủ đề Phát triển bản thân →", href: "/phat-trien-ban-than" }] },
    { id: "ai-ld", icon: "🎓", title: "Người làm nghề L&D / HR", btn: "Tôi làm L&D / HR", pain: "Bạn làm đào tạo / nhân sự và muốn hiểu nghề sâu hơn — có phương pháp bài bản, không mò mẫm.", links: [{ label: "Đọc chủ đề Nghề L&D →", href: "/nghe-ld" }] },
    { id: "ai-yeulanh", icon: "🌱", title: "Phụ nữ đang loay hoay trong tình yêu", btn: "Tôi đang loay hoay trong tình yêu", pain: "Yêu hết lòng mà vẫn thấy mình không được ưu tiên, hay tự hỏi mình có đang đòi hỏi quá không. Muốn yêu mà vẫn giữ được chính mình.", links: [{ label: "Đọc chủ đề Yêu lành →", href: "/yeu-lanh" }] },
  ];

  // Hệ sinh thái — chia 3 tầng theo mức cam kết: nếm thử miễn phí → học sâu trả phí → đồng hành
  const ecosystemTiers = [
    {
      badge: "Miễn phí",
      heading: "Nếm thử — để bạn tin",
      sub: "Một phần nhỏ để bạn đọc, làm, tự chẩn đoán — đủ hiểu cách tôi làm việc.",
      color: "var(--success)",
      items: [
        { icon: "📝", title: "Trắc nghiệm", desc: "Đâu là lỗ hổng khiến bạn đuối sức nơi công sở? Tự soi 2 phút, ra ngay điểm cần vá.", href: "/trac-nghiem", cta: "Làm thử ngay" },
        { icon: "✍️", title: "Blog & Tình huống", desc: "Chuyện quản trị thật, kể không giấu — đọc là thấy mình trong đó.", href: "/blog", cta: "Đọc ngay" },
        { icon: "🧾", title: "Biểu mẫu & Checklist", desc: "Mẫu giao việc, đánh giá, kiểm việc — tải về điền là dùng ngay.", href: "/bieu-mau", cta: "Lấy mẫu miễn phí" },
        { icon: "📘", title: "Ebook & Cẩm nang", desc: "Cẩm nang miễn phí đọc ngay — và tủ ebook đồng giá một buổi cà phê 99.000đ.", href: "/ebook", cta: "Đọc ngay" },
      ],
    },
    {
      badge: "Trả phí",
      heading: "Học sâu — làm được thật",
      sub: "Trọn bộ phương pháp, công cụ và tình huống có phân tích.",
      color: "var(--accent-hover)",
      items: [
        { icon: "🎓", title: "Khóa học", desc: "Khóa nâng cao năng lực quản lý & kỹ năng thiết yếu.", href: "/courses" },
        { icon: "📕", title: "Ebook chuyên sâu", desc: "Mỗi cuốn là một buổi cà phê với tôi — 99.000đ, chuyện thật 15 năm làm nghề, đọc thử miễn phí trước khi mua.", href: "/ebook/nghe-thuat-thua-nhan-sai" },
        { icon: "🧰", title: "Bộ công cụ & Prompt AI", desc: "Trọn bộ biểu mẫu và prompt dùng ngay — đi kèm khóa học.", href: "/courses" },
        { icon: "🧩", title: "Bộ tình huống & Case study", desc: "Tình huống quản trị thật — mỗi ca có bối cảnh, cách xử lý và bài học rút ra. Phần giá trị nhất.", href: "#", soon: true },
      ],
    },
    {
      badge: "Đồng hành",
      heading: "Đi cùng bạn — 1 kèm 1 và cho tổ chức",
      sub: "Có tôi ở bên khi bạn bắt tay vào làm.",
      color: "var(--warn)",
      items: [
        { icon: "🧭", title: "Tư vấn 1-1", desc: "Tư vấn nghề nghiệp & lộ trình cho người mới ra trường, L&D mới vào nghề, quản lý mới lên.", href: "/tu-van-1-1" },
        { icon: "🏢", title: "Đào tạo doanh nghiệp", desc: "Kỹ năng văn phòng & năng lực quản trị cho doanh nghiệp lớn và SME.", href: "/dao-tao-doanh-nghiep" },
        { icon: "👥", title: "Hội viên & Cộng đồng", desc: "Hỏi–đáp cùng chủ doanh nghiệp & quản lý; quyền lợi hội viên.", href: "/community" },
      ],
    },
  ];

  return (
    <div className="bg-[var(--bg)] min-h-screen text-[var(--fg)] overflow-x-hidden">

      {/* ═══ HEADER ═══ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)]/92 backdrop-blur-xl border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image src={siteConfig.owner.avatar} alt={siteConfig.owner.name} width={36} height={36} sizes="36px" className="w-9 h-9 rounded-lg object-cover" />
            <div>
              <div className="text-sm font-bold leading-tight">{siteConfig.name}</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-x-[18px]">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="text-[15px] font-semibold text-[var(--fg)] hover:text-[var(--accent-hover)] transition-colors whitespace-nowrap">{l.label}</a>
            ))}
          </div>

          {/* Right */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/login" className="text-[13px] text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors">Đăng nhập</Link>
            <button onClick={() => setShowLeadModal(true)} className="btn-green text-[13px] py-2 px-4 whitespace-nowrap">
              <Gift size={14} /> Nhận cẩm nang
            </button>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMobileMenu(!mobileMenu)} className="lg:hidden text-[var(--fg-muted)] p-2">
            {mobileMenu ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenu && (
          <div className="md:hidden bg-white border-t border-[var(--border)] px-4 py-4 space-y-3">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setMobileMenu(false)} className="block text-[15px] font-semibold text-[var(--fg)] py-2">{l.label}</a>
            ))}
            <div className="flex gap-3 pt-2">
              <Link href="/login" className="text-sm text-[var(--fg-muted)]">Đăng nhập</Link>
              <button onClick={() => { setShowLeadModal(true); setMobileMenu(false); }} className="btn-green text-sm py-2 px-4">
                <Gift size={14} /> Nhận cẩm nang
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ═══ SECTION 1: HERO ═══ */}
      <section className="pt-24 sm:pt-36 pb-12 sm:pb-24 relative">
        {/* Glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-15 blur-[80px] pointer-events-none"
          style={{ background: "radial-gradient(circle, var(--warn), transparent 70%)" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-5 sm:mb-8 text-xs sm:text-sm font-medium"
            style={{ background: "rgb(var(--warn-rgb) / 0.1)", border: "1px solid rgb(var(--warn-rgb) / 0.25)", color: "var(--accent-hover)" }}>
            <Heart size={14} /> Học viện Quản trị &amp; Kỹ năng thiết yếu
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] mb-4 sm:mb-6">
            Đâu là cách <span className="text-[var(--accent-hover)] whitespace-nowrap">sinh tồn nơi công sở?</span>
          </h1>

          {/* Sub-headline */}
          <div className="text-sm sm:text-lg text-[var(--fg-muted)] mb-6 sm:mb-10 leading-relaxed text-left space-y-3 sm:space-y-4">
            <p>
              Trường lớp dạy bạn chuyên môn — nhưng cách sinh tồn nơi <span className="whitespace-nowrap">công sở</span> thì không có trong giáo trình. Là lần bị bắt lỗi giữa cuộc họp mà không biết đỡ thế nào. Là ngày đầu lên <span className="whitespace-nowrap">quản lý</span>, giao việc xong vẫn phải ngồi làm lại từ đầu. Là khi công ty lớn dần mà bạn vẫn ôm hết, không dám buông cho ai.
            </p>
            <p>
              <strong className="text-[var(--fg)]">Không ai chỉ bạn những điều đó — nên ai cũng phải tự mò, và trả giá bằng chính con đường của mình.</strong> Đây là nơi gỡ từng nút một — cho nhân viên văn phòng, người làm L&amp;D/HR, <span className="whitespace-nowrap">quản lý</span> mới lên hay cấp trung, và chủ doanh nghiệp đang một mình gánh việc.
            </p>
            <p>
              Tôi là {siteConfig.owner.name} — MBA, 15 năm đào tạo ở Vingroup, FPT, TokyoLife, hơn 10.000 học viên, và đến giờ vẫn trực tiếp <span className="whitespace-nowrap">quản lý</span> mỗi ngày.
            </p>
          </div>

          {/* CTA chính ngay dưới hook */}
          <div className="mb-8 sm:mb-10 flex flex-col items-center gap-2.5">
            <a href="/trac-nghiem"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-bold transition-all hover:-translate-y-0.5"
              style={{ background: "var(--warn)", color: "var(--accent-fg)" }}>
              Làm thử trắc nghiệm 2 phút: đâu là lỗ hổng khiến bạn đuối sức nơi công sở?
              <ArrowRight size={17} />
            </a>
            <span className="text-xs text-[var(--fg-subtle)]">Miễn phí, có kết quả riêng ngay — chưa cần đăng ký.</span>
          </div>

          {/* Phân nhóm khách — chọn lối đi */}
          <div className="max-w-3xl mx-auto">
            <p className="text-xs sm:text-sm text-[var(--fg-subtle)] mb-3">Bạn đang ở vai trò nào? Chọn để vào thẳng nội dung dành riêng cho bạn:</p>
            <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
              {audiences.map((a) => (
                <a key={a.id} href={`#${a.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold border border-[var(--border-strong)] bg-[var(--bg-alt)] text-[var(--fg)] hover:border-[var(--accent-hover)] hover:text-[var(--fg)] hover:bg-[var(--warn)]/20 transition-all">
                  <span>{a.icon}</span> {a.btn}
                </a>
              ))}
            </div>
            <button onClick={() => setShowLeadModal(true)} className="mt-5 inline-flex items-center gap-2 text-sm text-[var(--accent-hover)] hover:underline">
              <Download size={15} /> Hoặc nhận trước bộ cẩm nang miễn phí
            </button>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3 mt-8 sm:mt-12 text-xs sm:text-sm text-[var(--fg-subtle)]">
            <span className="flex items-center gap-1.5"><BookOpen size={14} className="text-[var(--accent-hover)]" /> MBA <span className="whitespace-nowrap">Quản trị Kinh doanh</span></span>
            <span className="flex items-center gap-1.5"><Briefcase size={14} className="text-[var(--cat-lime)]" /> 15 năm đào tạo — Vingroup · FPT · TokyoLife</span>
            <span className="flex items-center gap-1.5"><Users size={14} className="text-[var(--accent-hover)]" /> 10.000+ <span className="whitespace-nowrap">học viên</span></span>
            <span className="flex items-center gap-1.5"><GraduationCap size={14} className="text-[var(--cat-lime)]" /> 350+ <span className="whitespace-nowrap">chương trình</span></span>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2: PAIN POINTS — gọi tên nỗi đau ngay dưới hero, bấm thẻ là nhảy tới lối đi ═══ */}
      <section className="py-12 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-center mb-8 sm:mb-14">
            Có thể bạn đang <span className="text-[var(--accent-hover)]">gặp một trong những điều này</span></h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {painPoints.map((p) => (
              <a key={p.id} href={`#${p.id}`} className="group block bg-white border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--warn)]/40 transition-colors">
                <div className="text-3xl mb-3">{p.emoji}</div>
                <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-[var(--fg-muted)] leading-relaxed mb-3">{p.desc}</p>
                <span className="text-sm font-semibold text-[var(--accent-hover)] inline-flex items-center gap-1.5 opacity-80 group-hover:opacity-100 group-hover:gap-2.5 transition-all">
                  Xem lối đi dành cho bạn <ArrowRight size={14} />
                </span>
              </a>
            ))}
          </div>

          <p className="text-center mt-10 text-[var(--fg-muted)] max-w-2xl mx-auto leading-relaxed">
            Tôi đã từng ở những chỗ này. Không có lối thoát thần kỳ — nhưng có phương pháp, có trải nghiệm thật, và những điều tôi rút ra được để đi qua. Bấm vào điều bạn đang gặp để xem lối đi dành riêng cho bạn.
          </p>
        </div>
      </section>

      {/* ═══ BẠN LÀ AI — lối đi theo nhóm ═══ */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">Bạn là <span className="text-[var(--accent-hover)]">ai</span>?</h2>
            <p className="text-[var(--fg-muted)] max-w-2xl mx-auto">Mỗi nhóm có một lối đi riêng. Chọn đúng vai trò của bạn để vào thẳng nội dung hợp nhất.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {audiences.map((a) => (
              <div key={a.id} id={a.id}
                className="bg-white border border-[var(--border)] rounded-2xl p-6 sm:p-7 hover:border-[var(--warn)]/40 transition-all scroll-mt-24">
                <div className="text-3xl mb-3">{a.icon}</div>
                <h3 className="text-lg font-bold mb-2">{a.title}</h3>
                <p className="text-sm text-[var(--fg-muted)] leading-relaxed mb-4">{a.pain}</p>
                <div className="flex flex-col gap-2">
                  {a.links.map((lk) => (
                    <a key={lk.href} href={lk.href} className="text-sm font-semibold text-[var(--accent-hover)] inline-flex items-center gap-1.5 hover:gap-2.5 transition-all w-fit">{lk.label}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FLAGSHIP PROGRAM BANNER ═══ */}
      <section className="py-10 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-[var(--warn)]/25 p-8 sm:p-12 text-center"
            style={{ background: "linear-gradient(135deg,var(--surface),#F6EAD1)" }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[420px] h-[220px] rounded-full opacity-10 blur-[70px] pointer-events-none"
              style={{ background: "radial-gradient(circle,var(--warn),transparent 70%)" }} />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-bold"
                style={{ background: "rgb(var(--warn-rgb) / 0.12)", border: "1px solid rgb(var(--warn-rgb) / 0.25)", color: "var(--accent-hover)" }}>
                ⭐ Chương trình chủ lực
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold mb-4">
                Người Tắt Đèn Cuối Cùng
              </h2>
              <p className="text-[var(--fg-muted)] max-w-2xl mx-auto mb-2 leading-relaxed">
                Chương trình <span className="text-[var(--accent-hover)] font-semibold">180 ngày nâng cao năng lực quản lý</span> — để công việc chạy mà không phải qua tay bạn.
              </p>
              <p className="text-sm text-[var(--fg-subtle)] mb-7">Dành cho chủ doanh nghiệp SME · quản lý lâu năm · người làm một mình</p>
              <Link href="/nguoi-tat-den-cuoi-cung" className="btn-green text-base py-3.5 px-8 inline-flex justify-center">
                Tìm hiểu chương trình <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ KHÓA HỌC — ngay dưới chương trình chủ lực để khách chọn mua ═══ */}
      <section id="courses" className="py-12 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
              Chương trình của <span className="text-[var(--accent-hover)]">{siteConfig.name}</span>
            </h2>
            <p className="text-[var(--fg-muted)] max-w-2xl mx-auto">Học online trên nền tảng này — chọn chương trình đúng với vai trò và giai đoạn của bạn.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {dynamicCourses.map((c, i) => (
              <div key={c.slug ?? i} className="bg-white border border-[var(--border)] rounded-2xl overflow-hidden flex flex-col hover:border-[var(--warn)]/20 transition-colors">
                {c.thumbnail && !c._static && (
                  <div className="relative aspect-video bg-[var(--bg-alt)] overflow-hidden">
                    <Image src={c.thumbnail} alt={c.title} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
                    {c.price > 0 && c.sale_price !== null && c.sale_price < c.price && (
                      <span className="absolute top-3 right-3 px-2 py-1 rounded-md text-[11px] font-bold bg-red-500 text-[var(--fg)]">
                        -{Math.round(((c.price - c.sale_price) / c.price) * 100)}%
                      </span>
                    )}
                  </div>
                )}

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    {c._static && c.emoji && <span className="text-3xl">{c.emoji}</span>}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-lg">{c.title}</h3>
                      </div>
                      {c.badge && (
                        <span className="text-xs font-bold px-2 py-0.5 rounded-md"
                          style={{
                            background: c.badge === "Sắp ra mắt" ? "rgba(132,204,22,0.1)" : c.badge === "Miễn phí" ? "rgb(var(--success-rgb) / 0.1)" : "rgb(var(--warn-rgb) / 0.1)",
                            color: c.badge === "Sắp ra mắt" ? "var(--cat-lime)" : c.badge === "Miễn phí" ? "var(--success)" : "var(--accent-hover)",
                          }}>
                          {c.badge}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-[var(--fg-muted)] leading-relaxed mb-4 flex-1">{c.desc}</p>
                  <div className="text-xs text-[var(--fg-subtle)] mb-4">{c.stats}</div>
                  {c.slug ? (
                    <Link href={`/courses/${c.slug}`} className="btn-green text-sm py-2.5 justify-center">
                      Xem chi tiết <ArrowRight size={15} />
                    </Link>
                  ) : (
                    <button onClick={() => setShowLeadModal(true)} className="inline-flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold border border-[var(--cat-lime)]/30 text-[var(--cat-lime)] hover:bg-[var(--cat-lime)]/5 transition-colors">
                      Đăng ký nhận thông báo <ArrowRight size={15} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/courses" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent-hover)] hover:text-[var(--accent)] transition-colors">
              Xem tất cả chương trình <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ HỆ SINH THÁI ═══ */}
      <section id="he-sinh-thai" className="py-12 sm:py-20 px-4 sm:px-6 border-t border-[var(--border)] scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl font-extrabold mb-3"><span className="whitespace-nowrap">Hệ sinh thái</span> <span className="text-[var(--accent-hover)] whitespace-nowrap">Hà Bùi</span></h2>
            <p className="text-[var(--fg-muted)] max-w-2xl mx-auto">Mọi thứ bạn cần để quản trị tốt hơn — học, thực hành và áp dụng ngay.</p>
          </div>
          <div className="space-y-10 sm:space-y-12">
            {ecosystemTiers.map((tier) => (
              <div key={tier.badge}>
                <div className="flex items-baseline gap-3 mb-4 flex-wrap">
                  <span className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full whitespace-nowrap"
                    style={{ color: tier.color, border: `1.5px solid ${tier.color}` }}>
                    {tier.badge}
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold">{tier.heading}</h3>
                  <span className="text-sm text-[var(--fg-muted)] hidden sm:inline">— {tier.sub}</span>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {tier.items.map((c) => "soon" in c && c.soon ? (
                    <div key={c.title} className="block bg-white border border-[var(--border)] rounded-2xl p-5">
                      <div className="text-2xl mb-2">{c.icon}</div>
                      <h4 className="font-bold text-sm mb-1">{c.title}</h4>
                      <p className="text-xs text-[var(--fg-subtle)] leading-relaxed">{c.desc}</p>
                    </div>
                  ) : (
                    <a key={c.title} href={c.href} className="group block bg-white border border-[var(--border)] rounded-2xl p-5 hover:border-[var(--warn)]/40 transition-all">
                      <div className="text-2xl mb-2">{c.icon}</div>
                      <h4 className="font-bold text-sm mb-1 group-hover:text-[var(--accent-hover)] transition-colors">{c.title}</h4>
                      <p className="text-xs text-[var(--fg-subtle)] leading-relaxed">{c.desc}</p>
                      {"cta" in c && c.cta && (
                        <p className="mt-3 text-xs font-bold flex items-center gap-1.5 text-[var(--accent-hover)] group-hover:gap-2.5 transition-all">
                          {c.cta} <ArrowRight size={13} strokeWidth={2.5} />
                        </p>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3: 4 SILO ═══ */}
      <section id="silos" className="py-12 sm:py-24 px-4 sm:px-6 bg-[var(--bg-alt)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
              4 chủ đề <span className="text-[var(--accent-hover)]">tôi viết</span>
            </h2>
            <p className="text-[var(--fg-muted)]">Không phải &quot;4 bước thành công&quot;. Đây là 4 mảng Hà có chuyện thật để kể.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {silos.map((s) => (
              <Link key={s.num} href={s.href}
                className="flex flex-col bg-white border border-[var(--border)] rounded-2xl p-6 sm:p-8 relative overflow-hidden hover:border-[var(--border-strong)] transition-colors group">
                {/* Number bg */}
                <div className="absolute top-4 right-6 text-[80px] font-extrabold leading-none opacity-5" style={{ color: s.color }}>
                  {s.num}
                </div>

                <div className="relative flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${s.color}20` }}>
                      <s.icon size={20} style={{ color: s.color }} />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider" style={{ color: s.color }}>Chủ đề {s.num}</div>
                      <h3 className="text-xl font-extrabold">{s.title}</h3>
                    </div>
                  </div>

                  <p className="text-[var(--fg-muted)] font-medium mb-4">{s.subtitle}</p>

                  <div className="space-y-2 mb-4">
                    {s.points.map((pt, j) => (
                      <div key={j} className="flex items-start gap-2 text-sm text-[var(--fg-muted)]">
                        <CheckCircle size={15} className="text-[var(--success)] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm italic mt-auto" style={{ color: s.color }}>→ &quot;{s.quote}&quot;</p>

                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium opacity-70 group-hover:opacity-100 transition-opacity" style={{ color: s.color }}>
                    Đọc chủ đề này <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <button onClick={() => setShowLeadModal(true)} className="btn-green text-base py-3.5 px-8 justify-center inline-flex">
              <Download size={18} /> Cùng đi với Hà một đoạn đường
            </button>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4: ABOUT ═══ */}
      <section id="about" className="py-12 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-center mb-8 sm:mb-14">
            <span className="text-[var(--accent-hover)]">{siteConfig.owner.name}</span> là ai?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            {/* Photo */}
            <div className="lg:col-span-2">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden relative border border-[var(--border-strong)]">
                <Image
                  src={siteConfig.owner.avatar}
                  alt={siteConfig.owner.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center"
                  style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.85))" }}>
                  <div className="text-lg font-bold">{siteConfig.owner.name}</div>
                  <div className="text-sm text-[var(--accent-hover)]">{siteConfig.owner.title}</div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-3 space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold leading-snug">
                Vẫn đang làm <span className="text-[var(--accent-hover)]">đào tạo và quản lý</span> — đã học xong MBA
              </h3>

              <p className="text-[var(--fg-muted)] leading-relaxed">
                Tôi làm đào tạo trong doanh nghiệp đã nhiều năm. Song song đó, tôi vẫn đang trực tiếp làm quản lý — lead team,
                chịu áp lực kẹp giữa sếp và nhân viên. Sau khi học MBA xong, tôi dành thời gian đọc, viết, ghi lại những gì tôi làm mỗi ngày.
                Hà Bùi Academy là nơi tôi tập hợp những thứ đó.
              </p>

              <div className="space-y-3">
                {[
                  { icon: "🎓", text: "MBA" },
                  { icon: "💼", text: "Nhiều năm làm chuyên gia đào tạo trong doanh nghiệp" },
                  { icon: "👥", text: "Vẫn đang trực tiếp làm quản lý — hiểu áp lực của người ngồi ghế leader" },
                  { icon: "📚", text: "Thích đọc, viết, và ghi chép" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-lg shrink-0">{item.icon}</span>
                    <span className="text-sm text-[var(--fg-muted)]">{item.text}</span>
                  </div>
                ))}
              </div>

              <blockquote className="border-l-2 border-[var(--warn)] pl-4 italic text-[var(--fg-muted)] text-sm">
                &quot;Tôi không phải coach kiểu diễn giả truyền cảm hứng. Tôi là người vẫn đang trực tiếp làm quản lý —
                và chia sẻ lại đúng những gì tôi dùng được thật.&quot;
              </blockquote>

              <div className="flex flex-wrap gap-3">
                <Link href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-[var(--warn)]/30 text-[var(--accent-hover)] hover:bg-[var(--warn)]/5 transition-colors">
                  Đọc thêm về Hà <ArrowRight size={15} />
                </Link>
                <a href={siteConfig.socials.facebook || "#"} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-[1.02]"
                  style={{ background: "#1877F2", color: "var(--fg)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  Nhắn cho Hà qua Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 7: 4 GIÁ TRỊ CỐT LÕI (thay testimonials số bịa) ═══ */}
      <section className="py-12 sm:py-24 px-4 sm:px-6 bg-[var(--bg-alt)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-center mb-4">
            4 thứ Hà có để <span className="text-[var(--cat-lime)]">chia sẻ với bạn</span>
          </h2>
          <p className="text-center text-[var(--fg-muted)] mb-14 max-w-2xl mx-auto">
            Không phải khẩu hiệu. Đây là 4 thứ Hà thực sự đã có và đang làm.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {valueBar.map((v, i) => (
              <div key={i} className="text-center bg-white border border-[var(--border)] rounded-2xl py-8 px-4 hover:border-[var(--warn)]/20 transition-colors">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "rgb(var(--warn-rgb) / 0.1)" }}>
                  <v.icon size={22} className="text-[var(--accent-hover)]" />
                </div>
                <div className="text-lg font-extrabold mb-1">{v.label}</div>
                <div className="text-xs text-[var(--fg-subtle)]">{v.desc}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══ SECTION 8: FREE OFFER ═══ */}
      <section id="free-offer" className="py-12 sm:py-24 px-4 sm:px-6 relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 opacity-10"
          style={{ background: "radial-gradient(ellipse at center, var(--warn), transparent 70%)" }} />

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-sm font-bold"
              style={{ background: "rgb(var(--warn-rgb) / 0.15)", color: "var(--accent-hover)" }}>
              <Gift size={16} /> CẨM NANG MIỄN PHÍ
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
              <span className="text-[var(--accent-hover)]">&quot;7 câu hỏi tự nhìn vào bản thân&quot;</span>
            </h2>
            <p className="text-[var(--fg-muted)] max-w-2xl mx-auto">
              Bộ câu hỏi tôi dùng cho bản thân và một số học viên. Miễn phí, chỉ cần email để tôi gửi cẩm nang.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left - content */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold">Bên trong cẩm nang có gì?</h3>

              {freeOfferItems.map((item, i) => (
                <div key={i} className="flex gap-4 bg-white border border-[var(--border)] rounded-xl p-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "rgb(var(--warn-rgb) / 0.1)" }}>
                    <item.icon size={18} className="text-[var(--accent-hover)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-[var(--fg-muted)] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}

              <div className="space-y-2 text-sm text-[var(--fg-muted)]">
                <div className="flex items-center gap-2"><CheckCircle size={14} className="text-[var(--success)]" /> File PDF, đọc trên điện thoại được</div>
                <div className="flex items-center gap-2"><CheckCircle size={14} className="text-[var(--success)]" /> Mỗi tuần tôi gửi 1 email ngắn, không spam</div>
                <div className="flex items-center gap-2"><CheckCircle size={14} className="text-[var(--success)]" /> Hủy đăng ký bất cứ lúc nào</div>
              </div>
            </div>

            {/* Right - CTA box */}
            <div className="bg-white border-2 border-[var(--warn)]/30 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center">
              <Gift size={40} className="text-[var(--accent-hover)] mb-4" />
              <h3 className="text-xl font-bold mb-3">Nhận cẩm nang</h3>
              <p className="text-sm text-[var(--fg-muted)] mb-6 leading-relaxed">
                Đăng ký miễn phí. Cẩm nang gửi qua email trong vài phút.
              </p>

              {formStatus === "verify" ? (
                <div className="w-full">
                  <CheckCircle size={48} className="text-[var(--success)] mx-auto mb-4" />
                  <h4 className="text-lg font-bold mb-2">Cảm ơn bạn đã đăng ký</h4>
                  <p className="text-sm text-[var(--fg-muted)] mb-4">Vui lòng kiểm tra email để xác thực tài khoản, sau đó đăng nhập để nhận cẩm nang.</p>
                  <Link href="/login" className="btn-green w-full justify-center py-3 text-base">
                    Đăng nhập <ArrowRight size={18} />
                  </Link>
                </div>
              ) : (
                <button onClick={() => setShowLeadModal(true)} className="btn-green w-full justify-center py-3.5 text-base">
                  <Download size={18} /> Nhận cẩm nang miễn phí
                </button>
              )}

              <div className="mt-4 flex items-center justify-center gap-4 text-[10px] text-[var(--fg-subtle)]">
                <span className="flex items-center gap-1"><Shield size={10} /> Email bảo mật</span>
                <span className="flex items-center gap-1"><Mail size={10} /> Gửi trong vài phút</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 9: FAQ ═══ */}
      <section className="py-12 sm:py-24 px-4 sm:px-6 bg-[var(--bg-alt)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-center mb-8 sm:mb-14">
            Câu hỏi <span className="text-[var(--accent-hover)]">thường gặp</span>
          </h2>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white border border-[var(--border)] rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-white/2 transition-colors"
                >
                  <span className="font-semibold text-sm sm:text-base pr-4">{f.q}</span>
                  <ChevronDown size={18} className={`shrink-0 text-[var(--fg-muted)] transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-sm text-[var(--fg-muted)] leading-relaxed border-t border-[var(--border)] pt-4">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 10: FINAL CTA ═══ */}
      <section className="py-12 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ background: "radial-gradient(circle at center, var(--warn), transparent 60%)" }} />

        <div className="relative max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-4">
            Bắt đầu từ <span className="text-[var(--accent-hover)]">một email</span>
          </h2>
          <p className="text-[var(--fg-muted)] mb-8 max-w-xl mx-auto leading-relaxed">
            Không hứa hẹn viển vông — chỉ là phương pháp thật, trải nghiệm thật, dùng được ngay. Bạn thử một đoạn, thấy hợp thì tôi đi cùng bạn một đoạn nữa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setShowLeadModal(true)} className="btn-green text-base py-3.5 px-8 justify-center">
              <Download size={18} /> Nhận cẩm nang miễn phí
            </button>
            <a href={siteConfig.socials.facebook || "#"} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 py-3.5 px-8 rounded-lg text-base font-semibold border border-[var(--border-strong)] hover:border-[var(--accent-hover)] transition-colors">
              <MessageCircle size={16} className="text-[var(--accent-hover)]" /> Nhắn cho Hà
            </a>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-[var(--border)] py-12 pb-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* Col 1: About */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <Image src={siteConfig.owner.avatar} alt={siteConfig.owner.name} width={32} height={32} sizes="32px" className="w-8 h-8 rounded-lg object-cover" />
                <span className="font-bold text-sm">{siteConfig.name}</span>
              </div>
              <ul className="space-y-2 text-sm text-[var(--fg-subtle)]">
                <li><Link href="/about" className="hover:text-[var(--fg)] transition-colors">Về Hà</Link></li>
                <li><Link href="/blog" className="hover:text-[var(--fg)] transition-colors">Blog</Link></li>
                <li><a href={siteConfig.socials.facebook || "#"} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--fg)] transition-colors">Liên hệ</a></li>
              </ul>
            </div>

            {/* Col 2: 4 chủ đề */}
            <div>
              <h4 className="font-bold text-sm mb-4">4 chủ đề</h4>
              <ul className="space-y-2 text-sm text-[var(--fg-subtle)]">
                <li><Link href="/giao-tiep" className="hover:text-[var(--fg)] transition-colors">Giao tiếp &amp; Quan hệ</Link></li>
                <li><Link href="/phat-trien-ban-than" className="hover:text-[var(--fg)] transition-colors">Phát triển bản thân</Link></li>
                <li><Link href="/nghe-ld" className="hover:text-[var(--fg)] transition-colors">Nghề L&amp;D</Link></li>
                <li><Link href="/lanh-dao-quan-ly" className="hover:text-[var(--fg)] transition-colors">Lãnh đạo &amp; Quản lý</Link></li>
              </ul>
            </div>

            {/* Col 3: Links */}
            <div>
              <h4 className="font-bold text-sm mb-4">Khám phá</h4>
              <ul className="space-y-2 text-sm text-[var(--fg-subtle)]">
                <li><Link href="/community" className="hover:text-[var(--fg)] transition-colors">Cộng đồng</Link></li>
                <li><Link href="/events" className="hover:text-[var(--fg)] transition-colors">Sự kiện</Link></li>
                <li><Link href="/courses" className="hover:text-[var(--fg)] transition-colors">Chương trình</Link></li>
              </ul>
            </div>

            {/* Col 4: Newsletter */}
            <div>
              <h4 className="font-bold text-sm mb-4">Đăng ký nhận tin</h4>
              <p className="text-xs text-[var(--fg-subtle)] mb-3">Mỗi tuần tôi gửi 1 email chia sẻ ngắn — không spam, không bán hàng cứng.</p>
              <button onClick={() => setShowLeadModal(true)} className="btn-green text-xs py-2 px-3 inline-flex">
                <Mail size={12} /> Đăng ký nhận tin
              </button>
            </div>
          </div>

          <div className="border-t border-[var(--border)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--fg-subtle)]">
            <p>{siteConfig.footer.copyright} | buithuha.com</p>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover:text-[var(--fg)] transition-colors">Chính sách bảo mật</Link>
              <Link href="/terms-of-service" className="hover:text-[var(--fg)] transition-colors">Điều khoản dịch vụ</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* ═══ STICKY FLOATING CTA BAR ═══ */}
      <div className="fixed bottom-0 left-0 right-0 z-50 pb-[env(safe-area-inset-bottom)]"
        style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.9) 30%)" }}>
        <div className="max-w-lg mx-auto px-4 pb-4 pt-6 flex items-center justify-center gap-2">
          <button onClick={() => setShowLeadModal(true)}
            className="btn-success py-3 px-6 sm:px-8 text-sm sm:text-base rounded-full shadow-lg shadow-green-500/25 flex-1 max-w-sm justify-center">
            <Download size={16} /> Nhận cẩm nang miễn phí
          </button>
        </div>
      </div>

      {/* ═══ ĐĂNG KÝ POPUP MODAL ═══ */}
      {showLeadModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => formStatus !== "loading" && setShowLeadModal(false)} />
          <div className="relative w-full max-w-md bg-white border border-[var(--warn)]/30 rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            <button onClick={() => formStatus !== "loading" && setShowLeadModal(false)}
              className="absolute top-4 right-4 text-[var(--fg-subtle)] hover:text-[var(--fg)] transition-colors z-10 p-1 rounded-lg hover:bg-[var(--bg-alt)]">
              <X size={18} />
            </button>

            <div className="absolute top-0 left-0 right-0 h-32 opacity-20 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at top, var(--warn), transparent 80%)" }} />

            <div className="relative p-6 sm:p-8">
              {formStatus === "verify" ? (
                <div className="text-center py-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-5"
                    style={{ background: "rgb(var(--accent-rgb) / 0.1)", border: "1px solid rgb(var(--accent-rgb) / 0.2)" }}>
                    <Mail size={32} className="text-[var(--accent)]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Kiểm tra email của bạn</h3>
                  <p className="text-sm text-[var(--fg-muted)] mb-2 leading-relaxed">
                    Hà đã gửi email xác thực đến:
                  </p>
                  <p className="text-[var(--accent)] font-semibold mb-4">{formData.email}</p>
                  <p className="text-sm text-[var(--fg-subtle)] mb-6 leading-relaxed">
                    Vui lòng mở email và nhấn <span className="text-[var(--fg-muted)] font-medium">&quot;Xác thực tài khoản&quot;</span> để kích hoạt.
                    Kiểm tra cả thư mục <span className="text-[var(--fg-muted)] font-medium">Spam</span> nếu không thấy.
                  </p>
                  <Link href="/login" className="btn-green w-full justify-center py-3 text-base"
                    onClick={() => setShowLeadModal(false)}>
                    Đã xác thực? Đăng nhập
                  </Link>
                  <p className="text-xs text-[var(--fg-subtle)] mt-3">Link xác thực có hiệu lực trong 24 giờ.</p>
                </div>
              ) : (
                <>
                  <div className="text-center mb-6">
                    <Image src={siteConfig.owner.avatar} alt={siteConfig.owner.name} width={56} height={56} sizes="56px" className="w-14 h-14 rounded-2xl mb-3 object-cover inline-block" />
                    <h3 className="text-xl font-bold mb-1">Đăng ký nhận cẩm nang</h3>
                    <p className="text-sm text-[var(--fg-muted)]">
                      <span className="text-[var(--accent-hover)] font-semibold">&quot;7 câu hỏi tự nhìn vào bản thân&quot;</span> — miễn phí
                    </p>
                  </div>

                  {formError && (
                    <div className="mb-4 p-3 rounded-lg text-sm text-red-400 border border-red-400/20"
                      style={{ background: "rgb(var(--danger-rgb) / 0.08)" }}>
                      {formError}
                    </div>
                  )}

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--fg-muted)] mb-1.5">Họ và tên</label>
                      <input type="text" required value={formData.name}
                        onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                        className="input-dark w-full" placeholder="Nguyễn Văn A" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--fg-muted)] mb-1.5">
                        Số điện thoại <span className="text-[var(--fg-subtle)] font-normal">(không bắt buộc)</span>
                      </label>
                      <input type="tel" value={formData.phone}
                        onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))}
                        pattern="^(0|\+84)[0-9]{9}$"
                        title="Nhập số điện thoại hợp lệ (VD: 0912345678)"
                        className="input-dark w-full" placeholder="0912345678" />
                      <p className="text-[10px] text-[var(--fg-subtle)] mt-1">Để lại nếu muốn Hà hỗ trợ nhanh qua Zalo — có thể bỏ trống.</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--fg-muted)] mb-1.5">Email</label>
                      <input type="email" required value={formData.email}
                        onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                        className="input-dark w-full" placeholder="ban@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--fg-muted)] mb-1.5">Mật khẩu</label>
                      <PasswordInput name="popup_password"
                        placeholder="Tối thiểu 8 ký tự"
                        minLength={8} />
                    </div>

                    <p className="text-xs text-[var(--fg-subtle)] pt-1">
                      Bằng cách đăng ký, bạn đồng ý với{" "}
                      <Link href="/terms-of-service" className="text-[var(--accent)] hover:underline">Điều khoản dịch vụ</Link> và{" "}
                      <Link href="/privacy-policy" className="text-[var(--accent)] hover:underline">Chính sách bảo mật</Link>
                    </p>
                    <button type="submit" disabled={formStatus === "loading"}
                      className="btn-green w-full justify-center py-2.5 mt-2 disabled:opacity-50">
                      {formStatus === "loading" ? "Đang xử lý..." : "Đăng ký — Miễn phí, không spam"}
                    </button>
                  </form>

                  <div className="mt-5">
                    <SocialLoginButtons />
                  </div>

                  <p className="text-center text-sm text-[var(--fg-subtle)] mt-5">
                    Đã có tài khoản?{" "}
                    <Link href="/login" className="text-[var(--accent)] font-medium hover:underline"
                      onClick={() => setShowLeadModal(false)}>
                      Đăng nhập
                    </Link>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
