"use client";

import { useEffect, useState } from "react";

export default function InteractiveBg() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-slate-950 dark:bg-slate-950 light:bg-slate-50 transition-colors duration-500">
      {/* Aurora glow effect */}
      <div className="aurora-bg" />

      {/* Floating Blobs */}
      <div className="absolute top-1/4 left-1/10 w-72 md:w-96 h-72 md:h-96 rounded-full bg-indigo-500/10 dark:bg-indigo-500/10 light:bg-indigo-300/10 blur-[80px] md:blur-[120px] animate-blob filter" />
      <div className="absolute top-2/3 right-1/10 w-80 md:w-[450px] h-80 md:h-[450px] rounded-full bg-violet-600/10 dark:bg-violet-600/10 light:bg-violet-300/10 blur-[90px] md:blur-[140px] animate-blob [animation-delay:2s] filter" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-80 h-64 md:h-80 rounded-full bg-cyan-500/8 dark:bg-cyan-500/8 light:bg-cyan-300/10 blur-[80px] md:blur-[120px] animate-blob [animation-delay:4s] filter" />

      {/* Subtle Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03] light:opacity-[0.08]" 
        style={{
          backgroundImage: `radial-gradient(circle, rgb(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
    </div>
  );
}
