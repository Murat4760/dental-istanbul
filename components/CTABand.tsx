import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/Button";
import { Arc } from "@/components/ui/Arc";
import { whatsappUrl } from "@/lib/site";

export async function CTABand({
  title = "Ready to start your smile journey?",
  subtitle = "Send your details or a few photos and get a free, no-obligation treatment plan and quote — usually within 24 hours.",
}: {
  title?: string;
  subtitle?: string;
}) {
  const t = await getTranslations();
  return (
    <section className="section">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-16 text-center text-white sm:px-12">
          <Arc
            className="absolute left-1/2 top-[-2.5rem] h-28 w-[46rem] max-w-none -translate-x-1/2 text-white/10"
            strokeWidth={2}
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-semibold sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-white/75">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contact" size="lg">
                {t("cta.freeQuote")}
              </Button>
              <Button
                href={whatsappUrl(t("whatsapp.prefill"))}
                external
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:border-white hover:bg-white/10 hover:text-white"
              >
                {t("cta.whatsapp")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
