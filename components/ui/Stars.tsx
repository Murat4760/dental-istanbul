import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Stars({
  rating = 5,
  className,
}: {
  rating?: number;
  className?: string;
}) {
  const rounded = Math.round(rating);
  return (
    <div
      className={cn("flex items-center gap-0.5 text-accent", className)}
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4"
          strokeWidth={1.5}
          fill={i < rounded ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
}
