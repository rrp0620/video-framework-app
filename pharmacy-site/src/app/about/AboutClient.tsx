"use client";

import Link from "next/link";
import { Reveal, RevealLine } from "@/components/Reveal";

export function AboutClient() {
  return (
    <div className="min-h-screen">
      {/* ─── Hero ─── */}
      <section className="editorial-container pt-32 md:pt-44 pb-16 md:pb-24">
        <Reveal>
          <p className="label-caps mb-6">About</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="serif-display text-display-lg max-w-4xl">
            Built here,
            <br />
            for here.
          </h1>
        </Reveal>
      </section>

      {/* ─── The why ─── */}
      <section className="editorial-container pb-20 md:pb-30">
        <RevealLine />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 py-16 md:py-24">
          <div className="md:col-span-4">
            <Reveal>
              <p className="label-caps mb-4">Why we exist</p>
            </Reveal>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <Reveal delay={0.1}>
              {/* TODO: Replace with the founder's actual story */}
              <p className="text-body-lg text-ink/80 mb-8">
                Millsboro Pharmacy exists because this community deserves a
                pharmacy that works like pharmacies used to — where the
                pharmacist knows your name, your history, and your family. Where
                prescriptions aren&rsquo;t just counted and bagged, but
                reviewed, explained, and genuinely cared about.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-body text-ink/60 mb-8">
                The chains have made pharmacy transactional. Walk in, wait in
                line, pick up a bag, leave. Maybe you get a question answered if
                the pharmacist isn&rsquo;t juggling three drive-through windows
                and a corporate metric dashboard. We watched that happen and
                decided it wasn&rsquo;t inevitable — it was a choice. And we
                could choose differently.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-body text-ink/60">
                Millsboro Pharmacy is independently owned and operated. No
                corporate parent company. No shareholders demanding we fill more
                prescriptions per hour. No algorithm deciding your wait time.
                Just pharmacists doing the work the way it should be done.
              </p>
            </Reveal>
          </div>
        </div>
        <RevealLine />
      </section>

      {/* ─── Pull quote ─── */}
      <section className="editorial-container pb-20 md:pb-30">
        <div className="py-16 md:py-24 md:pl-24 lg:pl-36">
          <Reveal>
            <blockquote className="serif-display text-display text-ink/90 max-w-3xl">
              &ldquo;We didn&rsquo;t start a pharmacy to compete with chains. We
              started one because this town shouldn&rsquo;t have to settle for
              one.&rdquo;
            </blockquote>
          </Reveal>
          <Reveal delay={0.1}>
            {/* TODO: Replace with actual pharmacist name */}
            <p className="label-caps mt-8 text-accent">
              &mdash; The Pharmacist, Millsboro Pharmacy
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── Pharmacist bio ─── */}
      <section className="editorial-container pb-20 md:pb-30">
        <RevealLine />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 py-16 md:py-24">
          {/* Portrait frame */}
          <div className="md:col-span-5 md:col-start-1">
            <Reveal>
              <div className="aspect-[3/4] bg-surface relative overflow-hidden">
                {/* TODO: Replace with actual pharmacist portrait */}
                <div className="absolute inset-0 flex items-end p-8">
                  <p className="text-caption text-muted">
                    Portrait placeholder
                  </p>
                </div>
                {/* Subtle border frame effect */}
                <div className="absolute inset-3 border border-muted/20" />
              </div>
            </Reveal>
          </div>

          {/* Bio */}
          <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center">
            <Reveal delay={0.1}>
              <p className="label-caps mb-4">Your pharmacist</p>
            </Reveal>
            <Reveal delay={0.15}>
              {/* TODO: Replace with actual pharmacist name */}
              <h2 className="serif-display text-display-sm mb-6">
                [Pharmacist Name], PharmD
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              {/* TODO: Replace with actual pharmacist bio */}
              <p className="text-body text-ink/70 mb-6">
                A Sussex County native with over a decade of clinical pharmacy
                experience. After years in chain retail and hospital settings,
                the decision to open an independent pharmacy in Millsboro was
                both professional and personal — a return to the kind of
                pharmacy that shaped their own career.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="text-body text-ink/70">
                {/* TODO: Replace with real credentials and background */}
                Doctor of Pharmacy from [University]. Licensed in Delaware.
                Immunization certified. Medication therapy management certified.
                Lives in Sussex County with [family details if desired].
              </p>
            </Reveal>
          </div>
        </div>
        <RevealLine />
      </section>

      {/* ─── Community roots ─── */}
      <section className="editorial-container pb-20 md:pb-30">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 py-8 md:py-16">
          <div className="md:col-span-5 md:col-start-2">
            <Reveal>
              <p className="label-caps mb-4">Sussex County roots</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="serif-display text-display-sm mb-6">
                This is home.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              {/* TODO: Replace with real community connection details */}
              <p className="text-body text-ink/70">
                Millsboro isn&rsquo;t just where we opened a pharmacy —
                it&rsquo;s where we live, where we shop, where our kids go to
                school. We know this community because we&rsquo;re part of it.
                That&rsquo;s not a marketing line. It&rsquo;s the whole point.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-4 md:col-start-8 flex flex-col justify-end">
            <Reveal delay={0.2}>
              <div className="space-y-6">
                <div>
                  <p className="font-serif text-display text-accent/60">01</p>
                  <p className="text-small text-ink/60 mt-1">
                    Locally owned &amp; operated
                  </p>
                </div>
                <div>
                  <p className="font-serif text-display text-accent/60">02</p>
                  <p className="text-small text-ink/60 mt-1">
                    Decisions made here, not in a boardroom
                  </p>
                </div>
                <div>
                  <p className="font-serif text-display text-accent/60">03</p>
                  <p className="text-small text-ink/60 mt-1">
                    Invested in Sussex County&rsquo;s health
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-ink text-cream py-24 md:py-36">
        <div className="editorial-container">
          <Reveal>
            <h2 className="serif-display text-display-sm text-cream mb-8 max-w-2xl">
              We&rsquo;d love to be your pharmacy.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/transfer"
                className="bg-cream text-ink px-8 py-4 text-body hover:bg-cream/90 transition-colors duration-300 inline-block text-center"
              >
                Transfer your prescription
              </Link>
              <Link
                href="/contact"
                className="border border-cream/30 text-cream px-8 py-4 text-body hover:border-cream/50 transition-colors duration-300 inline-block text-center"
              >
                Visit or call
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
