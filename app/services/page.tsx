import type { Metadata } from "next";
import { CallButton } from "@/components/Call";
import { FinalCta, ServiceCard } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { SERVICES } from "@/lib/services";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "HVAC Services Calgary — Furnace, AC, Heat Pumps | GBL HVAC" },
  description:
    "Furnace repair and replacement, AC, heat pumps, ductless mini splits, duct cleaning and tune-ups across Calgary. Answered 24/7: 403-970-6988.",
  alternates: { canonical: "/services" },
};

export default function ServicesIndex() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])} />
      <section className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl">HVAC Services in Calgary</h1>
        <p className="mt-3 max-w-2xl text-xl font-semibold text-ink-soft">
          Install, repair and maintain — furnaces, air conditioners, heat pumps, ductless systems, heaters, window units and air
          ducts. Homes and businesses.
        </p>
        <CallButton className="mt-6" />

        <h2 className="mt-12 text-3xl font-black tracking-tight">Pick a service</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <li key={s.slug}>
              <ServiceCard slug={s.slug} />
            </li>
          ))}
        </ul>
        <p className="mt-6 text-lg text-ink-soft">
          {/* [[CONFIRM]] Refrigeration is painted on the truck but not in the Yelp service list. */}
          Commercial refrigeration is also on the truck — call to ask what we cover.
        </p>
      </section>
      <FinalCta />
    </>
  );
}
