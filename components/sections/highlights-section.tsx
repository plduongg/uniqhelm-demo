"use client";

import { motion } from "framer-motion";
import { Brain, Gauge, Layers3 } from "lucide-react";
import GlassCard from "@/components/ui/glass-card";
import { homepageContent } from "@/data/homepage-content";

const iconMap = [Layers3, Gauge, Brain];

export default function HighlightsSection() {
  const highlights = homepageContent.highlights;

  return (
    <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
      <GlassCard className="grid gap-6 p-6 md:grid-cols-3 md:p-8">
        {highlights.map((item, idx) => {
          const Icon = iconMap[idx];

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-200 bg-cyan-50 text-cyan-700">
                <Icon className="h-5 w-5" />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </GlassCard>
    </section>
  );
}