// Single source of truth for business facts.
// Everything here is either CONFIRMED (from the client / Yelp / the truck)
// or an explicit [[PLACEHOLDER]]. Do not add anything that isn't one of those.

export const BUSINESS = {
  name: "GBL HVAC",
  // Legal name as painted on the truck ("GBL HVAC LTD"). Used in the footer only.
  legalName: "GBL HVAC Ltd.",
  phoneDisplay: "403-970-6988",
  phoneE164: "+14039706988",
  phoneHref: "tel:+14039706988",
  smsHref: "sms:+14039706988",
  hours: "24 hours a day, 7 days a week",
  area: "Calgary and surrounding area",
} as const;

// [[DOMAIN]] — set NEXT_PUBLIC_SITE_URL in Vercel (e.g. https://www.yourdomain.ca).
// Canonicals, sitemap, robots and schema @id all derive from this.
// The fallback is a non-resolving .invalid host so a forgotten env var is obvious.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://domain-placeholder.invalid"
).replace(/\/$/, "");

export const BUSINESS_ID = `${SITE_URL}/#business`;

// [[CONFIRM]] Quote form opens a pre-filled text message to the business number.
// Only works if 403-970-6988 can receive SMS. If it's a landline, set to false
// and the contact page shows call-only.
export const QUOTE_BY_TEXT = true;
