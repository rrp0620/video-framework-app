"use client";

import Link from "next/link";
import { Reveal, RevealLine } from "@/components/Reveal";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Prescription Filling & Transfers",
    desc: "Seamless transfers from any pharmacy. We handle the paperwork, you skip the wait.",
    href: "/services",
  },
  {
    num: "02",
    title: "Free Local Delivery",
    desc: "Prescriptions delivered to your door throughout Millsboro and surrounding areas. No fee, no minimum.",
    href: "/services",
  },
  {
    num: "03",
    title: "Immunizations & Wellness",
    desc: "Walk-in vaccines, health screenings, and medication counseling from pharmacists who know your history.",
    href: "/services",
  },
];

export function HomeClient() {
  return (
    <div className="min-h-screen">
      {/* ─── Hero ─── */}
      <section className="editorial-container pt-32 md:pt-44 pb-20 md:pb-30">
        <div className="max-w-5xl">
          <Reveal>
            <p className="label-caps mb-6">Millsboro, Delaware</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="serif-display text-display-lg mb-8">
              Your pharmacy
              <br />
              should know
              <br />
              your name.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-body-lg text-ink/70 max-w-lg mb-10">
              Millsboro Pharmacy is an independent, locally-owned pharmacy
              built on a simple idea: you deserve better than a number in a
              queue. Personal service, real relationships, no corporate
              shortcuts.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/transfer"
                className="bg-accent text-cream px-8 py-4 text-body hover:bg-accent/90 transition-colors duration-300 inline-block text-center"
              >
                Transfer your prescription
              </Link>
              <Link
                href="/about"
                className="border border-ink/20 text-ink px-8 py-4 text-body hover:border-ink/40 transition-colors duration-300 inline-block text-center"
              >
                Our story
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Philosophy pull-quote ─── */}
      <section className="editorial-container pb-20 md:pb-30">
        <RevealLine />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 py-16 md:py-24">
          <div className="md:col-span-3">
            <Reveal>
              <p className="label-caps">The difference</p>
            </Reveal>
          </div>
          <div className="md:col-span-8 md:col-start-5">
            <Reveal delay={0.1}>
              <blockquote className="serif-display text-display-sm text-ink/90">
                &ldquo;Chain pharmacies optimize for volume. We optimize for the
                person standing in front of us.&rdquo;
              </blockquote>
            </Reveal>
          </div>
        </div>
        <RevealLine />
      </section>

      {/* ─── Services teaser ─── */}
      <section className="editorial-container pb-20 md:pb-30">
        <Reveal>
          <p className="label-caps mb-16">What we do</p>
        </Reveal>

        <div className="space-y-0">
          {services.map((service, i) => (
            <Reveal key={service.num} delay={i * 0.08}>
              <Link href={service.href} className="group block">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 md:py-14 border-b border-muted/30 group-hover:border-accent/40 transition-colors duration-500">
                  <div className="md:col-span-1">
                    <span className="font-serif text-display text-muted/50 group-hover:text-accent/40 transition-colors duration-500">
                      {service.num}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-serif text-heading group-hover:text-accent transition-colors duration-500">
                      {service.title}
                    </h3>
                  </div>
                  <div className="md:col-span-5 md:col-start-7">
                    <p className="text-body text-ink/60">{service.desc}</p>
                  </div>
                  <div className="md:col-span-1 hidden md:flex items-center justify-end">
                    <span className="text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-300">
                      &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12">
            <Link
              href="/services"
              className="text-body text-accent border-b border-accent/30 hover:border-accent transition-colors duration-300 pb-1"
            >
              View all services
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ─── Transfer CTA ─── */}
      <section className="bg-ink text-cream py-24 md:py-36">
        <div className="editorial-container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <Reveal>
                <p className="label-caps text-cream/40 mb-6">
                  Ready to switch?
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="serif-display text-display text-cream mb-6">
                  Transferring is easier
                  <br className="hidden md:block" /> than you think.
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-body-lg text-cream/60 max-w-md">
                  Give us your name and your current pharmacy. We handle
                  everything else &mdash; usually same day.
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <Reveal delay={0.2}>
                <Link
                  href="/transfer"
                  className="bg-cream text-ink px-8 py-4 text-body hover:bg-cream/90 transition-colors duration-300 inline-block"
                >
                  Start your transfer
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── About teaser ─── */}
      <section className="editorial-container py-24 md:py-36">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Reveal>
              <p className="label-caps mb-6">Independent by design</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="serif-display text-display-sm mb-6">
                Not a chain.
                <br />
                Not a franchise.
                <br />
                Yours.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center">
            <Reveal delay={0.15}>
              <p className="text-body-lg text-ink/70 mb-8">
                Millsboro Pharmacy is built by people who live here, for people
                who live here. No distant corporate office decides how we serve
                you. Every decision is made with this community in mind.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Link
                href="/about"
                className="text-body text-accent border-b border-accent/30 hover:border-accent transition-colors duration-300 pb-1 self-start"
              >
                Read our story
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Opening moment ─── */}
      <section className="editorial-container pb-24 md:pb-36">
        <RevealLine />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="py-20 md:py-28 text-center"
        >
          <p className="label-caps text-muted mb-4">Coming soon</p>
          {/* TODO: Replace with actual opening date */}
          <p
            className="font-serif text-display-sm text-ink/80"
            style={{ fontVariationSettings: '"opsz" 48' }}
          >
            Opening Spring 2026
          </p>
          <p className="text-body text-ink/40 mt-4">
            Millsboro, Delaware
          </p>
        </motion.div>
      </section>

      {/* ─── LocalBusiness structured data ─── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Pharmacy",
            name: "Millsboro Pharmacy",
            // TODO: Replace with actual address
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Main Street",
              addressLocality: "Millsboro",
              addressRegion: "DE",
              postalCode: "19966",
              addressCountry: "US",
            },
            // TODO: Replace with actual phone
            telephone: "+1-302-555-1234",
            url: "https://millsboropharmacy.com",
            // TODO: Replace with actual hours
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "09:00",
                closes: "18:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "09:00",
                closes: "13:00",
              },
            ],
            description:
              "Independent, locally-owned pharmacy in Millsboro, Delaware. Personal service, fast prescription transfers, and free local delivery.",
            areaServed: {
              "@type": "Place",
              name: "Millsboro, Delaware and Sussex County",
            },
          }),
        }}
      />
    </div>
  );
}
