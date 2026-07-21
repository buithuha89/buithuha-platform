"use client";

import { useState, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";

export default function OrderSearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentQ = searchParams.get("q") ?? "";
  const [value, setValue] = useState(currentQ);

  const submit = useCallback(
    (q: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (q.trim()) {
        params.set("q", q.trim());
      } else {
        params.delete("q");
      }
      router.push(`/admin/orders?${params.toString()}`);
    },
    [router, searchParams],
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit(value);
      }}
      className="relative flex items-center gap-2 w-full md:w-auto"
    >
      <div className="relative flex-1 md:w-80">
        <Search
          size={15}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
        />
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Tìm mã đơn, email, SĐT, tên khách..."
          className="w-full pl-9 pr-9 py-2 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-colors"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "rgb(var(--accent-rgb) / 0.4)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "var(--border)";
          }}
        />
        {value && (
          <button
            type="button"
            onClick={() => {
              setValue("");
              submit("");
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
          >
            <X size={14} />
          </button>
        )}
      </div>
      <button
        type="submit"
        className="px-4 py-2 rounded-xl text-sm font-medium transition-colors whitespace-nowrap"
        style={{
          background: "rgb(var(--accent-rgb) / 0.12)",
          color: "var(--accent)",
          border: "1px solid rgb(var(--accent-rgb) / 0.25)",
        }}
      >
        Tìm kiếm
      </button>
    </form>
  );
}
