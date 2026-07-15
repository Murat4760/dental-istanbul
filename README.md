# Dental Istanbul — Dental Tourism Marketing Site

A fast, trust-heavy marketing site for a dental clinic serving international
patients. Its one job: turn ad/organic traffic into **WhatsApp leads** — no
contact form, no backend, no personal data collected by this site at all.
Mobile-first, English now, more languages later without a rebuild.

> ⚠️ This is a **real-client scaffold**. Every clinic-specific fact (name,
> photos, doctors, reviews, accreditations) is either real (from the
> 2026-07-14 intake form) or a clearly-marked `[PLACEHOLDER]`. This site does
> not advertise prices anywhere. See **[HANDOFF.md](./HANDOFF.md)** for the
> go-live checklist.

## Stack

| | |
|---|---|
| Framework | **Next.js 16** (App Router) + **React 19** + **TypeScript** |
| Styling | **Tailwind CSS v4** (tokens in `app/globals.css` `@theme`) |
| i18n | **next-intl** — EN shipped, AR/RU/DE scaffolded (no TR — see i18n/routing.ts) |
| Contact | WhatsApp / phone / email links only — no form, no backend, no DB |
| Images | `next/image` + optional **Cloudinary** (`f_auto,q_auto`) |
| Icons | `lucide-react` (+ inline brand SVGs) |
| Deploy | **Vercel** |

> **Next.js 16 note:** the `middleware` convention is now **`proxy.ts`**, route
> `params` are **async** (`await params`), and Tailwind is **v4** (no
> `tailwind.config.js`). Read the local guides in `node_modules/next/dist/docs/`
> before large changes — this is not the Next.js older models remember.

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in the values (already stubbed for local dev)
npm run dev                  # http://localhost:3000
npm run build && npm start   # production build
```

## Environment variables

Set these in `.env.local` (dev) and in **Vercel → Project → Settings → Environment
Variables** (prod). See `.env.example`.

```
NEXT_PUBLIC_SITE_URL           # https://www.yourclinic.com (canonical/OG/sitemap)
NEXT_PUBLIC_WHATSAPP_NUMBER    # intl format, digits only, e.g. 905551112233
NEXT_PUBLIC_CLOUDINARY_CLOUD   # optional image CDN cloud name
NEXT_PUBLIC_ALLOW_INDEXING     # "true" to let search engines index the site
```

## Project structure

```
app/
  [locale]/            # every page lives here (proxy hides the /en prefix)
    layout.tsx         # fonts, next-intl provider, header/footer/whatsapp
    page.tsx           # home
    procedures/[slug]/ # data-driven procedure template
    about · faq · reviews · contact · patient-journey · privacy
  api/og/route.tsx     # dynamic OpenGraph image
  sitemap.ts · robots.ts
components/             # Header, Footer, ProcedureCard, DoctorCard, …
  ui/                  # Button, SectionHeading, Arc (signature), Media, Reveal, …
i18n/                  # routing.ts · navigation.ts · request.ts (next-intl)
lib/                   # ← ALL CONTENT + CONFIG lives here
  site.ts              # single source of truth (clinic name, contact, hours, …)
  procedures.ts faqs.ts reviews.ts doctors.ts journey.ts
  schema.ts metadata.ts image.ts
messages/              # en.json (full) + ar/ru/de.json (stubs, render as English until translated)
proxy.ts               # next-intl locale routing (Next 16 "proxy", not middleware)
```

## Content model — changes are data, not code

- **Add a procedure** → add one object to `lib/procedures.ts`. It automatically
  gets a `/procedures/<slug>` page, a grid card, `MedicalProcedure` schema, and a
  sitemap entry. No page code.
- **Add a language** → add `messages/<locale>.json` and include the locale in
  `i18n/routing.ts`. Until translated, the locale renders in English. Enable it
  in `components/layout/LanguageSwitcher.tsx` when ready.
- **Change any clinic fact** → edit `lib/site.ts` (name, address, phone, hours,
  socials, stats). Everything on the site reads from there.

## Design system

Defined once in `app/globals.css` (`@theme`): warm-clinical palette (deep teal
`#0E5C57` + terracotta `#C46A3F` + cream `#FBFAF8`), Fraunces (display) + Inter
(body), and a recurring **arc / tooth-crown motif** (`components/ui/Arc.tsx`).

## Deploy (Vercel)

1. Push this repo to GitHub.
2. Import it in Vercel (framework auto-detected as Next.js).
3. Add the environment variables above.
4. Deploy. Lighthouse Performance/SEO should be 90+ on the preview URL.
