import Image from "next/image";
import { cn } from "@/lib/utils";
import { img } from "@/lib/image";

type Tone = "teal" | "sand" | "accent" | "ink";

const toneMap: Record<Tone, { bg: string; motif: string; chip: string }> = {
  teal: {
    bg: "bg-gradient-to-br from-primary-tint via-canvas to-primary/5",
    motif: "text-primary/25",
    chip: "bg-surface/80 text-primary",
  },
  sand: {
    bg: "bg-gradient-to-br from-sand via-canvas to-sand",
    motif: "text-ink/15",
    chip: "bg-surface/80 text-ink-soft",
  },
  accent: {
    bg: "bg-gradient-to-br from-accent-tint via-canvas to-accent/5",
    motif: "text-accent/30",
    chip: "bg-surface/80 text-accent-dark",
  },
  ink: {
    bg: "bg-gradient-to-br from-ink via-primary-dark to-ink",
    motif: "text-white/12",
    chip: "bg-white/12 text-white",
  },
};

/**
 * Image slot.
 * - With `src`: renders an optimized next/image (Cloudinary/Unsplash allow-listed
 *   in next.config.ts). This is the path once the clinic supplies real photos.
 * - Without `src`: renders a branded placeholder (brand duotone + arc motif +
 *   optional label). Every real-photo slot on the site flows through here.
 */
export function Media({
  src,
  alt,
  aspect = "4 / 3",
  tone = "teal",
  label,
  className,
  rounded = "rounded-card",
  priority,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  src?: string;
  alt: string;
  aspect?: string;
  tone?: Tone;
  /** Small caption chip, e.g. "[PLACEHOLDER] Clinic photo". */
  label?: string;
  className?: string;
  rounded?: string;
  priority?: boolean;
  sizes?: string;
}) {
  if (src) {
    return (
      <div
        className={cn("relative overflow-hidden", rounded, className)}
        style={{ aspectRatio: aspect }}
      >
        <Image
          src={img(src)}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  const t = toneMap[tone];
  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "relative flex items-end overflow-hidden border border-line",
        t.bg,
        rounded,
        className,
      )}
      style={{ aspectRatio: aspect }}
    >
      {/* concentric arc motif */}
      <svg
        viewBox="0 0 200 200"
        aria-hidden="true"
        className={cn("absolute left-1/2 top-1/2 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2", t.motif)}
        fill="none"
      >
        <path d="M20 150 C 60 70, 140 70, 180 150" stroke="currentColor" strokeWidth="1.25" />
        <path d="M40 158 C 72 96, 128 96, 160 158" stroke="currentColor" strokeWidth="1.25" />
        <path d="M62 166 C 84 126, 116 126, 138 166" stroke="currentColor" strokeWidth="1.25" />
      </svg>
      {label && (
        <span
          className={cn(
            "relative m-3 rounded-full px-3 py-1 text-[0.7rem] font-medium backdrop-blur-sm",
            t.chip,
          )}
        >
          {label}
        </span>
      )}
    </div>
  );
}
