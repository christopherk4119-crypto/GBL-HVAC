import { BUSINESS } from "@/lib/site";
import { PhoneIcon } from "./Icons";

// Fixed to the bottom on mobile, every page, every scroll position.
// Plain server-rendered HTML: no JS, so it's tappable before hydration.
export function StickyCallBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t-4 border-frost bg-ink px-3 pt-2 md:hidden"
      style={{ paddingBottom: "calc(0.5rem + env(safe-area-inset-bottom))" }}
    >
      <a
        href={BUSINESS.phoneHref}
        className="flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-flame text-lg font-extrabold text-ink active:bg-flame-hover"
      >
        <PhoneIcon className="h-6 w-6" />
        <span>
          CALL {BUSINESS.phoneDisplay}
          <span className="ml-2 rounded bg-ink px-1.5 py-0.5 align-middle text-xs text-white">24/7</span>
        </span>
      </a>
    </div>
  );
}
