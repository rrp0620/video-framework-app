import { Metadata } from "next";
import { ServicesClient } from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Prescription filling, transfers, immunizations, medication sync, blister packaging, free local delivery, and more at Millsboro Pharmacy in Millsboro, Delaware.",
  openGraph: {
    title: "Services — Millsboro Pharmacy",
    description:
      "Full-service independent pharmacy: prescriptions, transfers, immunizations, free delivery, and personalized care in Sussex County.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
