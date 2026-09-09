// src/components/landing/MetricsSection.tsx
import React from "react";
import { Clock, FileText, GitCommit, LucideIcon } from "lucide-react";

interface MetricItem {
  id: string;
  icon: LucideIcon;
  title: string;
  value: string;
  subtext: string;
}

const metrics: MetricItem[] = [
  {
    id: "metric-log-time",
    icon: Clock,
    title: "Average log time",
    value: "2.4 min",
    subtext: "vs 14 days of lingering PR paralysis",
  },
  {
    id: "metric-rfcs",
    icon: FileText,
    title: "Forgotten 15-page design RFCs",
    value: "0 docs",
    subtext: "left in Google Drive",
  },
  {
    id: "metric-traceability",
    icon: GitCommit,
    title: "Git-committed traceability",
    value: "100%",
    subtext: "right beside production code",
  },
];

export default function MetricsSection() {
  return (
    <section
      aria-labelledby="metrics-heading"
      className="py-10 border-t border-slate-800/60"
    >
      {/* Section Header */}
      <div className="mb-6 flex items-center gap-2 text-xs font-mono tracking-wider text-slate-400 uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
        <h2 id="metrics-heading" className="text-xs font-mono font-normal">
          SYSTEM METRICS (SAMPLE FLEET)
        </h2>
      </div>

      {/* Metrics Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {metrics.map((metric) => {
          const IconComponent = metric.icon;
          return (
            <div
              key={metric.id}
              className="rounded-2xl border border-slate-800/80 bg-[#0A0E17]/80 p-5 backdrop-blur-md transition-colors duration-200 hover:border-slate-700/80 motion-reduce:transition-none space-y-3"
            >
              <div className="flex items-center gap-2 text-slate-400">
                <IconComponent className="w-4 h-4 text-[#2DD4BF]" />
                <span className="text-xs font-medium">{metric.title}</span>
              </div>

              <div className="text-3xl font-extrabold text-white font-mono tracking-tight">
                {metric.value}
              </div>

              <p className="text-xs text-slate-400 font-normal">
                {metric.subtext}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
