// src/pages/UsersPage.tsx
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../services/userService";
import type { User } from "../types";

export default function UsersPage() {
  const { data, isLoading, isError } = useQuery<User[]>(["users"], fetchUsers);

  if (isLoading) return <p className="p-4">Loading users…</p>;
  if (isError) return <p className="p-4 text-red-600">Failed to load users.</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <table className="min-w-full table-auto border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">ID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((u) => (
            <tr key={u.id} className="border-t">
              <td className="p-2">{u.id}</td>
              <td className="p-2">{u.name}</td>
              <td className="p-2">{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
