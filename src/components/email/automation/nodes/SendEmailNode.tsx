"use client";
import { Handle, Position } from "@xyflow/react";
import { Mail } from "lucide-react";

export default function SendEmailNode({ data }: { data: any }) {
  return (
    <div className="px-4 py-3 rounded-xl border border-[var(--info)] bg-[var(--surface)] min-w-[180px] shadow-lg shadow-blue-900/20">
      <Handle type="target" position={Position.Top} className="!bg-[var(--info)] !w-3 !h-3 !border-2 !border-[var(--border)]" />
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-[#3b82f620] flex items-center justify-center">
          <Mail size={14} className="text-[var(--info)]" />
        </div>
        <div>
          <div className="text-[10px] text-[var(--info)] font-bold uppercase">Gửi Email</div>
          <div className="text-xs text-white font-medium truncate max-w-[140px]">
            {data.subject || "Chưa cấu hình"}
          </div>
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} className="!bg-[var(--info)] !w-3 !h-3 !border-2 !border-[var(--border)]" />
    </div>
  );
}
