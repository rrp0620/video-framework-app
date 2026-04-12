import { Metadata } from "next";
import { TransferClient } from "./TransferClient";

export const metadata: Metadata = {
  title: "Transfer Your Prescription",
  description:
    "Transfer your prescriptions to Millsboro Pharmacy in minutes. We handle the paperwork — just give us your name and current pharmacy.",
  openGraph: {
    title: "Transfer Your Prescription — Millsboro Pharmacy",
    description:
      "Transferring prescriptions is easy. We contact your current pharmacy, handle the paperwork, and have your medications ready — usually same day.",
    url: "/transfer",
  },
};

export default function TransferPage() {
  return <TransferClient />;
}
