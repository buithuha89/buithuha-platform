// Nội dung 6 bài chia sẻ của chủ đề Yêu lành.
// Giọng thương hiệu: Hà = "tôi" (người biên tập, không phải chuyên gia), người đọc = "bạn".
// Painpoint xoay quanh: mắc kẹt, bào mòn, kiệt quệ, thỏa hiệp, mất dần động lực hành động.

export interface ArticleSection {
  h: string;
  ps: string[];
  bullets?: string[];
  note?: string;
}

export interface YeuLanhArticle {
  slug: string;
  icon: string;
  title: string;
  lead: string;
  sections: ArticleSection[];
  /** Bước nhỏ + checkpoint cuối bài */
  action: { step: string; checkpoint: string };
  next: string | null;
}

export const ARTICLES: YeuLanhArticle[] = [
  {
    slug: "cho-di-nhieu-ma-van-thay-trong",
    icon: "🕳️",
    title: "Vì sao cho đi nhiều mà vẫn thấy trống",
    lead: "Bạn là người nhắn trước, người nhớ ngày, người nhường lịch. Bạn cho đi nhiều hơn hẳn — vậy mà cuối ngày, cảm giác đọng lại thường là trống rỗng. Bài này gọi tên cơ chế đứng sau cảm giác đó.",
    sections: [
      {
        h: "Cảm giác trống không phải vì bạn chưa cho đủ",
        ps: [
          "Phản xạ thường gặp nhất khi thấy trống là… cho thêm. Quan tâm nhiều hơn, nhường nhịn nhiều hơn, cố gắng nhiều hơn — với hy vọng lần này sẽ đủ. Nhưng nếu cho thêm mà giải quyết được, bạn đã không đọc đến dòng này.",
          "Điều tôi nhận ra khi tìm và đối chiếu các tài liệu về chủ đề này: cảm giác trống thường không nằm ở lượng cho đi, mà ở lý do cho đi. Khi yêu thương trở thành cách để được công nhận — cho đi để được yêu lại, để được giữ lại, để chứng minh mình xứng đáng — thì mỗi lần cho đi là một lần chờ. Và chờ mà không được đáp lại đúng như mong đợi, thì càng cho càng cạn.",
        ],
      },
      {
        h: "Hai mô hình đã được thẩm định giúp gọi tên điều này",
        ps: [
          "Thứ nhất là thuyết gắn bó (attachment theory) của John Bowlby và Mary Ainsworth — một trong những khung được nghiên cứu nhiều nhất của tâm lý học về quan hệ. Người có kiểu gắn bó lo âu thường học từ rất sớm rằng tình cảm phải đổi bằng nỗ lực: phải ngoan, phải giỏi, phải dễ chịu thì mới được yêu. Lớn lên, phản xạ đó đi thẳng vào tình yêu — cho đi trở thành cách để giữ người kia ở lại.",
          "Thứ hai là khái niệm “quan tâm quên mình” (unmitigated communion) của nhà nghiên cứu Vicki Helgeson: đặt nhu cầu người khác lên trước đến mức gạt hẳn nhu cầu của mình. Các nghiên cứu theo hướng này cho thấy nó gắn với kiệt sức và tâm trạng đi xuống — không phải vì quan tâm là sai, mà vì quan tâm một chiều kéo dài sẽ bào mòn chính người cho đi.",
        ],
        note: "Gọi được tên cơ chế là bước đầu để thoát khỏi nó. Bạn không “yếu đuối” hay “yêu quá nhiều” — bạn đang chạy một phản xạ có tên, có nguồn gốc, và có cách điều chỉnh.",
      },
      {
        h: "Vậy điều chỉnh bắt đầu từ đâu?",
        ps: [
          "Không phải từ việc cho đi ít lại — mà từ việc đưa mình trở lại danh sách những người bạn quan tâm. Câu hỏi chuyển hướng mọi thứ không phải “mình cần làm gì thêm cho người ấy?”, mà là “hôm nay mình đã làm gì cho mình?”.",
          "Nghe nhỏ, nhưng với người đã quen quên mình, đó là một cơ bắp phải tập lại từ đầu — từng chút một, mỗi ngày.",
        ],
      },
    ],
    action: {
      step: "Hôm nay, làm một việc chỉ dành cho bạn — không phục vụ ai khác. Một ly cà phê một mình, một chương sách, 15 phút đi bộ. Nhỏ thôi, nhưng là của bạn.",
      checkpoint: "Tối nay tự hỏi: khi làm việc đó, mình có thấy áy náy không? Nếu có — chính cảm giác áy náy đó là thứ đáng để quan sát tiếp.",
    },
    next: "minh-co-dang-doi-hoi-qua-khong",
  },
  {
    slug: "minh-co-dang-doi-hoi-qua-khong",
    icon: "❓",
    title: "“Mình có đang đòi hỏi quá không?”",
    lead: "Đây có lẽ là câu tự vấn quen thuộc nhất của người cho đi nhiều: muốn nói ra điều mình cần, rồi khựng lại — “hay là mình đòi hỏi quá?”. Bài này giúp bạn phân biệt nhu cầu chính đáng và đòi hỏi, để câu hỏi đó thôi giam bạn trong im lặng.",
    sections: [
      {
        h: "Vì sao câu hỏi này xuất hiện ở người cho đi nhiều nhất?",
        ps: [
          "Nghe ngược đời: người cho đi ít nhất lại thường tự tin nhất khi yêu cầu, còn người cho đi nhiều nhất lại hay sợ mình đòi hỏi. Nhà nghiên cứu Dana Jack gọi hiện tượng đứng sau là “tự làm mình im lặng” (silencing the self): thói quen nén nhu cầu và ý kiến của mình để giữ hòa khí trong quan hệ — và các nghiên cứu theo hướng này cho thấy nó liên quan chặt với tâm trạng đi xuống kéo dài.",
          "Cái bẫy nằm ở chỗ: mỗi lần bạn nén lại “cho êm chuyện”, bạn xác nhận với chính mình rằng nhu cầu của mình không đáng nói. Lâu dần, ranh giới giữa “biết điều” và “biến mất” mờ đi — và bạn mắc kẹt trong một mối quan hệ mà chỉ một người được có nhu cầu.",
        ],
      },
      {
        h: "Nhu cầu và đòi hỏi khác nhau ở đâu?",
        ps: [
          "Khung tôi thấy rõ ràng nhất khi biên tập chủ đề này là Giao tiếp phi bạo lực (Nonviolent Communication) của Marshall Rosenberg. Theo khung đó, mọi cảm xúc khó chịu đều trỏ về một nhu cầu chưa được đáp ứng — và nhu cầu thì luôn chính đáng. Cái có thể bàn là cách đáp ứng.",
        ],
        bullets: [
          "Nhu cầu: “Tôi cần cảm thấy mình được ưu tiên trong những dịp quan trọng.” — chính đáng, không cần xin lỗi khi nói ra.",
          "Đòi hỏi: “Anh phải trả lời tin nhắn trong 5 phút, không thì là không yêu tôi.” — ép một cách đáp ứng cụ thể, kèm đe dọa.",
          "Phép thử nhanh: nếu điều bạn muốn nói nhắm đến việc người kia hiểu mình, đó là nhu cầu. Nếu nó nhắm đến việc người kia phải làm đúng một kịch bản, đó đang trượt về đòi hỏi.",
        ],
        note: "Được ưu tiên, được lắng nghe, được an toàn, được tôn trọng — bốn nhu cầu này chưa bao giờ là “đòi hỏi quá” trong bất kỳ mối quan hệ lành mạnh nào.",
      },
      {
        h: "Nói ra mà không thấy có lỗi",
        ps: [
          "Công thức ba phần của Rosenberg đáng để tập: “Khi [sự việc cụ thể], tôi cảm thấy [cảm xúc], vì tôi cần [nhu cầu].” Không buộc tội, không kịch bản — chỉ là thông tin trung thực về mình.",
          "Ví dụ: “Khi cả tuần mình không có buổi tối nào cho nhau, em thấy tủi, vì em cần cảm giác tụi mình vẫn là ưu tiên của nhau.” So với việc nén lại rồi bùng nổ, câu này vừa dễ nghe hơn — vừa giữ được bạn nguyên vẹn.",
        ],
      },
    ],
    action: {
      step: "Viết ra (chưa cần nói) một nhu cầu bạn đã nén lâu nhất, theo đúng công thức: “Khi… tôi cảm thấy… vì tôi cần…”.",
      checkpoint: "Đọc lại câu vừa viết và tự hỏi: nếu bạn thân của mình nói câu này với người yêu của cô ấy, mình có nghĩ cô ấy đòi hỏi quá không?",
    },
    next: "ranh-gioi-trong-tinh-yeu",
  },
  {
    slug: "ranh-gioi-trong-tinh-yeu",
    icon: "🚪",
    title: "Ranh giới trong tình yêu — giữ mình mà không đẩy người kia ra",
    lead: "Nhiều người ngại đặt ranh giới vì sợ nó biến tình yêu thành giao kèo lạnh lùng. Nhưng ranh giới không phải bức tường — nó là cánh cửa có tay nắm từ bên trong. Bài này chia sẻ cách dựng ranh giới đầu tiên mà không thấy có lỗi.",
    sections: [
      {
        h: "Ranh giới là gì — và không phải là gì",
        ps: [
          "Cuốn sách kinh điển về chủ đề này — “Boundaries” của Henry Cloud và John Townsend — định nghĩa ranh giới đơn giản: đường phân định đâu là của mình, đâu là của người khác. Cảm xúc của bạn, thời gian của bạn, giá trị của bạn — là của bạn, và bạn có quyền quyết định cách chúng được đối xử.",
          "Ranh giới không phải tối hậu thư, không phải hình phạt, càng không phải cách kiểm soát người kia. Nó chỉ nói một điều: “đây là điều tôi cần để ở trong mối quan hệ này mà vẫn còn là tôi.”",
        ],
        bullets: [
          "Bức tường: “Tôi không nói chuyện với anh nữa.” — chặn kết nối.",
          "Ranh giới: “Em cần mình ngừng cuộc cãi này 30 phút để bình tĩnh, rồi nói tiếp.” — giữ kết nối, nhưng có điều kiện lành mạnh.",
          "Bức tường dựng lên vì sợ. Ranh giới dựng lên vì tôn trọng — cả mình lẫn người kia.",
        ],
      },
      {
        h: "Vì sao đặt ranh giới lại thấy có lỗi?",
        ps: [
          "Vì với người đã quen thỏa hiệp, mọi lần nói “không” đều nghe như phản bội. Bạn đã quen là người dễ chịu — nên lần đầu giữ một điều gì đó cho mình, cảm giác tội lỗi gần như chắc chắn xuất hiện. Điều quan trọng cần biết trước: cảm giác đó là dấu hiệu bạn đang tập một điều mới, không phải bằng chứng bạn đang làm điều sai.",
          "Và phản ứng của người kia trước ranh giới của bạn là một nguồn thông tin quý. Người thương bạn lành mạnh có thể ngạc nhiên, có thể cần thời gian — nhưng sẽ tôn trọng. Người chỉ quen với phiên bản luôn nhường của bạn sẽ khó chịu ra mặt. Cả hai phản ứng đều cho bạn biết mình đang đứng ở đâu.",
        ],
      },
      {
        h: "Ranh giới đầu tiên nên nhỏ",
        ps: [
          "Đừng bắt đầu bằng ranh giới lớn nhất, đau nhất. Bắt đầu bằng một điều nhỏ mà bạn giữ được: một buổi tối mỗi tuần cho riêng mình, không trả lời tin nhắn công việc của người ấy sau 11 giờ đêm, không hủy hẹn với bạn thân vì kế hoạch phút chót của người kia.",
          "Ranh giới nhỏ giữ được sẽ xây niềm tin vào chính mình — thứ đã bị bào mòn sau thời gian dài thỏa hiệp. Từ niềm tin đó, những ranh giới lớn hơn mới đứng vững được.",
        ],
      },
    ],
    action: {
      step: "Chọn một ranh giới nhỏ nhất mà bạn tin mình giữ được tuần này, và nói ra bằng công thức: “Em/mình cần [điều cụ thể], vì [nhu cầu].”",
      checkpoint: "Cuối tuần tự hỏi: mình giữ được ranh giới đó mấy ngày? Lúc suýt buông, điều gì kéo mình lại — hay điều gì làm mình buông?",
    },
    next: "vong-lap-thoa-hiep",
  },
  {
    slug: "vong-lap-thoa-hiep",
    icon: "🔁",
    title: "Vòng lặp thỏa hiệp — nhận ra và bước ra",
    lead: "Không ai đánh mất mình trong một ngày. Nó diễn ra qua từng nhân nhượng nhỏ — tưởng vô hại, cộng lại thành bào mòn. Bài này giúp bạn nhìn thấy vòng lặp trước khi nó lấy nốt động lực thay đổi của bạn.",
    sections: [
      {
        h: "Vòng lặp vận hành thế nào",
        ps: [
          "Nó bắt đầu bằng một nhượng bộ rất nhỏ: bỏ một buổi hẹn với bạn bè, im lặng cho qua một câu nói tổn thương, tự nhủ “thôi, chuyện nhỏ mà”. Vấn đề không nằm ở lần nhượng bộ đó — mà ở chỗ nó lặng lẽ trở thành chuẩn mới. Lần sau, mức nhượng bộ tương tự không còn được ghi nhận nữa; muốn giữ hòa khí, phải nhượng thêm một nấc.",
          "Cứ thế, cái bất thường của năm ngoái thành cái bình thường của năm nay. Đến khi nhìn lại, bạn không nhận ra mình đã đi xa đến vậy — vì mỗi bước đều quá nhỏ để báo động.",
        ],
      },
      {
        h: "Vì sao biết rồi mà vẫn khó bước ra?",
        ps: [
          "Kinh tế học hành vi có một khái niệm được kiểm chứng rất nhiều: ngụy biện chi phí chìm (sunk cost fallacy) — con người khó rời bỏ thứ mình đã đầu tư nhiều, kể cả khi ở lại chỉ tốn thêm. “Mình đã bên nhau 5 năm rồi” là phiên bản tình yêu của nó. Nhưng 5 năm đã qua không phải lý do để ở lại — nó là lý do bạn thấy khó đi, và hai điều đó khác nhau.",
          "Cộng thêm một điều nữa: thỏa hiệp kéo dài làm cạn chính nguồn năng lượng cần cho việc thay đổi. Người kiệt quệ không bước ra được không phải vì thiếu lý trí — mà vì đã mất dần động lực hành động. Vì vậy lối ra không bao giờ là một cú quay xe lớn; nó là những bước đủ nhỏ để làm được ngay cả khi đang mệt.",
        ],
        note: "Bước ra khỏi vòng lặp không đồng nghĩa với rời bỏ mối quan hệ. Nó nghĩa là ngừng nhượng bộ tự động — để mọi lựa chọn từ đây là lựa chọn có ý thức của bạn.",
      },
      {
        h: "Ba dấu hiệu bạn đang ở trong vòng lặp",
        ps: [],
        bullets: [
          "Bạn kể về cuộc sống của mình ngày càng ít — với người ấy, và với cả bạn bè.",
          "Bạn tự kiểm duyệt trước khi nói: soạn câu trong đầu, cân nhắc phản ứng của người kia, rồi thường là… thôi.",
          "Danh sách những việc từng làm bạn vui cứ ngắn dần — không phải vì bạn hết thích, mà vì “không tiện nữa”.",
        ],
      },
      {
        h: "Bước ra — bắt đầu bằng một việc lấy lại",
        ps: [
          "Chọn một điều bạn đã nhượng bộ sớm nhất — thường là điều nhỏ nhất — và lấy lại nó trước. Buổi cà phê với bạn thân. Lớp học từng bỏ dở. Một sở thích cũ. Việc lấy lại một điều nhỏ chứng minh với bạn điều mà không lời khuyên nào chứng minh được: bạn vẫn còn khả năng hành động.",
        ],
      },
    ],
    action: {
      step: "Viết ra 3 điều bạn đã thôi làm từ khi vào mối quan hệ này. Chọn 1 điều nhỏ nhất — và đặt lịch làm lại nó trong 7 ngày tới.",
      checkpoint: "Sau khi làm, tự hỏi: cảm giác lúc đó giống gặp lại một người quen cũ không? Người quen đó — chính là bạn.",
    },
    next: "yeu-lanh-nghia-la-gi",
  },
  {
    slug: "yeu-lanh-nghia-la-gi",
    icon: "🌱",
    title: "Yêu lành nghĩa là gì",
    lead: "Sau khi gọi tên được những gì không ổn, câu hỏi tự nhiên là: vậy thế nào mới là ổn? “Yêu lành” không phải yêu ít đi, càng không phải phòng thủ. Bài này phác ra đích đến — để bạn biết mình đang đi về đâu.",
    sections: [
      {
        h: "Không phải yêu ít đi",
        ps: [
          "Người vừa nhận ra mình cho đi quá nhiều thường bật sang thái cực kia: yêu dè chừng, chia đôi sòng phẳng mọi nỗ lực, ai nhắn trước là thua. Đó không phải yêu lành — đó là phòng thủ, và phòng thủ cũng mệt chẳng kém gì cho đi quên mình.",
          "Yêu lành là trạng thái thứ ba: yêu hết lòng mà vẫn còn nguyên mình. Vẫn nhắn trước khi nhớ, vẫn nhường khi muốn nhường — nhưng từ lựa chọn, không từ nỗi sợ bị bỏ lại.",
        ],
      },
      {
        h: "Hai khung lý thuyết cho cùng một đích đến",
        ps: [
          "Thuyết gắn bó gọi đích đến này là gắn bó an toàn (secure attachment): tin rằng mình được yêu mà không phải liên tục kiểm tra hay níu giữ — và nghiên cứu dọc theo hướng này cho thấy kiểu gắn bó có thể thay đổi theo thời gian, qua trải nghiệm và luyện tập. Nghĩa là: xuất phát điểm lo âu không phải bản án chung thân.",
          "Nhà trị liệu David Schnarch thì gọi nó là sự phân hóa (differentiation): khả năng giữ vững con người mình ngay khi ở rất gần người mình yêu — không hòa tan vào người kia, cũng không phải tránh xa để giữ mình. Hai khung, một điểm chung: gần gũi và nguyên vẹn không loại trừ nhau.",
        ],
      },
      {
        h: "Bốn dấu hiệu của yêu lành",
        ps: [],
        bullets: [
          "Bạn nói được nhu cầu của mình mà không thấy có lỗi — và nghe được nhu cầu của người kia mà không thấy bị tấn công.",
          "Cuộc sống của bạn vẫn đủ rộng: bạn bè, sở thích, mục tiêu riêng — tình yêu là một phần quan trọng, không phải toàn bộ.",
          "Xung đột làm hai người hiểu nhau hơn, thay vì làm một người nhỏ lại.",
          "Bạn ở lại vì muốn ở lại — không phải vì sợ ở một mình, hay vì tiếc những năm đã đầu tư.",
        ],
        note: "Đọc bốn dấu hiệu này, đừng chấm điểm mối quan hệ — hãy chấm hướng đi. Câu hỏi đúng không phải “đạt hay chưa đạt”, mà là “đang tiến gần hơn, hay đang lùi xa dần?”.",
      },
      {
        h: "Và nó bắt đầu từ phía bạn",
        ps: [
          "Tin không dễ nghe: bạn không điều khiển được người kia thay đổi. Tin dễ chịu hơn: yêu lành không cần đợi người kia đi trước. Mỗi nhu cầu bạn nói ra, mỗi ranh giới bạn giữ được, mỗi phần đời riêng bạn lấy lại — đều đang đổi luật chơi của mối quan hệ, từ phía duy nhất bạn kiểm soát được: phía bạn.",
        ],
      },
    ],
    action: {
      step: "Đọc lại 4 dấu hiệu trên, chọn 1 dấu hiệu bạn thấy xa mình nhất — và viết 1 câu: bước nhỏ nhất để nhích về phía đó tuần này là gì?",
      checkpoint: "Cuối tuần tự hỏi: mình đã nhích được một chút chưa? Một chút là đủ — hướng đi quan trọng hơn tốc độ.",
    },
    next: "buoc-nho-moi-ngay-checkpoint",
  },
  {
    slug: "buoc-nho-moi-ngay-checkpoint",
    icon: "📝",
    title: "Bước nhỏ mỗi ngày + checkpoint — cách thay đổi không cần cú quay xe",
    lead: "Mọi bài trong chủ đề này đều kết thúc bằng một bước nhỏ và một câu tự hỏi. Đó không phải cho có — đó là toàn bộ phương pháp. Bài này giải thích vì sao bước nhỏ thắng quyết tâm lớn, và cách dùng checkpoint mỗi ngày.",
    sections: [
      {
        h: "Vì sao quyết tâm lớn hay thất bại",
        ps: [
          "Người đang kiệt quệ thường tự trách mình thiếu ý chí. Nhưng nhà nghiên cứu hành vi BJ Fogg (Đại học Stanford), tác giả mô hình Tiny Habits, chỉ ra điều ngược lại: hành vi xảy ra khi động lực, khả năng và lời nhắc gặp nhau — và với người đã mất dần động lực, cách duy nhất để hành động vẫn xảy ra là hạ độ khó xuống thật thấp. Thay đổi lớn đòi hỏi động lực lớn — đúng thứ bạn đang thiếu. Bước nhỏ chỉ cần một chút — đúng mức bạn đang có.",
          "Vậy nên đừng đặt mục tiêu “từ nay mình sẽ sống khác”. Hãy đặt: “tối nay mình viết một câu”. Bước nhỏ đến mức không thể thất bại — đó là tiêu chuẩn.",
        ],
      },
      {
        h: "Checkpoint: một câu hỏi mỗi tối",
        ps: [
          "Checkpoint không phải nhật ký dài. Nó là một câu tự hỏi cuối ngày, trả lời trong một dòng. Tác dụng của nó nằm ở chỗ khác với vẻ ngoài đơn giản: nó buộc bạn quan sát mình mỗi ngày — và người quan sát được mình thì không còn trôi tự động trong vòng lặp cũ nữa.",
        ],
        bullets: [
          "Hôm nay mình đã gọi tên được cảm xúc nào?",
          "Hôm nay mình có nén lại điều gì “cho êm chuyện” không?",
          "Hôm nay mình đã làm được điều gì — dù rất nhỏ — cho chính mình?",
        ],
        note: "Chỉ cần một trong ba câu, mỗi tối, một dòng trả lời. Sau 30 ngày, bạn sẽ có thứ quý hơn mọi lời khuyên: dữ liệu thật về chính mình.",
      },
      {
        h: "Và đừng đi một mình",
        ps: [
          "Điều tôi tin nhất sau nhiều năm làm nghề đào tạo: thay đổi bền không đến từ cố gắng đơn độc, mà từ việc được nhìn thấy trên đường đi. Được kể ra — kể cả ẩn danh — rằng hôm nay mình giữ được một ranh giới, hay hôm nay mình buông mất, và được người đồng cảnh ngộ đáp lại “tôi cũng thế” — cảm giác được đồng cảm đó nạp lại động lực theo cách không cuốn sách nào làm được.",
          "Vì vậy cộng đồng của chủ đề này sinh ra để bạn chia sẻ checkpoint của mình — hiện danh hay ẩn danh tùy bạn chọn. Không ai khuyên bảo ai, không ai phán xét ai. Chỉ là những người đang đi cùng một con đường, điểm danh mỗi ngày.",
        ],
      },
      {
        h: "Bắt đầu từ đâu: cẩm nang 7 ngày",
        ps: [
          "Để bạn không phải tự thiết kế lộ trình, tôi đã gom toàn bộ phương pháp này thành một cẩm nang 7 ngày: mỗi ngày một bước dưới 5 phút, kèm một câu checkpoint buổi tối. Miễn phí, làm một mình được, không cần kể với ai.",
        ],
      },
    ],
    action: {
      step: "Mở cẩm nang 7 ngày (nút bên dưới) và làm Ngày 1 ngay tối nay — chỉ mất 5 phút.",
      checkpoint: "Câu checkpoint đầu tiên nằm sẵn trong đó. Hẹn gặp bạn ở Ngày 7.",
    },
    next: null,
  },
];

export function getArticle(slug: string): YeuLanhArticle | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
