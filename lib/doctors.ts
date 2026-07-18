/**
 * Clinical team.
 *
 * ⚠️  [PLACEHOLDER] Names, titles, credentials and photos MUST be replaced with
 *     the clinic's real, verifiable dentists. Do not publish invented
 *     practitioners or qualifications.
 */

import type { Locale } from "@/i18n/routing";
import { doctorsTr } from "./doctors.tr";
import { doctorsAr } from "./doctors.ar";
import { doctorsRu } from "./doctors.ru";
import { doctorsDe } from "./doctors.de";

export type Doctor = {
  id: string;
  name: string;
  title: string;
  credentials: string;
  specialties: string[];
  bio: string;
  photoUrl?: string;
};

// Only one dentist is confirmed via the 2026-07-14 intake form. Do not add
// invented practitioners — add a d2/d3 entry only once the clinic supplies
// another real, verifiable dentist's name and registration number.
export const doctors: Doctor[] = [
  {
    id: "d1",
    name: "Ferhat Ramazani",
    title: "Dentist",
    credentials: "Diş Hekimi — Sicil No: 20190201022/51734",
    specialties: [],
    bio: "[PLACEHOLDER] A short professional biography — years of experience, university, memberships, and areas of focus. Keep to real, verifiable facts.",
    // Client-supplied 2026-07-18: Ferhat at the clinic reception, next to
    // the installed R.A.M.A DENTAL CLINIC sign.
    photoUrl: "/images/doctors/ferhat-ramazani.jpg",
  },
];

export function getDoctor(id: string): Doctor | undefined {
  return doctors.find((d) => d.id === id);
}

/**
 * Locale-aware content layer, mirroring the `procedures.ts` override
 * pattern. `name` and `credentials` (real identity/registration number)
 * are never overridden — only `title`/`specialties`/`bio` are translatable.
 * Add a new locale by adding one entry to `overrides` below
 * (`lib/doctors.<locale>.ts` + one import) — no page code changes.
 */
export type DoctorOverride = Partial<Pick<Doctor, "title" | "specialties" | "bio">>;

const overrides: Partial<Record<Locale, Record<string, DoctorOverride>>> = {
  tr: doctorsTr,
  ar: doctorsAr,
  ru: doctorsRu,
  de: doctorsDe,
};

function mergeDoctor(base: Doctor, locale: string): Doctor {
  const override = overrides[locale as Locale]?.[base.id];
  return override ? { ...base, ...override } : base;
}

export function getLocalizedDoctor(id: string, locale: string): Doctor | undefined {
  const base = getDoctor(id);
  return base ? mergeDoctor(base, locale) : undefined;
}

export function getLocalizedDoctors(locale: string): Doctor[] {
  return doctors.map((d) => mergeDoctor(d, locale));
}

