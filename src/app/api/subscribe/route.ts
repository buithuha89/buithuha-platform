import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";
import { rateLimit } from "@/lib/rate-limit";

// POST /api/subscribe — public newsletter subscription (no auth required)
export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";
  const rateLimitResult = await rateLimit(`subscribe:${ip}`, 5, 60);
  if (!rateLimitResult.allowed) {
    return NextResponse.json(
      { error: "Quá nhiều yêu cầu. Vui lòng thử lại sau." },
      { status: 429, headers: { "Retry-After": String(rateLimitResult.retryAfterSec) } }
    );
  }

  try {
    const body = await req.json();
    const { email, name, phone, source, tags: customTags } = body;

    // Validate email
    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { error: "Email là bắt buộc." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Email không hợp lệ." },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();
    const supabase = await createAdminClient();

    // Check if already subscribed
    const { data: existing } = await supabase
      .from("subscribers")
      .select("id, status")
      .eq("email", normalizedEmail)
      .single();

    if (existing) {
      if (existing.status === "active") {
        return NextResponse.json(
          { error: "Email này đã được đăng ký rồi." },
          { status: 409 }
        );
      }

      // Re-activate if previously unsubscribed
      const { error: updateError } = await supabase
        .from("subscribers")
        .update({
          status: "active",
          subscribed_at: new Date().toISOString(),
          unsubscribed_at: null,
        })
        .eq("id", existing.id);

      if (updateError) {
        console.error("Reactivate subscriber error:", updateError.message);
        return NextResponse.json(
          { error: "Có lỗi xảy ra. Vui lòng thử lại." },
          { status: 500 }
        );
      }

      return NextResponse.json({
        message: "Đăng ký thành công! Chào mừng bạn quay lại.",
      });
    }

    // Insert new subscriber
    // R07: coerce untrusted fields to safe, bounded values (no rejection — real users pass through)
    const safeName =
      typeof name === "string" ? name.trim().slice(0, 200) || null : null;
    const safePhone =
      typeof phone === "string" ? phone.trim().slice(0, 32) || null : null;
    const safeSource =
      typeof source === "string" && source.trim()
        ? source.trim().slice(0, 100)
        : "blog_newsletter";
    const filteredTags = Array.isArray(customTags)
      ? customTags
          .filter((t) => typeof t === "string" && t.trim())
          .slice(0, 20)
          .map((t) => t.trim().slice(0, 50))
      : [];
    const subscriberTags = filteredTags.length ? filteredTags : ["newsletter"];
    const { data: subscriber, error: insertError } = await supabase
      .from("subscribers")
      .insert({
        email: normalizedEmail,
        full_name: safeName,
        phone: safePhone,
        status: "active",
        source: safeSource,
        tags: subscriberTags,
        subscribed_at: new Date().toISOString(),
      })
      .select("id")
      .single();

    if (insertError) {
      console.error("Insert subscriber error:", insertError.message);
      return NextResponse.json(
        { error: "Có lỗi xảy ra. Vui lòng thử lại." },
        { status: 500 }
      );
    }

    // Try to add to a default newsletter list (best-effort, don't fail if list doesn't exist)
    if (subscriber) {
      const { data: defaultList } = await supabase
        .from("email_lists")
        .select("id")
        .ilike("name", "%newsletter%")
        .limit(1)
        .single();

      if (defaultList) {
        await supabase.from("subscriber_list_members").insert({
          subscriber_id: subscriber.id,
          list_id: defaultList.id,
          added_at: new Date().toISOString(),
        });
      }
    }

    return NextResponse.json(
      { message: "Đăng ký thành công! Cảm ơn bạn đã theo dõi." },
      { status: 201 }
    );
  } catch (err) {
    console.error("POST /api/subscribe error:", err);
    return NextResponse.json(
      { error: "Có lỗi xảy ra. Vui lòng thử lại." },
      { status: 500 }
    );
  }
}
