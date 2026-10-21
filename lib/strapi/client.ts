/**
 * Strapi base URL. When unset, the site uses the built-in content snapshot in /content
 * (see queries.ts), so it runs without a CMS, e.g. on a plain Vercel deployment.
 */
export const STRAPI_URL = process.env.STRAPI_URL?.replace(/\/$/, "") || null;
export const strapiEnabled = STRAPI_URL !== null;

type Primitive = string | number | boolean;
type Query = { [key: string]: Query | Array<Query | Primitive> | Primitive | undefined };

/** Encodes nested objects the way Strapi expects: populate[offers][populate][0]=icon */
export function toQueryString(query: Query, prefix = ""): string {
  return Object.entries(query)
    .flatMap(([key, value]) => {
      if (value === undefined) return [];
      const name = prefix ? `${prefix}[${key}]` : key;
      if (Array.isArray(value)) {
        return value.map((v, i) =>
          typeof v === "object"
            ? toQueryString(v, `${name}[${i}]`)
            : `${encodeURIComponent(`${name}[${i}]`)}=${encodeURIComponent(String(v))}`,
        );
      }
      if (typeof value === "object") return [toQueryString(value, name)];
      return [`${encodeURIComponent(name)}=${encodeURIComponent(String(value))}`];
    })
    .filter(Boolean)
    .join("&");
}

export class StrapiError extends Error {
  constructor(
    message: string,
    readonly status?: number,
  ) {
    super(message);
    this.name = "StrapiError";
  }
}

function headers(): HeadersInit {
  const token = process.env.STRAPI_API_TOKEN;
  return {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

export async function strapiGet<T>(path: string, query: Query = {}): Promise<T> {
  const qs = toQueryString(query);
  const url = `${STRAPI_URL}/api/${path}${qs ? `?${qs}` : ""}`;
  let res: Response;
  try {
    res = await fetch(url, { headers: headers() });
  } catch (cause) {
    throw new StrapiError(`Could not reach Strapi at ${STRAPI_URL}. Is it running? (${String(cause)})`);
  }
  if (!res.ok) throw new StrapiError(`Strapi responded ${res.status} for ${path}`, res.status);
  const json = (await res.json()) as { data: T };
  return json.data;
}

export async function strapiPost<T>(path: string, data: unknown): Promise<T> {
  const res = await fetch(`${STRAPI_URL}/api/${path}`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ data }),
  });
  if (!res.ok) throw new StrapiError(`Strapi responded ${res.status} for ${path}`, res.status);
  const json = (await res.json()) as { data: T };
  return json.data;
}

/**
 * Strapi's local upload provider returns relative /uploads URLs; cloud providers return absolute ones.
 * Built-in content uses site-relative /cms URLs, which are served from public/.
 */
export function mediaUrl(url: string) {
  if (STRAPI_URL && url.startsWith("/uploads/")) return `${STRAPI_URL}${url}`;
  return url;
}
