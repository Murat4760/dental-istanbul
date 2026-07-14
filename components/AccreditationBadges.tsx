import { ShieldCheck } from "lucide-react";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function AccreditationBadges({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {SITE.accreditations.map((a) => (
        <span
          key={a.name}
          className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink-soft"
          title={a.note || undefined}
        >
          <ShieldCheck className="h-4 w-4 text-primary" />
          {a.name}
        </span>
      ))}
    </div>
  );
}
