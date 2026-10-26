import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { StickyCallBar } from "@/components/StickyCallBar";
import { Footer } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { businessSchema } from "@/lib/schema";
import { NOINDEX, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "24/7 Furnace Repair & HVAC Calgary | GBL HVAC",
  description: "Furnace repair, HVAC installation and AC service across Calgary. We answer 24/7 — call 403-970-6988.",
  robots: NOINDEX ? { index: false, follow: false } : undefined,
  formatDetection: { telephone: false }, // we mark up every number ourselves
  openGraph: { siteName: "GBL HVAC", locale: "en_CA", type: "website" },
};

export const viewport: Viewport = {
  themeColor: "#111826",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA">
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-3 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyCallBar />
        <JsonLd data={businessSchema} />
      </body>
    </html>
  );
}
