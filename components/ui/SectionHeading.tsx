import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Repeated section header with the consistent eyebrow treatment
 * (accent hairline + tracked label) that ties the pages together.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Tag = "h2",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <div className={cn("max-w-2xl", centered && "mx-auto text-center", className)}>
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary",
            centered && "justify-center",
          )}
        >
          <span className="h-px w-6 bg-accent" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <Tag
        className={cn(
          "mt-3 font-semibold text-ink text-balance",
          Tag === "h1"
            ? "text-4xl sm:text-5xl md:text-[3.25rem]"
            : "text-[1.9rem] sm:text-4xl",
        )}
      >
        {title}
      </Tag>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed text-ink-soft text-pretty",
            centered && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
