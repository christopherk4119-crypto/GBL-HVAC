import type { Metadata } from "next";
import { CallButton, PhoneLink } from "@/components/Call";
import { JsonLd } from "@/components/JsonLd";
import { QuoteForm } from "@/components/QuoteForm";
import { breadcrumbSchema } from "@/lib/schema";
import { QUOTE_BY_TEXT } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Contact GBL HVAC Calgary — Call 403-970-6988, 24/7" },
  description:
    "Call GBL HVAC at 403-970-6988 — answered 24 hours a day, 7 days a week, across Calgary and area. Not urgent? Send a quote request by text.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <section className="mx-auto max-w-4xl px-4 py-8 sm:py-12">
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl">Contact GBL HVAC in Calgary</h1>

        {/* Phone first. The form is for people who aren't in a crisis. */}
        <div className="mt-6 rounded-xl border-2 border-flame p-5 sm:p-6">
          <h2 className="text-2xl font-black">No heat or no cooling right now?</h2>
          <p className="mt-1 text-lg text-ink-soft">Don&apos;t fill in a form. Call — we answer 24 hours a day, 7 days a week.</p>
          <CallButton className="mt-4" />
        </div>

        <dl className="mt-8 grid gap-4 text-lg sm:grid-cols-3">
          <div>
            <dt className="text-sm font-extrabold uppercase tracking-wider text-ink-soft">Phone</dt>
            <dd>
              <PhoneLink className="text-frost-deep" />
            </dd>
          </div>
          <div>
            <dt className="text-sm font-extrabold uppercase tracking-wider text-ink-soft">Hours</dt>
            <dd className="font-semibold">24 hours, 7 days</dd>
          </div>
          <div>
            <dt className="text-sm font-extrabold uppercase tracking-wider text-ink-soft">Area</dt>
            <dd className="font-semibold">Calgary and surrounding area</dd>
          </div>
          {/* [[EMAIL]] Add an email row here once the client confirms one. */}
        </dl>

        {QUOTE_BY_TEXT ? (
          <section className="mt-12 rounded-xl bg-mist p-5 sm:p-6">
            <h2 className="text-2xl font-black">Planning ahead? Request a quote</h2>
            <p className="mt-1 mb-4 text-ink-soft">New furnace, AC, heat pump or a tune-up — send the basics and we&apos;ll get back to you.</p>
            <QuoteForm />
          </section>
        ) : null}
      </section>
    </>
  );
}
