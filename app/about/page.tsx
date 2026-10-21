import type { Metadata } from "next";
import { AboutBreadcrumb } from "@/components/sections/about/breadcrumb";
import { CoreValues } from "@/components/sections/about/core-values";
import { OurPurpose } from "@/components/sections/about/our-purpose";
import { OurStory } from "@/components/sections/about/our-story";
import { OurTeam } from "@/components/sections/about/our-team";
import { ProcessSteps } from "@/components/sections/about/process-steps";
import { ProjectResult } from "@/components/sections/shared/project-result";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="main-wrapper">
      <AboutBreadcrumb />
      <OurStory />
      <OurPurpose />
      <ProjectResult />
      <CoreValues />
      <OurTeam />
      <ProcessSteps />
    </main>
  );
}
