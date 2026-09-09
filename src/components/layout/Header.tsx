// src/components/layout/Header.tsx
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <div className="text-xl font-bold">React Boilerplate</div>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        <Link to="/users" className="hover:underline">Users</Link>
      </nav>
    </header>
  );
}
