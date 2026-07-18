import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Icon } from "@/components/ui/Icon";
import { Media } from "@/components/ui/Media";
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
      className="group relative flex flex-col overflow-hidden rounded-card border-2 border-primary/15 bg-canvas transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-lift"
    >
      <Media
        src={procedure.photoUrl}
        aspect="16 / 9"
        tone="accent"
        rounded="rounded-none"
        alt={procedure.name}
        label="[PLACEHOLDER] Treatment photo"
      />
      <div className="flex flex-1 flex-col p-10">
        <div className="flex items-start justify-between">
          <span className="grid h-20 w-20 place-items-center rounded-2xl bg-primary-tint text-primary">
            <Icon name={procedure.icon} className="h-10 w-10" />
          </span>
          {procedure.status === "comingSoon" ? (
            <span className="rounded-full bg-sand px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-ink-soft">
              {comingSoonLabel}
            </span>
          ) : (
            <ArrowUpRight className="h-6 w-6 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
          )}
        </div>
        <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
          {procedure.name}
        </h3>
        <p className="mt-3 flex-1 text-base leading-relaxed text-ink-soft">
          {procedure.summary}
        </p>
      </div>
    </Link>
  );
}
