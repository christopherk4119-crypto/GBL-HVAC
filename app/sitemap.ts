import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/service-area", "/contact", ...SERVICES.map((s) => `/services/${s.slug}`)];
  return pages.map((p) => ({ url: `${SITE_URL}${p || "/"}` }));
}
