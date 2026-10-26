import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CallButton, PhoneLink } from "@/components/Call";
import { ICONS, ArrowIcon, type IconName } from "@/components/Icons";
import { AreaList, FinalCta, ServiceCard } from "@/components/Sections";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { FAQS } from "@/lib/faq";
import { REVIEWS } from "@/lib/reviews";
import { SERVICES, serviceHref } from "@/lib/services";
import { faqSchema } from "@/lib/schema";
import vanRear from "@/public/images/gbl-hvac-van-rear.webp";
import vanSide from "@/public/images/gbl-hvac-van-side.webp";

export const metadata: Metadata = {
  title: "24/7 Furnace Repair & HVAC Calgary | GBL HVAC",
  description:
    "No heat? GBL HVAC answers 24/7 — furnace repair, installs, AC and heat pumps across Calgary and area. Call 403-970-6988.",
  alternates: { canonical: "/" },
};

const SYMPTOMS: { label: string; href: string; icon: IconName }[] = [
  { label: "No heat at all", href: `${serviceHref("furnace-repair-calgary")}#no-heat`, icon: "power" },
  { label: "Furnace blowing cold air", href: `${serviceHref("furnace-repair-calgary")}#cold-air`, icon: "wind" },
  { label: "Furnace keeps shutting off", href: `${serviceHref("furnace-repair-calgary")}#short-cycling`, icon: "flame" },
  { label: "Loud banging or rattling", href: `${serviceHref("furnace-repair-calgary")}#banging`, icon: "noise" },
  { label: "AC not cooling", href: `${serviceHref("ac-repair-calgary")}#not-cooling`, icon: "snow" },
  { label: "Thermostat not responding", href: `${serviceHref("emergency-hvac-calgary")}#thermostat`, icon: "thermostat" },
  { label: "Smells like burning", href: `${serviceHref("emergency-hvac-calgary")}#burning-smell`, icon: "smoke" },
  { label: "Ice on the AC unit", href: `${serviceHref("ac-repair-calgary")}#ice`, icon: "alert" },
];

const STATS = [
  { big: "24/7", small: "Always open" },
  { big: "17 years", small: "In the trade" },
  { big: "All makes", small: "& models" },
  { big: "Calgary", small: "& area" },
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(FAQS)} />

      {/* 2. HERO — one promise, one action */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 pb-8 pt-6 sm:pb-12 sm:pt-12 md:grid-cols-[1.15fr_1fr] md:items-center md:gap-10">
          <div>
            <p className="inline-flex items-center gap-2 rounded-md bg-frost-wash px-2 py-1 text-sm font-bold text-frost-deep">
              <span className="h-2 w-2 rounded-full bg-flame" aria-hidden="true" /> Answering now — 24 hours, 7 days
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-ink sm:text-6xl">
              Cold house? Get your heat back.
              <span className="mt-2 block text-2xl font-extrabold text-flame-deep sm:text-4xl">
                24/7 furnace repair in Calgary.
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-xl font-semibold text-ink-soft">We answer when it&apos;s 2am and the house is cold.</p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start">
              <CallButton />
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-line px-5 font-bold text-ink-soft hover:border-ink hover:text-ink sm:min-h-16"
              >
                Request a quote
              </Link>
            </div>
          </div>

          {/* Real photo of the company van. Below the buttons on phones so the call button stays above the fold. */}
          <figure>
            <Image
              src={vanRear}
              alt="White GBL HVAC van with orange and blue stripe, marked 24/7 Emergency Service and 403-970-6988"
              sizes="(min-width: 1152px) 500px, (min-width: 768px) 44vw, calc(100vw - 32px)"
              preload
              placeholder="blur"
              className="aspect-[16/10] h-auto w-full rounded-xl object-cover object-[50%_60%] md:aspect-[4/3]"
            />
            <figcaption className="mt-2 text-sm font-semibold text-ink-soft">The van that pulls up at your door.</figcaption>
          </figure>
        </div>
      </section>

      {/* 3. TRUST STRIP */}
      <section aria-label="At a glance" className="bg-ink text-white">
        <ul className="mx-auto grid max-w-6xl grid-cols-2 sm:grid-cols-4">
          {STATS.map((s, i) => (
            <li
              key={s.small}
              className={`px-4 py-4 text-center sm:py-6 ${i % 2 === 0 ? "border-r border-white/10" : ""} ${
                i < 2 ? "border-b border-white/10 sm:border-b-0" : ""
              } sm:border-r sm:last:border-r-0`}
            >
              <span className="block text-2xl font-black text-flame sm:text-3xl">{s.big}</span>
              <span className="block text-sm font-semibold text-white/80">{s.small}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 4. SYMPTOM ROUTER */}
      <section className="bg-mist" aria-labelledby="whats-wrong">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <h2 id="whats-wrong" className="text-3xl font-black tracking-tight sm:text-4xl">
            What&apos;s wrong?
          </h2>
          <p className="mt-1 text-lg text-ink-soft">Tap what your system is doing.</p>
          <ul className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {SYMPTOMS.map((s) => {
              const Icon = ICONS[s.icon];
              return (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="flex h-full min-h-20 flex-col justify-between gap-2 rounded-xl border-2 border-transparent bg-paper p-4 font-bold leading-snug text-ink shadow-sm hover:border-flame"
                  >
                    <Icon className="h-7 w-7 text-flame-deep" />
                    <span className="flex items-end justify-between gap-2">
                      {s.label}
                      <ArrowIcon className="h-5 w-5 shrink-0 text-frost-deep" />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="mt-6 text-lg font-semibold">
            Not on the list? Call <PhoneLink className="text-frost-deep" /> and describe it.
          </p>
        </div>
      </section>

      {/* 5. SERVICES GRID */}
      <section id="services" aria-labelledby="services-h" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <h2 id="services-h" className="text-3xl font-black tracking-tight sm:text-4xl">
            What we do
          </h2>
          <p className="mt-1 text-lg text-ink-soft">Install, repair and maintain. Residential and commercial.</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <ServiceCard slug={s.slug} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. WHO YOU'RE CALLING — all placeholders until the client supplies them */}
      <section aria-labelledby="who" className="bg-mist">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:py-14 md:grid-cols-[1fr_1.4fr] md:items-center">
          {/* [[CLIENT PHOTO]] Swap in a photo of the owner when one exists — a face beats a van.
              Real photos only: no stock, no AI-generated people. */}
          <Image
            src={vanSide}
            alt="Side of the GBL HVAC van: install, repair, maintenance, 24/7 emergency service, heating, ventilation, air conditioning and refrigeration"
            sizes="(min-width: 1152px) 460px, (min-width: 768px) 40vw, calc(100vw - 32px)"
            placeholder="blur"
            className="h-auto w-full rounded-xl"
          />
          <div>
            <h2 id="who" className="text-3xl font-black tracking-tight sm:text-4xl">
              Who you&apos;re calling
            </h2>
            <p className="mt-4 text-xl font-bold">
              Quinn answers the phone. Not a call centre. Not a dispatcher.
            </p>
            <p className="mt-3 text-lg text-ink-soft">
              [[PLACEHOLDER: a sentence in the owner&apos;s own words about how they work]]
            </p>
            <p className="mt-3 text-lg text-ink-soft">
              17 years in the trade, commercial and residential — from restaurants and coffee shops to the furnace in your basement.
              In May 2026 Quinn went out on his own and started GBL HVAC.
            </p>
            <CallButton size="md" className="mt-6" label="Call" sub={null} />
          </div>
        </div>
      </section>

      {/* 7. SOCIAL PROOF — renders nothing until real reviews are added to lib/reviews.ts */}
      {REVIEWS.length > 0 ? (
        <section aria-labelledby="reviews">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
            <h2 id="reviews" className="text-3xl font-black tracking-tight sm:text-4xl">
              What customers say
            </h2>
            <ul className="mt-6 grid gap-4 md:grid-cols-3">
              {REVIEWS.map((r) => (
                <li key={r.name + r.quote.slice(0, 20)} className="rounded-xl border-2 border-line p-5">
                  <blockquote className="text-lg">&ldquo;{r.quote}&rdquo;</blockquote>
                  <p className="mt-3 font-bold">
                    {r.name} <span className="font-normal text-ink-soft">· {r.source}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* 8. SERVICE AREA */}
      <section id="service-area" aria-labelledby="area-h" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <h2 id="area-h" className="text-3xl font-black tracking-tight sm:text-4xl">
            Where we work
          </h2>
          <p className="mt-1 text-lg text-ink-soft">All four quadrants of Calgary. We come to you.</p>
          <div className="mt-6 rounded-xl bg-mist p-4 sm:p-6">
            <AreaList />
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section aria-labelledby="faq-h" className="bg-mist">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
          <h2 id="faq-h" className="text-3xl font-black tracking-tight sm:text-4xl">
            Before you call
          </h2>
          <div className="mt-6">
            <Faq items={FAQS} />
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <FinalCta />
    </>
  );
}
