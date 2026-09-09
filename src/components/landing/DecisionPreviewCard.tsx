// src/components/landing/DecisionPreviewCard.tsx
import React from "react";
import { previewDecisions } from "../../data/previewDecisions";
import DecisionPreviewRow from "./DecisionPreviewRow";
import { Plus } from "lucide-react";

export default function DecisionPreviewCard() {
  return (
    <div className="relative rounded-2xl border border-slate-800/80 bg-[#0A0E17]/90 p-5 backdrop-blur-xl shadow-2xl space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between px-1">
        <span className="text-sm font-semibold text-slate-200 tracking-tight">
          Decisions
        </span>
        <span className="text-xs font-mono text-slate-500">
          3 of 12 active
        </span>
      </div>

      {/* Decisions List */}
      <div className="space-y-3">
        {previewDecisions.map((decision) => (
          <DecisionPreviewRow key={decision.id} decision={decision} />
        ))}
      </div>

      {/* Mock input box at bottom */}
      <div className="rounded-xl border border-dashed border-slate-800/80 bg-[#060910]/70 p-3 text-xs text-slate-500 flex items-center gap-2 font-mono select-none">
        <Plus className="w-3.5 h-3.5 text-slate-600 shrink-0" />
        <span>New decision &mdash; what, why, when...</span>
      </div>
    </div>
  );
}
