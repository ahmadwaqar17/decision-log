// src/pages/PublicLogPage.tsx
import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import AmbientBackground from "../components/layout/AmbientBackground";
import DecisionCard from "../components/decisions/DecisionCard";
import SkeletonCard from "../components/decisions/SkeletonCard";
import EmptyState from "../components/decisions/EmptyState";
import { publicDecisions } from "../data/publicDecisions";
import { useDebouncedValue, useDocumentTitle } from "../hooks";
import { Search, X } from "lucide-react";

type FilterType = "all" | "active" | "superseded";

export default function PublicLogPage() {
  useDocumentTitle("Public Log | Decision Log");

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<FilterType>("all");
  const [isLoading, setIsLoading] = useState(true);

  const debouncedSearchTerm = useDebouncedValue(searchTerm, 250);

  // Short initial fake loading delay for Skeleton cards demonstration
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  // Filtered decisions derived with useMemo
  const filteredDecisions = useMemo(() => {
    return publicDecisions.filter((decision) => {
      // Status filter
      if (filter === "active" && decision.status !== "Active") return false;
      if (filter === "superseded" && decision.status !== "Superseded") return false;

      // Search filter on title + description/reasoning
      if (debouncedSearchTerm.trim()) {
        const query = debouncedSearchTerm.toLowerCase();
        const matchesTitle = decision.title.toLowerCase().includes(query);
        const matchesDescription = decision.description.toLowerCase().includes(query);
        return matchesTitle || matchesDescription;
      }

      return true;
    });
  }, [filter, debouncedSearchTerm]);

  return (
    <div className="min-h-screen bg-[#06080E] text-slate-100 flex flex-col font-sans selection:bg-[#2DD4BF]/30 selection:text-[#2DD4BF] relative overflow-x-hidden">
      {/* Fixed Ambient Background */}
      <AmbientBackground />

      {/* Header */}
      <Header
        action={
          <div className="flex items-center gap-3">
            <Link
              to="/demo"
              className="inline-flex items-center px-4 py-1.5 rounded-full border border-slate-700/80 bg-[#111622]/80 text-xs font-medium text-slate-200 hover:border-slate-500 hover:bg-slate-800 transition-colors"
            >
              Try demo
            </Link>
            <Link
              to="/"
              className="inline-flex items-center px-4 py-1.5 rounded-full border border-slate-800 bg-[#0F1420]/80 text-xs font-medium text-slate-300 hover:border-slate-600 hover:text-white transition-colors"
            >
              Home
            </Link>
          </div>
        }
      />

      {/* Main Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10 space-y-8">
        {/* Title & Description */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Public decision log
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
            An immutable, open archive of technical trade-offs, architecture decisions, and project pivots.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="space-y-4 pt-2">
          {/* Search Input */}
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search decisions by title or reasoning..."
              aria-label="Search public decision log by title or reasoning"
              className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-800 bg-[#0A0E17]/90 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:border-[#2DD4BF] focus:outline-none focus:ring-2 focus:ring-[#2DD4BF]/50 min-h-[44px]"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                aria-label="Clear search query"
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-300 focus:outline-none"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filter Tabs & Counter */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="inline-flex items-center gap-1 p-1 rounded-full bg-[#0E131F] border border-slate-800/80 text-xs select-none">
              <button
                type="button"
                onClick={() => setFilter("all")}
                className={`px-3 py-1 rounded-full font-medium transition-colors min-h-[36px] sm:min-h-0 ${
                  filter === "all"
                    ? "bg-slate-800 text-white shadow-sm"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setFilter("active")}
                className={`px-3 py-1 rounded-full font-medium transition-colors min-h-[36px] sm:min-h-0 ${
                  filter === "active"
                    ? "bg-slate-800 text-white shadow-sm"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Active
              </button>
              <button
                type="button"
                onClick={() => setFilter("superseded")}
                className={`px-3 py-1 rounded-full font-medium transition-colors min-h-[36px] sm:min-h-0 ${
                  filter === "superseded"
                    ? "bg-slate-800 text-white shadow-sm"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Superseded
              </button>
            </div>

            {/* Counter with aria-live="polite" */}
            <span
              aria-live="polite"
              className="text-xs font-mono text-slate-400"
            >
              {filteredDecisions.length} decision{filteredDecisions.length === 1 ? "" : "s"} shown
            </span>
          </div>
        </div>

        {/* Decision Cards List / Skeleton Loader */}
        <div className="space-y-4">
          {isLoading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : filteredDecisions.length === 0 ? (
            <EmptyState filter={filter} />
          ) : (
            filteredDecisions.map((decision) => (
              <DecisionCard
                key={decision.id}
                decision={decision}
                readOnly={true}
              />
            ))
          )}
        </div>
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
