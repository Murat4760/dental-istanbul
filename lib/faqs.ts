/**
 * FAQ content. `tags` link an FAQ to a procedure slug or a general theme so
 * procedure pages can pull their related questions (see Procedure.faqSlugs).
 */

export type Faq = {
  slug: string;
  question: string;
  answer: string;
  tags: string[];
};

export const faqs: Faq[] = [
  // ── General / travel / trust ────────────────────────────────────────────
  {
    slug: "is-it-safe",
    question: "Is getting dental treatment in Istanbul safe?",
    answer:
      "Reputable Istanbul clinics work to international clinical standards with qualified, experienced dentists and modern equipment. Look for clear accreditation, transparent treatment plans, and dentists who take the time to review your case before you travel — all of which we provide. Always choose a clinic that shares its credentials openly.",
    tags: ["general", "safety"],
  },
  {
    slug: "how-many-trips",
    question: "How many trips will I need?",
    answer:
      "It depends on the treatment. Cosmetic work such as veneers, crowns and whitening is usually completed in a single trip of about a week. Treatments involving implants typically need two trips — placement, then the final restoration after healing — with your coordinator planning the timing around you.",
    tags: ["general", "dental-implants", "veneers", "all-on-4", "crowns"],
  },
  {
    slug: "travel-arrangements",
    question: "Do you help with travel, hotels and transfers?",
    answer:
      "Yes. Our all-inclusive packages can include airport pick-up, transfers between your hotel and the clinic, and hotel booking assistance so you can focus on your treatment. Share your dates and we'll build an itinerary around your appointments.",
    tags: ["general", "travel"],
  },
  {
    slug: "language",
    question: "Will the team speak my language?",
    answer:
      "Our patient coordinators speak English and support international patients every day. Interpretation for other languages can be arranged on request — just let us know when you enquire.",
    tags: ["general", "travel"],
  },
  {
    slug: "payment-methods",
    question: "How does payment work?",
    answer:
      "You'll receive a clear, itemised quote before you travel with no hidden extras. Accepted payment methods and any deposit are confirmed in writing in advance. [PLACEHOLDER: confirm accepted payment methods and deposit policy.]",
    tags: ["general", "payment"],
  },
  {
    slug: "warranty",
    question: "Is there a guarantee on the work?",
    answer:
      "Quality clinics stand behind their work with a written guarantee on restorations such as crowns, veneers and implants, subject to good oral care and regular check-ups. [PLACEHOLDER: confirm exact guarantee terms and duration.]",
    tags: ["general", "safety"],
  },
  {
    slug: "aftercare",
    question: "What about aftercare once I'm home?",
    answer:
      "You'll go home with clear aftercare instructions and a point of contact for any questions. For treatments needing follow-up, we coordinate with you remotely and plan any return visit in advance.",
    tags: ["general"],
  },

  // ── Implants ────────────────────────────────────────────────────────────
  {
    slug: "implants-pain",
    question: "Is getting a dental implant painful?",
    answer:
      "Implant placement is done under local anaesthetic, so you shouldn't feel pain during the procedure. Most patients report only mild soreness afterwards, managed with standard pain relief, and return to normal activities quickly.",
    tags: ["dental-implants"],
  },
  {
    slug: "implants-lifespan",
    question: "How long do dental implants last?",
    answer:
      "With good oral hygiene and regular check-ups, implants can last many years — often decades. The crown on top may eventually need replacing due to normal wear, while the implant itself is designed to be a long-term foundation.",
    tags: ["dental-implants", "all-on-4"],
  },
  {
    slug: "bone-graft",
    question: "What if I don't have enough bone for an implant?",
    answer:
      "If there isn't enough jawbone to support an implant, a bone graft or sinus lift can rebuild the area first. Your dentist assesses this from your 3D scan and includes any grafting in your plan and quote up front.",
    tags: ["dental-implants"],
  },

  // ── Veneers ─────────────────────────────────────────────────────────────
  {
    slug: "veneers-lifespan",
    question: "How long do porcelain veneers last?",
    answer:
      "Well-made porcelain veneers commonly last 10–15 years or more with good care. Avoiding habits like biting nails or hard objects, plus regular check-ups, helps them last as long as possible.",
    tags: ["veneers"],
  },
  {
    slug: "veneers-natural",
    question: "Will veneers look natural?",
    answer:
      "Yes — modern porcelain reflects light like natural enamel, and veneers are designed around your face and existing teeth. With digital smile design you preview the shape and shade before anything is finalised, so the result suits you rather than looking artificial.",
    tags: ["veneers"],
  },

  // ── All-on-4 ────────────────────────────────────────────────────────────
  {
    slug: "all-on-4-vs-dentures",
    question: "How is All-on-4 different from dentures?",
    answer:
      "Unlike a removable denture, an All-on-4 bridge is fixed to implants, so it doesn't move, cover the palate, or need to be taken out. It feels closer to natural teeth for eating and speaking and helps preserve the jawbone.",
    tags: ["all-on-4"],
  },

  // ── Whitening ───────────────────────────────────────────────────────────
  {
    slug: "whitening-sensitivity",
    question: "Does professional whitening cause sensitivity?",
    answer:
      "Some people notice mild, temporary sensitivity after whitening, which usually settles within a day or two. Because in-clinic whitening is dentist-supervised with gum protection, it's controlled and comfortable for most patients.",
    tags: ["teeth-whitening"],
  },
  {
    slug: "whitening-lasts",
    question: "How long do whitening results last?",
    answer:
      "Results typically last several months to a couple of years depending on your diet and habits — coffee, tea, red wine and smoking cause staining over time. Simple aftercare and occasional top-ups keep your smile bright.",
    tags: ["teeth-whitening"],
  },

  // ── Crowns ──────────────────────────────────────────────────────────────
  {
    slug: "crowns-material",
    question: "Which crown material is best?",
    answer:
      "It depends on the tooth. Zirconia is very strong and well suited to back teeth and full-arch work, while layered ceramics such as E-max are prized for the lifelike aesthetics of front teeth. Your dentist recommends the best option for each tooth in your plan.",
    tags: ["crowns"],
  },
  {
    slug: "crowns-lifespan",
    question: "How long do crowns last?",
    answer:
      "A well-fitted crown typically lasts around 10–15 years, and often longer, with good oral hygiene and regular check-ups. The tooth underneath still needs care to keep the crown healthy.",
    tags: ["crowns"],
  },
];

export function getFaq(slug: string): Faq | undefined {
  return faqs.find((f) => f.slug === slug);
}

export function getFaqsBySlugs(slugs: string[]): Faq[] {
  return slugs.map(getFaq).filter((f): f is Faq => Boolean(f));
}

/** FAQs shown on the home preview. */
export const homeFaqSlugs = [
  "is-it-safe",
  "how-many-trips",
  "travel-arrangements",
  "warranty",
  "payment-methods",
];
