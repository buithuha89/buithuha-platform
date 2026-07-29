/**
 * Telegram admin notifications
 * Gửi thông báo đơn hàng về Telegram của admin (chị Hà).
 *
 * Cấu hình env (Vercel):
 *   TELEGRAM_BOT_TOKEN     - token của bot (tạo qua @BotFather)
 *   TELEGRAM_ADMIN_CHAT_ID - chat_id của admin (nhắn cho bot 1 tin rồi lấy qua getUpdates)
 *
 * Nếu chưa cấu hình env → mọi hàm no-op, không ảnh hưởng luồng chính.
 * Tất cả các hàm đều fire-and-forget, không bao giờ throw.
 */

const TELEGRAM_API = "https://api.telegram.org";

export function isTelegramConfigured(): boolean {
  const token = process.env.TELEGRAM_BOT_TOKEN || "";
  const chatId = process.env.TELEGRAM_ADMIN_CHAT_ID || "";
  return !!(token && chatId && !token.includes("your-"));
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function formatVnd(amount: number): string {
  return `${amount.toLocaleString("vi-VN")}đ`;
}

export async function sendTelegramMessage(text: string): Promise<void> {
  try {
    if (!isTelegramConfigured()) return;
    const token = process.env.TELEGRAM_BOT_TOKEN!;
    const chatId = process.env.TELEGRAM_ADMIN_CHAT_ID!;
    const res = await fetch(`${TELEGRAM_API}/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });
    if (!res.ok) {
      console.error("[Telegram] sendMessage failed:", res.status, await res.text());
    }
  } catch (err) {
    console.error("[Telegram] Error (non-critical):", err);
  }
}

/** Đơn hàng mới được tạo (chờ thanh toán) */
export function notifyNewOrder(details: {
  orderCode: string;
  productTitle: string;
  amount: number;
  customerName?: string | null;
  customerEmail?: string | null;
}): void {
  sendTelegramMessage(
    `🛒 <b>Đơn hàng mới (chờ thanh toán)</b>\n` +
    `Mã đơn: <code>${escapeHtml(details.orderCode)}</code>\n` +
    `Sản phẩm: ${escapeHtml(details.productTitle)}\n` +
    `Số tiền: <b>${formatVnd(details.amount)}</b>\n` +
    `Khách: ${escapeHtml(details.customerName || "N/A")} (${escapeHtml(details.customerEmail || "N/A")})`
  ).catch(() => {});
}

/** Đơn hàng đã thanh toán thành công */
export function notifyOrderPaid(details: {
  orderCode: string;
  productTitle: string;
  amount: number;
  customerName?: string | null;
  source: string; // "SePay" | "PayOS" | ...
}): void {
  sendTelegramMessage(
    `✅ <b>ĐÃ THANH TOÁN — ${formatVnd(details.amount)}</b>\n` +
    `Mã đơn: <code>${escapeHtml(details.orderCode)}</code>\n` +
    `Sản phẩm: ${escapeHtml(details.productTitle)}\n` +
    `Khách: ${escapeHtml(details.customerName || "N/A")}\n` +
    `Cổng: ${escapeHtml(details.source)}\n` +
    `👉 https://buithuha.com/admin/orders`
  ).catch(() => {});
}
