import { NextRequest, NextResponse } from "next/server";
import { timingSafeEqual } from "crypto";
import { createAdminClient } from "@/lib/supabase/server";
import { processAutomations } from "@/lib/email/automation-processor";

/**
 * Email Automation Processor Cron
 *
 * Chạy engine automation: xử lý các enrollment đến hạn (welcome + các bước
 * nuôi dưỡng hẹn giờ) và gửi email tương ứng.
 *
 * Schedule: xem vercel.json (crons)
 * Auth: Bearer token qua env CRON_SECRET (giống các cron khác)
 */
export async function GET(req: NextRequest) {
  // ── Auth ────────────────────────────────────────────────────
  const authHeader = req.headers.get("authorization") ?? "";
  const expectedAuth = `Bearer ${process.env.CRON_SECRET}`;
  const expected = Buffer.from(expectedAuth, "utf-8");
  const received = Buffer.from(authHeader, "utf-8");
  const isAuthorized =
    !!process.env.CRON_SECRET &&
    expected.length === received.length &&
    timingSafeEqual(expected, received);
  if (!isAuthorized) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const admin = await createAdminClient();
    const { processed, errors } = await processAutomations(admin);
    return NextResponse.json({ success: true, processed, errors });
  } catch (error) {
    console.error("[Cron] Automation processing error:", error);
    return NextResponse.json({ error: "Failed to process automations" }, { status: 500 });
  }
}
