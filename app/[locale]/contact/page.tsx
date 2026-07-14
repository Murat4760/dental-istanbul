import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { SITE, whatsappUrl } from "@/lib/site";
import { buildMetadata } from "@/lib/metadata";
import { InstagramIcon, FacebookIcon } from "@/components/ui/SocialIcons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Media } from "@/components/ui/Media";
import { QuoteForm } from "@/components/QuoteForm";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Contact Us",
    description: `Get in touch with ${SITE.name} in Istanbul. Message us on WhatsApp or request a free treatment plan and quote.`,
    path: "/contact",
  });
}

export default async function ContactPage({
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
            eyebrow="Contact"
            title="Let's plan your smile"
            description="Send your details for a free, no-obligation quote, or reach us directly — we reply within 24 hours, usually much sooner."
          />
        </div>
      </section>

      <section className="section">
        <div className="container-page grid items-start gap-12 lg:grid-cols-2">
          {/* Info */}
          <div>
            <div className="space-y-5">
              <a
                href={whatsappUrl(t("whatsapp.prefill"))}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-card border border-line bg-surface p-4 transition-colors hover:border-primary"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#25D366]/10 text-[#128C7E]">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink">
                    {t("whatsapp.label")}
                  </span>
                  <span className="block text-sm text-muted">
                    Fastest way to reach us
                  </span>
                </span>
              </a>

              <ul className="space-y-4 rounded-card border border-line bg-surface p-6 text-sm">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-ink-soft">
                    {SITE.address.street}, {SITE.address.district},{" "}
                    {SITE.address.city}, {SITE.country}
                  </span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <a href={SITE.phoneHref} className="text-ink-soft hover:text-primary">
                    {SITE.phoneDisplay}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-ink-soft hover:text-primary"
                  >
                    {SITE.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-ink-soft">
                    {SITE.hours.map((h) => (
                      <span key={h.days} className="block">
                        {h.days}:{" "}
                        {h.open === "Closed" ? "Closed" : `${h.open}–${h.close}`}
                      </span>
                    ))}
                  </span>
                </li>
              </ul>

              <div className="flex gap-3">
                {SITE.socials.instagram && (
                  <a
                    href={SITE.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink-soft transition-colors hover:border-primary hover:text-primary"
                  >
                    <InstagramIcon className="h-[18px] w-[18px]" />
                  </a>
                )}
                {SITE.socials.facebook && (
                  <a
                    href={SITE.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink-soft transition-colors hover:border-primary hover:text-primary"
                  >
                    <FacebookIcon className="h-[18px] w-[18px]" />
                  </a>
                )}
              </div>

              <Media
                aspect="16 / 9"
                tone="sand"
                alt={`Map showing ${SITE.name} location in ${SITE.city}`}
                label="[PLACEHOLDER] Embed clinic map"
              />
            </div>
          </div>

          {/* Form */}
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
