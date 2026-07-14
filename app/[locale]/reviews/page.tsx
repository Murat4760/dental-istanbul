import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { SITE } from "@/lib/site";
import { reviews } from "@/lib/reviews";
import { buildMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stars } from "@/components/ui/Stars";
import { Reveal } from "@/components/ui/Reveal";
import { ReviewCard } from "@/components/ReviewCard";
import { CTABand } from "@/components/CTABand";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Patient Reviews",
    description: `Read what international patients say about their treatment at ${SITE.name} in Istanbul.`,
    path: "/reviews",
  });
}

export default async function ReviewsPage({
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
            eyebrow="Patient stories"
            title="What our patients say"
            description="[PLACEHOLDER] Sample reviews are shown for layout — replace with real, permission-cleared patient testimonials before going live."
          />
          <div className="mt-8 flex items-center gap-4">
            <span className="font-display text-5xl font-semibold text-ink">
              {SITE.stats.rating}
            </span>
            <div>
              <Stars rating={SITE.stats.rating} />
              <p className="mt-1 text-sm text-muted">
                Based on {SITE.stats.reviewCount.toLocaleString("en-US")}+ patient
                reviews [PLACEHOLDER]
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.id} delay={(i % 3) * 60}>
              <ReviewCard review={r} className="h-full" />
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
