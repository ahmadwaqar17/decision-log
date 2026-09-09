// src/services/decisionService.ts
import { Decision } from "../types";

const STORAGE_KEY = "decision-log:v1";

const seedDecisions: Decision[] = [
  {
    id: "dec-1",
    title: "Adopted Stripe for payments",
    status: "Active",
    description: "Simpler than building our own; checkout conversion matters more than the margin.",
    date: "2025-03-12",
    author: "Pr & Mara",
  },
  {
    id: "dec-2",
    title: "Pivoted to a weekly digest",
    status: "Active",
    description: "Daily pushes tanked open rates. Weekly felt calmer and retained better.",
    date: "2025-02-04",
    author: "Mara",
  },
  {
    id: "dec-3",
    title: "Shipped self-serve billing",
    status: "Superseded",
    description: "Cut the onboarding call. Now fully replaced by the in-app flow.",
    date: "2025-01-21",
    author: "Pr",
  },
];

export const decisionService = {
  getAll(): Decision[] {
    if (typeof window === "undefined" || !window.localStorage) {
      return seedDecisions;
    }
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(seedDecisions));
        return seedDecisions;
      }
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed as Decision[];
      }
      return seedDecisions;
    } catch {
      return seedDecisions;
    }
  },

  save(decisions: Decision[]): void {
    if (typeof window === "undefined" || !window.localStorage) {
      return;
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(decisions));
    } catch (err) {
      console.error("Failed to save decisions to localStorage:", err);
    }
  },
};
