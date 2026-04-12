import { Metadata } from "next";
import { HomeClient } from "./HomeClient";

export const metadata: Metadata = {
  title: "Millsboro Pharmacy — Your Independent Community Pharmacy",
  description:
    "Millsboro Pharmacy is an independent, locally-owned pharmacy in Millsboro, Delaware. Personal service, fast prescription transfers, and free local delivery in Sussex County.",
  openGraph: {
    title: "Millsboro Pharmacy — Your Independent Community Pharmacy",
    description:
      "An independent, locally-owned pharmacy in Millsboro, Delaware. Personal service, fast transfers, free local delivery.",
    url: "/",
  },
};

export default function HomePage() {
  return <HomeClient />;
}
