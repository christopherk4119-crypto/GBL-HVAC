"use client";

import { useState } from "react";
import { BUSINESS } from "@/lib/site";

// No backend and no confirmed email, so the quote form builds a pre-filled
// text message to the business number. Nothing is stored or sent by the site.
const TOPICS = [
  "Furnace repair",
  "New furnace / replacement",
  "AC repair",
  "New AC",
  "Heat pump",
  "Ductless mini split",
  "Duct cleaning",
  "Tune-up / maintenance",
  "Something else",
];

export function QuoteForm() {
  const [opened, setOpened] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = [
      `Quote request — ${f.get("topic")}`,
      `Name: ${f.get("name")}`,
      `Area: ${f.get("area") || "-"}`,
      `${f.get("details") || ""}`.trim(),
    ]
      .filter(Boolean)
      .join("\n");
    // "?&body=" is accepted by both iOS and Android messaging apps.
    window.location.href = `${BUSINESS.smsHref}?&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  const field =
    "mt-1 block min-h-12 w-full rounded-lg border-2 border-line bg-paper px-3 text-lg text-ink focus:border-frost focus:outline-none";

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <label className="block font-bold">
        What do you need?
        <select name="topic" required className={field} defaultValue="">
          <option value="" disabled>
            Pick one
          </option>
          {TOPICS.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className="block font-bold">
        Your name
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="block font-bold">
        Neighbourhood or town <span className="font-normal text-ink-soft">(optional)</span>
        <input name="area" autoComplete="address-level2" className={field} />
      </label>
      <label className="block font-bold">
        Details <span className="font-normal text-ink-soft">(optional — age of furnace, what it&apos;s doing)</span>
        <textarea name="details" rows={4} className={`${field} py-2`} />
      </label>
      <button
        type="submit"
        className="min-h-14 rounded-xl bg-ink px-5 text-lg font-extrabold text-white hover:bg-ink-soft"
      >
        Text this to {BUSINESS.phoneDisplay}
      </button>
      <p className="text-sm text-ink-soft" aria-live="polite">
        {opened
          ? "Your messaging app should have opened with the request filled in — hit send. Nothing happened? Call instead."
          : "Opens your phone's messaging app with this filled in. Nothing is sent until you hit send."}
      </p>
    </form>
  );
}
