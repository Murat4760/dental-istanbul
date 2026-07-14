import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Check } from "lucide-react";
import { procedures } from "@/lib/procedures";
import { buildMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/CTABand";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Pricing & Packages",
    description:
      "Transparent, personalised dental pricing in Istanbul. Get a free itemised quote before you travel — with all-inclusive packages.",
    path: "/pricing",
    keywords: [
      "dental prices Turkey",
      "dental implants cost Istanbul",
      "veneers price Turkey",
      "dental treatment cost abroad",
    ],
  });
}

const INCLUDED = [
  "Online consultation and treatment planning",
  "Your treatment carried out by experienced dentists",
  "Airport and clinic transfers",
  "Hotel booking assistance",
  "English-speaking patient coordinator",
  "Aftercare guidance and remote follow-up",
];

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <>
      <section className="section pb-0">
        <div className="container-page">
          <SectionHeading
            as="h1"
            eyebrow="Pricing"
            title="Transparent pricing, personalised quotes"
            description="Every mouth is different, so we quote per case rather than publishing one-size-fits-all prices. You get a clear, itemised quote before you travel — with no hidden extras."
          />
        </div>
      </section>

      {/* Per-procedure */}
      <section className="section">
        <div className="container-page">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Treatments &amp; indicative pricing
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {procedures.map((p) => (
              <div
                key={p.slug}
                className="flex items-center justify-between gap-4 rounded-card border border-line bg-surface p-5"
              >
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {p.name}
                  </h3>
                  <p className="text-sm text-muted">{p.daysInIstanbul}</p>
                  <p className="mt-1 text-sm font-medium text-ink-soft">
                    {p.priceFrom}
                  </p>
                </div>
                <Button href={`/procedures/${p.slug}`} size="sm" variant="outline">
                  {t("cta.learnMore")}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section bg-sand/60">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="All-inclusive"
            title="What's included in your package"
            description="[PLACEHOLDER] Confirm exact package inclusions and payment terms before publishing."
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {INCLUDED.map((item) => (
              <li key={item} className="flex items-start gap-3 text-ink-soft">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-white">
                  <Check className="h-3 w-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABand />
    </>
  );
}
