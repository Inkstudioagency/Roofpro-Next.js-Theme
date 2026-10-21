import type { Metadata } from "next";
import { ServicesBreadcrumb } from "@/components/sections/services/breadcrumb";
import { KeyBenefits } from "@/components/sections/shared/key-benefits";
import { QuoteCta } from "@/components/sections/shared/quote-cta";
import { ServiceList } from "@/components/sections/shared/service-list";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <main className="main-wrapper">
      <ServicesBreadcrumb />
      <ServiceList showHeading={false} />
      <KeyBenefits />
      <QuoteCta />
    </main>
  );
}
