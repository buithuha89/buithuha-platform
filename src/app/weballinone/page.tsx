import type { Metadata } from "next";
import SiloPage, { type SiloData } from "@/components/silo/SiloPage";

export const metadata: Metadata = {
  title: "Lãnh đạo & Quản lý — Hà Bùi Academy",
  description:
    "Chia sẻ của Hà cho quản lý cấp trung và doanh chủ SME. Từ trải nghiệm thực — mình đã từng làm quản lý, đã từng vướng những bài học này.",
  alternates: { canonical: "https://buithuha.com/weballinone" },
  openGraph: {
    title: "Lãnh đạo & Quản lý — Hà Bùi Academy",
    description:
      "Cho quản lý cấp trung và doanh chủ SME. Chia sẻ thật từ Bùi Hà về nghề lãnh đạo — không phải lý thuyết.",
    type: "website",
    url: "https://buithuha.com/weballinone",
  },
};

const data: SiloData = {
  slug: "lanh-dao-quan-ly",
  num: 4,
  color: "#84CC16",
  title: "Lãnh đạo & Quản lý",
  subtitle: "Cho quản lý cấp trung và doanh chủ SME",
  intro:
    "Lên quản lý — đó là vai trò mà ít ai dạy cho mình từ đầu. Mình đã từng ngồi ở vị trí đó, kẹp giữa sếp và team, không biết hôm nay nên cứng hay nên mềm. Chủ đề này gom lại những gì mình đã rút ra được.",
  story: {
    heading: "Quản lý là việc làm hàng ngày, không phải chức danh treo trên cửa",
    paragraphs: [
      "Hôm mình được giao team lần đầu, mình nhớ rất rõ cảm giác: vui và sợ song song. Vui vì được tin tưởng. Sợ vì biết mình chưa sẵn sàng — và sợ rằng mình sẽ làm hỏng cuộc đời nghề nghiệp của ai đó dưới quyền mình.",
      "Mấy tháng đầu mình làm tất cả mọi việc — vì sợ giao đi rồi không yên tâm. Rồi mình kiệt sức. Rồi mình học cách giao việc. Rồi mình học cách phản hồi khi nhân viên làm sai. Rồi mình học cách nói chuyện khi team không cùng nhịp.",
      "Không có công thức. Chỉ là từng bài học nhỏ, mỗi lần đi qua một tình huống. Mình viết lại ở đây những gì có thể giúp ai đó đang ở vị trí giống mình ngày xưa.",
    ],
  },
  topics: [
    { icon: "ShieldAlert", title: "Lần đầu lên quản lý — 5 nỗi sợ mình từng có", desc: "Sợ nhân viên không nghe. Sợ sếp kỳ vọng. Sợ làm sai. Sợ trở nên xa cách với đồng nghiệp cũ. Sợ mình không đủ giỏi." },
    { icon: "UserCheck", title: "Giao việc mà vẫn yên tâm", desc: "Không phải micromanage, không phải buông tay hoàn toàn. Có khung mình dùng để vừa đỡ tay vừa không mất kiểm soát." },
    { icon: "MessagesSquare", title: "Nói chuyện khó với nhân viên", desc: "Phản hồi tiêu cực, ra quyết định không phổ biến, hoặc cho nghỉ việc — mình chia sẻ cách chuẩn bị và cách nói." },
    { icon: "Award", title: "Khi team không theo kịp mình", desc: "Thường mình nghĩ lỗi ở team. Đôi khi lỗi ở chính mình — và đó là tin tốt, vì cái mình kiểm soát được." },
    { icon: "Briefcase", title: "Doanh chủ SME — bài học giao quyền", desc: "Khi doanh nghiệp lớn lên, không thể mình ôm hết. Cách mình quan sát các doanh chủ SME thành công thật sự buông được." },
    { icon: "Layers", title: "Lead team mà vẫn giữ được mình", desc: "Quản lý không có nghĩa phải đóng vai khác. Cách giữ được giá trị cá nhân khi lên vị trí cao hơn." },
  ],
  audience: [
    "Anh/chị vừa được giao team lần đầu, đang loay hoay không biết bắt đầu thế nào",
    "Anh/chị đã làm quản lý cấp trung vài năm, muốn nâng cấp nhưng chưa rõ điểm yếu của mình",
    "Anh/chị là doanh chủ SME, đang muốn giao quyền nhưng team chưa đủ vững",
    "Anh/chị đang trong tình huống phải nói chuyện khó với nhân viên, mà chưa biết bắt đầu",
  ],
  cta: {
    heading: "Bắt đầu từ chính anh/chị",
    body: "Cẩm nang \"7 câu hỏi tự nhìn vào bản thân\" — vì lãnh đạo người khác bắt đầu từ việc hiểu chính mình trước.",
  },
};

export default function WebAllInOnePage() {
  return <SiloPage data={data} />;
}
