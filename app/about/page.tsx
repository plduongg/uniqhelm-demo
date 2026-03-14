import Link from "next/link";
import { ArrowRight, Brain, ShieldCheck, Sparkles, Target } from "lucide-react";
import GlassCard from "@/components/ui/glass-card";
import SectionHeading from "@/components/ui/section-heading";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | UniqHelm",
  description:
    "Learn the story, mission, and comfort-tech vision behind the UniqHelm brand.",
};

const storyBlocks = [
  {
    icon: Sparkles,
    title: "The problem",
    text: "Many helmet users wear their helmets for long periods and still accept discomfort, pressure, and imperfect fit as normal.",
  },
  {
    icon: Target,
    title: "The mission",
    text: "UniqHelm exists to make the helmet-wearing experience more comfortable, more refined, and more thoughtfully designed.",
  },
  {
    icon: ShieldCheck,
    title: "The trust layer",
    text: "Material explanation, compatibility guidance, and certifications help visitors feel safe and informed.",
  },
  {
    icon: Brain,
    title: "The innovation layer",
    text: "AI sizing turns a simple accessory choice into a more modern, data-guided user experience.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-20 text-slate-900 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-12">
        <SectionHeading
          eyebrow="About / Brand Story"
          title="Building a helmet comfort brand with technology at its core"
          description="This page helps people understand why the brand exists, what problem it solves, and why the product feels different from a generic helmet accessory."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {storyBlocks.map((item) => {
            const Icon = item.icon;

            return (
              <GlassCard key={item.title} className="p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </GlassCard>
            );
          })}
        </div>

        <GlassCard className="p-8 md:p-10">
          <h2 className="text-2xl font-semibold md:text-3xl">
            More than a product page
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
            The website should feel like a real startup brand platform: product,
            story, proof, measurement, and action all connected together.
            That is what makes visitors remember the brand instead of treating it
            like a commodity.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/product"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:opacity-90"
            >
              View Product
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/measure"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm text-slate-200 transition hover:bg-slate-100"
            >
              Try AI Sizing
            </Link>
          </div>
        </GlassCard>
      </div>
    </main>
  );
}