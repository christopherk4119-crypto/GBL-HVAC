import Link from "next/link";

// [[CLIENT LOGO]] Stand-in mark echoing the truck badge (orange/blue ring around a house).
// Swap for the real vector logo file when the client sends it.
export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path d="M20 3a17 17 0 0 0-15.6 23.8" fill="none" stroke="#ee7b2c" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M8.7 32.6A17 17 0 0 0 35.6 26" fill="none" stroke="#2e8bd6" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M26.5 4.6A17 17 0 0 1 36.8 18" fill="none" stroke="#ee7b2c" strokeWidth="4.5" strokeLinecap="round" />
      <path d="m12 20 8-6.5 8 6.5v8.5H12z" fill="#111826" />
      <rect x="18" y="22.5" width="4" height="6" fill="#fff" />
    </svg>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex min-h-12 items-center gap-2" aria-label="GBL HVAC home">
      <LogoMark />
      <span className="text-lg font-extrabold leading-none tracking-tight text-ink sm:text-xl">
        GBL <span className="text-frost-deep">HVAC</span>
      </span>
    </Link>
  );
}
