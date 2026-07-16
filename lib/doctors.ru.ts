import type { DoctorOverride } from "./doctors";

/**
 * Russian translations of the doctor content in `doctors.ts`. Name and
 * credentials (real identity/registration number) are never overridden —
 * only `title`/`specialties`/`bio` are translatable, and only once they
 * hold real, verifiable content.
 */
export const doctorsRu: Record<string, DoctorOverride> = {
  d1: {
    title: "Стоматолог",
  },
};
