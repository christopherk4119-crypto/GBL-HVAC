# GBL HVAC — fill-in list

Run `npm run placeholders` for the live list with line numbers (exits 1 while any remain).
Nothing below was invented. Every item is either unknown or needs the client's yes.

## Must fill before launch (visible on the site)

| Placeholder | Where | What's needed |
|---|---|---|
| `[[DOMAIN]]` | `lib/site.ts` → set `NEXT_PUBLIC_SITE_URL` in Vercel | Canonicals, sitemap, robots, schema `@id` all use it. Until set they point at `domain-placeholder.invalid`. |
| `[[YEARS]]` | `app/page.tsx` trust strip + "Who you're calling" | Years in business. If he won't give a number, swap the stat for something else true. |
| `[[OWNER NAME]]` | `app/page.tsx` "Who you're calling" | Name of the person who answers. |
| `[[PLACEHOLDER: owner's own words]]` | `app/page.tsx` "Who you're calling" | One sentence, in his words, on how he works. Ask him; don't write it for him. |
| `[[CONFIRM]]` × 4 towns | `components/Sections.tsx` `AREA_TOWNS` | Airdrie, Cochrane, Okotoks, Chestermere — keep the ones he covers, delete the rest. |
| `[[CONFIRM WITH CLIENT]]` night/weekend rates | `lib/faq.ts`, `lib/services.ts` (emergency cost) | Same rate any hour, or a surcharge? |
| `[[CONFIRM]]` arrival times | `lib/faq.ts`, `lib/services.ts` (emergency step 3) | How he tells callers when he'll arrive. **No time promises.** |
| `[[CONFIRM]]` temporary heaters | `lib/services.ts` (emergency step 4) | Does he leave space heaters if a part is on order? |
| `[[CONFIRM]]` changeout time | `lib/faq.ts`, `lib/services.ts` (furnace install) | Is a straight swap really a one-day job for him? |
| `[[CONFIRM]]` AC install time | `lib/services.ts` (AC install) | Typical time. |
| `[[CONFIRM]]` duct cleaning method | `lib/services.ts` (duct cleaning) | What equipment/method he uses. |
| `[[CONFIRM]]` maintenance plan | `lib/services.ts` (maintenance) | Does one exist? If not, delete that section. |
| `[[PRICING]]` × 8 | `lib/services.ts`, cost section of each service page | Numbers if he'll publish them. If not, delete the line — "We quote before we start" stays. |

## Fill when available (not visible yet)

| Placeholder | Where | Notes |
|---|---|---|
| `[[CLIENT PHOTO]]` | `app/page.tsx` | Hidden (`SHOW_PHOTOS = false` in `lib/site.ts`). Drop `/public/owner.jpg`, write real alt text, flip the flag. Truck photos work here too. |
| `[[CLIENT LOGO]]` | `components/Logo.tsx`, `app/icon.svg` | Current mark is a stand-in drawn to echo the truck badge. Get the real vector file. |
| `[[EMAIL]]` | `app/contact/page.tsx` | Add a row once confirmed. |
| `[[CONFIRM]]` SMS | `lib/site.ts` `QUOTE_BY_TEXT` | Quote form opens a pre-filled text to 403-970-6988. If that number is a landline, set `false`. |
| `[[CONFIRM]]` refrigeration | `app/services/page.tsx` | It's on the truck but not in the Yelp list. |
| Reviews | `lib/reviews.ts` | Empty array = section doesn't render. Real Google reviews only, word for word. No Review schema. |
