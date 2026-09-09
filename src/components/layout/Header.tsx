// src/components/layout/Header.tsx
import React from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  action?: React.ReactNode;
}

export default function Header({ action }: HeaderProps) {
  return (
    <header className="w-full bg-[#07090E]/80 backdrop-blur-md border-b border-slate-800/40 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-7 h-7 rounded-lg bg-[#0F2922] border border-[#164E3D] flex items-center justify-center text-[#2DD4BF] font-extrabold text-sm group-hover:border-[#2DD4BF] transition-colors">
            D
          </div>
          <span className="font-semibold text-slate-100 text-sm tracking-tight group-hover:text-white transition-colors">
            Decision Log
          </span>
        </Link>

        <div>
          {action ? (
            action
          ) : (
            <Link
              to="/demo"
              className="inline-flex items-center px-4 py-1.5 rounded-full border border-slate-700/80 bg-[#111622]/80 text-xs font-medium text-slate-200 hover:border-slate-500 hover:bg-slate-800 hover:text-white transition-colors motion-reduce:transition-none focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            >
              Try demo
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
