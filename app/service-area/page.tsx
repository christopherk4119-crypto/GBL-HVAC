import type { Metadata } from "next";
import { CallButton } from "@/components/Call";
import { AreaList, FinalCta } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "Service Area — Calgary NW, NE, SW, SE | GBL HVAC" },
  description:
    "GBL HVAC covers all four quadrants of Calgary and the surrounding area, 24 hours a day. No storefront — we come to you. Call 403-970-6988.",
  alternates: { canonical: "/service-area" },
};

export default function ServiceArea() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Service Area", path: "/service-area" }])} />
      <section className="mx-auto max-w-4xl px-4 py-8 sm:py-12">
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl">HVAC Service Area: Calgary and Surrounding Area</h1>
        <p className="mt-3 text-xl font-semibold text-ink-soft">
          NW, NE, SW, SE — we drive to you. No storefront, no waiting room. The truck comes to your door.
        </p>
        <CallButton className="mt-6" />

        <h2 className="mt-12 text-3xl font-black tracking-tight">Where we work</h2>
        <div className="mt-4 rounded-xl bg-mist p-4 sm:p-6">
          <AreaList />
        </div>

        <h2 className="mt-12 text-3xl font-black tracking-tight">Same service, any part of the city</h2>
        <div className="prose-trade mt-3 text-lg">
          <p>
            Furnace repair, furnace and AC installs, heat pumps, ductless mini splits, duct cleaning and tune-ups — everywhere
            we work, any hour of the day.
          </p>
          <p>
            Calgary&apos;s housing ranges from 1950s bungalows to brand-new builds on the edge of the city, and each brings its
            own heating quirks: older ductwork and oversized furnaces in established neighbourhoods, tight mechanical rooms and
            high-efficiency venting in new ones. Tell us the age of your house when you call — it helps us bring the right
            parts.
          </p>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
