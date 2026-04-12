"use client";

import { useState, FormEvent } from "react";
import { Reveal, RevealLine } from "@/components/Reveal";
import { motion, AnimatePresence } from "framer-motion";

type FormState = "idle" | "submitting" | "success" | "error";

export function TransferClient() {
  const [formState, setFormState] = useState<FormState>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);
    const body = Object.fromEntries(data.entries());

    try {
      const res = await fetch("/api/transfer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setFormState("success");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  return (
    <div className="min-h-screen">
      {/* ─── Hero ─── */}
      <section className="editorial-container pt-32 md:pt-44 pb-12 md:pb-20">
        <Reveal>
          <p className="label-caps mb-6">Transfer</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="serif-display text-display-lg max-w-3xl">
            Switch in
            <br />
            minutes, not
            <br />
            hours.
          </h1>
        </Reveal>
      </section>

      {/* ─── Steps + Form ─── */}
      <section className="editorial-container pb-24 md:pb-36">
        <RevealLine />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-16 md:pt-24">
          {/* Left: How it works */}
          <div className="lg:col-span-4">
            <Reveal>
              <p className="label-caps mb-10">How it works</p>
            </Reveal>

            <div className="space-y-12">
              <Reveal delay={0.05}>
                <div>
                  <p className="font-serif text-display text-accent/50 mb-2">
                    1
                  </p>
                  <h3 className="font-serif text-heading mb-2">
                    You fill out this form
                  </h3>
                  <p className="text-body text-ink/60">
                    Your name, date of birth, current pharmacy, and
                    medications. Takes about two minutes.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div>
                  <p className="font-serif text-display text-accent/50 mb-2">
                    2
                  </p>
                  <h3 className="font-serif text-heading mb-2">
                    We call your old pharmacy
                  </h3>
                  <p className="text-body text-ink/60">
                    We contact them directly and transfer your active
                    prescriptions. You don&rsquo;t have to do anything.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div>
                  <p className="font-serif text-display text-accent/50 mb-2">
                    3
                  </p>
                  <h3 className="font-serif text-heading mb-2">
                    Pick up or we deliver
                  </h3>
                  <p className="text-body text-ink/60">
                    Your medications are ready — usually same day. Pick up
                    in store or choose free local delivery.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7 lg:col-start-6">
            <AnimatePresence mode="wait">
              {formState === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-surface p-10 md:p-16"
                >
                  <p className="font-serif text-display-sm mb-4 text-accent">
                    Request received.
                  </p>
                  <p className="text-body-lg text-ink/70 mb-2">
                    We&rsquo;ll begin your transfer and contact you within one
                    business day to confirm.
                  </p>
                  <p className="text-body text-ink/50">
                    If you need anything sooner, call us at{" "}
                    {/* TODO: Replace with actual phone */}
                    <a
                      href="tel:+13025551234"
                      className="text-accent hover:underline"
                    >
                      (302) 555-1234
                    </a>
                    .
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  <Reveal>
                    <p className="label-caps mb-8">Your information</p>
                  </Reveal>

                  {/* Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-small text-ink/60 mb-2"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full bg-transparent border-b-2 border-muted/40 focus:border-accent py-3 text-body text-ink outline-none transition-colors duration-300 placeholder:text-muted/50"
                        placeholder="Jane"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-small text-ink/60 mb-2"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full bg-transparent border-b-2 border-muted/40 focus:border-accent py-3 text-body text-ink outline-none transition-colors duration-300 placeholder:text-muted/50"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  {/* DOB + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="dob"
                        className="block text-small text-ink/60 mb-2"
                      >
                        Date of birth
                      </label>
                      <input
                        type="date"
                        id="dob"
                        name="dob"
                        required
                        className="w-full bg-transparent border-b-2 border-muted/40 focus:border-accent py-3 text-body text-ink outline-none transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-small text-ink/60 mb-2"
                      >
                        Phone number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full bg-transparent border-b-2 border-muted/40 focus:border-accent py-3 text-body text-ink outline-none transition-colors duration-300 placeholder:text-muted/50"
                        placeholder="(302) 555-0000"
                      />
                    </div>
                  </div>

                  <div className="h-px bg-muted/20 my-4" />

                  <p className="label-caps mb-2">Prescription details</p>

                  {/* Current pharmacy */}
                  <div>
                    <label
                      htmlFor="currentPharmacy"
                      className="block text-small text-ink/60 mb-2"
                    >
                      Current pharmacy name &amp; location
                    </label>
                    <input
                      type="text"
                      id="currentPharmacy"
                      name="currentPharmacy"
                      required
                      className="w-full bg-transparent border-b-2 border-muted/40 focus:border-accent py-3 text-body text-ink outline-none transition-colors duration-300 placeholder:text-muted/50"
                      placeholder="e.g. CVS on Route 113, Georgetown"
                    />
                  </div>

                  {/* Medications */}
                  <div>
                    <label
                      htmlFor="medications"
                      className="block text-small text-ink/60 mb-2"
                    >
                      Medication(s) to transfer
                    </label>
                    <textarea
                      id="medications"
                      name="medications"
                      rows={4}
                      required
                      className="w-full bg-transparent border-2 border-muted/40 focus:border-accent p-4 text-body text-ink outline-none transition-colors duration-300 placeholder:text-muted/50 resize-none"
                      placeholder="List your medications, or write &quot;all prescriptions&quot; to transfer everything"
                    />
                  </div>

                  {/* Pickup preference */}
                  <div>
                    <p className="text-small text-ink/60 mb-3">
                      Preferred fulfillment
                    </p>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="fulfillment"
                          value="pickup"
                          defaultChecked
                          className="w-4 h-4 accent-accent"
                        />
                        <span className="text-body">In-store pickup</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="fulfillment"
                          value="delivery"
                          className="w-4 h-4 accent-accent"
                        />
                        <span className="text-body">Free local delivery</span>
                      </label>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label
                      htmlFor="notes"
                      className="block text-small text-ink/60 mb-2"
                    >
                      Anything else we should know?{" "}
                      <span className="text-muted">(optional)</span>
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      className="w-full bg-transparent border-2 border-muted/40 focus:border-accent p-4 text-body text-ink outline-none transition-colors duration-300 placeholder:text-muted/50 resize-none"
                      placeholder="Allergies, preferred contact time, delivery address, etc."
                    />
                  </div>

                  {/* Submit */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={formState === "submitting"}
                      className="bg-accent text-cream px-10 py-4 text-body hover:bg-accent/90 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {formState === "submitting"
                        ? "Submitting..."
                        : "Submit transfer request"}
                    </button>

                    {formState === "error" && (
                      <p className="text-small text-red-700 mt-4">
                        Something went wrong. Please try again or call us
                        directly.
                      </p>
                    )}
                  </div>

                  <p className="text-caption text-muted mt-6">
                    Your information is sent securely and used only to process
                    your prescription transfer. We&rsquo;ll contact you to
                    confirm.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
