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
            description="[PLACEHOLDER] Sample reviews are shown for layout — replace with real, permission-cleared patient testimonials before going live."
          />
          {/*
            Aggregate rating ("4.9 based on 840+ reviews") removed — SITE.stats
            is still placeholder, not a real, verifiable figure. Re-enable
            once the clinic supplies real, sourced numbers.
          */}
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
