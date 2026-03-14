import React from "react";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`rounded-3xl border border-slate-200 bg-white/80 shadow-lg shadow-slate-200/50 backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}