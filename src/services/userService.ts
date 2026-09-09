// src/services/userService.ts
import axiosInstance from "../lib/axiosInstance";
import type { User } from "../types";

// Mock implementation – replace with real API endpoint later
export const fetchUsers = async (): Promise<User[]> => {
  // Simulate network delay
  await new Promise((res) => setTimeout(res, 200));
  // Return mock data
  return [
    { id: 1, name: "Alice Johnson", email: "alice@example.com" },
    { id: 2, name: "Bob Smith", email: "bob@example.com" },
    { id: 3, name: "Carol Davis", email: "carol@example.com" },
  ];
};

// Additional CRUD functions can be added here when a real backend is available.
