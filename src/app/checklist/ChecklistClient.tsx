"use client";

import Link from "next/link";
import { RESOURCE_CSS } from "@/components/resource/resourceCss";
import LeadCTA from "@/components/resource/LeadCTA";

const CHECKLISTS = [
  {
    id: "onboarding-30-60-90", icon: "🚀", title: "Onboarding người mới 30-60-90 ngày",
    subtitle: "Dùng cho quản lý trực tiếp khi có nhân sự mới nhận việc — chạy đủ 3 mốc để người mới tự chạy được sau 90 ngày",
    items: [
      "Trước ngày đầu tiên: chuẩn bị xong tài khoản email, quyền truy cập công cụ, chỗ ngồi và thiết bị — để buổi sáng đầu không mất thời gian chờ IT",
      "Ngày đầu: gửi lịch 30 ngày đầu bằng văn bản (ai hướng dẫn phần nào, học gì tuần nào), đừng để người mới tự đoán",
      "Tuần 1: ngồi cùng viết ra 3-5 kết quả cụ thể họ phải đạt được ở ngày 30, ngày 60, ngày 90 — định nghĩa rõ ‘làm tốt’ trông như thế nào",
      "Tuần 1: chỉ định một ‘người đồng hành’ (buddy) để người mới hỏi việc vặt, tránh dồn mọi câu hỏi lên bạn",
      "Ngày 30: đặt lịch 1-1 kiểm tra — hỏi ‘việc gì đang mắc?’, ‘thiếu thông tin/quyền gì?’ và gỡ ngay trong buổi",
      "Ngày 30: giao một việc nhỏ trọn gói để họ tự làm từ đầu đến cuối, quan sát cách họ xử lý thay vì chỉ nghe báo cáo",
      "Ngày 60: rà lại 3-5 kết quả đã đặt — cái nào đạt, cái nào chưa, và ghi rõ nguyên nhân chưa đạt là do kỹ năng, quy trình hay do bạn chưa bàn giao đủ",
      "Ngày 60: giảm dần mức kèm cặp — chuyển từ ‘chỉ từng bước’ sang ‘giao mục tiêu, để họ tự chọn cách làm’",
      "Ngày 90: họp đánh giá thử việc bằng bằng chứng công việc thật, không đánh giá bằng cảm tính ‘thấy được’ hay ‘hợp gu’",
      "Ngày 90: ra quyết định rõ ràng — tiếp tục / gia hạn / dừng — và nói thẳng lý do với người mới, không né tránh",
      "Sau 90 ngày: hỏi lại người mới ‘quy trình onboarding chỗ nào rối, chỗ nào thiếu?’ và sửa tài liệu cho người kế tiếp",
    ],
  },
  {
    id: "giao-viec-uy-quyen", icon: "🎯", title: "Giao việc & uỷ quyền đúng cách",
    subtitle: "Dùng mỗi khi giao một đầu việc quan trọng — để thoát vòng lặp ôm việc mà kết quả vẫn đạt",
    items: [
      "Trước khi giao: tự hỏi ‘việc này BẮT BUỘC mình làm hay chỉ đang quen tay ôm?’ — nếu người khác làm được 70% chất lượng của bạn thì giao đi",
      "Nói rõ KẾT QUẢ cần đạt và tiêu chí ‘xong là như thế nào’, đừng chỉ giao đầu việc chung chung kiểu ‘em lo vụ đó nhé’",
      "Chốt deadline cụ thể ngày-giờ, không dùng ‘sớm’, ‘trong tuần’, ‘khi nào rảnh’",
      "Nói rõ mức quyền: việc nào tự quyết, việc nào phải hỏi bạn trước, ngân sách/giới hạn tới đâu",
      "Bàn giao đủ bối cảnh: vì sao việc này quan trọng, liên quan ai, đã có sẵn tài liệu/mẫu nào để họ không làm lại từ số 0",
      "Yêu cầu người nhận nhắc lại bằng lời của họ ‘em hiểu là em cần làm...’ để phát hiện lệch hiểu ngay lúc giao",
      "Hỏi lại ‘em cần gì từ chị để làm được việc này?’ và cấp quyền/thông tin/nguồn lực đó ngay",
      "Chốt các mốc check-in giữa chừng thay vì đợi đến deadline mới xem — mốc kiểm tra do bạn đặt, không chờ họ tự báo",
      "Khi họ mang vấn đề đến, hỏi ‘em nghĩ nên xử thế nào?’ trước khi đưa lời giải — tránh biến uỷ quyền thành nhận việc ngược",
      "Chấp nhận cách làm khác của họ nếu vẫn ra kết quả — chỉ can thiệp khi sai hướng, đừng bắt làm y hệt cách của bạn",
      "Sau khi xong: ghi nhận việc làm tốt cụ thể và chốt 1 điểm cần cải thiện cho lần sau — để lần giao tới nhẹ hơn",
    ],
  },
  {
    id: "hop-1-1", icon: "🗣️", title: "Họp 1-1 với nhân viên",
    subtitle: "Dùng cho buổi 1-1 định kỳ (nên 2 tuần/lần) — buổi của nhân viên, không phải buổi bạn báo cáo tình hình",
    items: [
      "Đặt lịch cố định lặp lại (ví dụ 30 phút, 2 tuần/lần) và bảo vệ nó — đừng hủy vì ‘bận’, hủy là gửi tín hiệu họ không quan trọng",
      "Gửi trước khung 3 câu để nhân viên chuẩn bị: việc đang chạy, việc đang mắc, điều muốn trao đổi",
      "Mở đầu bằng câu hỏi về họ chứ không về công việc: ‘Hai tuần qua thế nào?’ rồi im lặng nghe",
      "Để nhân viên nói phần lớn thời gian — nếu bạn nói quá nửa buổi thì đó là buổi họp sai",
      "Hỏi ‘việc gì đang cản trở em nhất?’ và gỡ được cái gì trong buổi thì gỡ ngay, không hẹn lại",
      "Ghi lại các điểm đã hứa xử lý và hạn xử lý — mang ra kiểm ở buổi sau để giữ uy tín",
      "Hỏi về định hướng phát triển: ‘em muốn giỏi hơn ở việc gì trong 3 tháng tới?’ — đừng chỉ nói chuyện đầu việc",
      "Đưa một phản hồi cụ thể (khen hoặc góp ý) dựa trên một tình huống thật gần đây, không nói chung chung",
      "Hỏi ngược: ‘có điều gì em muốn chị làm khác đi không?’ — và thật sự tiếp nhận, không phản bác ngay",
      "Chốt cuối buổi: mỗi bên 1-2 việc cần làm trước buổi tới, nói rõ ai làm gì",
      "Không biến 1-1 thành buổi soi lỗi hay dồn chỉ tiêu — việc đó để dịp khác, giữ 1-1 là không gian an toàn để nói thật",
    ],
  },
  {
    id: "phong-van-tuyen-dung", icon: "🔍", title: "Phỏng vấn & tuyển đúng người",
    subtitle: "Dùng cho mỗi vị trí cần tuyển — để chọn bằng bằng chứng năng lực, không chọn bằng cảm giác ‘hợp gu’",
    items: [
      "Trước khi đăng tin: viết ra 4-5 năng lực bắt buộc của vị trí và định nghĩa ‘đạt’ của từng cái — dựa trên việc thực tế họ sẽ làm",
      "Chuẩn bị sẵn bộ câu hỏi giống nhau cho mọi ứng viên cùng vị trí, để so sánh công bằng thay vì hỏi ngẫu hứng",
      "Dùng câu hỏi hành vi ‘Kể một lần cụ thể bạn đã...’ thay vì câu giả định ‘Nếu gặp X bạn sẽ làm gì’ — quá khứ thật đáng tin hơn lời hứa",
      "Với mỗi câu chuyện họ kể, đào sâu: ‘Bối cảnh là gì? Bạn làm cụ thể gì? Kết quả ra sao? Con số?’ — bóc tách vai trò thật của họ khỏi ‘cả team làm’",
      "Cho làm một bài thử/tình huống sát việc thật (30-60 phút) để xem năng lực thực, đừng chỉ tin hồ sơ và cách nói chuyện",
      "Chấm điểm từng năng lực bằng thang điểm ngay sau buổi, ghi bằng chứng cụ thể — không để ‘ấn tượng chung’ che mờ",
      "Cảnh giác thiên kiến ‘giống mình thì thích’ — hỏi thẳng ‘người này hợp việc, hay chỉ hợp trò chuyện với mình?’",
      "Kiểm tra động cơ: ‘vì sao bạn rời chỗ cũ?’ và ‘bạn mong gì ở vị trí này?’ — tìm sự khớp thật, không phải chỉ cần một chỗ làm",
      "Nói thẳng phần khó/áp lực của công việc trong lúc phỏng vấn — để họ tự loại nếu không phù hợp, tránh vỡ mộng sau 2 tuần",
      "Gọi ít nhất 1 người tham chiếu (sếp cũ) và hỏi câu cụ thể: ‘anh/chị có tuyển lại bạn ấy không, vì sao?’",
      "Ra quyết định dựa trên bảng điểm năng lực đã ghi, không dựa trên người phỏng vấn sau cùng còn nhớ ai — quyết xong phản hồi tử tế cả người trượt",
    ],
  },
  {
    id: "phan-hoi-noi-chuyen-kho", icon: "💬", title: "Phản hồi & xử lý cuộc nói chuyện khó",
    subtitle: "Dùng khi phải góp ý một vấn đề nhạy cảm (thái độ, kết quả kém, xung đột) — để nói thẳng mà không làm hỏng quan hệ",
    items: [
      "Xử lý sớm khi vấn đề còn nhỏ — đừng gom dồn 3 tháng rồi bùng một lần, người nghe sẽ thấy bị phục kích",
      "Chuẩn bị trước: viết ra 1-2 sự việc CỤ THỂ (ngày nào, việc gì) làm bằng chứng, thay vì cảm nhận chung ‘dạo này em sao ấy’",
      "Chọn nói riêng, đúng lúc, đủ thời gian — không góp ý nặng trước mặt người khác hay lúc đang nóng",
      "Mở đầu bằng ý định tốt: ‘chị nói chuyện này vì muốn em tốt hơn/vì chị quan tâm’, để người nghe không thủ thế ngay",
      "Mô tả sự việc quan sát được, không dán nhãn tính cách: nói ‘báo cáo tuần này trễ 2 ngày’ thay vì ‘em vô trách nhiệm’",
      "Nói rõ tác động cụ thể: việc đó ảnh hưởng đến ai, đến kết quả gì — để họ hiểu vì sao nó quan trọng",
      "Dừng lại và HỎI góc nhìn của họ: ‘từ phía em thì chuyện gì đang xảy ra?’ — có thể có nguyên nhân bạn chưa biết, và thật sự lắng nghe",
      "Giữ bình tĩnh nếu họ phản ứng gắt — không cãi tay đôi, không leo thang; cần thì hạ nhịp ‘mình cùng tìm cách nhé’",
      "Nếu là lỗi có phần của bạn (giao việc chưa rõ, thiếu bàn giao), nhận phần đó ra tiếng — nhận sai đúng chỗ làm tăng uy tín, không mất",
      "Cùng chốt bước tiếp theo cụ thể và mốc thời gian: điều gì cần thay đổi, đến khi nào, bạn hỗ trợ gì",
      "Kết thúc bằng sự tin tưởng, không bằng đe dọa — và theo dõi thật, ghi nhận ngay khi thấy chuyển biến",
    ],
  },
  {
    id: "danh-gia-hieu-suat", icon: "📊", title: "Đánh giá hiệu suất định kỳ",
    subtitle: "Dùng cho kỳ đánh giá quý/năm — để đánh giá bằng bằng chứng cả kỳ, tránh ‘nhớ gì chấm nấy’ và cảm tính",
    items: [
      "Đầu kỳ đã phải chốt trước tiêu chí và mục tiêu đo được — không đánh giá theo thước đo mà nhân viên chưa từng biết trước",
      "Suốt kỳ: ghi lại các tình huống thật (làm tốt và chưa tốt) ngay khi xảy ra — để cuối kỳ không bị chi phối bởi vài tuần gần nhất",
      "Trước buổi họp: tổng hợp bằng chứng cả kỳ theo từng mục tiêu/năng lực, không chấm bằng ấn tượng chung",
      "Yêu cầu nhân viên tự đánh giá trước và gửi cho bạn — để đối chiếu góc nhìn hai bên, mở đầu bằng câu chuyện của họ",
      "Tránh các bẫy chấm điểm: hiệu ứng hào quang (giỏi 1 việc chấm cao tất cả), thiên vị người thân thiết, chấm ai cũng ‘khá’ cho yên",
      "Trong buổi: đi qua từng mục tiêu, đối chiếu kết quả với tiêu chí đầu kỳ, nêu bằng chứng cụ thể cho mỗi mức điểm",
      "Cân bằng: ghi nhận rõ điểm mạnh cụ thể trước, rồi mới vào điểm cần cải thiện — đừng biến cả buổi thành soi lỗi",
      "Với điểm chưa đạt, cùng bóc nguyên nhân: do kỹ năng, do nguồn lực, do quy trình hay do quản lý bàn giao chưa đủ — không mặc định lỗi tại nhân viên",
      "Tách bạch câu chuyện lương/thưởng ra khỏi câu chuyện phát triển nếu có thể — để phần góp ý không bị nhiễu bởi tiền",
      "Chốt 2-3 mục tiêu phát triển cho kỳ tới, cụ thể và đo được, kèm cam kết hỗ trợ từ phía bạn",
      "Kết thúc bằng văn bản tóm tắt hai bên đồng thuận và lịch check-in giữa kỳ — đừng để đến cuối kỳ sau mới nhắc lại",
    ],
  },
];

export default function ChecklistClient() {
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
            <span className="eyebrow">Checklist quản lý</span>
            <h1>6 checklist dùng được ngay cho người quản lý</h1>
            <p className="lead">Không phải lý thuyết — đây là những việc cụ thể cần làm, đúc kết từ 15 năm mình đào tạo và trực tiếp quản lý. Tick ngay trên trang khi bạn dùng, hoặc tải trọn bộ về để in và dùng lại.</p>
          </div>

          <div className="body">
            {CHECKLISTS.map((cl, i) => (
              <div className="card" key={cl.id}>
                <div className="ctitle"><span className="ic">{cl.icon}</span>{cl.title}</div>
                <div className="csub">{cl.subtitle}</div>
                <ul className="check">
                  {cl.items.map((it, j) => {
                    const id = `c${i}-${j}`;
                    return (
                      <li key={j}>
                        <input type="checkbox" id={id} />
                        <label htmlFor={id}>{it}</label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}

            <LeadCTA
              title="Muốn dùng lại nhiều lần?"
              desc="Nhận trọn bộ 6 checklist bản PDF gọn gàng để in ra, dán lên bàn và dùng mỗi khi cần — miễn phí."
              btnLabel="Nhận trọn bộ PDF miễn phí"
              modalTitle="Nhận trọn bộ 6 checklist (PDF)"
              modalDesc="Để lại email, mình gửi bạn bản PDF trọn bộ 6 checklist quản lý này."
              doneMsg="Mình sẽ gửi bộ checklist tới email của bạn sớm — nhớ kiểm tra cả mục Spam nhé."
            />
          </div>
        </div>

        <footer>Hà Bùi Academy · <Link href="/">buithuha.com</Link></footer>
      </div>
    </>
  );
}
