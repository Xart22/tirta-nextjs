import type { Metadata } from "next";
import Link from "next/link";

const bookingUrl =
  "https://square.site/book/LFYWJ2SV61AJW/tirta-calm-wellness-standish-me";

export const metadata: Metadata = {
  title: "Book a Massage Session",
  description:
    "Schedule your massage appointment online with Tirta Calm Wellness in Standish, Maine.",
  alternates: {
    canonical: "/booking",
  },
  openGraph: {
    title: "Book a Massage Session | Tirta Calm Wellness",
    description:
      "Reserve your Swedish, deep tissue, hot stone, or reflexology session online.",
    url: "https://tirtacalmwellness.com/booking",
    type: "website",
  },
};

const bookingSchema = {
  "@context": "https://schema.org",
  "@type": "ReserveAction",
  name: "Book a massage appointment",
  target: bookingUrl,
  object: {
    "@type": "Service",
    name: "Massage Therapy Session",
    provider: {
      "@type": "HealthAndBeautyBusiness",
      name: "Tirta Calm Wellness",
      telephone: "+1-207-331-6536",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Standish",
        addressRegion: "ME",
        addressCountry: "US",
      },
    },
  },
};

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-stone-50 to-white px-6 py-16 text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookingSchema) }}
      />

      <section className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extralight text-gray-900 md:text-5xl">
            Book Your Session
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Choose your preferred service and available time directly through
            our secure booking portal.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-xl">
          <iframe
            title="Tirta Calm Wellness Booking"
            src={bookingUrl}
            className="h-[78vh] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-8 text-center">
          <p className="mb-4 text-sm text-gray-500">
            If the embedded calendar does not load, open booking in a new tab.
          </p>
          <Link
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-teal-700 px-6 py-3 font-medium text-white transition hover:bg-teal-800"
          >
            Open Booking Portal
          </Link>
        </div>
      </section>
    </main>
  );
}
