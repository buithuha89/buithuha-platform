import { NextRequest, NextResponse } from "next/server";
import { createClient, createAdminClient } from "@/lib/supabase/server";
import { EBOOK_BUCKET, EBOOK_CATALOG, owningSlugsFor } from "@/lib/ebooks";

/**
 * TẢI EBOOK ĐÃ MUA
 *
 * GET /api/ebooks/download?slug=<product_slug>&file=<index>
 *   → kiểm tra đăng nhập + đã mua (enrollment) → redirect sang signed URL (60 phút).
 * GET /api/ebooks/download?slug=<product_slug>&check=1
 *   → trả JSON { owned, ownedSlug } để trang bán hiển thị đúng trạng thái.
 *
 * File PDF nằm trong bucket PRIVATE nên không có link tĩnh nào lộ ra ngoài;
 * khách mua rồi thì đăng nhập là tải lại được bất cứ lúc nào.
 */
export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get("slug") || "";
  const checkOnly = req.nextUrl.searchParams.get("check") === "1";
  const fileIdx = Math.max(0, parseInt(req.nextUrl.searchParams.get("file") || "0", 10) || 0);

  const entry = EBOOK_CATALOG[slug];
  if (!entry) {
    return NextResponse.json({ error: "Không tìm thấy ebook" }, { status: 404 });
  }

  // 1. Người dùng phải đăng nhập
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    if (checkOnly) return NextResponse.json({ owned: false, reason: "guest" });
    return NextResponse.redirect(new URL(`/login?redirect=/ebook`, req.url));
  }

  // 2. Đã mua chưa? (mua lẻ hoặc mua combo chứa cuốn này)
  const admin = await createAdminClient();
  const candidateSlugs = owningSlugsFor(slug);

  const { data: products } = await admin
    .from("products")
    .select("id, slug")
    .in("slug", candidateSlugs);

  const productIds = (products ?? []).map((p) => p.id);
  let ownedSlug: string | null = null;

  if (productIds.length > 0) {
    const { data: enrollments } = await admin
      .from("enrollments")
      .select("product_id")
      .eq("user_id", user.id)
      .in("product_id", productIds);

    const ownedIds = new Set((enrollments ?? []).map((e) => e.product_id));
    ownedSlug = (products ?? []).find((p) => ownedIds.has(p.id))?.slug ?? null;
  }

  if (checkOnly) {
    return NextResponse.json({ owned: !!ownedSlug, ownedSlug });
  }

  if (!ownedSlug) {
    return NextResponse.json(
      { error: "Bạn chưa mua ebook này. Nếu bạn vừa thanh toán, chờ khoảng 1 phút rồi thử lại." },
      { status: 403 },
    );
  }

  // 3. Tạo signed URL và chuyển hướng
  const file = entry.files[Math.min(fileIdx, entry.files.length - 1)];
  const { data: signed, error: signErr } = await admin.storage
    .from(EBOOK_BUCKET)
    .createSignedUrl(file.path, 3600, { download: true });

  if (signErr || !signed?.signedUrl) {
    console.error("[Ebook Download] Sign error:", signErr?.message, "path:", file.path);
    return NextResponse.json(
      { error: "File đang được cập nhật. Vui lòng thử lại sau hoặc reply email mua hàng để được hỗ trợ." },
      { status: 503 },
    );
  }

  return NextResponse.redirect(signed.signedUrl);
}
