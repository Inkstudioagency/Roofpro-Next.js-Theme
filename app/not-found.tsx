import type { Metadata } from "next";
import { NotFoundContent } from "@/components/sections/utility/not-found-content";

export const metadata: Metadata = { title: "Not Found" };

export default function NotFound() {
  return <NotFoundContent />;
}
