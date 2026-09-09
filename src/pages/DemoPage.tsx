// src/pages/DemoPage.tsx
import React, { useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import AmbientBackground from "../components/layout/AmbientBackground";
import DecisionCard from "../components/decisions/DecisionCard";
import DecisionForm, { DecisionFormValues } from "../components/decisions/DecisionForm";
import ConfirmDialog from "../components/decisions/ConfirmDialog";
import EmptyState from "../components/decisions/EmptyState";
import { useDecisionsContext } from "../context/DecisionsContext";
import { useDocumentTitle } from "../hooks";

type FilterType = "all" | "active" | "superseded";

export default function DemoPage() {
  useDocumentTitle("Demo Workspace | Decision Log");

  const { decisions, activeCount, addDecision, supersede, reactivate, remove } =
    useDecisionsContext();

  const [filter, setFilter] = useState<FilterType>("all");
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Confirm Dialog State
  const [deleteTarget, setDeleteTarget] = useState<{
    id: string;
    title: string;
    triggerRef?: React.RefObject<HTMLElement | null>;
  } | null>(null);

  // Filtered decisions derived with useMemo
  const filteredDecisions = useMemo(() => {
    if (filter === "active") {
      return decisions.filter((d) => d.status === "Active");
    }
    if (filter === "superseded") {
      return decisions.filter((d) => d.status === "Superseded");
    }
    return decisions;
  }, [decisions, filter]);

  // Memoized handlers passed into DecisionCard
  const handleSupersede = useCallback(
    (id: string) => {
      supersede(id);
    },
    [supersede]
  );

  const handleReactivate = useCallback(
    (id: string) => {
      reactivate(id);
    },
    [reactivate]
  );

  const handleDeleteClick = useCallback(
    (
      id: string,
      title: string,
      triggerRef: React.RefObject<HTMLButtonElement | null>
    ) => {
      setDeleteTarget({ id, title, triggerRef });
    },
    []
  );

  const handleConfirmDelete = useCallback(() => {
    if (deleteTarget) {
      remove(deleteTarget.id);
      setDeleteTarget(null);
    }
  }, [deleteTarget, remove]);

  const handleCreateSubmit = useCallback(
    (values: DecisionFormValues) => {
      addDecision(values);
      setIsFormOpen(false);
    },
    [addDecision]
  );

  return (
    <div className="min-h-screen bg-[#06080E] text-slate-100 flex flex-col font-sans selection:bg-[#2DD4BF]/30 selection:text-[#2DD4BF] relative overflow-x-hidden">
      {/* Fixed Ambient Background */}
      <AmbientBackground />

      {/* Header with 'Back to site' action */}
      <Header
        action={
          <Link
            to="/"
            className="inline-flex items-center px-4 py-1.5 rounded-full border border-slate-800 bg-[#0F1420]/80 text-xs font-medium text-slate-300 hover:border-slate-600 hover:text-white transition-colors"
          >
            Back to site
          </Link>
        }
      />

      {/* Main Workspace Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10 space-y-8">
        {/* Page Title & Description */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Your decisions
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
            This is a demo workspace. Add entries, mark them superseded, delete what you don&apos;t need. Nothing leaves the browser, and a refresh starts you over.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
          {/* Filter Tabs */}
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

          {/* Right Controls: Stats & Create Form Toggle */}
          <div className="flex items-center gap-4">
            <span
              aria-live="polite"
              className="text-xs font-mono text-slate-400"
            >
              {activeCount} of {decisions.length} active
            </span>

            <button
              type="button"
              onClick={() => setIsFormOpen((prev) => !prev)}
              className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-semibold rounded-full bg-[#2DD4BF] text-slate-950 hover:bg-[#26E5AA] shadow-[0_0_15px_rgba(45,212,191,0.25)] transition-all min-h-[36px] sm:min-h-0"
            >
              {isFormOpen ? "Close" : "New decision"}
            </button>
          </div>
        </div>

        {/* Create Decision Form (collapsible) */}
        {isFormOpen && (
          <DecisionForm
            onSubmit={handleCreateSubmit}
            onCancel={() => setIsFormOpen(false)}
          />
        )}

        {/* Decisions List */}
        <div className="space-y-4">
          {filteredDecisions.length === 0 ? (
            <EmptyState filter={filter} />
          ) : (
            filteredDecisions.map((decision) => (
              <DecisionCard
                key={decision.id}
                decision={decision}
                onSupersede={handleSupersede}
                onReactivate={handleReactivate}
                onDeleteClick={handleDeleteClick}
              />
            ))
          )}
        </div>
      </main>

      {/* Delete Confirmation Dialog */}
      <ConfirmDialog
        isOpen={deleteTarget !== null}
        title="Delete decision?"
        message={
          deleteTarget
            ? `Are you sure you want to delete "${deleteTarget.title}"? This action cannot be undone.`
            : ""
        }
        confirmLabel="Delete"
        onConfirm={handleConfirmDelete}
        onCancel={() => setDeleteTarget(null)}
        triggerRef={deleteTarget?.triggerRef}
      />
      {/* Footer */}
      <footer className="border-t border-slate-800/60 py-6 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>Decision Log &mdash; a private place for the calls that matter.</div>
          <div>&copy; 2026 Decision Log.</div>
        </div>
      </footer>
    </div>
  );
}
