/**
 * Procedure catalogue — the typed source that drives:
 *   • the /procedures grid + home preview
 *   • each /procedures/[slug] page (generateStaticParams)
 *   • the MedicalProcedure JSON-LD on each page
 *
 * Adding a procedure = adding one object below. No page code changes.
 *
 * Prices are intentionally [PLACEHOLDER]: exact figures come from the clinic and
 * are quoted per-case. The pricing page converts on "get a free quote" rather
 * than publishing unverified numbers.
 */

export type ProcessStep = { title: string; description: string };

export type BeforeAfterPair = {
  /** Descriptive alt text; the media itself is a labelled placeholder until the
   *  clinic supplies real, consented patient photos. */
  alt: string;
  beforeSrc?: string;
  afterSrc?: string;
};

export type ProcedureCategory =
  | "Restorative"
  | "Cosmetic"
  | "Full-arch"
  | "Whitening";

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
  /** [PLACEHOLDER] exact price — quoted per case. */
  priceFrom: string;
  priceNote: string;
  beforeAfter: BeforeAfterPair[];
  /** slugs into lib/faqs.ts */
  faqSlugs: string[];
  seo: { title: string; description: string; keywords: string[] };
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
      "A dental implant is a small titanium post placed into the jawbone to replace the root of a missing tooth. Once it integrates with the bone, a custom crown is fixed on top. Implants are the gold standard for replacing one, several or all teeth because they preserve bone, protect neighbouring teeth and can last decades with good care.",
    whoItsFor: [
      "You are missing one or more teeth and want a permanent solution",
      "You wear a denture or bridge and want something more stable",
      "You have healthy gums and enough jawbone (a bone graft can help if not)",
      "You want to protect the bone and avoid shifting of nearby teeth",
    ],
    processSteps: [
      {
        title: "Free online consultation",
        description:
          "Send photos and any recent X-rays. Our dentists review your case and send an indicative plan and quote before you travel.",
      },
      {
        title: "Examination & 3D scan",
        description:
          "On arrival, a CBCT scan and clinical exam confirm the plan and implant positions.",
      },
      {
        title: "Implant placement",
        description:
          "The implant is placed under local anaesthetic in a single appointment. Most patients return to their hotel the same day.",
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
    priceFrom: "[PLACEHOLDER: from £xxx per implant]",
    priceNote:
      "Final cost depends on the number of implants, any grafting, and crown material. Request a free personalised quote.",
    beforeAfter: [
      { alt: "Single front-tooth implant, before and after" },
      { alt: "Multiple implants restoring a full smile, before and after" },
    ],
    faqSlugs: [
      "implants-pain",
      "implants-lifespan",
      "how-many-trips",
      "bone-graft",
    ],
    seo: {
      title: "Dental Implants in Istanbul, Turkey",
      description:
        "Permanent dental implants in Istanbul with accredited dentists and all-inclusive packages. Free online consultation and quote for international patients.",
      keywords: [
        "dental implants Turkey",
        "dental implants Istanbul",
        "dental implants abroad",
        "tooth implant Istanbul",
        "affordable dental implants Turkey",
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
    priceFrom: "[PLACEHOLDER: from £xxx per veneer]",
    priceNote:
      "Cost depends on the number of veneers and porcelain type. Request a free smile-design quote.",
    beforeAfter: [
      { alt: "Discoloured teeth transformed with porcelain veneers" },
      { alt: "Gaps and chips corrected with a full veneer set" },
    ],
    faqSlugs: ["veneers-lifespan", "veneers-natural", "how-many-trips"],
    seo: {
      title: "Porcelain Veneers in Istanbul, Turkey",
      description:
        "Natural-looking porcelain veneers in Istanbul. Digital smile design, accredited dentists and all-inclusive packages for international patients.",
      keywords: [
        "veneers Turkey",
        "veneers Istanbul",
        "porcelain veneers Turkey",
        "Hollywood smile Istanbul",
        "dental veneers abroad",
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
    priceFrom: "[PLACEHOLDER: from £xxxx per arch]",
    priceNote:
      "Cost depends on materials and whether one or both arches are treated. Request a free full-arch quote.",
    beforeAfter: [
      { alt: "Failing upper teeth replaced with an All-on-4 bridge" },
      { alt: "Full lower arch restored with fixed implant bridge" },
    ],
    faqSlugs: ["all-on-4-vs-dentures", "implants-lifespan", "how-many-trips"],
    seo: {
      title: "All-on-4 Dental Implants in Istanbul, Turkey",
      description:
        "Fixed full-arch teeth with All-on-4 implants in Istanbul. Accredited implantologists and all-inclusive packages for international patients.",
      keywords: [
        "All-on-4 Turkey",
        "All on 4 Istanbul",
        "full mouth dental implants Turkey",
        "fixed dentures Istanbul",
        "full arch implants abroad",
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
      "Professional whitening uses a controlled, dentist-supervised gel to lift stains and brighten the natural shade of your teeth. Because it is applied under supervision with gum protection, it is safer and more effective than over-the-counter kits, with results visible in a single appointment.",
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
    priceFrom: "[PLACEHOLDER: from £xxx]",
    priceNote:
      "Often combined with a hygiene visit or smile makeover. Request a free quote.",
    beforeAfter: [
      { alt: "Coffee-stained teeth brightened with professional whitening" },
    ],
    faqSlugs: ["whitening-sensitivity", "whitening-lasts"],
    seo: {
      title: "Teeth Whitening in Istanbul, Turkey",
      description:
        "Professional in-clinic teeth whitening in Istanbul. Safe, dentist-supervised brightening for international patients, with same-day results.",
      keywords: [
        "teeth whitening Turkey",
        "teeth whitening Istanbul",
        "professional whitening abroad",
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
    priceFrom: "[PLACEHOLDER: from £xxx per crown]",
    priceNote:
      "Cost depends on the crown material (e.g. zirconia, E-max). Request a free quote.",
    beforeAfter: [
      { alt: "Cracked molar restored with a zirconia crown" },
      { alt: "Discoloured front tooth matched with an all-ceramic crown" },
    ],
    faqSlugs: ["crowns-material", "crowns-lifespan", "how-many-trips"],
    seo: {
      title: "Dental Crowns in Istanbul, Turkey",
      description:
        "Zirconia and porcelain dental crowns in Istanbul. Accredited dentists, natural-looking results and all-inclusive packages for international patients.",
      keywords: [
        "dental crowns Turkey",
        "dental crowns Istanbul",
        "zirconia crowns Turkey",
        "crowns abroad",
      ],
    },
  },
];

export function getProcedure(slug: string): Procedure | undefined {
  return procedures.find((p) => p.slug === slug);
}

export const procedureSlugs = procedures.map((p) => p.slug);
