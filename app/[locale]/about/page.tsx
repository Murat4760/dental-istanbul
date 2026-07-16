import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { SITE } from "@/lib/site";
import { doctors } from "@/lib/doctors";
import { buildMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { DoctorCard } from "@/components/DoctorCard";
import { CTABand } from "@/components/CTABand";

const GALLERY = [
  { src: "/images/clinic/treatment-room-1.jpg", alt: "Treatment room at Rama Dental Clinic" },
  { src: "/images/clinic/treatment-room-2.jpg", alt: "Treatment room at Rama Dental Clinic" },
  { src: "/images/clinic/treatment-room-3.jpg", alt: "Treatment room at Rama Dental Clinic" },
  { src: "/images/clinic/treatment-room-4.jpg", alt: "Treatment room at Rama Dental Clinic" },
  { src: "/images/clinic/treatment-room-5.jpg", alt: "Treatment room at Rama Dental Clinic" },
  { src: "/images/clinic/treatment-room-6.jpg", alt: "Treatment room at Rama Dental Clinic" },
  { src: "/images/clinic/treatment-room-7.jpg", alt: "Treatment room at Rama Dental Clinic" },
  { src: "/images/clinic/treatment-room-8.jpg", alt: "Treatment room at Rama Dental Clinic" },
  { src: "/images/clinic/treatment-room-9.jpg", alt: "Treatment room at Rama Dental Clinic" },
];

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: `About ${SITE.name}`,
    description: `Meet the team behind ${SITE.name} — a registered dentist providing implants, veneers and smile makeovers for international patients in Istanbul.`,
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
          </div>
          <Media
            src="/images/clinic/reception.jpg"
            aspect="4 / 3"
            tone="teal"
            alt={`Reception at ${SITE.name} in ${SITE.city}`}
            className="shadow-card"
          />
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our clinic"
            title="Inside Rama Dental Clinic"
            description="A look at our clinic in Beylikdüzü, Istanbul."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {GALLERY.map((photo) => (
              <Media
                key={photo.src}
                src={photo.src}
                aspect="4 / 3"
                alt={photo.alt}
              />
            ))}
          </div>
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
