"use client";

import Link from "next/link";
import { Reveal, RevealLine } from "@/components/Reveal";

const services = [
  {
    num: "01",
    title: "Prescription Filling",
    description:
      /* TODO: Replace with actual copy */
      "Every prescription is reviewed by a pharmacist who takes the time to understand your full medication profile — not just the label in front of them. We check for interactions, optimize timing, and make sure you understand what you're taking and why. No drive-through window, no 45-minute wait while someone searches for your bag. Your prescriptions are ready when we say they'll be ready.",
    aside: "Average fill time under 15 minutes for in-stock medications.",
  },
  {
    num: "02",
    title: "Prescription Transfers",
    description:
      /* TODO: Replace with actual copy */
      "Transferring your prescriptions to Millsboro Pharmacy takes about two minutes of your time. Give us your name and your current pharmacy — we handle the rest. We contact your previous pharmacy directly, transfer all active prescriptions, and confirm everything with your insurance. Most transfers are processed same-day.",
    aside:
      "We can transfer from any pharmacy: CVS, Walgreens, Rite Aid, mail-order, hospital, or another independent.",
  },
  {
    num: "03",
    title: "Immunizations",
    description:
      /* TODO: Replace with actual copy */
      "Walk-in immunizations administered by licensed pharmacists. Flu, COVID-19, shingles, pneumonia, Tdap, hepatitis, and more. No appointment necessary for most vaccines — though you're welcome to schedule one if you prefer. We'll check your insurance coverage before administering and handle all the billing.",
    aside: "Most immunizations covered at no out-of-pocket cost with insurance.",
  },
  {
    num: "04",
    title: "Medication Synchronization",
    description:
      /* TODO: Replace with actual copy */
      "If you take multiple medications, we can align all your refill dates to a single monthly pickup. No more tracking five different refill schedules or making multiple trips. We call you before your sync date, confirm everything, and have your medications packaged and ready. One trip, once a month, everything handled.",
    aside: null,
  },
  {
    num: "05",
    title: "Blister & Adherence Packaging",
    description:
      /* TODO: Replace with actual copy */
      "For patients managing complex medication regimens — or caregivers helping loved ones — we offer blister packaging organized by day and time of dose. Each card is clearly labeled with medication names, strengths, and instructions. It removes the guesswork and reduces the risk of missed or doubled doses.",
    aside:
      "Particularly valuable for elderly patients, post-surgical recovery, or anyone on 4+ daily medications.",
  },
  {
    num: "06",
    title: "Compounding",
    description:
      /* TODO: Replace with actual copy */
      "When a commercial medication doesn't meet your needs — wrong dosage form, discontinued product, allergy to an inactive ingredient — compounding fills the gap. We prepare customized medications in the strength, form, and flavor your treatment requires. Capsules, topical creams, oral suspensions, and more.",
    aside: "Consult with our pharmacist about whether compounding is right for your prescription.",
  },
  {
    num: "07",
    title: "Free Local Delivery",
    description:
      /* TODO: Replace with actual copy */
      "Prescriptions delivered to your door throughout Millsboro and surrounding areas at no charge. No minimum order, no delivery fee, no subscription. If you can't make it in, we come to you. Same-day delivery available for prescriptions filled before 3pm on weekdays.",
    aside:
      /* TODO: Define exact delivery radius */
      "Delivery area includes Millsboro, Long Neck, Dagsboro, and surrounding communities.",
  },
  {
    num: "08",
    title: "OTC & Wellness",
    description:
      /* TODO: Replace with actual copy */
      "A curated selection of over-the-counter medications, vitamins, supplements, first-aid supplies, and personal care products. We stock what this community actually needs — not eighteen varieties of the same thing. And if we don't carry something, we'll order it for you, usually next-day.",
    aside: null,
  },
  {
    num: "09",
    title: "Durable Medical Equipment",
    description:
      /* TODO: Replace with actual copy and confirm DME offerings */
      "Select durable medical equipment available in-store and by order: blood pressure monitors, nebulizers, compression stockings, braces, bathroom safety equipment, and mobility aids. We help with insurance billing and can advise on the right equipment for your needs.",
    aside: "DME availability may vary. Call ahead for specific items.",
  },
];

export function ServicesClient() {
  return (
    <div className="min-h-screen">
      {/* ─── Hero ─── */}
      <section className="editorial-container pt-32 md:pt-44 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7">
            <Reveal>
              <p className="label-caps mb-6">Services</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="serif-display text-display-lg">
                Everything a pharmacy
                <br className="hidden md:block" /> should be.
              </h1>
            </Reveal>
          </div>
          <div className="md:col-span-4 md:col-start-9 flex items-end">
            <Reveal delay={0.2}>
              <p className="text-body-lg text-ink/60">
                Full-service, independent pharmacy care — from prescriptions and
                immunizations to free delivery and personalized packaging.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Services list ─── */}
      <section className="editorial-container pb-24 md:pb-36">
        <RevealLine />

        {services.map((service, i) => (
          <div key={service.num}>
            <div className="py-14 md:py-20">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                {/* Number */}
                <div className="md:col-span-1">
                  <Reveal>
                    <span className="font-serif text-display text-muted/40">
                      {service.num}
                    </span>
                  </Reveal>
                </div>

                {/* Title — alternating alignment for visual rhythm */}
                <div
                  className={`md:col-span-4 ${
                    i % 2 === 0 ? "md:col-start-2" : "md:col-start-3"
                  }`}
                >
                  <Reveal delay={0.05}>
                    <h2 className="font-serif text-display-sm mb-4 md:mb-0">
                      {service.title}
                    </h2>
                  </Reveal>
                </div>

                {/* Description */}
                <div className="md:col-span-5 md:col-start-7">
                  <Reveal delay={0.1}>
                    <p className="text-body text-ink/70 leading-relaxed">
                      {service.description}
                    </p>
                    {service.aside && (
                      <p className="text-small text-accent mt-6 border-l-2 border-accent/30 pl-4">
                        {service.aside}
                      </p>
                    )}
                  </Reveal>
                </div>
              </div>
            </div>
            <RevealLine />
          </div>
        ))}
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-surface py-24 md:py-36">
        <div className="editorial-container text-center">
          <Reveal>
            <p className="label-caps mb-6">Have questions?</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="serif-display text-display-sm mb-8 max-w-2xl mx-auto">
              We&rsquo;d rather explain in person.
              <br />
              That&rsquo;s kind of our thing.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/transfer"
                className="bg-accent text-cream px-8 py-4 text-body hover:bg-accent/90 transition-colors duration-300 inline-block"
              >
                Transfer your prescription
              </Link>
              <Link
                href="/contact"
                className="border border-ink/20 text-ink px-8 py-4 text-body hover:border-ink/40 transition-colors duration-300 inline-block"
              >
                Get in touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
