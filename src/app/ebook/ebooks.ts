// Danh mục ebook trả phí. Thêm 1 cuốn = thêm 1 phần tử vào EBOOKS (đủ 3 lớp: hook → sample → mua).
export type Ebook = {
  slug: string;
  title: string;
  subtitle: string;
  emoji: string;
  pages: number;
  price: string;
  priceNote?: string;
  hook: string[];          // đoạn hook: đọc xong muốn bấm "đọc thử"
  forWho: string;
  sampleLabel: string;     // nhãn khối đọc thử
  sample: { heading?: string; paragraphs: string[] }[];
  cliffhanger: string;     // câu chốt cuối phần đọc thử: đọc xong muốn "mua ngay"
  included: string[];
  guarantee: string;
  // Cờ nội dung: true = nội dung mẫu do Claude soạn, chờ chị thay bằng bản thật của cuốn sách
  draft?: boolean;
};

export const EBOOKS: Ebook[] = [
  {
    slug: "nghe-thuat-thua-nhan-sai",
    title: "Nghệ thuật thừa nhận sai",
    subtitle: "Phản hồi thông minh dưới áp lực mà không mất uy tín",
    emoji: "📕",
    pages: 61,
    price: "499.000đ",
    priceNote: "Tải PDF · giữ trọn đời",
    hook: [
      "Có một khoảnh khắc gần như người quản lý nào cũng sợ: bạn sai, và cả phòng đang nhìn bạn. Nhận thì sợ mất uy; chối thì tự biết là hèn; im lặng thì căng thẳng kéo dài. Ba lựa chọn, cái nào cũng dở.",
      "Nhưng những người lãnh đạo bạn nể nhất — họ sai không ít hơn bạn. Họ chỉ biết một điều ít ai được dạy: cách nhận sai đúng lúc, đúng cách, để uy tín TĂNG lên thay vì mất đi.",
      "Cuốn này không dạy bạn xin lỗi cho hay. Nó cho bạn một quy trình cụ thể để biến khoảnh khắc yếu nhất của người quản lý thành khoảnh khắc khiến đội ngũ tin bạn hơn.",
    ],
    forWho: "Dành cho quản lý và chủ doanh nghiệp — ai đang thấy nhận sai trước đội ngũ là một điều khó.",
    sampleLabel: "Đọc thử — trích Chương 1",
    sample: [
      {
        heading: "Nhận sai không phải chuyện dũng cảm",
        paragraphs: [
          "Người ta hay nghĩ nhận sai là chuyện của lòng dũng cảm. Với người quản lý thì không hẳn. Nó là chuyện của uy tín — và uy tín là thứ không ai muốn đem ra đánh cược trước mặt cả đội.",
          "Đó là lý do càng lên cao, người ta càng khó nhận sai. Không phải vì họ kém trung thực hơn, mà vì họ có nhiều thứ để mất hơn: vị thế, sự nể trọng, niềm tin mất nhiều năm mới dựng được. Một câu “tôi sai rồi” nói ra, trong đầu vang lên câu hỏi: liệu ngày mai mọi người có còn nghe mình không?",
        ],
      },
      {
        heading: "Cái giá của việc KHÔNG nhận",
        paragraphs: [
          "Nhưng đây là điều ít người tính tới: cái giá của việc không nhận sai luôn đắt hơn. Khi sếp không bao giờ sai, cả đội học được một bài học ngầm — ở đây, giấu lỗi an toàn hơn sửa lỗi. Và từ đó, mọi vấn đề đều bị ém xuống cho tới khi nó đủ lớn để nổ.",
          "Một người quản lý không nhận sai không tạo ra một đội ngũ mạnh. Họ tạo ra một đội ngũ giỏi che đậy.",
        ],
      },
      {
        heading: "Uy tín thật đến từ đâu",
        paragraphs: [
          "Hãy nhớ lại người lãnh đạo bạn nể nhất. Gần như chắc chắn, đó không phải người chưa bao giờ sai trước mặt bạn. Đó là người, khi sai, đã đứng thẳng nhận nó một cách bình tĩnh — rồi cho bạn thấy họ sửa nó ra sao.",
          "Uy tín không đến từ sự hoàn hảo. Nó đến từ cách bạn xử lý khoảnh khắc mình không hoàn hảo. Và đó chính xác là kỹ năng học được — bằng một quy trình, không phải bằng tính cách bẩm sinh.",
        ],
      },
    ],
    cliffhanger: "Ở phần tiếp theo, bạn sẽ có công thức 4 bước để nhận sai mà uy tín TĂNG lên — cùng 3 kiểu “nhận sai sai cách” đang âm thầm bào mòn uy tín của rất nhiều người quản lý giỏi.",
    included: [
      "61 trang — đọc gọn trong ~90 phút",
      "Công thức 4 bước nhận sai mà giữ (và tăng) uy tín",
      "10 kịch bản mẫu: nhận sai với sếp, với nhân viên, với khách hàng",
      "Bản PDF đọc trên mọi thiết bị, tải về giữ trọn đời",
    ],
    guarantee: "Đọc thử thấy chưa hợp thì đừng mua. Đã mua mà thấy không đáng trong 7 ngày — nhắn mình, hoàn 100%.",
    draft: true,
  },
];

export const getEbook = (slug: string) => EBOOKS.find((e) => e.slug === slug);
