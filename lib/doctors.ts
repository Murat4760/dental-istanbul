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

export const doctors: Doctor[] = [
  {
    id: "d1",
    name: "[PLACEHOLDER: Dr. Full Name]",
    title: "Implantology & Oral Surgery",
    credentials: "[PLACEHOLDER: DDS, qualifications & registration no.]",
    specialties: ["Dental implants", "All-on-4", "Bone grafting"],
    bio: "[PLACEHOLDER] A short professional biography — years of experience, university, memberships, and areas of focus. Keep to real, verifiable facts.",
  },
  {
    id: "d2",
    name: "[PLACEHOLDER: Dr. Full Name]",
    title: "Cosmetic & Restorative Dentistry",
    credentials: "[PLACEHOLDER: DDS, qualifications & registration no.]",
    specialties: ["Porcelain veneers", "Smile design", "Crowns"],
    bio: "[PLACEHOLDER] A short professional biography focusing on aesthetic and restorative expertise.",
  },
  {
    id: "d3",
    name: "[PLACEHOLDER: Dr. Full Name]",
    title: "Prosthodontics",
    credentials: "[PLACEHOLDER: DDS, qualifications & registration no.]",
    specialties: ["Full-arch rehabilitation", "Crowns & bridges"],
    bio: "[PLACEHOLDER] A short professional biography focusing on prosthetic and full-arch work.",
  },
];
