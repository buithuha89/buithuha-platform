"use client";
import { Handle, Position } from "@xyflow/react";
import { Tag } from "lucide-react";

export default function AddTagNode({ data }: { data: any }) {
  return (
    <div className="px-4 py-3 rounded-xl border border-[var(--cat-violet)] bg-[var(--surface)] min-w-[180px] shadow-lg shadow-purple-900/20">
      <Handle type="target" position={Position.Top} className="!bg-[var(--cat-violet)] !w-3 !h-3 !border-2 !border-[var(--border)]" />
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-[#8b5cf620] flex items-center justify-center">
          <Tag size={14} className="text-[var(--cat-violet)]" />
        </div>
        <div>
          <div className="text-[10px] text-[var(--cat-violet)] font-bold uppercase">Thêm Tag</div>
          <div className="text-xs text-white font-medium">{data.tagName || "Chưa chọn tag"}</div>
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} className="!bg-[var(--cat-violet)] !w-3 !h-3 !border-2 !border-[var(--border)]" />
    </div>
  );
}
