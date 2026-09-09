// src/components/layout/AmbientBackground.tsx
import React from "react";

export default function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 overflow-hidden pointer-events-none -z-10 select-none"
    >
      {/* Top Left Teal Ambient Glow */}
      <div
        className="absolute -top-[15vw] -left-[15vw] w-[75vw] h-[75vw] max-w-[600px] max-h-[600px] rounded-full blur-[90px] md:blur-[140px] opacity-20 md:opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(13, 148, 136, 0.5) 0%, rgba(15, 118, 110, 0.2) 50%, transparent 75%)",
        }}
      />

      {/* Middle Right Soft Pinkish/Purple Ambient Glow */}
      <div
        className="absolute top-[28%] -right-[15vw] w-[65vw] h-[65vw] max-w-[500px] max-h-[500px] rounded-full blur-[90px] md:blur-[150px] opacity-15 md:opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 75%)",
        }}
      />

      {/* Bottom Right Soft Purple Ambient Glow */}
      <div
        className="absolute -bottom-[15vw] -right-[15vw] w-[80vw] h-[80vw] max-w-[650px] max-h-[650px] rounded-full blur-[80px] md:blur-[140px] opacity-20 md:opacity-35"
        style={{
          background:
            "radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, rgba(107, 33, 168, 0.2) 45%, rgba(59, 7, 100, 0.08) 65%, transparent 80%)",
        }}
      />
    </div>
  );
}
