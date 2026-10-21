import type { Metadata } from "next";
import { WorkList } from "@/components/sections/shared/work-list";

export const metadata: Metadata = { title: "Our Work" };

export default function OurWorkPage() {
  return (
    <main className="main-wrapper">
      <WorkList variant="page" />
    </main>
  );
}
