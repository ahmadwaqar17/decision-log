// src/components/ui/Button.tsx
import React from "react";

type ButtonProps<E extends React.ElementType = "button"> = {
  as?: E;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
} & React.ComponentPropsWithoutRef<E>;

export default function Button<E extends React.ElementType = "button">({
  as,
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...rest
}: ButtonProps<E>) {
  const Component = as || "button";

  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2DD4BF]/50 motion-reduce:transition-none disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-[#2DD4BF] text-slate-950 hover:bg-[#26E5AA] font-semibold shadow-[0_0_20px_rgba(45,212,191,0.25)] hover:shadow-[0_0_30px_rgba(45,212,191,0.4)]",
    secondary:
      "bg-[#0F1420]/90 border border-slate-700/80 text-slate-200 hover:bg-[#151C2C] hover:border-slate-500 font-mono text-sm",
    outline:
      "border border-slate-700/80 text-slate-300 hover:border-slate-500 hover:text-white bg-slate-900/40",
    ghost:
      "text-slate-400 hover:text-white hover:bg-slate-800/50 bg-transparent",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-sm sm:text-base",
  };

  return (
    <Component
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}
