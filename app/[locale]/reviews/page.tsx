import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { SITE } from "@/lib/site";
import { reviews } from "@/lib/reviews";
import { buildMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
            description="We only publish real, permission-cleared patient reviews."
          />
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          {reviews.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r, i) => (
                <Reveal key={r.id} delay={(i % 3) * 60}>
                  <ReviewCard review={r} className="h-full" />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="rounded-card border border-dashed border-line bg-surface p-10 text-center">
              <p className="text-ink-soft">
                Reviews will appear here once we have real, consented patient
                testimonials to share.
              </p>
            </div>
          )}
        </div>
      </section>

      <CTABand />
    </>
  );
}
