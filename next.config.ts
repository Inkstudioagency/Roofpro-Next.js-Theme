import type { NextConfig } from "next";

// Optional Strapi CMS. Without STRAPI_URL the site serves the built-in content in /content.
const strapiUrl = process.env.STRAPI_URL ? new URL(process.env.STRAPI_URL) : null;
const strapiIsLocal = strapiUrl !== null && ["localhost", "127.0.0.1", "::1"].includes(strapiUrl.hostname);

const nextConfig: NextConfig = {
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    remotePatterns: strapiUrl
      ? [
          {
            protocol: strapiUrl.protocol.replace(":", "") as "http" | "https",
            hostname: strapiUrl.hostname,
            port: strapiUrl.port,
            pathname: "/uploads/**",
          },
        ]
      : [],
    // Strapi media is served from localhost during development; Next.js refuses to
    // optimize images from local IPs unless this is enabled.
    dangerouslyAllowLocalIP: strapiIsLocal,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
