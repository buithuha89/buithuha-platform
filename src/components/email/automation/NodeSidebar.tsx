"use client";

import { Mail, Clock, GitBranch, Tag, Tags, Flag, Zap, MousePointer } from "lucide-react";

const nodeCategories = [
  {
    label: "Triggers",
    nodes: [
      { type: "trigger", label: "Trigger", icon: Zap, color: "var(--success)", description: "Bắt đầu automation" },
    ],
  },
  {
    label: "Actions",
    nodes: [
      { type: "sendEmail", label: "Gửi Email", icon: Mail, color: "var(--info)", description: "Gửi email cho subscriber" },
      { type: "addTag", label: "Thêm Tag", icon: Tag, color: "var(--cat-violet)", description: "Gắn tag cho subscriber" },
      { type: "removeTag", label: "Xoá Tag", icon: Tags, color: "var(--cat-pink)", description: "Xoá tag khỏi subscriber" },
    ],
  },
  {
    label: "Logic",
    nodes: [
      { type: "wait", label: "Chờ", icon: Clock, color: "var(--warn)", description: "Chờ X ngày/giờ" },
      { type: "condition", label: "Điều kiện", icon: GitBranch, color: "var(--cat-teal)", description: "Phân nhánh theo điều kiện" },
    ],
  },
  {
    label: "End",
    nodes: [
      { type: "end", label: "Kết thúc", icon: Flag, color: "var(--danger)", description: "Kết thúc automation" },
    ],
  },
];

export default function NodeSidebar() {
  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData("application/reactflow-type", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="w-56 border-r border-[var(--border)] bg-[var(--surface)] overflow-y-auto p-3 space-y-4">
      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-1">
        Kéo thả vào canvas
      </div>

      {nodeCategories.map((cat) => (
        <div key={cat.label}>
          <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2 px-1">
            {cat.label}
          </div>
          <div className="space-y-1.5">
            {cat.nodes.map((node) => (
              <div
                key={node.type}
                draggable
                onDragStart={(e) => onDragStart(e, node.type)}
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg cursor-grab active:cursor-grabbing transition-all border border-transparent hover:border-[var(--border-strong)] hover:bg-[var(--surface)]"
              >
                <div
                  className="w-7 h-7 rounded-md flex items-center justify-center shrink-0"
                  style={{ background: node.color + "20" }}
                >
                  <node.icon size={14} style={{ color: node.color }} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-medium text-white truncate">{node.label}</div>
                  <div className="text-[10px] text-gray-500 truncate">{node.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
