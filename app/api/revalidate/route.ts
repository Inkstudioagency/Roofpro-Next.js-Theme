import { revalidateTag } from "next/cache";
import type { NextRequest } from "next/server";

/**
 * Strapi webhook target: Settings > Webhooks > URL `<site>/api/revalidate`,
 * header `Authorization: Bearer <REVALIDATE_SECRET>`, events: Entry publish / unpublish / update / delete.
 */
export async function POST(request: NextRequest) {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret || request.headers.get("authorization") !== `Bearer ${secret}`) {
    return Response.json({ revalidated: false, message: "Invalid secret" }, { status: 401 });
  }

  const payload = (await request.json().catch(() => ({}))) as { model?: string; entry?: { slug?: string } };
  const tags: string[] = [];
  if (payload.model === "service") tags.push("services");
  else if (payload.model === "work") tags.push("works");
  else tags.push("strapi"); // media library changes or unknown models: refresh everything from Strapi

  const slug = payload.entry?.slug;
  if (slug && payload.model) tags.push(`${payload.model}:${slug}`);

  for (const tag of tags) revalidateTag(tag, "max");
  return Response.json({ revalidated: true, tags });
}
