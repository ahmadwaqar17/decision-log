// src/data/previewDecisions.ts
import { Decision } from "../types";

export const previewDecisions: Decision[] = [
  {
    id: "dec-1",
    title: "Adopted Stripe for payments",
    status: "Active",
    description: "Simpler than building our own; checkout conversion matters more than the margin.",
    date: "Mar 12, 2025",
    author: "Pr & Mara",
  },
  {
    id: "dec-2",
    title: "Pivoted to a weekly digest",
    status: "Active",
    description: "Daily pushes tanked open rates. Weekly felt calmer and retained better.",
    date: "Feb 04, 2025",
    author: "Mara",
  },
  {
    id: "dec-3",
    title: "Shipped self-serve billing",
    status: "Superseded",
    description: "Cut the onboarding call. Now fully replaced by the in-app flow.",
    date: "Jan 21, 2025",
    author: "Pr",
  },
];
