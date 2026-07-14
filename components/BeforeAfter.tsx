"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { ChevronsLeftRight } from "lucide-react";
import { img } from "@/lib/image";
import { cn } from "@/lib/utils";
import type { BeforeAfterPair } from "@/lib/procedures";

function Layer({
  src,
  alt,
  variant,
}: {
  src?: string;
  alt: string;
  variant: "before" | "after";
}) {
  if (src) {
    return (
      <Image
        src={img(src)}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "grid h-full w-full place-items-center bg-gradient-to-br",
        variant === "after"
          ? "from-primary-tint via-canvas to-primary/10"
          : "from-sand via-canvas to-sand",
      )}
    >
      <svg
        viewBox="0 0 200 120"
        aria-hidden="true"
        className={cn(
          "h-2/3 w-2/3",
          variant === "after" ? "text-primary/25" : "text-ink/12",
        )}
        fill="none"
      >
        <path d="M20 90 C 60 30, 140 30, 180 90" stroke="currentColor" strokeWidth="1.5" />
        <path d="M44 96 C 74 54, 126 54, 156 96" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

export function BeforeAfter({
  pair,
  className,
}: {
  pair: BeforeAfterPair;
  className?: string;
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }, []);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-card border border-line",
        className,
      )}
    >
      <div
        ref={ref}
        className="relative touch-none select-none"
        style={{ aspectRatio: "4 / 3" }}
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId);
          setFromClientX(e.clientX);
        }}
        onPointerMove={(e) => {
          if ((e.buttons & 1) === 0) return;
          setFromClientX(e.clientX);
        }}
      >
        {/* After (base) */}
        <div className="absolute inset-0">
          <Layer src={pair.afterSrc} alt={`After — ${pair.alt}`} variant="after" />
        </div>
        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-primary/90 px-2.5 py-1 text-xs font-medium text-white">
          After
        </span>

        {/* Before (clipped overlay) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Layer src={pair.beforeSrc} alt={`Before — ${pair.alt}`} variant="before" />
          <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-ink/80 px-2.5 py-1 text-xs font-medium text-white">
            Before
          </span>
        </div>

        {/* Divider + handle */}
        <div
          className="pointer-events-none absolute inset-y-0"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute inset-y-0 -ml-px w-0.5 bg-white/90 shadow-[0_0_0_1px_rgba(15,27,26,0.08)]" />
          <button
            type="button"
            role="slider"
            aria-label={`Reveal before and after: ${pair.alt}`}
            aria-valuenow={Math.round(pos)}
            aria-valuemin={0}
            aria-valuemax={100}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
              if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
            }}
            className="pointer-events-auto absolute top-1/2 -ml-5 -mt-5 grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-primary shadow-card"
          >
            <ChevronsLeftRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      {(pair.procedureDate || pair.photoDate) && (
        <div className="flex flex-wrap gap-x-4 gap-y-1 border-t border-line px-4 py-2.5 text-xs text-muted">
          {pair.procedureDate && <span>Procedure: {pair.procedureDate}</span>}
          {pair.photoDate && <span>Photo taken: {pair.photoDate}</span>}
        </div>
      )}
    </div>
  );
}
