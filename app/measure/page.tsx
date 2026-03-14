import type { Metadata } from "next";
import MeasurePageClient from "./measure-page-client";

export const metadata: Metadata = {
  title: "AI Measure | UniqHelm",
  description:
    "Try the AI sizing experience and discover a smarter way to choose your helmet liner fit.",
};

export default function MeasurePage() {
  return <MeasurePageClient />;
}