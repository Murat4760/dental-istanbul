import { Link } from "@/i18n/navigation";
import { Arc } from "@/components/ui/Arc";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-page flex min-h-[55vh] flex-col items-center justify-center text-center">
        <div className="relative">
          <span className="font-display text-7xl font-semibold text-primary">
            404
          </span>
          <Arc
            className="absolute -bottom-2 left-0 h-3 w-full text-accent"
            strokeWidth={2.5}
          />
        </div>
        <h1 className="mt-6 font-display text-3xl font-semibold text-ink">
          Page not found
        </h1>
        <p className="mt-3 max-w-md text-ink-soft">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
          Let&rsquo;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/">Back to home</Button>
          <Button href="/procedures" variant="outline">
            Browse procedures
          </Button>
        </div>
      </div>
    </section>
  );
}
