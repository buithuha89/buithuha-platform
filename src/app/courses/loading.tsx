export default function Loading() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6 animate-pulse pt-20">
      <div className="space-y-2">
        <div className="h-5 bg-[var(--border)] rounded w-40" />
        <div className="h-3 bg-[var(--border)] rounded w-56" />
      </div>
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="rounded-xl p-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[var(--border)] shrink-0" />
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-[var(--border)] rounded w-3/4" />
              <div className="h-3 bg-[var(--border)] rounded w-full" />
              <div className="flex gap-3">
                <div className="h-3 bg-[var(--border)] rounded w-16" />
                <div className="h-3 bg-[var(--border)] rounded w-16" />
              </div>
            </div>
            <div className="w-20 h-8 bg-[var(--border)] rounded-lg shrink-0" />
          </div>
        </div>
      ))}
    </div>
  );
}
