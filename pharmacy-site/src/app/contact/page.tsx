import { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact & Visit",
  description:
    "Visit Millsboro Pharmacy at 123 Main Street, Millsboro, DE 19966. Hours, directions, phone, email, and insurance information.",
  openGraph: {
    title: "Contact & Visit — Millsboro Pharmacy",
    description:
      "Find us in Millsboro, Delaware. Hours, address, phone, directions, and insurance accepted.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
