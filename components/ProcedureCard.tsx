import { ArrowUpRight, Clock } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Icon } from "@/components/ui/Icon";
import type { Procedure } from "@/lib/procedures";

export function ProcedureCard({
  procedure,
  comingSoonLabel = "Coming soon",
}: {
  procedure: Procedure;
  comingSoonLabel?: string;
}) {
  return (
    <Link
      href={`/procedures/${procedure.slug}`}
      className="group relative flex flex-col rounded-card border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lift"
    >
      <div className="flex items-start justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-tint text-primary">
          <Icon name={procedure.icon} className="h-6 w-6" />
        </span>
        {procedure.status === "comingSoon" ? (
          <span className="rounded-full bg-sand px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-ink-soft">
            {comingSoonLabel}
          </span>
        ) : (
          <ArrowUpRight className="h-5 w-5 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
        )}
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold text-ink">
        {procedure.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
        {procedure.summary}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-muted">
        <Clock className="h-3.5 w-3.5" />
        {procedure.daysInIstanbul}
      </span>
    </Link>
  );
}
