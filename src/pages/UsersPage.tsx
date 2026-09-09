// src/pages/UsersPage.tsx
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../services/userService";
import Header from "../components/layout/Header";
import { User } from "../types";

export default function UsersPage() {
  const { data, isLoading, isError } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  return (
    <div className="min-h-screen bg-[#06080E] text-slate-100 flex flex-col font-sans">
      <Header />
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-10">
        <h1 className="text-3xl font-extrabold text-white mb-6">Users</h1>

        {isLoading && <p className="text-xs text-slate-400">Loading users...</p>}
        {isError && <p className="text-xs text-rose-400">Error loading users.</p>}

        <ul className="space-y-3">
          {data?.map((user) => (
            <li
              key={user.id}
              className="p-4 rounded-xl border border-slate-800 bg-[#0B101D] text-xs space-y-1"
            >
              <p className="font-semibold text-slate-200">{user.name}</p>
              <p className="text-slate-400">{user.email}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
