// src/pages/HomePage.tsx
import React from "react";
import Header from "../components/layout/Header";
import AmbientBackground from "../components/layout/AmbientBackground";
import Hero from "../components/landing/Hero";
import MetricsSection from "../components/landing/MetricsSection";
import ValuePropsSection from "../components/landing/ValuePropsSection";
import { useDocumentTitle } from "../hooks";

export default function HomePage() {
  useDocumentTitle("Decision Log \u2014 Modern Technical Decision Ledger");

  return (
    <div className="min-h-screen bg-[#06080E] text-slate-100 flex flex-col font-sans selection:bg-[#2DD4BF]/30 selection:text-[#2DD4BF] relative overflow-x-hidden">
      {/* Fixed Ambient Background */}
      <AmbientBackground />

      {/* Main Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Hero />
        <MetricsSection />
        <ValuePropsSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/60 py-6 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            Decision Log &mdash; a private place for the calls that matter.
          </div>
          <div>
            &copy; 2026 Decision Log.
          </div>
        </div>
      </footer>
    </div>
  );
}
