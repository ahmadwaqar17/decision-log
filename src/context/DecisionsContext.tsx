// src/context/DecisionsContext.tsx
import React, { createContext, useContext, useMemo } from "react";
import { Decision } from "../types";
import { DecisionDraft } from "../hooks/decisionReducer";
import { useDecisions } from "../hooks/useDecisions";

interface DecisionsContextValue {
  decisions: Decision[];
  activeCount: number;
  addDecision: (draft: DecisionDraft) => void;
  supersede: (id: string) => void;
  reactivate: (id: string) => void;
  remove: (id: string) => void;
}

const DecisionsContext = createContext<DecisionsContextValue | null>(null);

export function DecisionsProvider({ children }: { children: React.ReactNode }) {
  const { decisions, activeCount, addDecision, supersede, reactivate, remove } =
    useDecisions();

  const value = useMemo(
    () => ({
      decisions,
      activeCount,
      addDecision,
      supersede,
      reactivate,
      remove,
    }),
    [decisions, activeCount, addDecision, supersede, reactivate, remove]
  );

  return (
    <DecisionsContext.Provider value={value}>
      {children}
    </DecisionsContext.Provider>
  );
}

export function useDecisionsContext(): DecisionsContextValue {
  const context = useContext(DecisionsContext);
  if (!context) {
    throw new Error(
      "useDecisionsContext must be used within a <DecisionsProvider>"
    );
  }
  return context;
}
