/**
 * Dữ liệu bài trắc nghiệm "Đâu là lỗ hổng khiến bạn đuối sức nơi công sở?"
 *
 * Mô hình: 5 kỹ năng "sinh tồn công sở", mỗi kỹ năng ứng với 1 cuốn ebook.
 * Mỗi câu hỏi là một phát biểu về sự CHẬT VẬT ở một kỹ năng — chọn càng "đúng
 * với tôi" thì điểm chật vật (struggle) càng cao. Kỹ năng có điểm chật vật cao
 * nhất = "lỗ hổng lớn nhất", quyết định kết quả + cuốn ebook được gợi ý.
 *
 * Đặt ở lib để client (trang trắc nghiệm) và server (API lưu lead + email kết quả)
 * dùng chung một nguồn — tránh lệch nội dung/điểm số giữa hai nơi. Server luôn
 * TÍNH LẠI kết quả từ mảng câu trả lời để không tin dữ liệu client gửi lên.
 */

export type QuizDim = "nhan-sai" | "ranh-gioi" | "tu-choi" | "nang-luong" | "giao-viec";

export interface QuizQuestion {
  text: string;
  dim: QuizDim;
}

/**
 * 15 câu — 3 câu / kỹ năng. Phrasing cố ý "universal": ai đi làm cũng trả lời
 * được (nhân viên, HR/L&D, quản lý mới lên, chủ doanh nghiệp), không giả định
 * người làm bài đang quản lý một đội.
 */
export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // Nhận sai & giữ uy tín
  { dim: "nhan-sai", text: "Khi mình sai, tôi hay tìm cách giải thích cho đỡ quê thay vì nhận thẳng." },
  { dim: "nhan-sai", text: "Bị góp ý hoặc bắt lỗi trước mặt mọi người, tôi thấy mất mặt và khó giữ bình tĩnh." },
  { dim: "nhan-sai", text: "Tôi sợ nhận lỗi sẽ bị coi là yếu kém, nên thường im lặng hoặc đổ cho hoàn cảnh." },
  // Ranh giới — không bị lấn lướt
  { dim: "ranh-gioi", text: "Có người hay nói lấn, đùn việc hoặc đổ lỗi cho tôi mà tôi không biết cách chặn lại." },
  { dim: "ranh-gioi", text: "Tôi hay chịu thiệt cho xong chuyện, rồi về nhà mới thấy ấm ức." },
  { dim: "ranh-gioi", text: "Tôi ngại làm căng nên để người khác lấn tới, lần sau họ lại lấn tiếp." },
  // Nói "không" & đòi quyền lợi
  { dim: "tu-choi", text: "Tôi khó nói “không” — sợ mất lòng nên nhận thêm việc dù đã quá tải." },
  { dim: "tu-choi", text: "Tôi ngại chủ động đòi quyền lợi (tăng lương, ghi nhận, hỗ trợ) dù thấy mình xứng đáng." },
  { dim: "tu-choi", text: "Muốn đề đạt điều gì với sếp, tôi cứ chần chừ mãi rồi lại thôi." },
  // Giữ năng lượng — chống kiệt sức
  { dim: "nang-luong", text: "Hết giờ làm rồi mà đầu tôi vẫn quay cuồng chuyện công ty, khó dứt ra." },
  { dim: "nang-luong", text: "Dạo này tôi cạn năng lượng, làm gì cũng thấy đuối dù không có biến cố gì lớn." },
  { dim: "nang-luong", text: "Tôi hay cố lo cho việc và cho mọi người đến mức quên mất phần của chính mình." },
  // San sẻ & giao việc — không ôm hết
  { dim: "giao-viec", text: "Khi việc dồn nhiều, tôi vẫn ôm hết thay vì nhờ hoặc san sẻ bớt." },
  { dim: "giao-viec", text: "Tôi thấy tự làm cho chắc, giao cho người khác lại phải kiểm lại từ đầu." },
  { dim: "giao-viec", text: "Nhờ hay giao việc cho người khác làm tôi thấy áy náy hoặc không yên tâm." },
];

export const QUIZ_OPTIONS = [
  { label: "Thường xuyên đúng với tôi", score: 2 },
  { label: "Thỉnh thoảng", score: 1 },
  { label: "Hiếm khi / không đúng", score: 0 },
];

/** Điểm tối đa toàn bài: mỗi câu tối đa 2 điểm. */
export const QUIZ_MAX = QUIZ_QUESTIONS.length * 2; // 30

/** Thứ tự hiển thị 5 kỹ năng trên biểu đồ kết quả. */
export const QUIZ_DIMS: QuizDim[] = ["nhan-sai", "ranh-gioi", "tu-choi", "nang-luong", "giao-viec"];

/** Điểm chật vật tối đa của mỗi kỹ năng (3 câu × 2 điểm). */
export const DIM_MAX = 6;

/** Tên ngắn của kỹ năng — dùng cho biểu đồ 5 thanh ở màn kết quả. */
export const DIM_SHORT: Record<QuizDim, string> = {
  "nhan-sai": "Nhận sai & giữ uy tín",
  "ranh-gioi": "Giữ ranh giới",
  "tu-choi": "Nói “không” & đòi quyền lợi",
  "nang-luong": "Giữ năng lượng",
  "giao-viec": "San sẻ & giao việc",
};

/**
 * Khi hai kỹ năng chật vật bằng điểm nhau, ưu tiên kỹ năng "đau" và cấp bách hơn
 * để làm lỗ hổng chính. Kiệt sức xử trước, rồi tới ranh giới, từ chối, nhận sai,
 * cuối cùng là giao việc.
 */
const DIM_PRIORITY: QuizDim[] = ["nang-luong", "ranh-gioi", "tu-choi", "nhan-sai", "giao-viec"];

/** Giữ nguyên shape của "band" cũ để email kết quả (sendQuizResultEmail) chạy y nguyên. */
export interface QuizResult {
  /** Dùng làm tag trong hệ thống email (chỉ a-z và dấu gạch ngang). */
  slug: string;
  dim: QuizDim;
  emoji: string;
  band: string;
  title: string;
  body: string;
  recLabel: string;
  recText: string;
  ctaText: string;
  ctaHref: string;
}

export const QUIZ_RESULTS: Record<QuizDim, QuizResult> = {
  "nhan-sai": {
    slug: "nhan-sai", dim: "nhan-sai", emoji: "🛡️",
    band: "Lỗ hổng: Nhận sai & giữ uy tín",
    title: "Điểm yếu lớn nhất của bạn: nhận sai mà không mất chất",
    body: "Ai cũng có lúc sai. Người đi xa không phải người không bao giờ sai — mà là người nhận sai gọn gàng, giữ được uy tín, thậm chí ghi điểm nhờ cách xử lý. Bạn đang tốn nhiều năng lượng cho việc “chống chế cho đỡ quê” — mà chính điều đó mới âm thầm bào mòn hình ảnh của bạn, hơn cả lỗi ban đầu.",
    recLabel: "Cuốn hợp với bạn nhất",
    recText: "“Nhận sai để thăng chức” — cách nhận lỗi để người ta nể thêm chứ không coi thường.",
    ctaText: "Đọc thử “Nhận sai để thăng chức” →", ctaHref: "/ebook/nghe-thuat-thua-nhan-sai",
  },
  "ranh-gioi": {
    slug: "ranh-gioi", dim: "ranh-gioi", emoji: "🧱",
    band: "Lỗ hổng: Giữ ranh giới nơi công sở",
    title: "Điểm yếu lớn nhất của bạn: giữ ranh giới, không bị lấn lướt",
    body: "Bạn dễ bị người khác nói lấn, đùn việc, đổ lỗi — rồi tự nuốt vào trong. Không phải bạn yếu, mà là chưa có cách chặn đúng lúc, đúng mực, không cần to tiếng. Càng nhịn cho xong, ranh giới càng mờ, và người ta càng lấn tới.",
    recLabel: "Cuốn hợp với bạn nhất",
    recText: "“Không ai bắt nạt được bạn nữa” — cách đứng vững và chặn lại mà vẫn giữ được hòa khí.",
    ctaText: "Đọc thử “Không ai bắt nạt được bạn nữa” →", ctaHref: "/ebook/khong-phai-do-ban-nhay-cam",
  },
  "tu-choi": {
    slug: "tu-choi", dim: "tu-choi", emoji: "🙅",
    band: "Lỗ hổng: Nói “không” & đòi quyền lợi",
    title: "Điểm yếu lớn nhất của bạn: từ chối và đòi quyền lợi cho mình",
    body: "Bạn nhận thêm việc vì ngại mất lòng, và ngại mở lời khi cần tăng lương hay được ghi nhận — dù thừa xứng đáng. Người ta không tự trả công cho sự im lặng. Biết nói “không” đúng cách và đòi quyền lợi khéo léo mới là thứ giữ bạn không bị vắt kiệt.",
    recLabel: "Cuốn hợp với bạn nhất",
    recText: "“Từ chối được, đòi lương được, không mất lòng ai” — kịch bản nói điều khó nói mà quan hệ vẫn êm.",
    ctaText: "Đọc thử “Từ chối được, đòi lương được” →", ctaHref: "/ebook/noi-duoc-dieu-kho-noi",
  },
  "nang-luong": {
    slug: "nang-luong", dim: "nang-luong", emoji: "🔋",
    band: "Lỗ hổng: Giữ năng lượng cho mình",
    title: "Điểm yếu lớn nhất của bạn: giữ năng lượng, không tự kiệt sức",
    body: "Môi trường không tệ, người xung quanh cũng ổn — nhưng bạn vẫn cạn pin, khó dứt công việc ra khỏi đầu sau giờ làm. Kiệt sức không phải lúc nào cũng đến từ một chỗ làm tệ; nhiều khi nó đến từ chính cách bạn tự vắt mình mà không hay.",
    recLabel: "Cuốn hợp với bạn nhất",
    recText: "“Sếp tốt, đồng nghiệp ổn — sao tôi vẫn kiệt sức?” — cách giữ lại năng lượng và động lực cho chính mình.",
    ctaText: "Đọc thử “Sao tôi vẫn kiệt sức?” →", ctaHref: "/ebook/giu-lay-minh",
  },
  "giao-viec": {
    slug: "giao-viec", dim: "giao-viec", emoji: "🗂️",
    band: "Lỗ hổng: San sẻ & giao việc",
    title: "Điểm yếu lớn nhất của bạn: ôm hết việc, khó san sẻ",
    body: "Khi việc dồn lên, bạn ôm hết cho chắc thay vì nhờ hay giao bớt — vì giao ra lại sợ phải làm lại. Nhưng ôm hết là con đường ngắn nhất tới quá tải, và khiến bạn mãi mắc kẹt ở việc vụn. Giao đúng cách chỉ tốn vài phút, mà đổi lại nhiều giờ rảnh tay.",
    recLabel: "Cuốn hợp với bạn nhất",
    recText: "“7 phút giao việc, 7 giờ rảnh tay” — cách giao để không phải cầm tay chỉ việc rồi làm lại.",
    ctaText: "Đọc thử “7 phút giao việc” →", ctaHref: "/ebook/giao-viec-ma-khong-phai-lam-lai",
  },
};

export interface DimScore {
  dim: QuizDim;
  short: string;
  struggle: number; // 0..DIM_MAX
  max: number; // DIM_MAX
  /** % độ VỮNG của kỹ năng (cao = vững) — dùng vẽ thanh trên màn kết quả. */
  strengthPct: number;
}

export interface QuizOutcome {
  result: QuizResult;
  total: number; // tổng điểm chật vật toàn bài 0..QUIZ_MAX
  dims: DimScore[]; // theo thứ tự QUIZ_DIMS
  /** Câu tổng quan thích ứng theo tổng điểm — chỉ hiển thị, không ảnh hưởng email. */
  overallLine: string;
}

/** Cộng điểm chật vật theo từng kỹ năng. Câu thiếu/không hợp lệ tính là 0. */
function strugglePerDim(answers: number[]): Record<QuizDim, number> {
  const acc: Record<QuizDim, number> = {
    "nhan-sai": 0, "ranh-gioi": 0, "tu-choi": 0, "nang-luong": 0, "giao-viec": 0,
  };
  QUIZ_QUESTIONS.forEach((q, i) => {
    const v = answers[i];
    if (typeof v === "number" && v >= 0 && v <= 2) acc[q.dim] += v;
  });
  return acc;
}

function overallLineFor(total: number): string {
  if (total <= 6) return "Nhìn chung bạn đang sống sót khá ổn nơi công sở 👏 — đây là mảng bạn có thể mài thêm để bứt lên.";
  if (total <= 14) return "Nhìn chung bạn ổn, nhưng có một mảng đang âm thầm bào mòn bạn nhiều nhất.";
  if (total <= 22) return "Bạn đang khá chật vật ở vài mặt trận cùng lúc — bắt đầu gỡ từ chỗ nặng nhất sẽ nhẹ nhất.";
  return "Công sở đang bào bạn khá mạnh — nhưng gỡ đúng một nút dưới đây là bạn nhẹ hẳn.";
}

/**
 * Tính kết quả từ mảng câu trả lời (mỗi phần tử 0/1/2). Dùng chung cho client và
 * server. Lỗ hổng = kỹ năng có điểm chật vật cao nhất; hòa điểm thì theo DIM_PRIORITY.
 */
export function computeResult(answers: number[]): QuizOutcome {
  const byDim = strugglePerDim(answers);
  const total = QUIZ_DIMS.reduce((s, d) => s + byDim[d], 0);

  let worst: QuizDim = DIM_PRIORITY[0];
  for (const d of DIM_PRIORITY) {
    if (byDim[d] > byDim[worst]) worst = d;
  }

  const dims: DimScore[] = QUIZ_DIMS.map((d) => ({
    dim: d,
    short: DIM_SHORT[d],
    struggle: byDim[d],
    max: DIM_MAX,
    strengthPct: Math.round(((DIM_MAX - byDim[d]) / DIM_MAX) * 100),
  }));

  return { result: QUIZ_RESULTS[worst], total, dims, overallLine: overallLineFor(total) };
}
