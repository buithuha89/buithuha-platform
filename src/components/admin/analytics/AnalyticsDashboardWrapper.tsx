"use client";

import dynamic from "next/dynamic";

const AnalyticsDashboard = dynamic(
  () => import("@/components/admin/analytics/AnalyticsDashboard"),
  { ssr: false, loading: () => <div className="h-[400px] bg-[var(--surface)] rounded-xl animate-pulse" /> }
);

export default function AnalyticsDashboardWrapper() {
  return <AnalyticsDashboard />;
}
