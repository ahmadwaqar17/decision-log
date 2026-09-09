// src/hooks/useDecisions.ts
import { useReducer, useEffect, useCallback, useMemo } from "react";
import { Decision } from "../types";
import { decisionService } from "../services/decisionService";
import { decisionReducer, DecisionDraft } from "./decisionReducer";

export function useDecisions() {
  const [decisions, dispatch] = useReducer(
    decisionReducer,
    [],
    () => decisionService.getAll()
  );

  // Sync to localStorage whenever decisions state changes
  useEffect(() => {
    decisionService.save(decisions);
  }, [decisions]);

  const activeCount = useMemo(() => {
    return decisions.filter((d) => d.status === "Active").length;
  }, [decisions]);

  const addDecision = useCallback((draft: DecisionDraft) => {
    const id = typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : `dec-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    const newDecision: Decision = {
      id,
      title: draft.title.trim(),
      description: draft.description.trim(),
      date: draft.date || new Date().toISOString().split("T")[0],
      author: draft.author?.trim() || "Anonymous",
      status: "Active",
    };

    dispatch({ type: "add", payload: newDecision });
  }, []);

  const supersede = useCallback((id: string) => {
    dispatch({ type: "supersede", id });
  }, []);

  const reactivate = useCallback((id: string) => {
    dispatch({ type: "reactivate", id });
  }, []);

  const remove = useCallback((id: string) => {
    dispatch({ type: "delete", id });
  }, []);

  return {
    decisions,
    activeCount,
    addDecision,
    supersede,
    reactivate,
    remove,
  };
}
