# GBL HVAC — Calgary

Next.js 16 (App Router) + Tailwind 4. Every page is prerendered as static HTML.

```
npm install
npm run dev            # local
npm run build          # production build
npm run placeholders   # lists every [[PLACEHOLDER]] still in the source
```

Production domain is `https://www.gblhvac.ca` (set in `lib/site.ts`; `NEXT_PUBLIC_SITE_URL` overrides it).

- Business facts: `lib/site.ts`
- Service page content: `lib/services.ts` (one object per page; the template is `app/services/[slug]/page.tsx`)
- FAQ: `lib/faq.ts` (feeds the page and the FAQPage schema)
- Reviews: `lib/reviews.ts` (real ones only)
- Fill-in list: `PLACEHOLDERS.md`
