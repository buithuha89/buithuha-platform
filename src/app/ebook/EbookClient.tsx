"use client";

import Link from "next/link";
import { RESOURCE_CSS } from "@/components/resource/resourceCss";
import LeadCTA from "@/components/resource/LeadCTA";

const EBOOK = {
  title: "7 câu hỏi tự nhìn vào bản thân",
  subtitle: "Bộ câu hỏi tự vấn dành cho người quản lý và chủ doanh nghiệp đang thấy mình ôm quá nhiều việc — dành ra 20 phút ngồi thật với chính mình.",
  intro: "Tôi viết 7 câu hỏi này không phải để bạn có thêm một bài tập phải làm cho xong, mà để bạn có một buổi ngồi thật yên với chính mình. Là người đến giờ vẫn đang trực tiếp quản lý mỗi ngày, tôi hiểu cái vòng lặp “thôi để mình làm cho nhanh” nó cuốn người ta đi thế nào — và cũng hiểu rằng thứ giữ mình ở lại trong vòng lặp đó thường không phải là khối lượng việc, mà là một điều gì đó bên trong mình mà mình chưa nhìn thẳng. Bạn không cần trả lời hết trong một lần, cũng không cần trả lời cho hay. Chọn câu nào chạm vào bạn nhất, viết ra thật lòng — không ai đọc ngoài bạn. Nhìn rõ mình đang vận hành thế nào là bước đầu tiên, và thường là bước khó nhất, để thay đổi nó.",
  questions: [
    {
      q: "Tuần vừa rồi, có việc nào bạn tự tay làm chỉ vì “mình làm cho nhanh”? Hãy liệt kê ra 3 việc như vậy.",
      guide: "Với mỗi việc, tự hỏi: đây thật sự là việc chỉ mình bạn làm được, hay là việc bạn chưa từng cho ai cơ hội làm? Phần lớn cái ta gọi là “không ai làm được” thực ra là “mình chưa đủ kiên nhẫn để nhìn ai đó làm chậm hơn mình lúc đầu”. Ba việc đó cộng lại chính là số giờ bạn đang lấy của vai trò quản lý để làm công việc của một nhân viên.",
    },
    {
      q: "Khi bạn định giao một việc rồi lại thôi và tự làm, cảm giác thật sự ngăn bạn lại là gì?",
      guide: "Đừng dừng ở câu trả lời dễ dãi kiểu “vì giao đi mất công giải thích”. Đi sâu thêm một tầng: bạn sợ họ làm hỏng, sợ mất kiểm soát, sợ mình trở thành người thừa, hay ngại “làm phiền” người khác? Gọi đúng tên nỗi sợ đó ra, vì bạn không thể tháo một cái nút thắt khi còn chưa biết nó nằm ở đâu.",
    },
    {
      q: "Lần gần nhất bạn giao việc, bạn giao “đầu việc” hay giao cả kết quả và quyền quyết định?",
      guide: "Giao đầu việc là: “Em làm cái này, cái này, rồi hỏi lại tôi.” Giao kết quả là: “Tôi cần đạt được điều này, em tự chọn cách làm và chịu trách nhiệm với nó.” Nếu mọi quyết định vẫn phải chạy qua tay bạn, thì bạn chưa uỷ quyền — bạn chỉ đang chia nhỏ việc chân tay ra, và người ta vẫn phụ thuộc vào bạn y hệt như cũ.",
    },
    {
      q: "Nếu ngày mai bạn phải nghỉ hai tuần, không điện thoại, không email — việc gì trong công ty sẽ đứng lại?",
      guide: "Danh sách những việc “đứng lại” chính là tấm bản đồ chỉ ra những chỗ mà bạn đang là điểm nghẽn duy nhất. Với mỗi việc đó, hỏi tiếp: nó đang nằm trong đầu bạn, hay đã nằm trong một quy trình và một người mà bạn đã đào tạo? Một đội ngũ khoẻ không phải là đội khiến bạn tự hào khi bạn có mặt, mà là đội vẫn chạy tốt khi bạn vắng.",
    },
    {
      q: "Lần gần nhất bạn sai trước mặt đội ngũ, bạn đã nhận, đã lấp liếm, hay lặng lẽ cho qua?",
      guide: "Cách bạn xử lý cái sai của chính mình chính là mức trần cho việc nhân viên dám thành thật với bạn đến đâu. Nếu sếp không bao giờ sai, cả đội sẽ học cách giấu lỗi thay vì sửa lỗi. Uy tín không đến từ việc bạn không bao giờ sai, mà đến từ việc bạn nhận sai một cách bình tĩnh rồi cho mọi người thấy bạn sửa nó ra sao.",
    },
    {
      q: "Có cuộc nói chuyện thẳng thắn nào với một người trong đội mà bạn đang trì hoãn không? Bạn đã né nó bao lâu rồi?",
      guide: "Cuộc nói chuyện bạn ngại nhất thường lại chính là cuộc mà đội ngũ cần bạn thực hiện nhất. Hỏi thật lòng: bạn đang trì hoãn để bảo vệ người đó, hay để bảo vệ sự dễ chịu của chính mình? Mỗi ngày bạn né, cái giá không biến mất — nó chỉ chuyển sang người khác trong đội, những người đang phải gánh phần việc hoặc thái độ mà bạn chưa dám nói ra.",
    },
    {
      q: "Nhìn lại một ngày làm việc điển hình: bao nhiêu phần thời gian bạn dành cho việc của người quản lý, bao nhiêu phần bạn đang làm thay việc của nhân viên?",
      guide: "Việc của người quản lý là xây hệ thống, phát triển con người và ra quyết định — chứ không phải tự mình chạy hết mọi đầu việc. Nếu phần lớn thời gian của bạn là “làm thay”, thì vô tình bạn đã tự tuyển chính mình vào làm một nhân viên trong đội của mình, và trả cho vị trí đó cái giá đắt nhất công ty. Câu hỏi tiếp theo không phải “làm sao để làm nhanh hơn”, mà là “việc nào trong số này lẽ ra không nên nằm trên bàn của mình”.",
    },
  ],
};

export default function EbookClient() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: RESOURCE_CSS }} />
      <div className="rsc">
        <div className="top"><div className="wrap">
          <Link href="/" className="brand">Hà Bùi Academy<small>Học viện Quản trị &amp; Kỹ năng thiết yếu</small></Link>
          <Link href="/#he-sinh-thai" className="back">← Hệ sinh thái</Link>
        </div></div>

        <div className="wrap">
          <div className="head">
            <span className="eyebrow">Ebook · Đọc ~20 phút</span>
            <h1>{EBOOK.title}</h1>
            <p className="lead">{EBOOK.subtitle}</p>
          </div>

          <div className="body">
            <div className="card">
              <p className="intro">{EBOOK.intro}</p>
            </div>

            <div className="card">
              {EBOOK.questions.map((it, i) => (
                <div className="qblock" key={i}>
                  <div className="qnum">Câu {i + 1}/7</div>
                  <div className="qq">{it.q}</div>
                  <div className="qg">{it.guide}</div>
                </div>
              ))}
            </div>

            <div className="card">
              <div className="ctitle"><span className="ic">☕</span> Tủ ebook — mỗi cuốn là một buổi cà phê 99.000đ</div>
              <p className="csub">
                Không lý thuyết. Mỗi cuốn là một buổi ngồi nghe chuyện thật từ mười ba năm làm nghề — mà bạn giữ được
                mãi, đọc lại bao nhiêu lần tùy bạn. Đồng giá 99.000đ, kèm cam kết hoàn tiền không hỏi lý do.
              </p>
            </div>

            <Link href="/ebook/giao-viec-ma-khong-phai-lam-lai" className="card" style={{ display: "block", textDecoration: "none", color: "inherit" }}>
              <div className="ctitle"><span className="ic">📗</span> Giao việc mà không phải làm lại</div>
              <p className="csub" style={{ marginBottom: 0 }}>Mô hình 5G — hệ thống giao việc &amp; ủy quyền cho chủ doanh nghiệp và quản lý cấp trung · 13 chương · 99.000đ — đọc thử miễn phí →</p>
            </Link>

            <Link href="/ebook/nghe-thuat-thua-nhan-sai" className="card" style={{ display: "block", textDecoration: "none", color: "inherit" }}>
              <div className="ctitle"><span className="ic">📕</span> Nghệ thuật thừa nhận sai</div>
              <p className="csub" style={{ marginBottom: 0 }}>Phản hồi thông minh dưới áp lực mà không mất uy tín · 61 trang · 99.000đ — đọc thử 15 trang miễn phí →</p>
            </Link>

            <LeadCTA
              title="Muốn ngồi lại với bản in?"
              desc="Nhận bản PDF đẹp của “7 câu hỏi tự nhìn vào bản thân” — có chỗ để bạn viết câu trả lời, in ra và ngồi thật với chính mình."
              btnLabel="Tải bản PDF miễn phí"
              modalTitle="Nhận bản PDF ebook"
              modalDesc="Để lại email, tôi gửi bạn bản PDF “7 câu hỏi tự nhìn vào bản thân” có chỗ viết câu trả lời."
              doneMsg="Tôi sẽ gửi bản PDF tới email của bạn sớm — nhớ kiểm tra cả mục Spam nhé."
            />
          </div>
        </div>

        <footer>Hà Bùi Academy · <Link href="/">buithuha.com</Link></footer>
      </div>
    </>
  );
}
