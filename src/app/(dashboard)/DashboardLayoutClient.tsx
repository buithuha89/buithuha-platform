"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/layout/Sidebar";
import AIAssistant from "@/components/ai/AIAssistant";
import { MobileSidebarProvider } from "@/components/layout/MobileSidebarContext";

/**
 * Vài route nằm trong thư mục (dashboard) nhưng KHÁCH vãng lai vẫn xem được
 * (middleware chỉ chặn /admin, /dashboard, /instructor). Blog vào từ Google,
 * chứng chỉ mở bằng link chia sẻ, trang điều khoản ai cũng đọc được.
 *
 * Chúng phải mang tông SÁNG như phần còn lại của trang khách — nếu không,
 * người vào từ Google sẽ thấy nền tối lạc hẳn so với trang chủ.
 */
const GUEST_FACING = ["/blog", "/certificate", "/privacy-policy", "/terms-of-service"];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname() ?? "";

  const isGuestFacing = GUEST_FACING.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`)
  );

  return (
    <MobileSidebarProvider>
      {/* theme-app = tầng sau đăng nhập (nền xanh rêu thẫm).
          Bỏ class này đi là rơi về tầng khách sáng. Bảng token: src/app/globals.css */}
      <div
        className={`${isGuestFacing ? "" : "theme-app"} flex h-screen overflow-hidden`}
        style={{ background: "var(--bg)" }}
      >
        <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
        <AIAssistant />
      </div>
    </MobileSidebarProvider>
  );
}
