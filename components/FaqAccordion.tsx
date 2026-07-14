import { ChevronDown } from "lucide-react";
import type { Faq } from "@/lib/faqs";

/** Accessible native <details> disclosure — no client JS required. */
export function FaqAccordion({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-line overflow-hidden rounded-card border border-line bg-surface">
      {items.map((f) => (
        <details key={f.slug} className="group px-5 sm:px-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-medium text-ink [&::-webkit-details-marker]:hidden">
            <span>{f.question}</span>
            <ChevronDown className="h-5 w-5 shrink-0 text-muted transition-transform duration-300 group-open:rotate-180" />
          </summary>
          <p className="pb-5 leading-relaxed text-ink-soft">{f.answer}</p>
        </details>
      ))}
    </div>
  );
}
