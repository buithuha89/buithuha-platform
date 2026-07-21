/**
 * Dữ liệu bài trắc nghiệm "Bạn đang GÁNH hay đang DẪN DẮT?"
 *
 * Đặt ở lib để client (trang trắc nghiệm) và server (API lưu lead + email kết quả)
 * dùng chung một nguồn — tránh lệch nội dung/điểm số giữa hai nơi.
 */

export const QUIZ_QUESTIONS = [
  "Việc quan trọng, tôi thấy tự làm cho chắc thay vì giao đi.",
  "Tôi thường phải kiểm lại, sửa lại việc đã giao cho nhân viên.",
  "Nghỉ một, hai ngày là công việc ùn lại chờ tôi về xử lý.",
  "Nhân viên hay hỏi lại tôi những việc đáng ra họ tự quyết được.",
  "Tôi khó tìm được người “làm được như mình”.",
  "Cuối ngày tôi mới bắt đầu làm phần việc thật sự của mình, sau khi lo cho mọi người.",
  "Tôi ôm nhiều đầu việc tới mức không nhớ hết mình đang gánh những gì.",
  "Tôi ngại giao việc vì giải thích còn lâu hơn tự làm.",
  "Đội của tôi giỏi “làm theo” hơn là chủ động tự quyết.",
  "Tôi thấy mình là nút cổ chai — nhiều việc phải qua tôi mới chạy tiếp.",
  "Tôi hiếm khi có thời gian cho việc lớn, tầm nhìn — vì bận việc vụn.",
  "Nếu tôi vắng mặt một tuần, tôi không chắc mọi thứ vẫn ổn.",
];

export const QUIZ_OPTIONS = [
  { label: "Thường xuyên đúng với tôi", score: 2 },
  { label: "Thỉnh thoảng", score: 1 },
  { label: "Hiếm khi / không đúng", score: 0 },
];

/** Điểm tối đa: mỗi câu tối đa 2 điểm. */
export const QUIZ_MAX = QUIZ_QUESTIONS.length * 2; // 24

export type QuizBand = {
  /** Dùng làm tag trong hệ thống email (chỉ a-z và dấu gạch ngang). */
  slug: string;
  min: number;
  max: number;
  emoji: string;
  band: string;
  title: string;
  body: string;
  recLabel: string;
  recText: string;
  ctaText: string;
  ctaHref: string;
};

export const QUIZ_BANDS: QuizBand[] = [
  {
    slug: "dan-dat",
    min: 0, max: 6, emoji: "👑", band: "Người DẪN DẮT",
    title: "Bạn đang DẪN DẮT",
    body: "Đội của bạn tự chạy khá tốt và bạn đang ở đúng vai người dẫn dắt — không phải người làm thay. Việc của bạn giờ là nâng trần: xây lớp kế cận, chuẩn hoá để nhân bản mô hình cho quy mô lớn hơn.",
    recLabel: "Bước tiếp cho bạn",
    recText: "Đào sâu Khung năng lực & Quản trị hiệu suất để đội không chỉ tự chạy mà còn tự lớn.",
    ctaText: "Xem chủ đề Lãnh đạo & Quản lý →", ctaHref: "/lanh-dao-quan-ly",
  },
  {
    slug: "nghieng-dan-dat",
    min: 7, max: 12, emoji: "🌤️", band: "Nghiêng về dẫn dắt",
    title: "Bạn nghiêng về DẪN DẮT — còn vài chỗ đang ôm",
    body: "Bạn đã giao được kha khá, nhưng vẫn còn vài mảng tự ôm “cho chắc”. Chỉ cần gỡ 2–3 nút thắt quen thuộc là đội có thể tự chạy hẳn, và bạn nhẹ gánh rõ rệt.",
    recLabel: "Bước tiếp cho bạn",
    recText: "Tập trung vào Giao việc & uỷ quyền — biến thứ trong đầu bạn thành quy trình ai cũng dùng được.",
    ctaText: "Xem chương trình Người Tắt Đèn Cuối Cùng →", ctaHref: "/nguoi-tat-den-cuoi-cung",
  },
  {
    slug: "dang-ganh",
    min: 13, max: 18, emoji: "🔥", band: "Đang GÁNH là chính",
    title: "Bạn đang GÁNH là chính",
    body: "Bạn đang là nút cổ chai: nhiều việc phải qua tay bạn mới chạy tiếp, và bạn khó rời khỏi việc vụn để lo việc lớn. Đây là lúc chuyển từ “làm cho nhanh” sang “xây hệ thống” — trước khi kiệt sức.",
    recLabel: "Bước tiếp cho bạn",
    recText: "Chương trình 6 năng lực giúp bạn đưa việc ra khỏi đầu mình, để đội tự chạy mà vẫn giữ chuẩn.",
    ctaText: "Xem chương trình Người Tắt Đèn Cuối Cùng →", ctaHref: "/nguoi-tat-den-cuoi-cung",
  },
  {
    slug: "ganh-tat-ca",
    min: 19, max: 24, emoji: "🌙", band: "GÁNH gần như tất cả",
    title: "Bạn đang GÁNH gần như tất cả",
    body: "Doanh nghiệp/đội đang phụ thuộc gần như hoàn toàn vào một mình bạn — rủi ro lớn nhất là kiệt sức và không nhân bản được chính mình. Tin tốt: đây cũng là lúc một cách làm khác tạo ra thay đổi rõ nhất.",
    recLabel: "Bắt đầu từ đây",
    recText: "Bắt đầu chuyển giao ngay từ những việc lặp lại. Chương trình Người Tắt Đèn Cuối Cùng được thiết kế đúng cho tình huống này.",
    ctaText: "Xem chương trình Người Tắt Đèn Cuối Cùng →", ctaHref: "/nguoi-tat-den-cuoi-cung",
  },
];

/** Trả về nhóm kết quả ứng với tổng điểm. Điểm ngoài khoảng sẽ kẹp về đầu/cuối thang. */
export function getQuizBand(score: number): QuizBand {
  const s = Math.min(Math.max(Math.round(score), 0), QUIZ_MAX);
  return QUIZ_BANDS.find((b) => s >= b.min && s <= b.max) ?? QUIZ_BANDS[0];
}
