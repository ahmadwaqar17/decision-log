// src/types/index.ts

export type DecisionStatus = "Active" | "Superseded" | "Proposed" | "Deprecated";

export interface Decision {
  id: string;
  title: string;
  status: DecisionStatus;
  description: string;
  date: string;
  author: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}
