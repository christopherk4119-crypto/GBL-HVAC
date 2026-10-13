import { BUSINESS, BUSINESS_ID, SITE_URL } from "./site";
import type { Service } from "./services";

// Service-area business: no address block. No aggregateRating / Review — none exist.
export const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HVACBusiness"],
  "@id": BUSINESS_ID,
  name: BUSINESS.name,
  description: "24/7 furnace repair, HVAC installation, maintenance and air conditioning service in Calgary.",
  url: SITE_URL,
  telephone: BUSINESS.phoneE164,
  areaServed: [{ "@type": "City", name: "Calgary" }],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
};

export function serviceSchema(s: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/${s.slug}#service`,
    name: s.h1,
    serviceType: s.serviceType,
    description: s.description,
    url: `${SITE_URL}/services/${s.slug}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: [{ "@type": "City", name: "Calgary" }],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
