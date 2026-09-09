// src/components/landing/DecisionPreviewRow.tsx
import React from "react";
import { Decision } from "../../types";

interface DecisionPreviewRowProps {
  decision: Decision;
}

export default function DecisionPreviewRow({ decision }: DecisionPreviewRowProps) {
  const isActive = decision.status === "Active";

  return (
    <div className="group rounded-xl border border-slate-800/80 bg-[#0B101D]/90 p-4 transition-colors duration-200 hover:border-slate-700/90 hover:bg-[#0E1526] motion-reduce:transition-none">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-sm font-semibold text-slate-100 tracking-tight">
          {decision.title}
        </h3>
        <span
          className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-mono font-medium border ${
            isActive
              ? "bg-[#062E26] text-[#2DD4BF] border-[#0D5C4C]"
              : "bg-[#1B1F2A] text-slate-400 border-slate-700/80"
          }`}
        >
          {decision.status}
        </span>
      </div>

      <p className="mt-1.5 text-xs text-slate-400 leading-relaxed font-normal">
        {decision.description}
      </p>

      <div className="mt-3 flex items-center gap-2 text-[11px] font-mono text-slate-500">
        <span>{decision.date}</span>
        <span>•</span>
        <span>{decision.author}</span>
      </div>
    </div>
  );
}
