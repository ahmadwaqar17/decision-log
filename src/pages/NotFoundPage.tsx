// src/pages/NotFoundPage.tsx
import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import AmbientBackground from "../components/layout/AmbientBackground";
import Button from "../components/ui/Button";
import { useDocumentTitle } from "../hooks";
import { Compass } from "lucide-react";

export default function NotFoundPage() {
  useDocumentTitle("404 Page Not Found | Decision Log");

  return (
    <div className="min-h-screen bg-[#06080E] text-slate-100 flex flex-col font-sans relative overflow-x-hidden">
      {/* Fixed Ambient Background */}
      <AmbientBackground />

      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center relative z-10 py-16">
        <div className="max-w-md w-full rounded-2xl border border-slate-800/80 bg-[#0A0E17]/90 p-8 backdrop-blur-xl shadow-2xl space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#2DD4BF] mx-auto">
            <Compass className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-[#2DD4BF] tracking-wider uppercase font-semibold">
              404 &bull; Page Not Found
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Lost in the decision matrix?
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              The page or decision log entry you are looking for does not exist or has been moved.
            </p>
          </div>

          <div className="pt-2">
            <Button
              as={Link}
              to="/"
              variant="primary"
              size="md"
              className="w-full font-semibold"
            >
              Return to Homepage
            </Button>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-800/60 py-6 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>Decision Log &mdash; a private place for the calls that matter.</div>
          <div>&copy; 2026 Decision Log.</div>
        </div>
      </footer>
    </div>
  );
}
