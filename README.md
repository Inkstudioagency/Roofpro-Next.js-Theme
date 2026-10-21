# RoofPro — Next.js Theme

Roofing company website built with **Next.js 16** (App Router, Cache Components) and **Tailwind CSS v4**.
Services and projects come from built-in content, or from an optional **Strapi 5** CMS.

```bash
npm install
cp .env.example .env.local
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
npm run lint | typecheck | format
```

## Content

| Mode | How | Use for |
| --- | --- | --- |
| **Built-in** (default) | `STRAPI_URL` empty. Reads `content/services.json`, `content/works.json` and images in `public/cms/` | Vercel / static hosting with no backend |
| **Strapi** | `STRAPI_URL=https://your-strapi` | Editing content in an admin panel; contact form messages are stored in Strapi |

Both modes use the same data shape (the Strapi REST response), so switching is only an environment variable.
In built-in mode, edit the JSON files to change content. Lower `order` values appear first.

The contact form needs Strapi to store messages. Without it, the form tells visitors to email instead.

## Environment

| Variable | Purpose |
| --- | --- |
| `STRAPI_URL` | Optional Strapi base URL, e.g. `https://cms.example.com` |
| `STRAPI_API_TOKEN` | Optional. Only needed if public API access is removed in Strapi |
| `REVALIDATE_SECRET` | Shared secret for the `/api/revalidate` webhook (Strapi mode) |
| `NEXT_PUBLIC_SITE_URL` | Public site URL used for metadata |

## Structure

```
app/
  page.tsx, about/, services/[slug]/, our-work/[slug]/, contact/
  not-found.tsx            custom 404
  actions/contact.ts       contact form Server Action → Strapi "Contact submission"
  api/revalidate/route.ts  Strapi webhook → revalidateTag()
  globals.css              Tailwind v4 theme (design tokens) + style layers
  styles/                  normalize, base primitives, component styles, widgets, motion, a11y
components/
  layout/                  header (top bar + nav), footer
  sections/                page sections, grouped by page; shared/ is used on several pages
  ui/                      slider, tabs, nav link, button label, CMS image, rich text renderer
  motion/in-view.tsx       scroll-triggered entrance animations
content/                   built-in services and works (JSON)
lib/
  strapi/                  typed client, cached queries (Strapi or built-in), content types
  site.ts                  site name, metadata defaults, navigation
```

## Styling

- **Design tokens** live in `app/globals.css` under `@theme`, so they're available both as CSS variables
  (`var(--color-primary)`) and as Tailwind utilities (`bg-primary`, `text-h2`, `p-main`, `max-w-main`).
  Breakpoints match the design: `sm` 480, `md` 768, `lg` 992, `xl` 1280, `2xl` 1440.
- **Component styles** (`app/styles/site.css`) are class-based CSS in the `components` layer. Tailwind utilities
  sit in a later layer and always override them, so one-off tweaks in JSX are easy.
- **Motion**: add `data-reveal="up"` (+ optional `data-delay="200|400|600|800"`) to any element for the
  fade/blur-up entrance used across the site. Timings are in `components/motion/in-view.tsx`.

## Deploying

Vercel: import the repository, no environment variables required. Set `NEXT_PUBLIC_SITE_URL` to the
production URL for correct social previews. With Strapi, also set `STRAPI_URL` (Strapi must be reachable
during the build) and `REVALIDATE_SECRET`.
