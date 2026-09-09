// src/components/decisions/SkeletonCard.tsx
import React from "react";

export default function SkeletonCard() {
  return (
    <div className="rounded-xl border border-slate-800/80 bg-[#0B101D]/70 p-5 animate-pulse motion-reduce:animate-none space-y-3">
      <div className="flex items-center justify-between gap-4">
        <div className="h-5 w-2/5 rounded bg-slate-800/80" />
        <div className="h-5 w-16 rounded-full bg-slate-800/80" />
      </div>

      <div className="space-y-1.5 pt-1">
        <div className="h-3.5 w-full rounded bg-slate-800/60" />
        <div className="h-3.5 w-4/5 rounded bg-slate-800/60" />
      </div>

      <div className="pt-2 flex items-center justify-between">
        <div className="h-3 w-28 rounded bg-slate-800/50" />
      </div>
    </div>
  );
}
