import { Media } from "@/components/ui/Media";
import type { Doctor } from "@/lib/doctors";

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <div className="overflow-hidden rounded-card border border-line bg-surface">
      <Media
        aspect="4 / 3"
        tone="teal"
        alt={`Portrait of ${doctor.name}`}
        label="[PLACEHOLDER] Doctor photo"
        rounded="rounded-none"
      />
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-ink">
          {doctor.name}
        </h3>
        <p className="text-sm font-medium text-primary">{doctor.title}</p>
        <p className="mt-1 text-xs text-muted">{doctor.credentials}</p>
        {!doctor.bio.startsWith("[PLACEHOLDER]") && (
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">{doctor.bio}</p>
        )}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {doctor.specialties.map((s) => (
            <span
              key={s}
              className="rounded-full bg-sand px-2.5 py-1 text-xs text-ink-soft"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
