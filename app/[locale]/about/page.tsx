import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SITE } from "@/lib/site";
import { getLocalizedDoctors } from "@/lib/doctors";
import { buildMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { DoctorCard } from "@/components/DoctorCard";
import { CTABand } from "@/components/CTABand";

const GALLERY_SRC = [
  "/images/clinic/reception-2.jpg",
  "/images/clinic/reception-3.jpg",
  "/images/clinic/consultation-room.jpg",
  "/images/clinic/treatment-room-1.jpg",
  "/images/clinic/treatment-room-2.jpg",
  "/images/clinic/treatment-room-3.jpg",
  "/images/clinic/treatment-room-4.jpg",
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  const place = await getTranslations({ locale, namespace: "place" });
  return buildMetadata({
    title: t("metaTitle", { name: SITE.name }),
    description: t("metaDescription", {
      name: SITE.name,
      city: place("city"),
    }),
    path: "/about",
    locale,
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "about" });
  const place = await getTranslations({ locale, namespace: "place" });
  const doctors = getLocalizedDoctors(locale);
  const storyParagraph = t("storyParagraph");
  const teamDescription = t("teamDescription");

  return (
    <>
      <section className="section">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              as="h1"
              eyebrow={t("eyebrowAboutUs")}
              title={t("heroTitle")}
              description={SITE.description}
            />
            {!storyParagraph.startsWith("[PLACEHOLDER]") && (
              <p className="mt-5 text-pretty leading-relaxed text-ink-soft">
                {storyParagraph}
              </p>
            )}
          </div>
          <Media
            src="/images/clinic/reception.jpg"
            aspect="4 / 3"
            tone="teal"
            alt={t("receptionAlt", { name: SITE.name, city: place("city") })}
            className="shadow-card"
          />
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow={t("eyebrowOurClinic")}
            title={t("clinicTitle", { name: SITE.name })}
            description={t("clinicDescription", {
              district: SITE.address.district,
              city: place("city"),
            })}
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {GALLERY_SRC.map((src) => (
              <Media
                key={src}
                src={src}
                aspect="4 / 3"
                alt={t("galleryAlt", { name: SITE.name })}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-sand/60">
        <div className="container-page">
          <SectionHeading
            eyebrow={t("eyebrowOurTeam")}
            title={t("teamTitle")}
            description={teamDescription.startsWith("[PLACEHOLDER]") ? undefined : teamDescription}
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
