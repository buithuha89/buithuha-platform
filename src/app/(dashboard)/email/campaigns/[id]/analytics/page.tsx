"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import TopBar from "@/components/layout/TopBar";
import EmailNav from "@/components/email/EmailNav";
import {
  ArrowLeft,
  Send,
  CheckCircle,
  Eye,
  MousePointer,
  AlertTriangle,
  ShieldAlert,
  UserMinus,
  ExternalLink,
  RefreshCw,
  Loader2,
  Download,
  Link2,
} from "lucide-react";

interface CampaignAnalytics {
  overview: {
    sent: number;
    delivered: number;
    opens: number;
    unique_opens: number;
    clicks: number;
    unique_clicks: number;
    bounces: number;
    complaints: number;
    unsubscribes: number;
  };
  rates: {
    open_rate: number;
    click_rate: number;
    bounce_rate: number;
    complaint_rate: number;
  };
  timeline: { date: string; opens: number; clicks: number }[];
  top_links: { url: string; clicks: number }[];
  engagement_breakdown: Record<string, number>;
}

interface Campaign {
  id: string;
  name: string;
  subject: string;
  status: string;
  sent_count: number;
  sent_at: string;
  created_at: string;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "Asia/Ho_Chi_Minh",
  });
}

function formatShortDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    timeZone: "Asia/Ho_Chi_Minh",
  });
}

function rateColor(rate: number, type: "open" | "click" | "bounce") {
  if (type === "bounce") {
    if (rate <= 2) return "var(--accent)";
    if (rate <= 5) return "var(--warn)";
    return "var(--danger)";
  }
  if (type === "open") {
    if (rate >= 20) return "var(--accent)";
    if (rate >= 10) return "var(--warn)";
    return "var(--danger)";
  }
  if (rate >= 3) return "var(--accent)";
  if (rate >= 1) return "var(--warn)";
  return "var(--danger)";
}

export default function CampaignAnalyticsPage() {
  const params = useParams();
  const router = useRouter();
  const campaignId = params.id as string;

  const [data, setData] = useState<CampaignAnalytics | null>(null);
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [loading, setLoading] = useState(true);
  const [hoveredTimelinePoint, setHoveredTimelinePoint] = useState<number | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [analyticsRes, campaignRes] = await Promise.all([
        fetch(`/api/email/campaigns/${campaignId}/analytics`),
        fetch(`/api/email/campaigns/${campaignId}`),
      ]);
      if (analyticsRes.ok) {
        setData(await analyticsRes.json());
      }
      if (campaignRes.ok) {
        const json = await campaignRes.json();
        setCampaign(json.campaign || json);
      }
    } catch (err) {
      console.error("Failed to fetch campaign analytics:", err);
    } finally {
      setLoading(false);
    }
  }, [campaignId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // SVG chart setup
  const chartWidth = 600;
  const chartHeight = 150;
  const padding = 20;

  const timeline = data?.timeline || [];
  const maxTimelineVal = Math.max(
    ...timeline.map((t) => Math.max(t.opens, t.clicks)),
    1
  );

  function buildLinePoints(values: number[], maxVal: number): string {
    if (values.length === 0) return "";
    const effectiveMax = maxVal || 1;
    return values
      .map((v, i) => {
        const x =
          padding +
          (i / Math.max(values.length - 1, 1)) *
            (chartWidth - padding * 2);
        const y =
          chartHeight -
          padding -
          (v / effectiveMax) * (chartHeight - padding * 2);
        return `${x},${y}`;
      })
      .join(" ");
  }

  function getPointCoords(values: number[], maxVal: number) {
    const effectiveMax = maxVal || 1;
    return values.map((v, i) => ({
      x:
        padding +
        (i / Math.max(values.length - 1, 1)) *
          (chartWidth - padding * 2),
      y:
        chartHeight -
        padding -
        (v / effectiveMax) * (chartHeight - padding * 2),
      value: v,
    }));
  }

  const openValues = timeline.map((t) => t.opens);
  const clickValues = timeline.map((t) => t.clicks);
  const openLinePoints = buildLinePoints(openValues, maxTimelineVal);
  const clickLinePoints = buildLinePoints(clickValues, maxTimelineVal);
  const openCoords = getPointCoords(openValues, maxTimelineVal);
  const clickCoords = getPointCoords(clickValues, maxTimelineVal);

  // Export analytics as CSV
  function handleExport() {
    if (!data || !campaign) return;
    const rows = [
      ["Metric", "Value"],
      ["Campaign", campaign.name || campaign.subject],
      ["Sent", String(data.overview.sent)],
      ["Delivered", String(data.overview.delivered)],
      ["Opens (unique)", String(data.overview.unique_opens)],
      ["Clicks (unique)", String(data.overview.unique_clicks)],
      ["Bounces", String(data.overview.bounces)],
      ["Complaints", String(data.overview.complaints)],
      ["Open Rate", `${data.rates.open_rate}%`],
      ["Click Rate", `${data.rates.click_rate}%`],
      ["Bounce Rate", `${data.rates.bounce_rate}%`],
    ];
    const csv = rows.map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `campaign-analytics-${campaignId}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  const campaignName = campaign?.name || campaign?.subject || "Campaign";

  return (
    <div>
      <TopBar
        title={campaignName}
        subtitle="Chi tiết analytics campaign"
      />
      <EmailNav />

      <div className="p-6 max-w-6xl mx-auto space-y-6">
        {/* Back button and actions */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => router.push("/email/campaigns")}
            className="flex items-center gap-2 text-sm text-[var(--fg-muted)] hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            Quay lại Campaigns
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={fetchData}
              className="p-1.5 rounded-lg text-[var(--fg-muted)] hover:text-white transition-colors"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
            </button>
            <button
              onClick={handleExport}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-[var(--fg-muted)] hover:text-white transition-colors"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <Download size={14} />
              Xuất CSV
            </button>
          </div>
        </div>

        {loading && !data ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 size={24} className="animate-spin text-[var(--accent)]" />
            <span className="ml-2 text-[var(--fg-muted)]">Đang tải dữ liệu...</span>
          </div>
        ) : data ? (
          <>
            {/* Campaign info bar */}
            {campaign && (
              <div
                className="card-dark p-4 flex flex-wrap items-center gap-4 text-xs text-[var(--fg-muted)]"
              >
                <span>
                  <strong className="text-white">Tiêu đề:</strong>{" "}
                  {campaign.subject}
                </span>
                {campaign.sent_at && (
                  <span>
                    <strong className="text-white">Gửi lúc:</strong>{" "}
                    {formatDate(campaign.sent_at)}
                  </span>
                )}
                <span>
                  <strong className="text-white">Trạng thái:</strong>{" "}
                  <span className="text-[var(--accent)] font-medium capitalize">
                    {campaign.status}
                  </span>
                </span>
              </div>
            )}

            {/* Large stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                {
                  label: "Đã gửi",
                  value: data.overview.sent,
                  icon: Send,
                  color: "var(--info)",
                },
                {
                  label: "Delivered",
                  value: data.overview.delivered,
                  icon: CheckCircle,
                  color: "var(--accent)",
                },
                {
                  label: "Opens",
                  value: data.overview.unique_opens,
                  icon: Eye,
                  color: "var(--warn)",
                  sub: `${data.overview.opens} tổng`,
                },
                {
                  label: "Clicks",
                  value: data.overview.unique_clicks,
                  icon: MousePointer,
                  color: "var(--cat-violet)",
                  sub: `${data.overview.clicks} tổng`,
                },
                {
                  label: "Bounces",
                  value: data.overview.bounces,
                  icon: AlertTriangle,
                  color: "var(--danger)",
                },
                {
                  label: "Complaints",
                  value: data.overview.complaints,
                  icon: ShieldAlert,
                  color: "var(--danger)",
                },
              ].map((s) => (
                <div key={s.label} className="stat-card text-center">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center mx-auto mb-2"
                    style={{ background: s.color + "20" }}
                  >
                    <s.icon size={16} style={{ color: s.color }} />
                  </div>
                  <div className="text-xl font-bold text-white">
                    {s.value.toLocaleString("vi-VN")}
                  </div>
                  <div className="text-[11px] text-gray-500">{s.label}</div>
                  {"sub" in s && s.sub && (
                    <div className="text-[10px] text-gray-500 mt-0.5">
                      {s.sub}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Rate highlight */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  label: "Open Rate",
                  value: data.rates.open_rate,
                  type: "open" as const,
                },
                {
                  label: "Click Rate",
                  value: data.rates.click_rate,
                  type: "click" as const,
                },
                {
                  label: "Bounce Rate",
                  value: data.rates.bounce_rate,
                  type: "bounce" as const,
                },
                {
                  label: "Complaint Rate",
                  value: data.rates.complaint_rate,
                  type: "bounce" as const,
                },
              ].map((r) => (
                <div key={r.label} className="card-dark p-4 text-center">
                  <div
                    className="text-3xl font-bold mb-1"
                    style={{ color: rateColor(r.value, r.type) }}
                  >
                    {r.value}%
                  </div>
                  <div className="text-xs text-[var(--fg-muted)]">{r.label}</div>
                </div>
              ))}
            </div>

            {/* Timeline chart + Top links */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Timeline */}
              <div className="card-dark p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-white text-sm">
                    Opens & Clicks theo thời gian
                  </h3>
                  <div className="flex items-center gap-3 text-[11px]">
                    <span className="flex items-center gap-1">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ background: "var(--accent)" }}
                      />
                      <span className="text-[var(--fg-muted)]">Opens</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ background: "var(--info)" }}
                      />
                      <span className="text-[var(--fg-muted)]">Clicks</span>
                    </span>
                  </div>
                </div>

                {timeline.length === 0 ? (
                  <div className="h-40 flex items-center justify-center text-[var(--fg-muted)] text-xs">
                    Chưa có dữ liệu timeline
                  </div>
                ) : (
                  <div className="relative">
                    <svg
                      viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                      className="w-full h-40"
                      preserveAspectRatio="none"
                    >
                      {[0, 0.25, 0.5, 0.75, 1].map((ratio) => (
                        <line
                          key={ratio}
                          x1={padding}
                          y1={
                            chartHeight -
                            padding -
                            ratio * (chartHeight - padding * 2)
                          }
                          x2={chartWidth - padding}
                          y2={
                            chartHeight -
                            padding -
                            ratio * (chartHeight - padding * 2)
                          }
                          stroke="var(--border)"
                          strokeWidth="1"
                        />
                      ))}
                      <polyline
                        fill="none"
                        stroke="var(--accent)"
                        strokeWidth="2"
                        points={openLinePoints}
                        strokeLinejoin="round"
                      />
                      <polyline
                        fill="none"
                        stroke="var(--info)"
                        strokeWidth="2"
                        points={clickLinePoints}
                        strokeLinejoin="round"
                      />
                      {openCoords.map((p, i) => (
                        <circle
                          key={`o-${i}`}
                          cx={p.x}
                          cy={p.y}
                          r={hoveredTimelinePoint === i ? 5 : 3}
                          fill="var(--accent)"
                          className="cursor-pointer"
                          onMouseEnter={() => setHoveredTimelinePoint(i)}
                          onMouseLeave={() => setHoveredTimelinePoint(null)}
                        />
                      ))}
                      {clickCoords.map((p, i) => (
                        <circle
                          key={`c-${i}`}
                          cx={p.x}
                          cy={p.y}
                          r={hoveredTimelinePoint === i ? 5 : 3}
                          fill="var(--info)"
                          className="cursor-pointer"
                          onMouseEnter={() => setHoveredTimelinePoint(i)}
                          onMouseLeave={() => setHoveredTimelinePoint(null)}
                        />
                      ))}
                    </svg>
                    {hoveredTimelinePoint !== null &&
                      timeline[hoveredTimelinePoint] && (
                        <div
                          className="absolute top-0 px-2 py-1.5 rounded-lg text-[10px] z-10 pointer-events-none"
                          style={{
                            background: "var(--border)",
                            border: "1px solid #333",
                            left: `${(hoveredTimelinePoint / Math.max(timeline.length - 1, 1)) * 100}%`,
                            transform: "translateX(-50%)",
                          }}
                        >
                          <div className="text-white font-medium">
                            {formatShortDate(
                              timeline[hoveredTimelinePoint].date
                            )}
                          </div>
                          <div className="text-[var(--accent)]">
                            Opens: {timeline[hoveredTimelinePoint].opens}
                          </div>
                          <div className="text-[var(--info)]">
                            Clicks: {timeline[hoveredTimelinePoint].clicks}
                          </div>
                        </div>
                      )}
                    <div className="flex justify-between mt-1 px-5">
                      {timeline.length > 0 && (
                        <>
                          <span className="text-[9px] text-gray-500">
                            {formatShortDate(timeline[0].date)}
                          </span>
                          <span className="text-[9px] text-gray-500">
                            {formatShortDate(
                              timeline[timeline.length - 1].date
                            )}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Top clicked links */}
              <div className="card-dark p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Link2 size={16} className="text-[var(--info)]" />
                  <h3 className="font-semibold text-white text-sm">
                    Top Links được click
                  </h3>
                </div>
                {data.top_links.length === 0 ? (
                  <div className="h-40 flex items-center justify-center text-[var(--fg-muted)] text-xs">
                    Chưa có link nào được click
                  </div>
                ) : (
                  <div className="space-y-2.5 max-h-[240px] overflow-y-auto">
                    {data.top_links.map((link, i) => {
                      const maxClicks = data.top_links[0]?.clicks || 1;
                      const width = (link.clicks / maxClicks) * 100;
                      return (
                        <div key={i}>
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <span className="text-xs text-gray-300 truncate flex-1 flex items-center gap-1">
                              <ExternalLink
                                size={10}
                                className="text-[var(--info)] shrink-0"
                              />
                              {link.url}
                            </span>
                            <span className="text-xs font-medium text-[var(--info)] shrink-0">
                              {link.clicks}
                            </span>
                          </div>
                          <div
                            className="h-1.5 rounded-full"
                            style={{ background: "var(--surface-2)" }}
                          >
                            <div
                              className="h-full rounded-full transition-all"
                              style={{
                                width: `${width}%`,
                                background: "var(--info)",
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Engagement breakdown */}
            {Object.keys(data.engagement_breakdown).length > 0 && (
              <div className="card-dark p-5">
                <h3 className="font-semibold text-white text-sm mb-4">
                  Trạng thái gửi email
                </h3>
                <div className="flex flex-wrap gap-4">
                  {Object.entries(data.engagement_breakdown).map(
                    ([status, count]) => {
                      const colors: Record<string, string> = {
                        delivered: "var(--accent)",
                        sent: "var(--info)",
                        opened: "var(--warn)",
                        clicked: "var(--cat-violet)",
                        bounced: "var(--danger)",
                        failed: "var(--danger)",
                        pending: "var(--fg-subtle)",
                      };
                      const color = colors[status] || "var(--fg-subtle)";
                      return (
                        <div
                          key={status}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg"
                          style={{ background: "var(--surface-2)" }}
                        >
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ background: color }}
                          />
                          <span className="text-xs text-gray-300 capitalize">
                            {status}
                          </span>
                          <span
                            className="text-xs font-bold"
                            style={{ color }}
                          >
                            {count}
                          </span>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <AlertTriangle
              size={24}
              className="text-[var(--warn)] mx-auto mb-2"
            />
            <p className="text-[var(--fg-muted)] text-sm">
              Không thể tải analytics cho campaign này.
            </p>
            <button
              onClick={() => router.push("/email/campaigns")}
              className="mt-3 text-sm text-[var(--accent)] hover:underline"
            >
              Quay lại danh sách campaigns
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
