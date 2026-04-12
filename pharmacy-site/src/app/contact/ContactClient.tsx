"use client";

import { Reveal, RevealLine } from "@/components/Reveal";

export function ContactClient() {
  return (
    <div className="min-h-screen">
      {/* ─── Hero ─── */}
      <section className="editorial-container pt-32 md:pt-44 pb-12 md:pb-20">
        <Reveal>
          <p className="label-caps mb-6">Contact &amp; Visit</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="serif-display text-display-lg max-w-3xl">
            Come see us.
          </h1>
        </Reveal>
      </section>

      {/* ─── Signage-style info ─── */}
      <section className="editorial-container pb-16 md:pb-24">
        <RevealLine />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 py-16 md:py-24">
          {/* Address — large signage type */}
          <div className="md:col-span-6">
            <Reveal>
              <p className="label-caps mb-6">Address</p>
            </Reveal>
            <Reveal delay={0.1}>
              {/* TODO: Replace with actual address */}
              <p
                className="font-serif text-display-sm leading-snug"
                style={{ fontVariationSettings: '"opsz" 48' }}
              >
                123 Main Street
                <br />
                Millsboro, DE 19966
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 space-y-2">
                {/* TODO: Replace with actual phone and email */}
                <p className="text-body-lg">
                  <a
                    href="tel:+13025551234"
                    className="text-ink hover:text-accent transition-colors duration-300"
                  >
                    (302) 555-1234
                  </a>
                </p>
                <p className="text-body-lg">
                  <a
                    href="mailto:hello@millsboropharmacy.com"
                    className="text-ink hover:text-accent transition-colors duration-300"
                  >
                    hello@millsboropharmacy.com
                  </a>
                </p>
              </div>
            </Reveal>
          </div>

          {/* Hours — typographic treatment */}
          <div className="md:col-span-5 md:col-start-8">
            <Reveal>
              <p className="label-caps mb-6">Hours</p>
            </Reveal>
            <Reveal delay={0.1}>
              {/* TODO: Replace with actual hours */}
              <div className="space-y-4">
                <div className="flex justify-between items-baseline border-b border-muted/20 pb-3">
                  <span className="text-body">Monday &ndash; Friday</span>
                  <span className="font-serif text-heading">
                    9am &ndash; 6pm
                  </span>
                </div>
                <div className="flex justify-between items-baseline border-b border-muted/20 pb-3">
                  <span className="text-body">Saturday</span>
                  <span className="font-serif text-heading">
                    9am &ndash; 1pm
                  </span>
                </div>
                <div className="flex justify-between items-baseline border-b border-muted/20 pb-3">
                  <span className="text-body">Sunday</span>
                  <span className="font-serif text-heading text-muted">
                    Closed
                  </span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              {/* TODO: Note any holiday hours or seasonal changes */}
              <p className="text-small text-ink/50 mt-6">
                Holiday hours may vary. Call ahead to confirm.
              </p>
            </Reveal>
          </div>
        </div>
        <RevealLine />
      </section>

      {/* ─── Map ─── */}
      <section className="editorial-container pb-16 md:pb-24">
        <Reveal>
          <div className="aspect-[16/9] md:aspect-[21/9] bg-surface relative overflow-hidden">
            {/* TODO: Replace with actual Google Maps or Mapbox embed */}
            {/* Example: <iframe src="https://www.google.com/maps/embed?pb=..." ... /> */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-muted text-body">
                Map embed placeholder &mdash; Millsboro, DE 19966
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ─── Directions, Parking, Accessibility ─── */}
      <section className="editorial-container pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          <Reveal>
            <div>
              <p className="label-caps mb-4">Directions</p>
              {/* TODO: Replace with actual directions */}
              <p className="text-body text-ink/70">
                Located on Main Street in downtown Millsboro, between [cross
                street] and [cross street]. Easily accessible from Route 113 and
                Route 24.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div>
              <p className="label-caps mb-4">Parking</p>
              {/* TODO: Replace with actual parking details */}
              <p className="text-body text-ink/70">
                Free parking available directly in front of the pharmacy and in
                the adjacent lot. Additional street parking available on Main
                Street.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <p className="label-caps mb-4">Accessibility</p>
              {/* TODO: Confirm accessibility features */}
              <p className="text-body text-ink/70">
                Our pharmacy is fully wheelchair accessible with a ground-level
                entrance, wide aisles, and an accessible restroom. Free delivery
                is also available for those who cannot visit in person.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Insurance ─── */}
      <section className="editorial-container pb-24 md:pb-36">
        <RevealLine />
        <div className="py-16 md:py-24">
          <Reveal>
            <p className="label-caps mb-6">Insurance accepted</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-body-lg text-ink/70 max-w-2xl mb-8">
              We accept most major insurance plans, including Medicare Part D,
              Medicaid, and Delaware-specific plans. If you&rsquo;re unsure
              about your coverage, call us — we&rsquo;ll check before you make
              the trip.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            {/* TODO: Replace with actual list of accepted insurance plans */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                "Medicare Part D",
                "Delaware Medicaid",
                "Aetna",
                "Blue Cross Blue Shield",
                "Cigna",
                "UnitedHealthcare",
                "Humana",
                "Express Scripts",
                "CVS Caremark",
                "OptumRx",
                "Tricare",
                "Workers' Comp",
              ].map((plan) => (
                <div
                  key={plan}
                  className="bg-surface px-4 py-3 text-small text-ink/70"
                >
                  {plan}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-small text-ink/50 mt-6">
              {/* TODO: Confirm complete insurance list */}
              This is a partial list. We work with most prescription insurance
              plans. Contact us to verify your specific coverage.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── Structured data ─── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Pharmacy",
            name: "Millsboro Pharmacy",
            // TODO: Replace with actual data
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Main Street",
              addressLocality: "Millsboro",
              addressRegion: "DE",
              postalCode: "19966",
              addressCountry: "US",
            },
            telephone: "+1-302-555-1234",
            email: "hello@millsboropharmacy.com",
            url: "https://millsboropharmacy.com/contact",
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
            hasMap: "https://maps.google.com/?q=Millsboro+DE+19966",
            isAccessibleForFree: true,
            publicAccess: true,
          }),
        }}
      />
    </div>
  );
}
