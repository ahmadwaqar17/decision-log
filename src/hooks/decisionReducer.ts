// src/hooks/decisionReducer.ts
import { Decision } from "../types";

export type DecisionDraft = {
  title: string;
  description: string;
  date: string;
  author?: string;
};

export type DecisionAction =
  | { type: "add"; payload: Decision }
  | { type: "supersede"; id: string }
  | { type: "reactivate"; id: string }
  | { type: "delete"; id: string }
  | { type: "set"; payload: Decision[] };

export function decisionReducer(
  state: Decision[],
  action: DecisionAction
): Decision[] {
  switch (action.type) {
    case "add":
      return [action.payload, ...state];

    case "supersede":
      return state.map((item) =>
        item.id === action.id ? { ...item, status: "Superseded" as const } : item
      );

    case "reactivate":
      return state.map((item) =>
        item.id === action.id ? { ...item, status: "Active" as const } : item
      );

    case "delete":
      return state.filter((item) => item.id !== action.id);

    case "set":
      return action.payload;

    default:
      return state;
  }
}
