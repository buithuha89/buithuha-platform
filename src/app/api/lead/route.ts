import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";
import { rateLimit } from "@/lib/rate-limit";
import { getQuizBand, QUIZ_MAX } from "@/lib/trac-nghiem/quiz";

/**
 * POST /api/lead — nhận thông tin khách để lại trên các form mồi
 * (trắc nghiệm, cẩm nang miễn phí, giữ chỗ chương trình).
 *
 * Cố ý KHÔNG tạo tài khoản đăng nhập. Trước đây các form này gọi
 * /api/auth/register, nên bất kỳ ai đã từng để lại email đều bị chặn với thông báo
 * "Không thể tạo tài khoản. Vui lòng thử email khác." — mất lead và khách không xem
 * được kết quả. Ở đây mọi lần gửi đều idempotent: email đã có thì cập nhật, chưa có thì thêm.
 */

/** Nguồn hợp lệ — client chỉ được chọn trong danh sách này. */
const SOURCES: Record<string, string> = {
  trac_nghiem: "trac_nghiem_ganh_hay_dan_dat",
  cam_nang: "cam_nang_mien_phi",
  giu_cho: "giu_cho_nguoi_tat_den",
  resource: "tai_lieu_mien_phi",
};

const MAX_TAGS = 8;

/** Chỉ giữ tag dạng slug an toàn, tránh client bơm dữ liệu rác vào hệ thống email. */
function sanitizeTags(input: unknown): string[] {
  if (!Array.isArray(input)) return [];
  return input
    .filter((t): t is string => typeof t === "string")
    .map((t) => t.trim().toLowerCase().replace(/[^a-z0-9-_]/g, "").slice(0, 40))
    .filter(Boolean)
    .slice(0, MAX_TAGS);
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
  const rateLimitResult = await rateLimit(`lead:${ip}`, 10, 60);
  if (!rateLimitResult.allowed) {
    return NextResponse.json(
      { error: "Bạn gửi hơi nhanh. Vui lòng thử lại sau ít phút." },
      { status: 429, headers: { "Retry-After": String(rateLimitResult.retryAfterSec) } }
    );
  }

  try {
    const body = await req.json();
    const { full_name, email, phone, source, tags, quiz_score } = body ?? {};

    // ─── Validate ──────────────────────────────────────────────────
    if (typeof full_name !== "string" || !full_name.trim()) {
      return NextResponse.json({ error: "Vui lòng nhập họ và tên" }, { status: 400 });
    }
    if (typeof email !== "string" || !email.trim()) {
      return NextResponse.json({ error: "Vui lòng nhập email" }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ error: "Email không hợp lệ" }, { status: 400 });
    }
    if (email.trim().length > 254) {
      return NextResponse.json({ error: "Email quá dài" }, { status: 400 });
    }

    const cleanName = full_name.trim().slice(0, 100);
    const cleanEmail = email.trim().toLowerCase();

    // Số điện thoại không bắt buộc. Nếu có thì phải đúng định dạng VN.
    let cleanPhone: string | null = null;
    if (typeof phone === "string" && phone.trim()) {
      const p = phone.replace(/[\s.-]/g, "");
      if (!/^(0|\+84)[0-9]{9}$/.test(p)) {
        return NextResponse.json({ error: "Số điện thoại không hợp lệ" }, { status: 400 });
      }
      cleanPhone = p;
    }

    // Điểm trắc nghiệm (chỉ có ở form trắc nghiệm). Band luôn tính lại ở server.
    const hasScore =
      typeof quiz_score === "number" &&
      Number.isFinite(quiz_score) &&
      quiz_score >= 0 &&
      quiz_score <= QUIZ_MAX;
    const band = hasScore ? getQuizBand(quiz_score) : null;

    const safeSource = SOURCES[source as string] ?? "website";
    const newTags = [
      ...sanitizeTags(tags),
      ...(band ? ["trac-nghiem", `tn-${band.slug}`] : []),
    ];

    const admin = await createAdminClient();

    // ─── Lưu subscriber (idempotent theo email) ────────────────────
    const { data: existing } = await admin
      .from("subscribers")
      .select("id, tags, full_name, phone, status")
      .eq("email", cleanEmail)
      .maybeSingle();

    let subscriberId: string | null = null;
    let isNew = false;

    if (existing) {
      // Gộp tag cũ + mới, không ghi đè dữ liệu đã có bằng giá trị rỗng.
      const mergedTags = Array.from(
        new Set([...(existing.tags ?? []), ...newTags])
      ).slice(0, 30);
      const wasInactive = existing.status !== "active";

      const { error: updateError } = await admin
        .from("subscribers")
        .update({
          full_name: existing.full_name || cleanName,
          phone: existing.phone || cleanPhone,
          tags: mergedTags,
          // Khách chủ động điền form lần nữa = đồng ý nhận lại email.
          status: "active",
          unsubscribed_at: null,
          ...(wasInactive ? { subscribed_at: new Date().toISOString() } : {}),
        })
        .eq("id", existing.id);

      if (updateError) {
        console.error("[Lead] update subscriber error:", updateError.message);
        return NextResponse.json(
          { error: "Có lỗi xảy ra. Vui lòng thử lại." },
          { status: 500 }
        );
      }
      subscriberId = existing.id;
    } else {
      const { data: inserted, error: insertError } = await admin
        .from("subscribers")
        .insert({
          email: cleanEmail,
          full_name: cleanName,
          phone: cleanPhone,
          status: "active",
          source: safeSource,
          tags: newTags.length ? newTags : ["newsletter"],
          subscribed_at: new Date().toISOString(),
        })
        .select("id")
        .single();

      if (insertError || !inserted) {
        console.error("[Lead] insert subscriber error:", insertError?.message);
        return NextResponse.json(
          { error: "Có lỗi xảy ra. Vui lòng thử lại." },
          { status: 500 }
        );
      }
      subscriberId = inserted.id;
      isNew = true;
    }

    // ─── Thêm vào danh sách newsletter (best-effort) ───────────────
    if (subscriberId) {
      try {
        const { data: defaultList } = await admin
          .from("email_lists")
          .select("id")
          .ilike("name", "%newsletter%")
          .limit(1)
          .maybeSingle();

        if (defaultList) {
          const { data: member } = await admin
            .from("subscriber_list_members")
            .select("subscriber_id")
            .eq("subscriber_id", subscriberId)
            .eq("list_id", defaultList.id)
            .maybeSingle();

          if (!member) {
            await admin.from("subscriber_list_members").insert({
              subscriber_id: subscriberId,
              list_id: defaultList.id,
              added_at: new Date().toISOString(),
            });
            // Bắn trigger cho chuỗi email nuôi dưỡng. Chưa có automation active thì không làm gì.
            const { onSubscribedToList } = await import("@/lib/email/automation-triggers");
            await onSubscribedToList(admin, subscriberId, defaultList.id);
          }
        }
      } catch (e) {
        console.error("[Lead] list/automation error:", e);
      }
    }

    // ─── Email gửi ngay (best-effort, không bao giờ chặn form) ─────
    try {
      if (band) {
        const { sendQuizResultEmail } = await import("@/lib/email/transactional");
        await sendQuizResultEmail(cleanEmail, cleanName, band);
      } else {
        const { sendLeadMagnetWelcomeEmail } = await import("@/lib/email/transactional");
        await sendLeadMagnetWelcomeEmail(cleanEmail, cleanName);
      }
    } catch (e) {
      console.error("[Lead] email error:", e);
    }

    return NextResponse.json({ success: true, isNew });
  } catch (err) {
    console.error("POST /api/lead error:", err);
    return NextResponse.json(
      { error: "Có lỗi xảy ra. Vui lòng thử lại." },
      { status: 500 }
    );
  }
}
