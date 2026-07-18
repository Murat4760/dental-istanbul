import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { Procedure } from "@/lib/procedures";

export function ProcedureCard({
  procedure,
  comingSoonLabel,
}: {
  procedure: Procedure;
  comingSoonLabel: string;
}) {
  return (
    <Link
      href={`/procedures/${procedure.slug}`}
      className="group relative flex flex-col rounded-card border-2 border-primary/15 bg-canvas p-10 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-lift"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-2xl font-semibold text-ink">
          {procedure.name}
        </h3>
        {procedure.status === "comingSoon" ? (
          <span className="shrink-0 rounded-full bg-sand px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-ink-soft">
            {comingSoonLabel}
          </span>
        ) : (
          <ArrowUpRight className="h-6 w-6 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
        )}
      </div>
      <p className="mt-3 flex-1 text-base leading-relaxed text-ink-soft">
        {procedure.summary}
      </p>
    </Link>
  );
}
