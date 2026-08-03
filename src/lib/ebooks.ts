/**
 * Danh mục ebook bán tự động.
 * - Mỗi entry ứng với 1 sản phẩm (products.slug) trong DB, type = "ebook".
 * - `files` trỏ tới object trong bucket private EBOOK_BUCKET trên Supabase Storage.
 * - `available` = false khi chưa upload đủ file PDF — BuyGate sẽ fallback về Zalo thủ công.
 * - Combo khai báo `includes` để người mua combo tải được từng cuốn, và người xem
 *   trang cuốn lẻ nhưng đã mua combo vẫn được nhận là "đã sở hữu".
 */

export const EBOOK_BUCKET = "ebook-files";

export interface EbookFile {
  path: string; // đường dẫn object trong bucket
  label: string; // nhãn hiển thị trên nút tải / email
}

export interface EbookEntry {
  title: string;
  files: EbookFile[];
  available: boolean;
  includes?: string[]; // slug các cuốn lẻ nằm trong combo
}

export const EBOOK_CATALOG: Record<string, EbookEntry> = {
  "ebook-nghe-thuat-thua-nhan-sai": {
    title: "Nhận sai để thăng chức",
    files: [{ path: "nghe-thuat-thua-nhan-sai.pdf", label: "Nhận sai để thăng chức (PDF)" }],
    available: true,
  },
  "ebook-giao-viec-ma-khong-phai-lam-lai": {
    title: "7 phút giao việc, 7 giờ rảnh tay",
    files: [{ path: "giao-viec-ma-khong-phai-lam-lai.pdf", label: "7 phút giao việc, 7 giờ rảnh tay (PDF)" }],
    available: true,
  },
  "ebook-khong-phai-do-ban-nhay-cam": {
    title: "Không ai bắt nạt được bạn nữa",
    files: [{ path: "khong-phai-do-ban-nhay-cam.pdf", label: "Không ai bắt nạt được bạn nữa (PDF)" }],
    available: true,
  },
  "ebook-noi-duoc-dieu-kho-noi": {
    title: "Từ chối được, đòi lương được, không mất lòng ai",
    files: [{ path: "noi-duoc-dieu-kho-noi.pdf", label: "Từ chối được, đòi lương được, không mất lòng ai (PDF)" }],
    available: true,
  },
  "ebook-giu-lay-minh": {
    title: "Sếp tốt, đồng nghiệp ổn — sao tôi vẫn kiệt sức?",
    files: [{ path: "giu-lay-minh.pdf", label: "Sếp tốt, đồng nghiệp ổn — sao tôi vẫn kiệt sức? (PDF)" }],
    available: true,
  },
  "ebook-tron-bo-nguoi-tre-di-lam": {
    title: "Trọn bộ 3 cuốn cho người trẻ đi làm",
    files: [
      { path: "khong-phai-do-ban-nhay-cam.pdf", label: "Tập 1 — Không ai bắt nạt được bạn nữa (PDF)" },
      { path: "noi-duoc-dieu-kho-noi.pdf", label: "Tập 2 — Từ chối được, đòi lương được, không mất lòng ai (PDF)" },
      { path: "giu-lay-minh.pdf", label: "Tập 3 — Sếp tốt, đồng nghiệp ổn — sao tôi vẫn kiệt sức? (PDF)" },
    ],
    available: true,
    includes: ["ebook-khong-phai-do-ban-nhay-cam", "ebook-noi-duoc-dieu-kho-noi", "ebook-giu-lay-minh"],
  },
};

/** Các slug sản phẩm mà nếu người dùng sở hữu thì được tải cuốn `slug` (chính nó + mọi combo chứa nó). */
export function owningSlugsFor(slug: string): string[] {
  const owners = [slug];
  for (const [comboSlug, entry] of Object.entries(EBOOK_CATALOG)) {
    if (entry.includes?.includes(slug)) owners.push(comboSlug);
  }
  return owners;
}
