import { Stars } from "@/components/ui/Stars";
import { cn } from "@/lib/utils";
import type { Review } from "@/lib/reviews";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function ReviewCard({
  review,
  className,
}: {
  review: Review;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "flex h-full flex-col rounded-card border border-line bg-surface p-6",
        className,
      )}
    >
      <Stars rating={review.rating} />
      <blockquote className="mt-4 flex-1 leading-relaxed text-ink-soft">
        &ldquo;{review.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary-tint font-display text-sm font-semibold text-primary">
          {initials(review.name)}
        </span>
        <span className="min-w-0">
          <span className="block text-sm font-semibold text-ink">
            {review.name}
          </span>
          <span className="block truncate text-xs text-muted">
            {review.flag} {review.country} · {review.procedure}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
