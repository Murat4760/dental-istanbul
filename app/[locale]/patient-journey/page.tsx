import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Stethoscope, Hotel, Car, HandHeart } from "lucide-react";
import { SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/Timeline";
import { CTABand } from "@/components/CTABand";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "The Patient Journey",
    description: `How treatment works with ${SITE.name} — from a free online consultation to travel, treatment in Istanbul, and follow-up back home.`,
    path: "/patient-journey",
  });
}

const INCLUDED = [
  {
    icon: Stethoscope,
    title: "Clinical care",
    body: "Examination, 3D imaging where needed, and your full treatment carried out by experienced dentists.",
  },
  {
    icon: Car,
    title: "Airport & clinic transfers",
    body: "Private transfers between the airport, your hotel and the clinic around your appointments.",
  },
  {
    icon: Hotel,
    title: "Hotel assistance",
    body: "Help booking a comfortable partner hotel close to the clinic for the length of your stay.",
  },
  {
    icon: HandHeart,
    title: "Coordinator & aftercare",
    body: "An English-speaking coordinator throughout, plus clear aftercare and remote follow-up at home.",
  },
];

export default async function JourneyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <section className="section pb-0">
        <div className="container-page">
          <SectionHeading
            as="h1"
            eyebrow="How it works"
            title="Your journey, from first message to follow-up"
            description="We handle the logistics so you can focus on your treatment and enjoy a little of Istanbul while you're here."
          />
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <Timeline />
        </div>
      </section>

      <section className="section bg-sand/60">
        <div className="container-page">
          <SectionHeading
            eyebrow="All-inclusive"
            title="What your package includes"
            description="[PLACEHOLDER] Confirm exactly what is and isn't included in each package before publishing."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {INCLUDED.map((card) => (
              <div
                key={card.title}
                className="h-full rounded-card border border-line bg-surface p-6"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-tint text-primary">
                  <card.icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
