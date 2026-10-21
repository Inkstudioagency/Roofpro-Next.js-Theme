import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ServiceHero } from "@/components/sections/services/service-hero";
import { ServiceOffers } from "@/components/sections/services/service-offers";
import { ServiceOverview } from "@/components/sections/services/service-overview";
import { KeyBenefits } from "@/components/sections/shared/key-benefits";
import { Process } from "@/components/sections/shared/process";
import { QuoteCta } from "@/components/sections/shared/quote-cta";
import { mediaUrl } from "@/lib/strapi/client";
import { getService, getSlugs } from "@/lib/strapi/queries";

export function generateStaticParams() {
  return getSlugs("services");
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = await getService(slug).catch(() => null);
  if (!service) return { title: "Service not found" };
  return {
    title: service.title,
    description: service.description ?? undefined,
    openGraph: service.mainImage ? { images: mediaUrl(service.mainImage.url) } : undefined,
  };
}

async function ServiceDetail({ params }: Pick<PageProps<"/services/[slug]">, "params">) {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) notFound();

  return (
    <>
      <ServiceHero service={service} />
      <ServiceOverview service={service} />
      <ServiceOffers service={service} />
      <KeyBenefits summary={service.benefitSummary} benefits={service.benefits.map((b) => b.text)} />
    </>
  );
}

export default function ServiceDetailPage(props: PageProps<"/services/[slug]">) {
  return (
    <main className="main-wrapper">
      <Suspense fallback={<section className="section_breadcrumb service-details is-2" />}>
        <ServiceDetail params={props.params} />
      </Suspense>
      <Process />
      <QuoteCta />
    </main>
  );
}
