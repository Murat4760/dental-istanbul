import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { SITE } from "@/lib/site";
import { doctors } from "@/lib/doctors";
import { buildMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { DoctorCard } from "@/components/DoctorCard";
import { AccreditationBadges } from "@/components/AccreditationBadges";
import { CTABand } from "@/components/CTABand";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: `About ${SITE.name}`,
    description: `Meet the team behind ${SITE.name} — accredited dentists providing implants, veneers and smile makeovers for international patients in Istanbul.`,
    path: "/about",
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <section className="section">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              as="h1"
              eyebrow="About us"
              title="Trusted dental care, thousands of miles from home"
              description={SITE.description}
            />
            <p className="mt-5 text-pretty leading-relaxed text-ink-soft">
              [PLACEHOLDER] A paragraph about the clinic&rsquo;s story, philosophy
              and facilities — years established, the number of international
              patients cared for, the technology used, and what makes the
              patient experience different. Keep to real, verifiable facts.
            </p>
            <div className="mt-8">
              <AccreditationBadges />
            </div>
          </div>
          <Media
            aspect="4 / 3"
            tone="teal"
            alt={`Inside ${SITE.name} in ${SITE.city}`}
            label="[PLACEHOLDER] Clinic interior photo"
            className="shadow-card"
          />
        </div>
      </section>

      <section className="section bg-sand/60">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our team"
            title="Meet the dentists"
            description="[PLACEHOLDER] Replace with the clinic's real, verifiable dentists — names, credentials, registration numbers and photos."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((d, i) => (
              <Reveal key={d.id} delay={i * 60}>
                <DoctorCard doctor={d} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
