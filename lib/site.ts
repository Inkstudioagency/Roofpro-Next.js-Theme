/** Site-wide settings shared by the header, footer and metadata. */
export const site = {
  name: "RoofPro",
  title: "RoofPro - Roofing Services Website Template",
  description:
    "RoofPro Services is a modern and professional roofing service website template designed for roofing companies, contractors, and construction businesses. Showcase your roofing services and grow your business with a clean and trustworthy design.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  /** demo entries linked from the "Pages" dropdown */
  demoServiceSlug: "residential-roofing",
  demoWorkSlug: "families-and-individuals-who-want-secure-long-lasting-roofs",
};

export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/our-work", label: "Our work" },
];

export const pagesNav = [
  {
    title: "Main Pages",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/services", label: "Services" },
      { href: "/our-work", label: "Our Work" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Other Pages",
    links: [
      { href: `/services/${site.demoServiceSlug}`, label: "Service Details" },
      { href: `/our-work/${site.demoWorkSlug}`, label: "Work Details" },
      { href: "/not-found", label: "Not Found" },
    ],
  },
];
