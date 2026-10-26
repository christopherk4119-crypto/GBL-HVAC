// Single source of truth for business facts.
// Everything here is either CONFIRMED (from the client / Yelp / the truck)
// or confirmed by the owner. Do not add anything that isn't one of those.

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
  founded: "2026-05", // GBL HVAC started May 2026; owner has 17 years in the trade before that
} as const;

// Production domain. Canonicals, sitemap, robots and schema @id all derive from this.
// NEXT_PUBLIC_SITE_URL can override it (e.g. for a staging deploy).
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.gblhvac.ca").replace(/\/$/, "");

// Calgary plus the surrounding towns Quinn covers. Feeds schema areaServed.
export const AREA_SERVED = ["Calgary", "Airdrie", "Cochrane", "Okotoks", "Chestermere"];

export const BUSINESS_ID = `${SITE_URL}/#business`;

// Quote form opens a pre-filled text message to the business number (owner confirmed it takes texts).
export const QUOTE_BY_TEXT = true;
