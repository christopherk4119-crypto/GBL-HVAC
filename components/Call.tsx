import { BUSINESS } from "@/lib/site";
import { PhoneIcon } from "./Icons";

// Every phone number on the site goes through one of these, so every one is tel:.

export function PhoneLink({ className = "" }: { className?: string }) {
  return (
    <a href={BUSINESS.phoneHref} className={`-my-3 inline-block py-3 font-bold whitespace-nowrap underline underline-offset-4 ${className}`}>
      {BUSINESS.phoneDisplay}
    </a>
  );
}

/** The big one. Primary action on every page. */
export function CallButton({
  label = "Call now",
  sub = "Answered 24 hours, 7 days",
  size = "lg",
  className = "",
}: {
  label?: string;
  sub?: string | null;
  size?: "lg" | "md";
  className?: string;
}) {
  const big = size === "lg";
  return (
    <div className={`flex flex-col items-stretch sm:items-start ${className}`}>
      <a
        href={BUSINESS.phoneHref}
        className={`inline-flex items-center justify-center gap-3 rounded-xl bg-flame font-extrabold text-ink shadow-[0_3px_0_0_#b44e0a] transition-colors hover:bg-flame-hover active:translate-y-px ${
          big ? "min-h-16 px-6 py-2 text-2xl sm:text-3xl" : "min-h-14 px-5 py-2 text-xl"
        }`}
      >
        <PhoneIcon className={big ? "h-7 w-7" : "h-6 w-6"} />
        <span className="flex flex-col items-start leading-tight">
          <span className={`font-extrabold uppercase tracking-wide ${big ? "text-sm" : "text-xs"}`}>{label}</span>
          <span className="whitespace-nowrap">{BUSINESS.phoneDisplay}</span>
        </span>
      </a>
      {sub ? <p className="mt-2 text-center text-base font-semibold text-ink-soft sm:text-left">{sub}</p> : null}
    </div>
  );
}

export function OpenBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md bg-ink px-2 py-1 text-xs font-extrabold uppercase tracking-wide text-white ${className}`}
    >
      <span className="h-2 w-2 rounded-full bg-flame" aria-hidden="true" />
      Open 24/7
    </span>
  );
}
