"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

function subscribe(query: string, cb: () => void) {
  const m = window.matchMedia(query);
  m.addEventListener("change", cb);
  return () => m.removeEventListener("change", cb);
}

function useMq(query: string, fallback = false) {
  return useSyncExternalStore(
    (cb) => subscribe(query, cb),
    () => window.matchMedia(query).matches,
    () => fallback,
  );
}

export function RetroCursor() {
  const enabled = useMq("(pointer: fine)");
  const [pos, setPos] = useState({ x: -40, y: -40 });

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled]);

  useEffect(() => {
    if (!enabled) {
      document.body.classList.remove("retro-cursor-area");
      return;
    }
    document.body.classList.add("retro-cursor-area");
    return () => document.body.classList.remove("retro-cursor-area");
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100]" aria-hidden="true">
      <svg
        width="20"
        height="24"
        viewBox="0 0 20 24"
        className="absolute"
        style={{
          left: pos.x,
          top: pos.y,
          transform: "translate(-1px, -1px)",
          imageRendering: "pixelated",
          filter: "drop-shadow(0 0 3px rgba(21,96,184,0.7))",
        }}
      >
        <path
          d="M2 1h2v2h2v2h2v2h2v2h2v2h2v2h-4v2h2v2h-2v2h-2v-2H8v-2H6v2H4v-4h2v-2H4V9H2V1z"
          fill="#6aa8e8"
          stroke="#0a1a38"
          strokeWidth="1"
        />
        <path d="M4 3h2v2H4zm2 2h2v2H6zm2 2h2v2H8zm2 2h2v2h-2z" fill="#d6e8fa" />
      </svg>
    </div>
  );
}
