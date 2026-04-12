import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-ink text-cream/80">
      <div className="editorial-container py-16 md:py-24">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Wordmark and tagline */}
          <div className="md:col-span-5">
            <p
              className="font-serif text-display-sm text-cream mb-4"
              style={{ fontVariationSettings: '"opsz" 48' }}
            >
              Millsboro Pharmacy
            </p>
            <p className="text-body text-cream/50 max-w-sm">
              An independent, locally-owned pharmacy serving Millsboro, Delaware
              and the surrounding Sussex County community.
            </p>
          </div>

          {/* Hours */}
          <div className="md:col-span-3">
            <p className="label-caps text-cream/40 mb-4">Hours</p>
            <div className="space-y-1 text-small">
              {/* TODO: Replace with actual hours */}
              <p>Monday &ndash; Friday: 9am &ndash; 6pm</p>
              <p>Saturday: 9am &ndash; 1pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="label-caps text-cream/40 mb-4">Contact</p>
            <div className="space-y-1 text-small">
              {/* TODO: Replace with actual address and phone */}
              <p>123 Main Street</p>
              <p>Millsboro, DE 19966</p>
              <p className="mt-3">
                <a
                  href="tel:+13025551234"
                  className="hover:text-cream transition-colors duration-300"
                >
                  (302) 555-1234
                </a>
              </p>
              <p>
                <a
                  href="mailto:hello@millsboropharmacy.com"
                  className="hover:text-cream transition-colors duration-300"
                >
                  hello@millsboropharmacy.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-cream/10 my-12" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-small text-cream/40">
            <Link
              href="/services"
              className="hover:text-cream/70 transition-colors duration-300"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="hover:text-cream/70 transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="/transfer"
              className="hover:text-cream/70 transition-colors duration-300"
            >
              Transfer Rx
            </Link>
            <Link
              href="/contact"
              className="hover:text-cream/70 transition-colors duration-300"
            >
              Contact
            </Link>
          </div>

          <p className="text-caption text-cream/30">
            {/* TODO: Update opening date */}
            Opening Spring 2026 &middot; &copy; {new Date().getFullYear()}{" "}
            Millsboro Pharmacy
          </p>
        </div>
      </div>
    </footer>
  );
}
