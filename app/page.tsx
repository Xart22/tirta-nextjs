"use client";

import { useState } from "react";

type Service = {
  title: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    title: "Swedish Bliss",
    description:
      "Gentle massage to calm the nervous system and ease daily stress.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
  },
  {
    title: "Deep Recovery",
    description: "Focused deep tissue work to release chronic muscle tension.",
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80",
  },
  {
    title: "Hot Stone Ritual",
    description:
      "Warm volcanic stones to deeply relax muscles and restore balance.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
  },
  {
    title: "Reflexology",
    description:
      "Targeted foot therapy to support energy and overall well-being.",
    image:
      "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&q=80",
  },
];

export default function Home() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <main className="bg-linear-to-b from-white to-stone-50 text-gray-800 antialiased">
      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-emerald-900/90 via-teal-800/80 to-stone-900/90" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Floating orbs */}
        <div className="absolute top-20 left-10 h-64 w-64 animate-pulse rounded-full bg-teal-500/20 blur-3xl" />
        <div className="absolute right-10 bottom-20 h-96 w-96 animate-pulse rounded-full bg-emerald-500/20 blur-3xl delay-700" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">
          <div className="mb-8 inline-block">
            <div className="mb-4 text-sm tracking-[0.3em] text-teal-200 uppercase">
              Spa-Inspired Indonesian Healing
            </div>
            <h1 className="mb-6 text-6xl leading-tight font-extralight tracking-tight md:text-7xl">
              Relax <span className="text-teal-300">·</span> Restore{" "}
              <span className="text-teal-300">·</span> Rebalance
            </h1>
          </div>
          <p className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed font-light text-gray-100">
            A quiet, private sanctuary where traditional Indonesian wellness
            meets modern therapeutic care
          </p>
          <a
            href="https://squareup.com/appointments"
            className="group inline-flex transform items-center gap-3 rounded-full bg-white px-10 py-4 font-medium text-emerald-900 transition-all duration-300 hover:scale-105 hover:bg-teal-50 hover:shadow-2xl"
          >
            Book Your Session
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>

          <div className="mt-20 flex justify-center gap-12 text-sm">
            <div className="text-center">
              <div className="mb-1 text-3xl font-light">10+</div>
              <div className="text-teal-200">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="mb-1 text-3xl font-light">Licensed</div>
              <div className="text-teal-200">Massage Therapist</div>
            </div>
            <div className="text-center">
              <div className="mb-1 text-3xl font-light">Private</div>
              <div className="text-teal-200">Studio Setting</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="h-6 w-6 text-white/60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative py-32">
        <div className="absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-teal-200 to-transparent" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="group relative">
              <div className="absolute -inset-4 rounded-3xl bg-linear-to-r from-teal-100 to-emerald-100 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
              <img
                src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80"
                alt="Calm massage studio"
                className="relative h-125 w-full transform rounded-3xl object-cover shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700">
                Our Story
              </div>
              <h2 className="text-4xl leading-tight font-extralight text-gray-900 md:text-5xl">
                A Calm Space for
                <br />
                <span className="text-teal-700">Healing & Restoration</span>
              </h2>
              <div className="h-1 w-20 rounded-full bg-linear-to-r from-teal-500 to-emerald-500" />
              <p className="text-lg leading-relaxed text-gray-600">
                Tirta Calm Wellness is a private, home-based wellness studio in
                Standish, Maine, founded by{" "}
                <span className="font-medium text-gray-900">Imas Nurlia</span>,
                Licensed Massage Therapist.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                With over ten years of professional experience in Indonesia and
                formal training in the United States, each session is delivered
                with care, professionalism, and intention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative overflow-hidden bg-linear-to-b from-stone-50 to-white py-32">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-teal-100/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-emerald-100/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <div className="mb-4 inline-block rounded-full bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700">
              What We Offer
            </div>
            <h2 className="mb-4 text-4xl font-extralight md:text-5xl">
              Signature Services
            </h2>
            <p className="text-lg text-gray-600">
              Tailored treatments to restore balance and peace
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={service.title}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                className="group relative transform overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`h-full w-full object-cover transition-transform duration-700 ${
                      hoveredService === index ? "scale-110" : "scale-100"
                    }`}
                  />
                  <div
                    className={`absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-500 ${
                      hoveredService === index ? "opacity-100" : "opacity-80"
                    }`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-medium text-gray-900">
                    {service.title}
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    {service.description}
                  </p>
                </div>
                <div
                  className={`absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-transform duration-500 ${
                    hoveredService === index ? "scale-100 rotate-45" : "scale-0"
                  }`}
                >
                  <svg
                    className="h-5 w-5 text-teal-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALM STATEMENT */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-linear-to-br from-teal-600 via-emerald-700 to-teal-900" />
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <svg
            className="mx-auto mb-8 h-12 w-12 text-teal-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-2xl leading-relaxed font-light text-white md:text-3xl">
            A quiet, private environment designed to help you slow down, release
            tension, and reconnect with your body — without the pressure of a
            busy spa.
          </p>
        </div>
      </section>

      {/* VETERAN */}
      <section className="bg-linear-to-b from-amber-50 to-orange-50 py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-amber-100 px-6 py-3">
            <svg
              className="h-6 w-6 text-amber-700"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span className="font-medium text-amber-900">Community Care</span>
          </div>
          <h2 className="mb-6 text-4xl font-extralight text-gray-900 md:text-5xl">
            Veteran Wellness Program
          </h2>
          <div className="mx-auto mb-8 h-1 w-20 rounded-full bg-linear-to-r from-amber-500 to-orange-500" />
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-700">
            Free 20-minute chair massage sessions for veterans, offered every
            two weeks as a small way of giving back to our community.
          </p>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="relative overflow-hidden py-32 text-center">
        <div className="absolute inset-0 bg-linear-to-br from-emerald-50 via-teal-50 to-stone-50" />
        <div className="relative">
          <h2 className="mb-4 text-4xl font-extralight text-gray-900 md:text-5xl">
            Ready to Experience Peace?
          </h2>
          <p className="mb-12 text-lg text-gray-600">
            Book your appointment today and begin your journey to wellness
          </p>
          <a
            href="https://squareup.com/appointments"
            className="group inline-flex transform items-center gap-3 rounded-full bg-linear-to-r from-teal-600 to-emerald-600 px-12 py-5 text-lg font-medium text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Book Appointment
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-linear-to-br from-slate-900 via-teal-900 to-emerald-950 py-16 text-gray-300">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-4 text-center">
            <div className="mb-6 text-2xl font-light text-white">
              Tirta Calm Wellness
            </div>
            <div className="flex flex-col items-center justify-center gap-6 text-sm md:flex-row">
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-teal-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Standish, Maine
              </div>
              <div className="hidden text-teal-400 md:block">·</div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-teal-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                207-331-6536
              </div>
              <div className="hidden text-teal-400 md:block">·</div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-teal-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                tirtawellness@proton.me
              </div>
            </div>
            <div className="border-t border-teal-800/30 pt-8 text-xs text-gray-400">
              © 2026 Tirta Calm Wellness. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
