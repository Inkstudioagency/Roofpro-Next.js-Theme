import { About } from "@/components/sections/home/about";
import { Expertise } from "@/components/sections/home/expertise";
import { Faq } from "@/components/sections/home/faq";
import { Hero } from "@/components/sections/home/hero";
import { Logos } from "@/components/sections/home/logos";
import { Testimonials } from "@/components/sections/home/testimonials";
import { WhyChoose } from "@/components/sections/home/why-choose";
import { ContactCta } from "@/components/sections/shared/contact-cta";
import { Process } from "@/components/sections/shared/process";
import { ServiceList } from "@/components/sections/shared/service-list";
import { WorkList } from "@/components/sections/shared/work-list";

export default function HomePage() {
  return (
    <main className="main-wrapper">
      <Hero />
      <Logos />
      <ServiceList />
      <About />
      <Expertise />
      <Process />
      <WhyChoose />
      <WorkList />
      <Testimonials />
      <Faq />
      <ContactCta />
    </main>
  );
}
