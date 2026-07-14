import { journey } from "@/lib/journey";
import { Icon } from "@/components/ui/Icon";

export function Timeline() {
  return (
    <ol className="relative grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-6">
      {/* connector rail (desktop) */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-6 right-6 top-6 hidden h-px bg-line lg:block"
      />
      {journey.map((step) => (
        <li key={step.step} className="relative">
          <div className="flex items-center gap-3 lg:flex-col lg:items-start">
            <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary text-white shadow-[0_8px_20px_-8px_rgba(14,92,87,0.6)]">
              <Icon name={step.icon} className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <span className="font-display text-sm font-semibold text-accent">
              {String(step.step).padStart(2, "0")}
            </span>
          </div>
          <h3 className="mt-4 font-display text-lg font-semibold text-ink">
            {step.title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
