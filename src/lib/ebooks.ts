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
    title: "Nghệ thuật thừa nhận sai",
    files: [{ path: "nghe-thuat-thua-nhan-sai.pdf", label: "Nghệ thuật thừa nhận sai (PDF)" }],
    available: true,
  },
  "ebook-giao-viec-ma-khong-phai-lam-lai": {
    title: "Giao việc mà không phải làm lại",
    files: [{ path: "giao-viec-ma-khong-phai-lam-lai.pdf", label: "Giao việc mà không phải làm lại (PDF)" }],
    available: true,
  },
  "ebook-khong-phai-do-ban-nhay-cam": {
    title: "Không phải do bạn nhạy cảm",
    files: [{ path: "khong-phai-do-ban-nhay-cam.pdf", label: "Không phải do bạn nhạy cảm (PDF)" }],
    available: true,
  },
  "ebook-noi-duoc-dieu-kho-noi": {
    title: "Nói được điều khó nói",
    files: [{ path: "noi-duoc-dieu-kho-noi.pdf", label: "Nói được điều khó nói (PDF)" }],
    available: true,
  },
  "ebook-giu-lay-minh": {
    title: "Giữ lấy mình",
    files: [{ path: "giu-lay-minh.pdf", label: "Giữ lấy mình (PDF)" }],
    available: true,
  },
  "ebook-tron-bo-nguoi-tre-di-lam": {
    title: "Trọn bộ 3 cuốn cho người trẻ đi làm",
    files: [
      { path: "khong-phai-do-ban-nhay-cam.pdf", label: "Tập 1 — Không phải do bạn nhạy cảm (PDF)" },
      { path: "noi-duoc-dieu-kho-noi.pdf", label: "Tập 2 — Nói được điều khó nói (PDF)" },
      { path: "giu-lay-minh.pdf", label: "Tập 3 — Giữ lấy mình (PDF)" },
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
