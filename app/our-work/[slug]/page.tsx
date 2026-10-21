import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ProjectResult } from "@/components/sections/shared/project-result";
import { WorkDetails } from "@/components/sections/work/work-details";
import { WorkFeatures } from "@/components/sections/work/work-features";
import { WorkGallery } from "@/components/sections/work/work-gallery";
import { WorkHero } from "@/components/sections/work/work-hero";
import { mediaUrl } from "@/lib/strapi/client";
import { getSlugs, getWork } from "@/lib/strapi/queries";

export function generateStaticParams() {
  return getSlugs("works");
}

export async function generateMetadata({ params }: PageProps<"/our-work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const work = await getWork(slug).catch(() => null);
  if (!work) return { title: "Project not found" };
  return {
    title: work.title,
    description: work.detailDescription ?? work.cardDescription ?? undefined,
    openGraph: work.mainImage ? { images: mediaUrl(work.mainImage.url) } : undefined,
  };
}

async function WorkDetail({ params }: Pick<PageProps<"/our-work/[slug]">, "params">) {
  const { slug } = await params;
  const work = await getWork(slug);
  if (!work) notFound();

  return (
    <>
      <WorkHero work={work} />
      <WorkDetails work={work} />
      <ProjectResult
        duration={work.duration}
        roofArea={work.roofArea}
        energySavings={work.energySavings}
        warranty={work.warranty}
      />
      <WorkFeatures work={work} />
    </>
  );
}

export default function WorkDetailPage(props: PageProps<"/our-work/[slug]">) {
  return (
    <main className="main-wrapper">
      <Suspense fallback={<section className="section_breadcrumb work" />}>
        <WorkDetail params={props.params} />
      </Suspense>
      <WorkGallery />
    </main>
  );
}
