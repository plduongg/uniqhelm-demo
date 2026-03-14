"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Brain } from "lucide-react";
import GlassCard from "@/components/ui/glass-card";
import SectionHeading from "@/components/ui/section-heading";

const storyPoints = [
  {
    icon: Sparkles,
    title: "Born from a real discomfort problem",
    description:
      "Helmet users often experience pressure, discomfort, and unstable fit during long wear.",
  },
  {
    icon: ShieldCheck,
    title: "Built around comfort and trust",
    description:
      "The product story focuses on material quality, compatibility, and confidence through certificates.",
  },
  {
    icon: Brain,
    title: "Made smarter with AI sizing",
    description:
      "Instead of guessing thickness manually, users can experience a more modern recommendation flow.",
  },
];

export default function BrandStoryPreviewSection() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="relative z-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative z-20">
          <SectionHeading
            eyebrow="Brand Story"
            title="A comfort-tech brand for the next generation of helmet users"
            description="This section helps your homepage feel like a real startup website, not just a product demo. It gives visitors context, mission, and emotional connection."
          />
        </div>

        <div className="relative z-20 grid gap-4">
          {storyPoints.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-200 bg-cyan-50 text-cyan-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}

          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Explore Brand Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}