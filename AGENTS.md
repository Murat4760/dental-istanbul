<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project architecture (dental-istanbul)

- **Content is data.** All copy/config lives in `lib/*`; `lib/site.ts` is the
  single source of truth. Adding a procedure or locale is a data edit — see README.
- **i18n:** next-intl. Routing in `i18n/routing.ts`; locale handling in `proxy.ts`
  (Next 16 renamed `middleware` → `proxy`). EN ships; other locales fall back to
  English until `messages/<locale>.json` is filled.
- **Async params everywhere:** `const { locale } = await params;` then
  `setRequestLocale(locale)` at the top of each page/layout.
- **Tailwind v4:** tokens live in `app/globals.css` `@theme` (no
  `tailwind.config.js`). Semantic utilities: `bg-canvas`, `text-ink`, `bg-primary`,
  `bg-accent`, `rounded-card`, `font-display`.
- **Images** flow through `components/ui/Media.tsx` (branded placeholder until a
  real `src` is passed); `lib/image.ts` adds Cloudinary transforms if configured.
- **Forms:** one reusable `components/QuoteForm.tsx` (rhf + zod → Formspree).
- **SEO:** every page uses `buildMetadata()` (`lib/metadata.ts`); JSON-LD via
  `lib/schema.ts` + `components/JsonLd.tsx`. Exactly one `<h1>` per page.
- **Placeholders:** anything the clinic must supply is `[PLACEHOLDER]` (see
  HANDOFF.md). Never invent medical claims, stats, doctors, or reviews.
