import type { Metadata } from "next";
import SiloPage, { type SiloData } from "@/components/silo/SiloPage";

export const metadata: Metadata = {
  title: "Giao tiếp & Quan hệ — Hà Bùi Academy",
  description:
    "Chia sẻ của chị Hà về giao tiếp trong gia đình và ở chỗ làm. Cách lắng nghe, cách nói điều khó nói, cách xử lý xung đột — từ trải nghiệm thực tế nhiều năm.",
  alternates: { canonical: "https://buithuha.com/cafe" },
  openGraph: {
    title: "Giao tiếp & Quan hệ — Hà Bùi Academy",
    description:
      "Chia sẻ về giao tiếp và quan hệ — trong gia đình, công sở. Voice ấm áp, câu chuyện thật từ chị Bùi Hà.",
    type: "website",
    url: "https://buithuha.com/cafe",
  },
};

const data: SiloData = {
  slug: "giao-tiep-quan-he",
  num: 1,
  color: "#FBBF24",
  title: "Giao tiếp & Quan hệ",
  subtitle: "Trong gia đình, và ở chỗ làm",
  intro:
    "Đa số chuyện trong đời mình đều liên quan đến giao tiếp. Cãi nhau với chồng. Khó nói với con. Mệt mỏi với đồng nghiệp. Sếp không hiểu mình. Mình không hiểu nhân viên. Chị viết ở đây những gì mình đã rút ra được — sau nhiều năm vướng đi vướng lại.",
  story: {
    heading: "Có những chuyện kéo dài nhiều năm chỉ vì một câu không nói ra",
    paragraphs: [
      "Có lần chị cãi nhau với người trong gia đình, đóng cửa phòng và ngồi yên. Mãi nhiều tháng sau chị mới hiểu: chuyện chính không phải điều người ta nói — mà là điều cả hai bên không nói ra được.",
      "Đi làm cũng vậy. Một anh đồng nghiệp cũ của chị, mỗi lần họp đều cãi với mình. Sau này mới biết, anh ấy không cãi mình — anh ấy đang cãi một nỗi sợ trong chính anh ấy mà mình tình cờ chạm phải.",
      "Chị không có công thức giao tiếp nào. Chị chỉ có những bài học rút ra từ việc làm sai, làm lại, và đứng lùi một bước để nhìn cho rõ.",
    ],
  },
  topics: [
    { icon: "MessageSquare", title: "Cách nói điều khó nói", desc: "Khi cần phản hồi nhân viên, từ chối một đề nghị, hoặc thẳng thắn với người thân — chị thường chuẩn bị thế nào." },
    { icon: "Ear", title: "Lắng nghe mà không cắt ngang", desc: "Nghe ai đó nói trong khi não mình đang chuẩn bị câu trả lời — đó không phải lắng nghe. Chị chia sẻ cách tập lại từ đầu." },
    { icon: "Frown", title: "Khi xung đột không tránh được", desc: "Có những xung đột là dấu hiệu mối quan hệ đang lành lại, không phải đang vỡ. Cách phân biệt và cách đi qua." },
    { icon: "Home", title: "Giao tiếp trong gia đình", desc: "Với vợ/chồng, với con, với cha mẹ. Khác hẳn giao tiếp ở chỗ làm — và khó hơn nhiều." },
    { icon: "Users", title: "Khi đồng nghiệp khó hợp tác", desc: "3 câu hỏi chị tự đặt cho mình trước khi đi nói chuyện với đồng nghiệp khó." },
    { icon: "HeartHandshake", title: "Làm lành sau khi nói lời tổn thương", desc: "Ai cũng có lúc lỡ lời. Cách chị thường dùng để nối lại — không phải xin lỗi đại." },
  ],
  audience: [
    "Bạn đang vướng một mối quan hệ trong gia đình hoặc ở công ty mà chưa biết cách gỡ",
    "Bạn mới lên quản lý, phải nói chuyện khó với nhân viên",
    "Bạn cảm thấy mình lắng nghe kém — hay cắt ngang, hay phản ứng quá nhanh",
    "Bạn muốn cải thiện giao tiếp với người thân, nhưng đã thử nhiều cách rồi vẫn không thay đổi",
  ],
  cta: {
    heading: "Bắt đầu từ cẩm nang miễn phí",
    body: "Cẩm nang \"7 câu hỏi tự nhìn vào bản thân\" là điểm khởi đầu chị gợi ý cho mọi người. Hiểu mình trước, rồi mới nói chuyện với người được.",
  },
};

export default function CafePage() {
  return <SiloPage data={data} />;
}
