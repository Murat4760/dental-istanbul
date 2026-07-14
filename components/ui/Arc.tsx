import { cn } from "@/lib/utils";

/**
 * Signature motif — a thin smile/tooth-crown arc reused across the site
 * (hero backdrop, section dividers, before/after handle, active nav underline).
 * Inherits color via `currentColor`.
 */
export function Arc({
  className,
  strokeWidth = 1.5,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 200 60"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
      className={cn("block", className)}
    >
      <path
        d="M2 54 C 46 6, 154 6, 198 54"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
