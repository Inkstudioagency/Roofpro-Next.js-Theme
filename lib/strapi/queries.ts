import { cacheLife, cacheTag } from "next/cache";
import localServices from "@/content/services.json";
import localWorks from "@/content/works.json";
import { strapiEnabled, strapiGet, strapiPost } from "./client";
import type { ContactSubmission, Service, Work } from "./types";

/*
 * Content reads. With STRAPI_URL set, data comes from Strapi; each result is cached and
 * tagged so the /api/revalidate webhook can refresh pages as soon as content changes.
 * Without it, the built-in snapshot in /content is used (same shape as the Strapi API).
 */

const builtInServices = localServices as unknown as Service[];
const builtInWorks = localWorks as unknown as Work[];

const SERVICE_POPULATE = {
  icon: true,
  hoverIcon: true,
  thumbnailOne: true,
  thumbnailTwo: true,
  mainImage: true,
  overviewImages: true,
  offers: { populate: ["icon"] },
  benefits: true,
};

const WORK_POPULATE = {
  thumbnail: true,
  mainImage: true,
  detailTags: true,
  features: true,
};

export async function getServices(): Promise<Service[]> {
  "use cache";
  cacheTag("strapi", "services");
  cacheLife("hours");
  if (!strapiEnabled) return builtInServices;
  return strapiGet<Service[]>("services", {
    populate: SERVICE_POPULATE,
    sort: ["order:asc", "title:asc"],
    pagination: { pageSize: 100 },
  });
}

export async function getService(slug: string): Promise<Service | null> {
  "use cache";
  cacheTag("strapi", "services", `service:${slug}`);
  cacheLife("hours");
  if (!strapiEnabled) return builtInServices.find((s) => s.slug === slug) ?? null;
  const [service] = await strapiGet<Service[]>("services", {
    filters: { slug: { $eq: slug } },
    populate: SERVICE_POPULATE,
  });
  return service ?? null;
}

export async function getWorks(): Promise<Work[]> {
  "use cache";
  cacheTag("strapi", "works");
  cacheLife("hours");
  if (!strapiEnabled) return builtInWorks;
  return strapiGet<Work[]>("works", {
    populate: WORK_POPULATE,
    sort: ["order:asc", "title:asc"],
    pagination: { pageSize: 100 },
  });
}

export async function getWork(slug: string): Promise<Work | null> {
  "use cache";
  cacheTag("strapi", "works", `work:${slug}`);
  cacheLife("hours");
  if (!strapiEnabled) return builtInWorks.find((w) => w.slug === slug) ?? null;
  const [work] = await strapiGet<Work[]>("works", {
    filters: { slug: { $eq: slug } },
    populate: WORK_POPULATE,
  });
  return work ?? null;
}

/** Slugs for generateStaticParams. Cache Components needs at least one entry, so fall back to a placeholder. */
export async function getSlugs(collection: "services" | "works"): Promise<{ slug: string }[]> {
  try {
    const items = collection === "services" ? await getServices() : await getWorks();
    if (items.length) return items.map(({ slug }) => ({ slug }));
  } catch (error) {
    console.warn(`[strapi] ${String(error)} - prerendering /${collection} detail pages on demand instead.`);
  }
  return [{ slug: "__placeholder__" }];
}

/** Contact submissions need Strapi; returns false when the site runs on built-in content. */
export async function createSubmission(data: ContactSubmission): Promise<boolean> {
  if (!strapiEnabled) return false;
  await strapiPost("submissions", data);
  return true;
}
