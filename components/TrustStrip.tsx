"use client";

import { useEffect, useRef, useState } from "react";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

type Stat = {
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
};

const STATS: Stat[] = [
  { value: SITE.stats.yearsActive, suffix: "+", label: "Years of experience" },
  { value: SITE.stats.patientsTreated, suffix: "+", label: "Patients treated" },
  { value: SITE.stats.countriesServed, suffix: "+", label: "Countries served" },
  { value: SITE.stats.rating, decimals: 1, suffix: "★", label: "Average rating" },
];

function format(v: number, decimals = 0) {
  return decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString("en-US");
}

function StatItem({ stat, start }: { stat: Stat; start: boolean }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVal(stat.value);
      return;
    }
    let raf = 0;
    const duration = 1400;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(stat.value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setVal(stat.value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, stat.value]);

  return (
    <div className="text-center">
      <div className="font-display text-3xl font-semibold text-ink sm:text-4xl">
        {format(val, stat.decimals)}
        <span className="text-accent">{stat.suffix}</span>
      </div>
      <div className="mt-1 text-sm text-ink-soft">{stat.label}</div>
    </div>
  );
}

export function TrustStrip({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "grid grid-cols-2 gap-y-8 divide-line sm:grid-cols-4 sm:divide-x",
        className,
      )}
    >
      {STATS.map((stat) => (
        <div key={stat.label} className="px-4">
          <StatItem stat={stat} start={start} />
        </div>
      ))}
    </div>
  );
}
