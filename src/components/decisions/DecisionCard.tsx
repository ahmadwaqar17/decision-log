// src/components/decisions/DecisionCard.tsx
import React, { memo, useRef } from "react";
import { Decision } from "../../types";

interface DecisionCardProps {
  decision: Decision;
  readOnly?: boolean;
  onSupersede?: (id: string) => void;
  onReactivate?: (id: string) => void;
  onDeleteClick?: (
    id: string,
    title: string,
    triggerRef: React.RefObject<HTMLButtonElement | null>
  ) => void;
}

function formatDate(dateStr: string): string {
  try {
    const parts = dateStr.split("-");
    let dateObj: Date;
    if (parts.length === 3) {
      dateObj = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
    } else {
      dateObj = new Date(dateStr);
    }
    if (isNaN(dateObj.getTime())) return dateStr;

    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }).format(dateObj);
  } catch {
    return dateStr;
  }
}

const DecisionCard = memo(function DecisionCard({
  decision,
  readOnly = false,
  onSupersede,
  onReactivate,
  onDeleteClick,
}: DecisionCardProps) {
  const deleteBtnRef = useRef<HTMLButtonElement | null>(null);
  const isActive = decision.status === "Active";
  const formattedDate = formatDate(decision.date);

  return (
    <div className="group rounded-xl border border-slate-800/80 bg-[#0B101D]/90 p-5 transition-colors duration-200 hover:border-slate-700/90 hover:bg-[#0E1526] motion-reduce:transition-none space-y-2.5">
      {/* Top Header Row */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-sm sm:text-base font-semibold text-slate-100 tracking-tight leading-snug">
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

      {/* Description / Reasoning */}
      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
        {decision.description}
      </p>

      {/* Footer Meta & Conditional Actions Row */}
      <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800/40">
        {/* Meta Info */}
        <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
          <span>{formattedDate}</span>
          {decision.author && (
            <>
              <span>•</span>
              <span>{decision.author}</span>
            </>
          )}
        </div>

        {/* Action Buttons (Only rendered when readOnly is false) */}
        {!readOnly && (
          <div className="flex items-center gap-4 text-xs font-medium">
            {isActive ? (
              onSupersede && (
                <button
                  type="button"
                  onClick={() => onSupersede(decision.id)}
                  aria-label={`Mark "${decision.title}" as superseded`}
                  className="min-h-[44px] sm:min-h-0 flex items-center text-slate-400 hover:text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-[#2DD4BF]/50 rounded px-1.5 py-1"
                >
                  Mark superseded
                </button>
              )
            ) : (
              onReactivate && (
                <button
                  type="button"
                  onClick={() => onReactivate(decision.id)}
                  aria-label={`Reactivate decision "${decision.title}"`}
                  className="min-h-[44px] sm:min-h-0 flex items-center text-slate-400 hover:text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-[#2DD4BF]/50 rounded px-1.5 py-1"
                >
                  Reactivate
                </button>
              )
            )}

            {onDeleteClick && (
              <button
                ref={deleteBtnRef}
                type="button"
                onClick={() => onDeleteClick(decision.id, decision.title, deleteBtnRef)}
                aria-label={`Delete decision "${decision.title}"`}
                className="min-h-[44px] sm:min-h-0 flex items-center text-slate-400 hover:text-rose-400 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500/50 rounded px-1.5 py-1"
              >
                Delete
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
});

export default DecisionCard;
