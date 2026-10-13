import Link from "next/link";
import { BUSINESS } from "@/lib/site";
import { Logo } from "./Logo";
import { OpenBadge } from "./Call";
import { PhoneIcon } from "./Icons";

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/service-area", label: "Service Area" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="border-b border-line bg-paper md:sticky md:top-0 md:z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2">
        <div className="flex items-center gap-3">
          <Logo />
          <span className="hidden sm:block">
            <OpenBadge />
          </span>
        </div>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="inline-flex min-h-12 items-center rounded-lg px-3 font-semibold text-ink hover:bg-mist"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Phone is a button, visible without scrolling on every screen size. */}
        <div className="flex flex-col items-end">
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-flame px-3 font-extrabold text-ink hover:bg-flame-hover sm:px-4 sm:text-lg"
          >
            <PhoneIcon className="h-5 w-5" />
            <span className="whitespace-nowrap">{BUSINESS.phoneDisplay}</span>
          </a>
          <span className="mt-1 sm:hidden">
            <OpenBadge />
          </span>
        </div>
      </div>

      {/* Mobile nav: three plain links, no JS menu. */}
      <nav aria-label="Main mobile" className="border-t border-line md:hidden">
        <ul className="mx-auto grid max-w-6xl grid-cols-3">
          {NAV.map((n) => (
            <li key={n.href}>
              <Link
                href={n.href}
                className="flex min-h-12 items-center justify-center text-sm font-semibold text-ink-soft active:bg-mist"
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="truck-stripe" aria-hidden="true" />
    </header>
  );
}
