/** The patient journey timeline — Consult → Travel → Treatment → Hotel & Transfer → Recovery → Follow-up. */

export type JourneyStep = {
  step: number;
  title: string;
  description: string;
  /** lucide-react icon name */
  icon: string;
};

export const journey: JourneyStep[] = [
  {
    step: 1,
    title: "Free online consultation",
    description:
      "Share photos and any X-rays with us on WhatsApp. Our dentists review your case and get back to you with an indicative treatment plan — no cost, no obligation.",
    icon: "MessageCircle",
  },
  {
    step: 2,
    title: "Plan your trip",
    description:
      "Once you're happy, we agree dates and help arrange flights guidance, hotel and airport pick-up around your treatment schedule.",
    icon: "Plane",
  },
  {
    step: 3,
    title: "Treatment in Istanbul",
    description:
      "On arrival you're examined and scanned to confirm the plan, then treatment begins with your English-speaking coordinator by your side.",
    icon: "Stethoscope",
  },
  {
    step: 4,
    title: "Hotel & transfers",
    description:
      "Rest between appointments in a comfortable partner hotel, with transfers to and from the clinic handled for you.",
    icon: "BedDouble",
  },
  {
    step: 5,
    title: "Recovery & city time",
    description:
      "Most treatments leave plenty of time to enjoy Istanbul. We share clear aftercare guidance for a smooth recovery.",
    icon: "MapPin",
  },
  {
    step: 6,
    title: "Follow-up from home",
    description:
      "Back home, you stay in touch with the team for any questions, and we plan any return visit well in advance.",
    icon: "HeartPulse",
  },
];
