/**
 * Procedure catalogue — the typed source that drives:
 *   • the /procedures grid + home preview
 *   • each /procedures/[slug] page (generateStaticParams)
 *   • the MedicalProcedure JSON-LD on each page
 *
 * Adding a procedure = adding one object below. No page code changes.
 *
 * No prices: this site does not advertise dental prices. Booking runs
 * through WhatsApp/phone/email instead of a quote request.
 * No before/after photos: dropped as a feature entirely (2026-07-16 decision)
 * — not pursuing consent or a legal read on domestic-vs-abroad publishing.
 * Never add real or placeholder result photos here.
 */

import type { Locale } from "@/i18n/routing";
import { proceduresTr } from "./procedures.tr";
import { proceduresAr } from "./procedures.ar";
import { proceduresRu } from "./procedures.ru";
import { proceduresDe } from "./procedures.de";

export type ProcessStep = { title: string; description: string };

export type ProcedureCategory =
  | "Restorative"
  | "Cosmetic"
  | "Full-arch"
  | "Whitening"
  | "Orthodontics"
  | "Periodontal";

/** schema.org MedicalProcedureType — only these three are real enum members. */
export type ProcedureType =
  | "SurgicalProcedure"
  | "NoninvasiveProcedure"
  | "PercutaneousProcedure";

export type Procedure = {
  slug: string;
  name: string;
  shortName: string;
  category: ProcedureCategory;
  /** schema.org MedicalProcedure.procedureType — drives the JSON-LD. */
  procedureType: ProcedureType;
  /** lucide-react icon name */
  icon: string;
  heroTagline: string;
  summary: string;
  whatItIs: string;
  whoItsFor: string[];
  processSteps: ProcessStep[];
  /** Typical time on the ground in Istanbul. */
  daysInIstanbul: string;
  seo: { title: string; description: string; keywords: string[] };
  /**
   * Generic illustrative photo of the treatment/equipment/setting — NOT a
   * patient result photo (before/after results stay banned, see file header
   * comment). Placeholder rendered by <Media> until a real one is supplied.
   */
  photoUrl?: string;
  /**
   * CSS aspect-ratio value matching photoUrl's exact native pixel
   * dimensions (e.g. "722 / 511"), so <Media>'s object-cover box crops
   * nothing — the box ratio equals the image ratio exactly.
   */
  photoAspect?: string;
  /** The recognized Turkish dental specialty this procedure falls under. */
  specialty: string;
  /**
   * "comingSoon" = the clinic offers this (per their own marketing) but we
   * don't yet have their specific details confirmed — shows a "Coming soon"
   * badge instead of presenting unconfirmed specifics as settled fact, and
   * skips the MedicalProcedure schema until it's filled in for real.
   */
  status?: "comingSoon";
};

export const procedures: Procedure[] = [
  {
    slug: "dental-implants",
    name: "Dental Implants",
    shortName: "Implants",
    category: "Restorative",
    procedureType: "SurgicalProcedure",
    specialty: "Oral and Maxillofacial Surgery",
    icon: "Anchor",
    heroTagline: "Permanent, natural-looking replacements for missing teeth.",
    summary:
      "Titanium implants that fuse with the jawbone to support crowns that look, feel and function like natural teeth.",
    whatItIs:
      "A dental implant is a small titanium post placed into the jawbone to replace the root of a missing tooth. Once it integrates with the bone, a custom crown is fixed on top. Implants are a well-established option for replacing one, several or all teeth because they preserve bone, protect neighbouring teeth and can last decades with good care.",
    whoItsFor: [
      "You are missing one or more teeth and want a permanent solution",
      "You wear a denture or bridge and want something more stable",
      "You have healthy gums and enough jawbone (a bone graft can help if not)",
      "You want to protect the bone and avoid shifting of nearby teeth",
    ],
    processSteps: [
      {
        title: "Online consultation",
        description:
          "Send photos and any recent X-rays. Our dentists review your case and send an indicative plan ahead of your first appointment.",
      },
      {
        title: "Examination & 3D scan",
        description:
          "At your first visit, a CBCT scan and clinical exam confirm the plan and implant positions.",
      },
      {
        title: "Implant placement",
        description:
          "The implant is placed under local anaesthetic in a single appointment. Most patients go home the same day.",
      },
      {
        title: "Healing & osseointegration",
        description:
          "The implant fuses with the bone over 3–6 months. A temporary crown can be fitted for aesthetics in the interim.",
      },
      {
        title: "Final crown",
        description:
          "On your second visit, the permanent crown is fitted and your bite is fine-tuned.",
      },
    ],
    daysInIstanbul: "3–5 days per visit (usually two visits)",
    seo: {
      title: "Dental Implants in Istanbul, Turkey",
      description:
        "Permanent dental implants in Istanbul with a registered dentist. Online consultation available before your first visit.",
      keywords: [
        "dental implants Turkey",
        "dental implants Istanbul",
        "tooth implant Istanbul",
      ],
    },
    photoUrl: "/images/procedures/dental-implants.png",
    photoAspect: "722 / 511",
  },
  {
    slug: "veneers",
    name: "Porcelain Veneers",
    shortName: "Veneers",
    category: "Cosmetic",
    procedureType: "NoninvasiveProcedure",
    specialty: "Restorative Dentistry",
    icon: "Sparkles",
    heroTagline: "A brighter, even smile — designed around your face.",
    summary:
      "Ultra-thin porcelain shells bonded to the front of your teeth to reshape colour, alignment and proportion.",
    whatItIs:
      "Veneers are thin, custom-made porcelain facings bonded to the front surface of the teeth. They correct discolouration, chips, gaps and mild misalignment to create a natural, even smile. Modern porcelain is highly durable and reflects light like natural enamel, so results look convincing rather than 'fake'.",
    whoItsFor: [
      "You want to improve the colour, shape or spacing of your smile",
      "You have chipped, worn or slightly crooked front teeth",
      "Whitening alone hasn't achieved the result you want",
      "You have healthy teeth and gums with enough enamel",
    ],
    processSteps: [
      {
        title: "Smile design consultation",
        description:
          "We discuss your goals and design a smile that suits your face, using a digital preview so you know what to expect.",
      },
      {
        title: "Preparation & scan",
        description:
          "A minimal amount of enamel is prepared and a precise digital impression is taken.",
      },
      {
        title: "Temporaries",
        description:
          "Temporary veneers let you trial the shape and shade while the finals are crafted in our lab.",
      },
      {
        title: "Bonding the finals",
        description:
          "Your porcelain veneers are bonded, polished and adjusted for a comfortable, natural bite.",
      },
    ],
    daysInIstanbul: "5–7 days",
    seo: {
      title: "Porcelain Veneers in Istanbul, Turkey",
      description:
        "Natural-looking porcelain veneers in Istanbul. Digital smile design with a registered dentist.",
      keywords: [
        "veneers Turkey",
        "veneers Istanbul",
        "porcelain veneers Turkey",
        "Hollywood smile Istanbul",
      ],
    },
    photoUrl: "/images/procedures/veneers.jpg",
    photoAspect: "722 / 314",
  },
  {
    slug: "all-on-4",
    name: "Zirconia Implants",
    shortName: "Zirconia",
    category: "Full-arch",
    procedureType: "SurgicalProcedure",
    specialty: "Prosthodontics",
    icon: "Grip",
    heroTagline: "A full arch of fixed teeth on just four implants.",
    summary:
      "A fixed full-arch restoration supported by four implants — a stable alternative to removable dentures, often in a short timeframe.",
    whatItIs:
      "This treatment replaces a full arch of missing or failing teeth with a fixed zirconia bridge anchored on four strategically placed implants. Because it uses the available bone efficiently, many patients avoid extensive grafting and can leave with a fixed temporary bridge on the same visit, followed by a permanent bridge after healing.",
    whoItsFor: [
      "You are missing most or all teeth in an arch, or they are failing",
      "You wear a full denture and want a fixed, stable solution",
      "You want to avoid the palate coverage and movement of dentures",
      "You are looking for full-arch results with fewer implants",
    ],
    processSteps: [
      {
        title: "Consultation & planning",
        description:
          "A CBCT scan and exam confirm bone volume and the ideal implant positions for your arch.",
      },
      {
        title: "Implant placement",
        description:
          "Four implants are placed and, in most cases, a fixed temporary bridge is fitted the same day.",
      },
      {
        title: "Healing",
        description:
          "The implants integrate over a few months while you wear the fixed temporary bridge.",
      },
      {
        title: "Permanent bridge",
        description:
          "On your return visit, the final, custom bridge is fitted for long-term function and aesthetics.",
      },
    ],
    daysInIstanbul: "5–7 days per visit (usually two visits)",
    seo: {
      title: "Zirconia Dental Implants in Istanbul, Turkey",
      description:
        "Fixed full-arch teeth with zirconia implants in Istanbul, with a registered dentist.",
      keywords: [
        "All-on-4 Turkey",
        "All on 4 Istanbul",
        "zirconia All-on-4 Turkey",
        "full mouth dental implants Turkey",
        "fixed dentures Istanbul",
      ],
    },
    photoUrl: "/images/procedures/all-on-4.jpg",
    photoAspect: "714 / 370",
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    shortName: "Whitening",
    category: "Whitening",
    procedureType: "NoninvasiveProcedure",
    specialty: "Restorative Dentistry",
    icon: "Sun",
    heroTagline: "A noticeably brighter smile in a single visit.",
    summary:
      "Professional in-clinic whitening that lifts stains safely and evenly under dental supervision.",
    whatItIs:
      "Professional whitening uses a controlled, dentist-supervised gel to lift stains and brighten the natural shade of your teeth. Because it is applied under professional supervision with gum protection, results are visible in a single appointment.",
    whoItsFor: [
      "Your teeth have yellowed or stained over time",
      "You want a brighter smile without altering tooth structure",
      "You have healthy teeth and gums, free of active decay",
      "You want a quick refresh, perhaps alongside a cleaning",
    ],
    processSteps: [
      {
        title: "Check-up",
        description:
          "A quick exam confirms your teeth and gums are healthy and suitable for whitening.",
      },
      {
        title: "Cleaning (optional)",
        description:
          "A hygiene clean first ensures the whitening acts on clean enamel for an even result.",
      },
      {
        title: "In-clinic whitening",
        description:
          "The gum is protected and the whitening gel is applied and activated in controlled cycles.",
      },
      {
        title: "Aftercare",
        description:
          "We share simple guidance to keep your results bright for as long as possible.",
      },
    ],
    daysInIstanbul: "1–2 days",
    seo: {
      title: "Teeth Whitening in Istanbul, Turkey",
      description:
        "Professional in-clinic teeth whitening in Istanbul. Safe, dentist-supervised brightening with same-day results.",
      keywords: [
        "teeth whitening Turkey",
        "teeth whitening Istanbul",
        "laser teeth whitening Istanbul",
      ],
    },
    photoUrl: "/images/procedures/teeth-whitening.jpg",
    photoAspect: "720 / 459",
  },
  {
    slug: "orthodontics",
    name: "Orthodontics",
    shortName: "Orthodontics",
    category: "Orthodontics",
    procedureType: "NoninvasiveProcedure",
    specialty: "Orthodontics",
    icon: "Smile",
    heroTagline: "Straighter teeth with braces or clear aligners.",
    summary:
      "Traditional braces or clear aligners that gradually move teeth into a straighter, more even position over a monitored treatment plan.",
    whatItIs:
      "Orthodontic treatment uses fixed braces or a series of clear aligners to apply gentle, controlled pressure that moves teeth into a straighter position over time. Unlike most other treatments here, it isn't a single-visit fix — it runs over several months, with the plan set in Istanbul and progress checked at intervals, in person or remotely, until the final result is reached.",
    whoItsFor: [
      "Your teeth are crowded, gapped or unevenly spaced",
      "You have a bite misalignment (overbite, underbite or crossbite)",
      "You've tried whitening or veneers but the underlying issue is alignment",
      "You want a longer-term, non-surgical way to straighten your smile",
    ],
    processSteps: [
      {
        title: "Consultation & scan",
        description:
          "Photos, X-rays and a clinical exam confirm whether braces or aligners suit your case, with an indicative treatment plan.",
      },
      {
        title: "Treatment plan",
        description:
          "Your dentist maps out the full course of movement and the expected timeline before any appliance is fitted.",
      },
      {
        title: "Fitting",
        description:
          "Braces are bonded to your teeth, or your first set of clear aligners is issued, at your fitting appointment.",
      },
      {
        title: "Ongoing adjustment",
        description:
          "Progress is checked at intervals over the following months — in person on return visits or remotely between them — with adjustments or new aligner sets as needed.",
      },
      {
        title: "Retention",
        description:
          "Once treatment is complete, a retainer holds your teeth in their new position long-term.",
      },
    ],
    daysInIstanbul: "Plan set in Istanbul; monitored over following months",
    seo: {
      title: "Orthodontics in Istanbul, Turkey",
      description:
        "Braces and clear aligners in Istanbul, with a treatment plan set in Istanbul and progress monitored in person or remotely.",
      keywords: [
        "orthodontics Turkey",
        "braces Istanbul",
        "clear aligners Turkey",
        "invisalign Istanbul",
      ],
    },
    photoUrl: "/images/procedures/orthodontics.jpg",
    photoAspect: "720 / 427",
  },
  {
    slug: "root-canal",
    name: "Root Canal Treatment",
    shortName: "Root Canal",
    category: "Restorative",
    procedureType: "NoninvasiveProcedure",
    specialty: "Endodontics",
    icon: "Syringe",
    heroTagline: "Save a damaged or infected tooth instead of losing it.",
    summary:
      "A procedure that removes infected or damaged pulp from inside a tooth, then cleans, shapes and seals the space to save the natural tooth.",
    whatItIs:
      "Root canal treatment removes infected or inflamed pulp — the soft tissue inside a tooth containing nerves and blood vessels — usually caused by deep decay, a crack, or repeated dental work on the same tooth. The space is cleaned, shaped and sealed with a filling material, and a crown is often placed afterward to protect and strengthen the tooth. It's a well-established way to save a tooth that would otherwise need to be extracted.",
    whoItsFor: [
      "You have persistent tooth pain, especially with hot or cold foods",
      "A tooth is cracked, deeply decayed, or has been treated multiple times before",
      "You notice swelling or tenderness in the gum near a specific tooth",
      "Your dentist has identified infected or damaged pulp on an X-ray",
    ],
    processSteps: [
      {
        title: "Examination & X-ray",
        description:
          "Your dentist examines the tooth and takes an X-ray to confirm the extent of the damage or infection.",
      },
      {
        title: "Local anaesthetic",
        description:
          "The area is numbed so the procedure is comfortable throughout.",
      },
      {
        title: "Cleaning the canal",
        description:
          "The infected or damaged pulp is removed, and the inside of the tooth is cleaned and shaped.",
      },
      {
        title: "Filling & sealing",
        description:
          "The cleaned space is filled and sealed to prevent reinfection.",
      },
      {
        title: "Crown (if needed)",
        description:
          "A crown is often fitted afterward to protect and strengthen the tooth long-term.",
      },
    ],
    daysInIstanbul: "1–2 visits (occasionally more for complex cases)",
    seo: {
      title: "Root Canal Treatment in Istanbul, Turkey",
      description:
        "Root canal treatment in Istanbul with a registered dentist — save a damaged or infected tooth.",
      keywords: [
        "root canal Turkey",
        "root canal Istanbul",
        "root canal treatment Istanbul",
        "endodontic treatment Turkey",
      ],
    },
    photoUrl: "/images/procedures/root-canal.jpg",
    photoAspect: "720 / 339",
  },
  {
    slug: "gum-treatment",
    name: "Gum Treatment",
    shortName: "Gum Treatment",
    category: "Periodontal",
    procedureType: "NoninvasiveProcedure",
    specialty: "Periodontology",
    icon: "Shield",
    heroTagline: "Healthier gums, treated before problems progress.",
    summary:
      "Professional deep cleaning and gum care that removes plaque and tartar below the gumline and helps prevent gum disease from progressing.",
    whatItIs:
      "Gum (periodontal) treatment addresses inflammation, bleeding or early gum disease by removing plaque and tartar that builds up above and below the gumline. The core treatment is scaling and root planing — a thorough clean of the tooth root surfaces — which helps gums reattach and heal. Left untreated, gum disease can progress and affect the bone supporting your teeth, so early treatment matters.",
    whoItsFor: [
      "Your gums bleed when you brush or floss",
      "You notice swelling, redness or tenderness in your gums",
      "You have persistent bad breath or a bad taste that doesn't go away",
      "Your dentist has measured deeper-than-normal gum pockets",
    ],
    processSteps: [
      {
        title: "Examination",
        description:
          "Your dentist checks your gums, measures pocket depth around each tooth, and may take X-rays to check the supporting bone.",
      },
      {
        title: "Scaling & root planing",
        description:
          "Plaque and tartar are carefully removed from above and below the gumline, and the root surfaces are smoothed.",
      },
      {
        title: "Healing",
        description:
          "Gums are given time to heal and reattach to the cleaned tooth surfaces.",
      },
      {
        title: "Review & maintenance",
        description:
          "A follow-up check confirms the gums are healing well, with guidance on keeping them healthy going forward.",
      },
    ],
    daysInIstanbul: "1–2 visits, spaced about a week apart",
    seo: {
      title: "Gum Treatment in Istanbul, Turkey",
      description:
        "Professional gum (periodontal) treatment in Istanbul with a registered dentist.",
      keywords: [
        "gum treatment Turkey",
        "gum treatment Istanbul",
        "periodontal treatment Turkey",
        "gum disease treatment Istanbul",
      ],
    },
    photoUrl: "/images/procedures/gum-treatment.jpg",
    photoAspect: "720 / 451",
  },
];

export function getProcedure(slug: string): Procedure | undefined {
  return procedures.find((p) => p.slug === slug);
}

export const procedureSlugs = procedures.map((p) => p.slug);

/**
 * Locale-aware content layer. `lib/procedures.ts` stays the English source of
 * truth (see the file header); a locale override only needs to translate the
 * human-readable fields, and any field/locale it doesn't cover falls back to
 * English automatically. Add a new locale by adding one entry to `overrides`
 * below (`lib/procedures.<locale>.ts` + one import) — no page code changes.
 */
export type ProcedureOverride = Partial<
  Omit<Procedure, "slug" | "icon" | "category" | "status">
>;

const overrides: Partial<Record<Locale, Record<string, ProcedureOverride>>> = {
  tr: proceduresTr,
  ar: proceduresAr,
  ru: proceduresRu,
  de: proceduresDe,
};

function mergeProcedure(base: Procedure, locale: string): Procedure {
  const override = overrides[locale as Locale]?.[base.slug];
  if (!override) return base;
  return {
    ...base,
    ...override,
    // Merge one level deep so translating only some `seo` fields doesn't
    // wipe the untranslated ones.
    seo: override.seo ? { ...base.seo, ...override.seo } : base.seo,
  };
}

export function getLocalizedProcedure(
  slug: string,
  locale: string,
): Procedure | undefined {
  const base = getProcedure(slug);
  return base ? mergeProcedure(base, locale) : undefined;
}

export function getLocalizedProcedures(locale: string): Procedure[] {
  return procedures.map((p) => mergeProcedure(p, locale));
}
