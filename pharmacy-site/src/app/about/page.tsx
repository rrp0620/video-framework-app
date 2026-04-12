import { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Millsboro Pharmacy is an independent, locally-owned pharmacy rooted in Sussex County, Delaware. Learn why we chose to build something different.",
  openGraph: {
    title: "About — Millsboro Pharmacy",
    description:
      "An independent pharmacy rooted in Sussex County. Our story, our pharmacist, and our commitment to this community.",
    url: "/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
