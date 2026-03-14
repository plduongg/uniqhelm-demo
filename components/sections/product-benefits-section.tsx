"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Gauge, Layers3, Sparkles } from "lucide-react";
import GlassCard from "@/components/ui/glass-card";
import SectionHeading from "@/components/ui/section-heading";

const benefitItems = [
  {
    icon: Layers3,
    title: "Softer long-wear experience",
    description:
      "Designed to improve comfort during long rides, daily commuting, and continuous helmet use.",
  },
  {
    icon: Gauge,
    title: "More refined fit feeling",
    description:
      "Supports a more stable and premium-feeling interior fit through thickness options.",
  },
  {
    icon: Sparkles,
    title: "More premium product story",
    description:
      "Helps position the brand as a comfort-tech innovation instead of a simple accessory.",
  },
  {
    icon: CheckCircle2,
    title: "A modern recommendation flow",
    description:
      "AI sizing creates a more guided and confidence-driven user experience before purchase.",
  },
];

export default function ProductBenefitsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="space-y-10">
        <SectionHeading
          eyebrow="Benefits"
          title="Why visitors should care within the first 10 seconds"
          description="A strong website should explain not just what the product is, but why it matters immediately."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {benefitItems.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <GlassCard className="h-full p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}