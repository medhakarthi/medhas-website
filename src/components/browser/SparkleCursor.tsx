"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type RefObject } from "react";

type Sparkle = {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  kind: "dot" | "star";
};

const COLORS = ["#ffb0c8", "#ff8fb5", "#fff5f8", "#f2a0b8", "#ffffff"];
const LIFETIME = 520;
const MAX = 20;

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

type Props = { browserRef: RefObject<HTMLElement | null> };

export function SparkleCursor({ browserRef }: Props) {
  const fine = useMq("(pointer: fine)");
  const reduce = useMq("(prefers-reduced-motion: reduce)");
  const enabled = fine && !reduce;

  const [outside, setOutside] = useState(true);
  const [pos, setPos] = useState({ x: -40, y: -40 });
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const idRef = useRef(0);
  const last = useRef(0);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: MouseEvent) => {
      const rect = browserRef.current?.getBoundingClientRect();
      const over =
        !!rect &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      setOutside(!over);
      setPos({ x: e.clientX, y: e.clientY });
      if (over) return;

      const t = performance.now();
      if (t - last.current < 38) return;
      last.current = t;

      const id = idRef.current++;
      const sparkle: Sparkle = {
        id,
        x: e.clientX + (Math.random() * 14 - 7),
        y: e.clientY + (Math.random() * 14 - 7),
        size: 2 + Math.random() * 4,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        kind: Math.random() > 0.4 ? "star" : "dot",
      };

      setSparkles((prev) => [...prev.slice(-(MAX - 1)), sparkle]);
      window.setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== id));
      }, LIFETIME);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [browserRef, enabled]);

  useEffect(() => {
    if (!enabled) {
      document.body.classList.remove("sparkle-cursor-area");
      return;
    }
    document.body.classList.toggle("sparkle-cursor-area", outside);
    return () => document.body.classList.remove("sparkle-cursor-area");
  }, [enabled, outside]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100]" aria-hidden="true">
      {outside && (
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
            filter: "drop-shadow(0 0 3px rgba(255,143,181,0.7))",
          }}
        >
          {/* chunky pixel arrow */}
          <path
            d="M2 1h2v2h2v2h2v2h2v2h2v2h2v2h-4v2h2v2h-2v2h-2v-2H8v-2H6v2H4v-4h2v-2H4V9H2V1z"
            fill="#ffb0c8"
            stroke="#4a2030"
            strokeWidth="1"
          />
          <path d="M4 3h2v2H4zm2 2h2v2H6zm2 2h2v2H8zm2 2h2v2h-2z" fill="#ffe0ea" />
        </svg>
      )}
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="absolute animate-[sparkle-fade_520ms_steps(6)_forwards]"
          style={{
            left: s.x,
            top: s.y,
            width: s.size,
            height: s.size,
            background: s.color,
            boxShadow: `0 0 4px ${s.color}`,
            imageRendering: "pixelated",
            clipPath:
              s.kind === "star"
                ? "polygon(50% 0, 60% 35%, 100% 35%, 68% 57%, 80% 100%, 50% 72%, 20% 100%, 32% 57%, 0 35%, 40% 35%)"
                : undefined,
            borderRadius: s.kind === "dot" ? 0 : undefined,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
}
