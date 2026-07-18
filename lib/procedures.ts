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
  | "Orthodontics";

export type Procedure = {
  slug: string;
  name: string;
  shortName: string;
  category: ProcedureCategory;
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
  },
  {
    slug: "veneers",
    name: "Porcelain Veneers",
    shortName: "Veneers",
    category: "Cosmetic",
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
  },
  {
    slug: "all-on-4",
    name: "All-on-4 Implants",
    shortName: "All-on-4",
    category: "Full-arch",
    icon: "Grip",
    heroTagline: "A full arch of fixed teeth on just four implants.",
    summary:
      "A fixed full-arch restoration supported by four implants — a stable alternative to removable dentures, often in a short timeframe.",
    whatItIs:
      "All-on-4 replaces a full arch of missing or failing teeth with a fixed bridge anchored on four strategically placed implants. Because it uses the available bone efficiently, many patients avoid extensive grafting and can leave with a fixed temporary bridge on the same visit, followed by a permanent bridge after healing.",
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
      title: "All-on-4 Dental Implants in Istanbul, Turkey",
      description:
        "Fixed full-arch teeth with All-on-4 implants in Istanbul, with a registered dentist.",
      keywords: [
        "All-on-4 Turkey",
        "All on 4 Istanbul",
        "full mouth dental implants Turkey",
        "fixed dentures Istanbul",
      ],
    },
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    shortName: "Whitening",
    category: "Whitening",
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
  },
  {
    slug: "crowns",
    name: "Dental Crowns",
    shortName: "Crowns",
    category: "Restorative",
    icon: "Crown",
    heroTagline: "Restore strength and shape to damaged teeth.",
    summary:
      "Custom caps that cover and protect a weak, cracked or heavily filled tooth while restoring its natural look.",
    whatItIs:
      "A crown is a custom-made cap that covers a damaged or heavily restored tooth to restore its shape, strength and appearance. Modern all-ceramic and zirconia crowns are strong and closely match natural teeth, making them suitable for both back and front teeth.",
    whoItsFor: [
      "You have a cracked, worn or heavily filled tooth",
      "You've had root canal treatment and need to protect the tooth",
      "You want to improve the shape or colour of a single tooth",
      "You need a crown as part of a bridge or on an implant",
    ],
    processSteps: [
      {
        title: "Assessment",
        description:
          "The tooth is examined and any decay treated so the crown sits on a healthy foundation.",
      },
      {
        title: "Preparation & scan",
        description:
          "The tooth is shaped and a precise digital impression is taken for the lab.",
      },
      {
        title: "Temporary crown",
        description:
          "A temporary protects the tooth while your permanent crown is crafted.",
      },
      {
        title: "Fitting",
        description:
          "The final crown is checked for fit, colour and bite, then cemented in place.",
      },
    ],
    daysInIstanbul: "3–5 days",
    seo: {
      title: "Dental Crowns in Istanbul, Turkey",
      description:
        "Zirconia and porcelain dental crowns in Istanbul. Natural-looking results from a registered dentist.",
      keywords: [
        "dental crowns Turkey",
        "dental crowns Istanbul",
        "zirconia crowns Turkey",
      ],
    },
  },
  {
    slug: "orthodontics",
    name: "Orthodontics",
    shortName: "Orthodontics",
    category: "Orthodontics",
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
