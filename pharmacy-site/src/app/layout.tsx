import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageTransitionProvider } from "@/components/PageTransition";

export const metadata: Metadata = {
  title: {
    default: "Millsboro Pharmacy — Your Independent Community Pharmacy",
    template: "%s — Millsboro Pharmacy",
  },
  description:
    "Millsboro Pharmacy is an independent, locally-owned pharmacy in Millsboro, Delaware. Personal service, fast prescription transfers, and free local delivery.",
  metadataBase: new URL("https://millsboropharmacy.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Millsboro Pharmacy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Inter:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        <PageTransitionProvider>{children}</PageTransitionProvider>
        <Footer />
      </body>
    </html>
  );
}
