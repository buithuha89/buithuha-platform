"use client";

import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";
import { RESOURCE_CSS } from "@/components/resource/resourceCss";
import { createClient } from "@/lib/supabase/client";
import { siteConfig } from "@/lib/site-config";

const SLUG = "/ebook/khong-phai-do-ban-nhay-cam";
const PRICE = "99.000đ";
const nw: CSSProperties = { whiteSpace: "nowrap" };

const PAINS = [
  "“Ý tưởng của bạn bị một người thâm niên hơn trình bày lại như của họ.”",
  "“Bạn được giao những việc không ai muốn làm, rồi bị chê chậm chạp.”",
  "“Bạn kể với một người bạn, người đó bảo: công ty nào chả thế, em phải khéo lên.”",
];

const WHAT_YOU_GET = [
  { t: "Khung 5B trọn vẹn — Bắt bài · Biên giới · Bày tỏ · Bằng chứng · Bước tiếp", d: "Một trình tự đủ 5 bước theo đúng thứ tự nên làm — vì khi bị chèn ép, hầu hết chúng ta hành động ngược trình tự: phản ứng trước khi hiểu chuyện, nghỉ việc trước khi kịp thử nước đi nào." },
  { t: "Tám kiểu người khiến bạn khổ sở", d: "Bảy chân dung theo nghiên cứu của giáo sư Tessa West (Đại học New York) — kẻ nịnh trên đạp dưới, kẻ cướp công… — cộng một kiểu thứ tám tôi gặp nhiều ở môi trường Việt Nam. Mỗi kiểu có dấu hiệu nhận diện, câu nói đặc trưng và nước đi đầu tiên." },
  { t: "Bộ thước đo: va chạm bình thường hay bắt nạt?", d: "Để bạn thôi tự hỏi “mình có làm quá lên không” — và biết chuyện đang ở mức nào, cần xử theo cách nào." },
  { t: "Từng câu ranh giới + công thức DESC để nói điều khó", d: "Không phải lời khuyên “hãy tự tin lên” — là nguyên văn từng câu để nói, kèm tình huống mô phỏng có lời thoại." },
  { t: "Nhật ký năm cột — ghi chép như luật sư, báo cáo như người chuyên nghiệp", d: "Để lời nói của bạn có trọng lượng khi cần phản ánh, thay vì thành “lời em nói với lời chị ấy nói”." },
  { t: "Chương phản đòn thực dụng — dành cho kẻ chèn ép có tính toán", d: "Mọi kỹ thuật đều hợp pháp, chuyên nghiệp, và không đòi bạn trở thành người mà chính bạn không muốn ngồi cạnh." },
  { t: "Bốn câu hỏi cho quyết định đi hay ở", d: "Không nên rời đi khi chưa biết mình rời đi vì điều gì — chương 9 giúp bạn quyết định lớn nhất một cách tỉnh táo." },
];

const CHAPTERS = [
  { part: "Phần một — BẮT BÀI: gọi đúng tên chuyện đang xảy ra", items: ["Không phải do bạn nhạy cảm", "Tám kiểu người khiến bạn khổ sở", "Va chạm bình thường hay bắt nạt?"] },
  { part: "Phần hai — BIÊN GIỚI", items: ["Dựng ranh giới mà không thành kẻ khó gần"] },
  { part: "Phần ba — BÀY TỎ", items: ["Nói điều khó nói mà không run"] },
  { part: "Phần bốn — BẰNG CHỨNG", items: ["Ghi chép như luật sư, báo cáo như người chuyên nghiệp"] },
  { part: "Phần năm — BƯỚC TIẾP", items: ["Giữ đầu óc mình tỉnh", "Phản đòn thực dụng", "Đi hay ở", "Điều cuốn sách này không làm được — nói thẳng để bạn không phí thời gian"] },
];

const FOR_WHOM = [
  { who: "Người mới đi làm một vài năm đầu", fear: "“Em không biết chuyện này là bình thường hay là em đang bị bắt nạt. Ai cũng bảo em phải khéo lên.”" },
  { who: "Người đang bị cướp công, cô lập, chèn ép", fear: "“Nhóm chat của phòng có một nhóm chat nhỏ hơn — và mình không ở trong đó.”" },
  { who: "Người đang tự nghi ngờ chính mình", fear: "“Đến một lúc mình không còn chắc điều gì có thật nữa. Có khi vấn đề nằm ở mình thật.”" },
];

function BuyGate() {
  const [state, setState] = useState<"loading" | "guest" | "user">("loading");

  useEffect(() => {
    const supabase = createClient();
    supabase.auth
      .getUser()
      .then(({ data: { user } }) => setState(user ? "user" : "guest"))
      .catch(() => setState("guest"));
  }, []);

  return (
    <div className="ctaband" id="mua">
      {state === "loading" && <p style={{ color: "#C9C0B1", margin: 0 }}>Đang kiểm tra tài khoản…</p>}

      {state === "guest" && (
        <>
          <h3>Mời tôi một buổi cà phê — {PRICE}</h3>
          <p>
            Không phải lý thuyết. Là một buổi ngồi nghe chuyện thật từ <span style={nw}>mười lăm</span> năm làm nghề{" "}
            <span style={nw}>nhân sự</span> — những chuyện tôi đã ngồi cùng người trẻ lúc mười một giờ đêm — mà bạn giữ
            được mãi, đọc lại bao nhiêu lần tùy bạn. Đăng nhập để mua trọn bộ 10 chương.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
            <Link className="btn" href={`/login?redirect=${SLUG}`}>Đăng nhập để mua</Link>
            <Link
              className="btn"
              href="/register"
              style={{ background: "transparent", color: "var(--bg-alt)", boxShadow: "none", border: "1px solid #4A4A44" }}
            >
              Tạo tài khoản miễn phí
            </Link>
          </div>
        </>
      )}

      {state === "user" && (
        <>
          <h3>Mời tôi buổi cà phê này — {PRICE}</h3>
          <p>
            Trọn bộ 10 chương — khung 5B, tám kiểu người, nhật ký năm cột, công thức DESC. Thanh toán một lần · tải về
            ngay · đọc trên mọi thiết bị.
          </p>
          <a className="btn" href={siteConfig.socials.zalo} target="_blank" rel="noopener noreferrer">
            Mời tôi buổi cà phê này — {PRICE}
          </a>
          <p style={{ color: "#9A8F7D", fontSize: 12.5, marginTop: 12, marginBottom: 0 }}>
            Nhắn “Mua ebook Nhạy cảm” qua Zalo để nhận link thanh toán &amp; bản đầy đủ — hoặc “Mua trọn bộ 3 cuốn” để
            lấy giá 249.000đ.
          </p>
        </>
      )}
    </div>
  );
}

export default function NhayCamClient() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: RESOURCE_CSS }} />
      <div className="rsc">
        <div className="top"><div className="wrap">
          <Link href="/" className="brand">Hà Bùi Academy<small>Học viện Quản trị &amp; Kỹ năng thiết yếu</small></Link>
          <Link href="/ebook" className="back">← Ebook</Link>
        </div></div>

        <div className="wrap">
          <div className="head">
            <span className="eyebrow">Ebook · Tập 1/3 bộ người trẻ đi làm · 10 chương · Khung 5B</span>
            <h1>Không phải do bạn <span style={nw}>nhạy cảm</span></h1>
            <p className="lead">
              Cẩm nang giữ bản lĩnh cho người trẻ trong môi trường <span style={nw}>công sở</span>{" "}
              <span style={nw}>độc hại</span> — đặt tên cho những thứ đang xảy ra với bạn, rồi đưa cho bạn từng câu
              nói, từng bước đi cụ thể.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
              <span style={{ fontSize: 20, fontWeight: 800, color: "var(--accent-hover)" }}>{PRICE}</span>
              <span style={{ fontSize: 13.5, color: "var(--fg-muted)" }}>· giá một buổi cà phê — đọc thử miễn phí bên dưới</span>
            </div>
          </div>

          <div className="body">
            <div className="card">
              <p className="intro">
                Tuần thứ ba đi làm, một bạn trẻ trong đội ngũ cũ của tôi nhắn cho tôi lúc mười một giờ đêm. Tin nhắn
                chỉ có một câu: <i>“Chị ơi, có phải em quá <span style={nw}>nhạy cảm</span> không?”</i> Tôi làm nghề{" "}
                <span style={nw}>nhân sự</span> mười lăm năm, và đó là câu tôi nghe nhiều nhất từ người mới đi làm —
                và gần như lần nào, câu trả lời cũng là: <b>không.</b>
              </p>
            </div>

            <div className="card">
              <div className="ctitle"><span className="ic">🕚</span> Những cảnh có thể bạn đã gặp</div>
              <ul style={{ listStyle: "none", margin: "14px 0 0", padding: 0, display: "grid", gap: 11 }}>
                {PAINS.map((t, i) => (
                  <li key={i} style={{ fontSize: 15.2, fontStyle: "italic", color: "var(--fg-muted)" }}>{t}</li>
                ))}
              </ul>
              <p className="csub" style={{ marginTop: 14, marginBottom: 0 }}>
                Và thế là bạn lại im lặng. Cái giá của việc im lặng không đến ngay lập tức — nó được trả dần: bạn soạn
                một tin nhắn mất hai mươi phút vì sợ bị bắt lỗi, bụng thắt lại mỗi chiều chủ nhật, làm nhiều hơn nhưng
                tin vào mình ít đi. <b>Người mới không bị bắt nạt vì họ yếu. Họ bị bắt nạt vì họ chưa gọi tên được trò
                chơi.</b>
              </p>
            </div>

            <div className="card">
              <div className="ctitle"><span className="ic">📊</span> Bạn không đơn độc — những con số có nguồn</div>
              <ul style={{ margin: "14px 0 0", paddingLeft: 20, display: "grid", gap: 8 }}>
                <li style={{ fontSize: 14.6, color: "var(--fg-muted)" }}><b style={{ color: "var(--fg)" }}>98%</b> người đi làm từng bị đối xử thiếu văn minh tại nơi làm việc — nghiên cứu 20 năm của GS. Christine Porath, Đại học Georgetown.</li>
                <li style={{ fontSize: 14.6, color: "var(--fg-muted)" }}><b style={{ color: "var(--fg)" }}>62%</b> người trẻ Việt Nam rời công việc đầu tiên ngay trong năm đầu — khảo sát TrendZetter của Anphabe trên hơn 13.000 người.</li>
                <li style={{ fontSize: 14.6, color: "var(--fg-muted)" }}><b style={{ color: "var(--fg)" }}>30%</b> người trưởng thành tại Mỹ từng trực tiếp bị bắt nạt trong công việc — Viện Nghiên cứu Bắt nạt Công sở, 2021.</li>
              </ul>
              <p className="csub" style={{ marginTop: 14, marginBottom: 0 }}>
                Thứ bạn đang đối mặt là một hiện tượng có quy luật — không phải bằng chứng cho việc bạn kém cỏi. Mà
                thứ gì có quy luật, thứ đó học được cách ứng phó.
              </p>
            </div>

            <div className="card">
              <div className="ctitle"><span className="ic">🎯</span> Trong cuốn sách, bạn sẽ có</div>
              <ul style={{ listStyle: "none", margin: "14px 0 0", padding: 0, display: "grid", gap: 13 }}>
                {WHAT_YOU_GET.map((it, i) => (
                  <li key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 11, alignItems: "start" }}>
                    <span style={{ color: "#0C6070", fontWeight: 800 }}>✓</span>
                    <span style={{ fontSize: 15.2 }}>
                      <b>{it.t}</b>
                      <span style={{ display: "block", color: "var(--fg-muted)", fontSize: 14.2, marginTop: 2 }}>{it.d}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="csub" style={{ marginTop: 14, marginBottom: 0 }}>
                Cuốn sách này từ chối làm hai việc: khuyên bạn chịu đựng giỏi hơn, và chỉ cho bạn cách thao túng
                ngược. Nó trao cho bạn thứ ở giữa hai cực đó — <b>bản lĩnh</b>: biết chuyện gì đang diễn ra, và chọn
                được nước đi của mình. Tất cả
                với giá <b style={{ color: "var(--fg)" }}>{PRICE}</b>, bằng một buổi cà phê, và bạn giữ được mãi.
              </p>
            </div>

            <div className="card">
              <div className="ctitle"><span className="ic">🗺️</span> 10 chương — 5 bước theo đúng trình tự</div>
              {CHAPTERS.map((p, i) => (
                <div key={i} style={{ marginTop: i === 0 ? 14 : 18 }}>
                  <div style={{ fontWeight: 800, fontSize: 15 }}>{p.part}</div>
                  <ul style={{ margin: "8px 0 0", paddingLeft: 20, display: "grid", gap: 5 }}>
                    {p.items.map((c, j) => (
                      <li key={j} style={{ fontSize: 14.4, color: "var(--fg-muted)" }}>{c}</li>
                    ))}
                  </ul>
                </div>
              ))}
              <p className="csub" style={{ marginTop: 14, marginBottom: 0 }}>
                Mỗi chương đứng độc lập, có tình huống mô phỏng với lời thoại cụ thể, và kết thúc bằng một bài tập ngắn.
              </p>
            </div>

            <div className="card">
              <div className="ctitle"><span className="ic">👥</span> Viết cho ba kiểu người</div>
              <ul style={{ listStyle: "none", margin: "14px 0 0", padding: 0, display: "grid", gap: 14 }}>
                {FOR_WHOM.map((it, i) => (
                  <li key={i}>
                    <div style={{ fontWeight: 800, fontSize: 15.5 }}>{it.who}</div>
                    <div style={{ color: "var(--fg-muted)", fontSize: 14.4, marginTop: 3 }}>{it.fear}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <div className="ctitle"><span className="ic">📖</span> Đọc thử — lời ngỏ của cuốn sách</div>
              <div style={{ borderLeft: "3px solid var(--accent)", paddingLeft: 16, marginTop: 14, display: "grid", gap: 12, fontSize: 15.2, lineHeight: 1.75 }}>
                <p style={{ margin: 0 }}>
                  Em kể: chị đồng nghiệp ngồi cạnh giao cho em việc photo tài liệu và đặt cơm trưa cho cả nhóm, dù em
                  được tuyển vào làm nội dung. Khi em làm xong bản kế hoạch đầu tiên, chị ấy trình bày nó trong cuộc
                  họp như thể của mình. Khi em hỏi lại, chị ấy cười: <i>“Ở đây làm việc nhóm, em tính toán thế à?”</i>{" "}
                  Em về nhà, mất ngủ, và bắt đầu tin rằng vấn đề nằm ở mình.
                </p>
                <p style={{ margin: 0 }}>
                  Người mới không bị bắt nạt vì họ yếu. Họ bị bắt nạt vì họ chưa gọi tên được trò chơi — và kẻ bắt nạt
                  sống khỏe nhờ những thứ không được gọi tên.
                </p>
                <p style={{ margin: 0 }}>
                  Cuốn sách này tồn tại để làm một việc: đặt tên cho những thứ đang xảy ra với bạn, bằng những mô hình
                  đã được nghiên cứu tử tế, rồi đưa cho bạn từng câu nói, từng bước đi cụ thể. Nó không dạy bạn chịu
                  đựng. Nó cũng không dạy bạn trở thành một phiên bản toxic giỏi hơn kẻ đang làm khổ bạn.
                </p>
                <p style={{ margin: 0, fontWeight: 700 }}>
                  Sau cuốn này, bạn sẽ gọi tên được trò chơi và chọn nước đi của mình — thay vì nằm nhìn trần nhà lúc
                  nửa đêm tự hỏi có phải do mình quá nhạy cảm.
                </p>
              </div>
              <p style={{ fontSize: 13, color: "#9A8E7B", marginTop: 12, marginBottom: 0 }}>
                Phần còn lại — 10 chương, khung 5B đầy đủ và toàn bộ tình huống mô phỏng — mở khóa khi mua.
              </p>
            </div>

            <BuyGate />

            <div className="card">
              <div className="ctitle"><span className="ic">🛡️</span> Cam kết “buổi cà phê đáng giá”</div>
              <p className="csub" style={{ marginBottom: 0 }}>
                Nếu đọc xong bạn thấy buổi cà phê này không đáng, nhắn tôi một câu — tôi hoàn đủ {PRICE}. Không hỏi
                thêm gì. Rủi ro nằm ở phía tôi, không nằm ở phía bạn.
              </p>
            </div>

            <div className="card">
              <div className="ctitle"><span className="ic">📚</span> Trọn bộ 3 cuốn cho người trẻ đi làm — 249.000đ</div>
              <p className="csub">
                Cuốn này là tập 1 — <b>nhận diện và ứng phó</b>. Tập 2 giúp bạn <b>nói ra điều khó nói</b>, tập 3 giúp
                bạn <b>giữ lấy chính mình</b> khỏi kiệt sức. Mua cả bộ ba: 249.000đ thay vì 297.000đ.
              </p>
              <ul style={{ margin: 0, paddingLeft: 20, display: "grid", gap: 5 }}>
                <li style={{ fontSize: 14.4 }}><Link href="/ebook/noi-duoc-dieu-kho-noi" style={{ color: "var(--accent-hover)" }}>Tập 2 — Nói được điều khó nói</Link></li>
                <li style={{ fontSize: 14.4 }}><Link href="/ebook/giu-lay-minh" style={{ color: "var(--accent-hover)" }}>Tập 3 — Giữ lấy mình</Link></li>
              </ul>
            </div>

            <div className="card">
              <p className="intro" style={{ fontSize: 15 }}>
                Mọi tình huống trong sách xây từ những chuyện có thật tôi đã ngồi cùng trong{" "}
                <span style={nw}>mười lăm</span> năm làm nghề đào tạo <span style={nw}>nhân sự</span>, qua năm tổ chức
                lớn nhỏ. Là người đến giờ vẫn đang trực tiếp <span style={nw}>quản lý</span> mỗi ngày, tôi viết ra thứ
                tôi vẫn dùng để bảo vệ chính người trong đội ngũ của mình.
              </p>
            </div>

            <Link href="/tu-van-1-1" className="card" style={{ display: "block", textDecoration: "none", color: "inherit" }}>
              <div className="ctitle"><span className="ic">🧭</span> Bước tiếp theo, nếu bạn muốn có người đi cùng</div>
              <p className="csub" style={{ marginBottom: 0 }}>
                Tư vấn 1-1 lộ trình nghề nghiệp cho người mới đi làm — nhìn lại tình huống của chính bạn với tôi →
              </p>
            </Link>
          </div>
        </div>

        <footer>Hà Bùi Academy · <Link href="/">buithuha.com</Link></footer>
      </div>
    </>
  );
}
