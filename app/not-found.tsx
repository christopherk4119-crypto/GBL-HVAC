import Link from "next/link";
import { CallButton } from "@/components/Call";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-4xl font-black tracking-tight">Page not found</h1>
      <p className="mt-3 text-xl text-ink-soft">That page doesn&apos;t exist. If your heat&apos;s out, skip the website:</p>
      <CallButton className="mt-6" />
      <p className="mt-6">
        <Link href="/" className="inline-flex min-h-12 items-center font-bold text-frost-deep underline">
          Back to the homepage
        </Link>
      </p>
    </section>
  );
}
