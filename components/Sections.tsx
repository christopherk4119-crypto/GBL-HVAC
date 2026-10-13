import Link from "next/link";
import { BUSINESS } from "@/lib/site";
import { SERVICES, serviceHref } from "@/lib/services";
import { CallButton, PhoneLink } from "./Call";
import { ICONS, ArrowIcon, PinIcon } from "./Icons";
import { LogoMark } from "./Logo";

export function FinalCta({ heading = "Cold house? Call now." }: { heading?: string }) {
  return (
    <section className="bg-flame" aria-labelledby="final-cta">
      <div className="mx-auto max-w-6xl px-4 py-12 text-center sm:py-16">
        <h2 id="final-cta" className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          {heading}
        </h2>
        <p className="mt-2 text-lg font-semibold text-ink">Answered 24 hours a day, 7 days a week. Calgary and area.</p>
        <a
          href={BUSINESS.phoneHref}
          className="mt-6 inline-flex min-h-16 items-center justify-center rounded-xl bg-ink px-8 text-2xl font-extrabold text-white hover:bg-ink-soft sm:text-3xl"
        >
          {BUSINESS.phoneDisplay}
        </a>
      </div>
    </section>
  );
}

export function ServiceCard({ slug }: { slug: string }) {
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) return null;
  const Icon = ICONS[s.icon];
  return (
    <Link
      href={serviceHref(s.slug)}
      className="group flex h-full min-h-12 items-start gap-4 rounded-xl border-2 border-line bg-paper p-4 hover:border-ink"
    >
      <span
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${
          s.tone === "warm" ? "bg-flame/15 text-flame-deep" : "bg-frost-wash text-frost-deep"
        }`}
      >
        <Icon />
      </span>
      <span className="flex-1">
        <span className="block text-lg font-extrabold leading-snug text-ink">{s.card.title}</span>
        <span className="mt-1 block text-ink-soft">{s.card.blurb}</span>
        <span className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-frost-deep">
          {s.short} <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </span>
    </Link>
  );
}

export const AREA_QUADRANTS = ["Calgary NW", "Calgary NE", "Calgary SW", "Calgary SE"];
// [[CONFIRM]] each town with the client before removing the marker.
export const AREA_TOWNS = ["Airdrie", "Cochrane", "Okotoks", "Chestermere"];

export function AreaList() {
  return (
    <div>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {AREA_QUADRANTS.map((q) => (
          <li key={q} className="flex min-h-12 items-center gap-2 rounded-lg bg-paper px-3 font-bold text-ink">
            <PinIcon className="h-5 w-5 text-flame-deep" /> {q}
          </li>
        ))}
      </ul>
      <h3 className="mt-6 text-lg font-extrabold">Surrounding area</h3>
      <ul className="mt-2 flex flex-wrap gap-2">
        {AREA_TOWNS.map((t) => (
          <li key={t} className="rounded-lg border border-line bg-paper px-3 py-2 font-semibold text-ink-soft">
            {t} <span className="text-sm text-flame-deep">[[CONFIRM]]</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-ink-soft">
        Not sure if you&apos;re in range? Call <PhoneLink className="text-frost-deep" /> and ask.
      </p>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="truck-stripe" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-white p-1">
              <LogoMark className="h-9 w-9" />
            </span>
            <span className="text-xl font-extrabold">GBL HVAC</span>
          </div>
          <p className="mt-3 text-white/80">Heating, ventilation, air conditioning. Residential and commercial.</p>
          <a
            href={BUSINESS.phoneHref}
            className="mt-4 inline-flex min-h-12 items-center rounded-xl bg-flame px-4 text-xl font-extrabold text-ink hover:bg-flame-hover"
          >
            {BUSINESS.phoneDisplay}
          </a>
          <p className="mt-2 font-semibold">Open 24 hours, 7 days a week</p>
        </div>
        <nav aria-label="Services">
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-white/60">Services</h2>
          <ul className="mt-2">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={serviceHref(s.slug)} className="inline-flex min-h-11 items-center text-white/90 hover:text-white hover:underline">
                  {s.short}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-white/60">Service area</h2>
          <p className="mt-2 text-white/90">Calgary and surrounding area. We come to you — no storefront.</p>
          <ul className="mt-3">
            {[
              { href: "/service-area", label: "Where we work" },
              { href: "/contact", label: "Contact & quotes" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-flex min-h-11 items-center text-white/90 hover:text-white hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-sm text-white/60">
          © {new Date().getFullYear()} {BUSINESS.legalName} · Calgary, Alberta
        </p>
      </div>
    </footer>
  );
}
