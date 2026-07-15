/**
 * Clinical team.
 *
 * ⚠️  [PLACEHOLDER] Names, titles, credentials and photos MUST be replaced with
 *     the clinic's real, verifiable dentists. Do not publish invented
 *     practitioners or qualifications.
 */

export type Doctor = {
  id: string;
  name: string;
  title: string;
  credentials: string;
  specialties: string[];
  bio: string;
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
  },
];
