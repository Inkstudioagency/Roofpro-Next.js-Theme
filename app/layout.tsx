import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { InView } from "@/components/motion/in-view";
import { site } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { type: "website", title: site.title, description: site.description, images: "/images/og-image.jpg" },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: "/images/og-image.jpg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={manrope.variable} suppressHydrationWarning>
      <head>
        {/* lets motion.css hide reveal targets only when JS can reveal them again */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <div className="page-wrapper">
          <Header />
          {children}
          <Footer />
        </div>
        <InView />
      </body>
    </html>
  );
}
