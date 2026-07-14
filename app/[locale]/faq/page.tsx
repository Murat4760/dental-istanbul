import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { faqs } from "@/lib/faqs";
import { buildMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CTABand } from "@/components/CTABand";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Frequently Asked Questions",
    description:
      "Answers to common questions about dental treatment in Istanbul — safety, trips, travel, payment, guarantees and aftercare for international patients.",
    path: "/faq",
  });
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const general = faqs.filter((f) => f.tags.includes("general"));
  const treatment = faqs.filter((f) => !f.tags.includes("general"));

  return (
    <>
      <section className="section pb-0">
        <div className="container-page">
          <SectionHeading
            as="h1"
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Everything you need to feel confident about travelling to Istanbul for your treatment. Still unsure? Message us on WhatsApp anytime."
          />
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-5 font-display text-xl font-semibold text-ink">
              Before you travel
            </h2>
            <FaqAccordion items={general} />
          </div>
          <div>
            <h2 className="mb-5 font-display text-xl font-semibold text-ink">
              About treatments
            </h2>
            <FaqAccordion items={treatment} />
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
