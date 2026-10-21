import type { Metadata } from "next";
import { ContactCta } from "@/components/sections/shared/contact-cta";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main className="main-wrapper">
      <ContactCta offset />
    </main>
  );
}
