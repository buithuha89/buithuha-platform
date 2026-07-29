import { createClient } from "@/lib/supabase/server";
import { isTelegramConfigured, sendTelegramMessage } from "@/lib/telegram";

/**
 * GET /api/admin/telegram-test
 * Gửi 1 tin nhắn thử về Telegram admin để kiểm tra cấu hình.
 * Chỉ admin/manager gọi được.
 */
export async function GET() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return Response.json({ error: "Chưa đăng nhập" }, { status: 401 });
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (!profile || !["admin", "manager"].includes(profile.role)) {
    return Response.json({ error: "Không có quyền truy cập" }, { status: 403 });
  }

  if (!isTelegramConfigured()) {
    return Response.json({
      ok: false,
      error: "Chưa cấu hình TELEGRAM_BOT_TOKEN / TELEGRAM_ADMIN_CHAT_ID trên Vercel",
    }, { status: 503 });
  }

  await sendTelegramMessage(
    "🔔 <b>Test thông báo Telegram</b>\nKết nối thành công! Từ giờ mọi đơn hàng trên buithuha.com sẽ được báo về đây."
  );

  return Response.json({ ok: true, message: "Đã gửi tin test — kiểm tra Telegram của chị nhé" });
}
