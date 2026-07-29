import type { Metadata } from "next";
import SiloPage, { type SiloData } from "@/components/silo/SiloPage";

export const metadata: Metadata = {
  title: "Lãnh đạo & Quản lý — Hà Bùi Academy",
  description:
    "Chia sẻ của Hà cho quản lý cấp trung và doanh chủ SME. Từ trải nghiệm thực — tôi vẫn đang trực tiếp làm quản lý, và đã đi qua chính những bài học này.",
  alternates: { canonical: "https://buithuha.com/lanh-dao-quan-ly" },
  openGraph: {
    title: "Lãnh đạo & Quản lý — Hà Bùi Academy",
    description:
      "Cho quản lý cấp trung và doanh chủ SME. Chia sẻ thật từ Bùi Hà về nghề lãnh đạo — không phải lý thuyết.",
    type: "website",
    url: "https://buithuha.com/lanh-dao-quan-ly",
  },
};

const data: SiloData = {
  slug: "lanh-dao-quan-ly",
  num: 4,
  color: "var(--cat-lime)",
  title: "Lãnh đạo & Quản lý",
  subtitle: "Cho quản lý cấp trung và doanh chủ SME",
  intro:
    "Lên quản lý — đó là vai trò mà ít ai dạy cho mình từ đầu. Tôi đã từng ngồi ở vị trí đó, kẹp giữa sếp và team, không biết hôm nay nên cứng hay nên mềm. Chủ đề này gom lại những gì tôi đã rút ra được.",
  story: {
    heading: "Quản lý là việc làm hàng ngày, không phải chức danh treo trên cửa",
    paragraphs: [
      "Hôm tôi được giao team lần đầu, tôi nhớ rất rõ cảm giác: vui và sợ song song. Vui vì được tin tưởng. Sợ vì biết tôi chưa sẵn sàng — và sợ rằng tôi sẽ làm hỏng cuộc đời nghề nghiệp của ai đó dưới quyền tôi.",
      "Mấy tháng đầu tôi làm tất cả mọi việc — vì sợ giao đi rồi không yên tâm. Rồi tôi kiệt sức. Rồi tôi học cách giao việc. Rồi tôi học cách phản hồi khi nhân viên làm sai. Rồi tôi học cách nói chuyện khi team không cùng nhịp.",
      "Không có công thức. Chỉ là từng bài học nhỏ, mỗi lần đi qua một tình huống. Tôi viết lại ở đây những gì có thể giúp ai đó đang ở vị trí giống tôi ngày xưa.",
    ],
  },
  cost: {
    heading: "Ôm hết hôm nay là trả giá kép ngày mai",
    paragraphs: [
      "Quản lý ôm việc trả giá hai lần. Lần một là chính bạn: ngày dài hơn, giấc ngủ ngắn hơn, kiệt quệ dần mà tưởng là chăm chỉ. Lần hai kín hơn: đội của bạn không lớn lên được — vì mọi quyết định, mọi tiêu chuẩn vẫn nằm trong đầu bạn, người giỏi dưới quyền bạn sẽ chán và đi.",
      "Và vòng lặp này không đứng yên. Càng ôm, việc càng dồn về bạn; càng dồn, càng không có thời gian xây người; càng không xây người, càng phải ôm. Mỗi năm ở yên trong vòng lặp, cái giá cộng thêm một tầng — và động lực để thoát ra mỏng đi một tầng.",
    ],
    question: "Nếu một năm nữa, bạn vẫn là người duyệt mọi việc và tắt đèn cuối cùng mỗi tối — bạn có chấp nhận được không?",
  },
  topics: [
    { icon: "ShieldAlert", title: "Lần đầu lên quản lý — 5 nỗi sợ tôi từng có", desc: "Sợ nhân viên không nghe. Sợ sếp kỳ vọng. Sợ làm sai. Sợ trở nên xa cách với đồng nghiệp cũ. Sợ tôi không đủ giỏi." },
    { icon: "UserCheck", title: "Giao việc mà vẫn yên tâm", desc: "Không phải micromanage, không phải buông tay hoàn toàn. Có khung tôi dùng để vừa đỡ tay vừa không mất kiểm soát." },
    { icon: "MessagesSquare", title: "Nói chuyện khó với nhân viên", desc: "Phản hồi tiêu cực, ra quyết định không phổ biến, hoặc cho nghỉ việc — tôi chia sẻ cách chuẩn bị và cách nói." },
    { icon: "Award", title: "Khi team không theo kịp mình", desc: "Thường mình nghĩ lỗi ở team. Đôi khi lỗi ở chính mình — và đó là tin tốt, vì cái mình kiểm soát được." },
    { icon: "Briefcase", title: "Doanh chủ SME — bài học giao quyền", desc: "Khi doanh nghiệp lớn lên, không thể mình ôm hết. Cách tôi quan sát các doanh chủ SME thành công thật sự buông được." },
    { icon: "Layers", title: "Lead team mà vẫn giữ được mình", desc: "Quản lý không có nghĩa phải đóng vai khác. Cách giữ được giá trị cá nhân khi lên vị trí cao hơn." },
  ],
  audience: [
    "Bạn vừa được giao team lần đầu, đang loay hoay không biết bắt đầu thế nào",
    "Bạn đã làm quản lý cấp trung vài năm, muốn nâng cấp nhưng chưa rõ điểm yếu của mình",
    "Bạn là doanh chủ SME, đang muốn giao quyền nhưng team chưa đủ vững",
    "Bạn đang trong tình huống phải nói chuyện khó với nhân viên, mà chưa biết bắt đầu",
  ],
  cta: {
    heading: "Bắt đầu từ chính bạn",
    body: "Cẩm nang \"7 câu hỏi tự nhìn vào bản thân\" — vì lãnh đạo người khác bắt đầu từ việc hiểu chính mình trước.",
  },
};

export default function WebAllInOnePage() {
  return <SiloPage data={data} />;
}
