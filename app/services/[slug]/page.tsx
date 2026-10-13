import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CallButton, PhoneLink } from "@/components/Call";
import { CheckIcon, ClockIcon } from "@/components/Icons";
import { FinalCta, ServiceCard } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { SERVICES, getService, serviceHref } from "@/lib/services";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: { absolute: s.title },
    description: s.description,
    alternates: { canonical: serviceHref(s.slug) },
    openGraph: { title: s.title, description: s.description, url: serviceHref(s.slug) },
  };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: s.short, path: serviceHref(s.slug) },
  ];

  return (
    <>
      <JsonLd data={serviceSchema(s)} />
      <JsonLd data={breadcrumbSchema(crumbs)} />

      {/* H1 + promise + call, all above the fold */}
      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-4 pb-8 pt-4 sm:pt-8">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-soft">
            <ol className="flex flex-wrap items-center gap-1">
              {crumbs.map((c, i) => (
                <li key={c.path} className="flex items-center gap-1">
                  {i > 0 ? <span aria-hidden="true">/</span> : null}
                  {i < crumbs.length - 1 ? (
                    <Link href={c.path} className="inline-flex min-h-12 items-center hover:underline">
                      {c.name}
                    </Link>
                  ) : (
                    <span aria-current="page" className="font-semibold text-ink">
                      {c.name}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight sm:text-5xl">{s.h1}</h1>
          <p className="mt-3 text-xl font-semibold text-ink-soft">{s.promise}</p>
          <CallButton className="mt-6" />
        </div>
      </section>

      {/* 2am differentiator on every service page */}
      <div className="bg-ink text-white">
        <p className="mx-auto flex max-w-4xl items-center gap-3 px-4 py-3 font-semibold">
          <ClockIcon className="h-6 w-6 shrink-0 text-flame" />
          We answer 24 hours a day, 7 days a week — including 2am on a holiday.
        </p>
      </div>

      <article className="mx-auto max-w-4xl px-4 py-10">
        <div className="prose-trade text-lg">
          {s.intro.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </div>

        <h2 className="mt-10 text-3xl font-black tracking-tight">Signs you need this</h2>
        <ul className="mt-4 grid gap-3">
          {s.signs.map((sign) => (
            <li key={sign.title} id={sign.id} className="scroll-mt-24 rounded-xl border-2 border-line p-4 target:border-flame target:bg-flame/10">
              <h3 className="flex items-start gap-2 text-xl font-extrabold">
                <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-flame-deep" />
                {sign.title}
              </h3>
              <p className="mt-1 pl-7 text-ink-soft">{sign.body}</p>
            </li>
          ))}
        </ul>

        <h2 className="mt-12 text-3xl font-black tracking-tight">What the visit involves</h2>
        <ol className="mt-4 grid gap-4">
          {s.steps.map((step, i) => (
            <li key={step.title} className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-frost text-lg font-black text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="text-xl font-extrabold">{step.title}</h3>
                <p className="mt-1 text-ink-soft">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        {s.extra.map((x) => (
          <section key={x.heading} className="mt-12">
            <h2 className="text-3xl font-black tracking-tight">{x.heading}</h2>
            <div className="prose-trade mt-3 text-lg">
              {x.paras.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
            {x.list ? (
              <ul className="mt-4 grid gap-2">
                {x.list.map((li) => (
                  <li key={li} className="flex gap-2 text-lg">
                    <CheckIcon className="mt-1.5 h-5 w-5 shrink-0 text-frost-deep" />
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        <section className="mt-12 rounded-xl bg-mist p-5 sm:p-6">
          <h2 className="text-3xl font-black tracking-tight">What it costs</h2>
          <div className="prose-trade mt-3 text-lg">
            {s.cost.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </section>

        <div className="mt-10 rounded-xl border-2 border-flame p-5 sm:p-6">
          <p className="text-2xl font-black">Call now — someone picks up.</p>
          <p className="mt-1 text-ink-soft">
            <PhoneLink className="text-frost-deep" /> · 24 hours, 7 days · Calgary and area
          </p>
          <CallButton className="mt-4" sub={null} />
        </div>

        <section className="mt-12">
          <h2 className="text-3xl font-black tracking-tight">Related services</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {s.related.map((r) => (
              <li key={r}>
                <ServiceCard slug={r} />
              </li>
            ))}
          </ul>
        </section>
      </article>

      <FinalCta />
    </>
  );
}
