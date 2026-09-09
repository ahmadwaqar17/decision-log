// src/components/decisions/EmptyState.tsx
import React from "react";
import { Inbox } from "lucide-react";

interface EmptyStateProps {
  filter: "all" | "active" | "superseded";
}

export default function EmptyState({ filter }: EmptyStateProps) {
  const messages = {
    all: "No decisions logged yet. Click 'New decision' above to record your first architectural call.",
    active: "No active decisions found.",
    superseded: "No superseded decisions logged.",
  };

  return (
    <div className="rounded-2xl border border-dashed border-slate-800/80 bg-[#0A0E17]/40 p-12 text-center flex flex-col items-center justify-center space-y-3">
      <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500">
        <Inbox className="w-6 h-6" />
      </div>
      <p className="text-sm font-medium text-slate-300">
        {messages[filter]}
      </p>
    </div>
  );
}
