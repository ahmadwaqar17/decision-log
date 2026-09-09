// src/components/landing/Hero.tsx
import React from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import DecisionPreviewCard from "./DecisionPreviewCard";
import { ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative pt-10 pb-14 md:pt-16 md:pb-20 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        {/* Left Column: Hero Copy & Actions */}
        <div className="lg:col-span-7 space-y-6">
          {/* Heading */}
          <h1
            id="hero-heading"
            className="text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold text-white tracking-tight leading-[1.12]"
          >
            Built for teams tired of Slack amnesia &amp; phantom consensus.
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl font-medium text-slate-300 tracking-tight">
            Never ask &quot;Why did we build it this way?&quot; ever again.
          </p>

          {/* Body Paragraph */}
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl font-normal">
            A zero-friction, archival ledger for technical trade-offs, critical forks, and architectural pivots. Record what was settled, the exact friction why, when it landed, and whether the constraint is still legally active.
          </p>

          {/* CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Button
              as={Link}
              to="/demo"
              variant="primary"
              size="lg"
              className="gap-2 group"
            >
              <span>Launch Live Demo</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
            </Button>

            <Button
              as={Link}
              to="/public"
              variant="secondary"
              size="lg"
              className="gap-2"
            >
              <Terminal className="w-4 h-4 text-[#2DD4BF]" />
              <span>Browse Public Decision Logs</span>
            </Button>
          </div>
        </div>

        {/* Right Column: Interactive/Visual Preview Card */}
        <div className="lg:col-span-5 w-full">
          <DecisionPreviewCard />
        </div>
      </div>
    </section>
  );
}
