// src/components/landing/ValuePropsSection.tsx
import React from "react";

interface ValueProp {
  id: string;
  title: string;
  description: string;
}

const valueProps: ValueProp[] = [
  {
    id: "prop-why",
    title: "The why, not just the what",
    description:
      "Most tools store the outcome and lose the reasoning. Decision Log keeps the context that made it sensible.",
  },
  {
    id: "prop-status",
    title: "Status you can act on",
    description:
      "Active or superseded. At a glance you know which calls still stand and which were quietly replaced.",
  },
  {
    id: "prop-trust",
    title: "Built to trust",
    description:
      "No account, no cloud, no tracking. What you write stays on your machine until you decide to export it.",
  },
];

export default function ValuePropsSection() {
  return (
    <section
      aria-labelledby="value-props-heading"
      className="py-10 border-t border-slate-800/60"
    >
      <h2 id="value-props-heading" className="sr-only">
        Core Value Propositions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {valueProps.map((prop) => (
          <div key={prop.id} className="space-y-2">
            <h3 className="text-sm font-bold text-slate-100 tracking-tight">
              {prop.title}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              {prop.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
