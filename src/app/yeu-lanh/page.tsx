import type { Metadata } from "next";
import SiloPage, { type SiloData } from "@/components/silo/SiloPage";

export const metadata: Metadata = {
  title: "Yêu lành — Hà Bùi Academy",
  description:
    "Cho phụ nữ đang loay hoay trong tình yêu: yêu hết lòng mà vẫn thấy mình không được ưu tiên, tự hỏi mình có đang đòi hỏi quá không. Gọi tên điều bạn đang trải qua — và tìm đường ra từng bước nhỏ.",
  alternates: { canonical: "https://buithuha.com/yeu-lanh" },
  openGraph: {
    title: "Yêu lành — Hà Bùi Academy",
    description:
      "Yêu mà vẫn giữ được chính mình. Những mô hình đã được thẩm định, câu chuyện có thật và bước thay đổi nhỏ mỗi ngày — cho phụ nữ đang loay hoay trong tình yêu.",
    type: "website",
    url: "https://buithuha.com/yeu-lanh",
  },
};

const data: SiloData = {
  slug: "yeu-lanh",
  num: 5,
  color: "var(--cat-lime)",
  title: "Yêu lành",
  subtitle: "Cho phụ nữ đang loay hoay trong tình yêu — yêu mà vẫn giữ được chính mình",
  intro:
    "Yêu hết lòng mà vẫn thấy mình không được ưu tiên. Cho đi nhiều mà vẫn thấy trống. Tự hỏi mình có đang đòi hỏi quá không — rồi lại tự nhủ ráng thêm chút nữa. Chủ đề này gom lại những mô hình tôi đã tìm, biên tập và thẩm định, để bạn gọi được tên điều mình đang trải qua — và thấy đường ra, từng bước một.",
  story: {
    heading: "Cô ấy yêu rất thật — và suýt đánh mất mình trong tình yêu đó",
    paragraphs: [
      "Câu chuyện dưới đây không phải của một người cụ thể. Tôi ghép lại từ nhiều lời tâm sự tôi từng nghe — giống nhau đến mức có thể kể thành một. Cô ấy có thể ngoài hai mươi hoặc gần bốn mươi, mới đi làm hoặc đã vững sự nghiệp — điều đó không quan trọng. Điều giống nhau là trạng thái: cô yêu rất thật, và đang mắc kẹt trong chính tình yêu đó.",
      "Cô luôn là người nhắn trước, người nhường lịch, người tự dặn “thôi, chuyện nhỏ mà”. Mỗi lần định nói ra điều mình cần, cô lại sợ mình thành người phức tạp — nên chọn thỏa hiệp. Từng nhân nhượng nhỏ không làm cô đau ngay, nhưng cộng lại thì bào mòn: cô bớt kể chuyện của mình, bớt gặp bạn bè, bớt cả những việc từng làm cô vui. Đến một lúc, cô không còn thấy buồn nữa — chỉ thấy kiệt quệ, và mất dần động lực để thay đổi bất cứ điều gì.",
      "Điều làm mọi thứ xoay chiều không phải là một quyết định lớn. Là lần đầu tiên cô đọc được đúng cái tên của điều mình đang trải qua — và bật khóc vì thấy được thấu hiểu. Hóa ra cô không “đòi hỏi quá”. Hóa ra cảm giác trống rỗng khi cho đi quá nhiều là có thật, có tên, và có đường ra. Từ chỗ đó, cô chỉ làm những bước rất nhỏ: một tuần tập nói ra một nhu cầu; mỗi tối tự hỏi mình một câu. Không có cú quay xe nào — nhưng vài tháng sau, cô nhận ra mình đã khác: vẫn yêu, mà không còn biến mất trong tình yêu.",
      "Tôi kể lại câu chuyện này vì tin rằng nếu bạn thấy mình trong đó, bạn cũng sẽ thấy điều cô ấy đã thấy: bạn không sai, bạn không một mình, và bạn có thể làm được — bắt đầu từ một bước nhỏ hôm nay.",
    ],
  },
  topics: [
    { icon: "Frown", title: "Vì sao cho đi nhiều mà vẫn thấy trống", desc: "Khi yêu thương trở thành cách để được công nhận, càng cho đi càng cạn. Gọi tên cơ chế này là bước đầu để thoát khỏi nó.", href: "/yeu-lanh/cho-di-nhieu-ma-van-thay-trong" },
    { icon: "Ear", title: "“Mình có đang đòi hỏi quá không?”", desc: "Phân biệt nhu cầu chính đáng và đòi hỏi. Vì sao câu tự vấn này xuất hiện — và vì sao nó thường xuất hiện ở người cho đi nhiều nhất.", href: "/yeu-lanh/minh-co-dang-doi-hoi-qua-khong" },
    { icon: "HeartHandshake", title: "Ranh giới trong tình yêu", desc: "Giữ được mình mà không đẩy người kia ra xa. Ranh giới không phải bức tường — là cách nói “tôi cần điều này” mà không thấy có lỗi.", href: "/yeu-lanh/ranh-gioi-trong-tinh-yeu" },
    { icon: "RefreshCw", title: "Vòng lặp thỏa hiệp — nhận ra và bước ra", desc: "Từng nhân nhượng nhỏ tưởng vô hại, cộng lại thành bào mòn. Cách nhận diện vòng lặp sớm, trước khi nó lấy đi động lực của bạn.", href: "/yeu-lanh/vong-lap-thoa-hiep" },
    { icon: "Sparkles", title: "Yêu lành nghĩa là gì", desc: "Không phải yêu ít đi, càng không phải phòng thủ. Là yêu mà vẫn còn nguyên mình: sở thích, bạn bè, tiếng nói và lựa chọn của riêng bạn.", href: "/yeu-lanh/yeu-lanh-nghia-la-gi" },
    { icon: "NotebookPen", title: "Bước nhỏ mỗi ngày + checkpoint", desc: "Thay đổi không cần cú quay xe. Mỗi ngày một bước rất nhỏ, có điểm tự kiểm — và có cộng đồng để chia sẻ ẩn danh cùng người đồng cảnh ngộ.", href: "/yeu-lanh/buoc-nho-moi-ngay-checkpoint" },
  ],
  audience: [
    "Bạn yêu hết lòng mà vẫn thấy mình không được ưu tiên — và đang quen dần với điều đó",
    "Bạn hay tự hỏi mình có đang đòi hỏi quá không, rồi chọn im lặng cho êm chuyện",
    "Bạn cảm thấy mối quan hệ này đang bào mòn mình, nhưng chưa gọi được tên và chưa biết bước đầu tiên",
    "Bạn vừa đi qua một mối quan hệ dài, muốn hiểu chuyện gì đã xảy ra — để lần sau yêu lành hơn",
  ],
  cta: {
    heading: "Bắt đầu từ một bước rất nhỏ",
    body: "Bạn không cần quyết định điều gì to tát hôm nay. Cẩm nang 7 ngày gọi tên — mỗi ngày một bước dưới 5 phút, kèm câu checkpoint buổi tối. Miễn phí, làm một mình được, không cần kể với ai.",
    href: "/yeu-lanh/cam-nang",
    label: "Mở cẩm nang 7 ngày miễn phí",
  },
};

export default function YeuLanhPage() {
  return <SiloPage data={data} />;
}
