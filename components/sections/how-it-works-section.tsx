"use client";

import { motion } from "framer-motion";
import { MessageSquareMore, Crosshair, ShoppingCart } from "lucide-react";
import GlassCard from "@/components/ui/glass-card";
import { homepageContent } from "@/data/homepage-content";

const iconMap = [MessageSquareMore, Crosshair, ShoppingCart];

export default function HowItWorksSection() {
  const content = homepageContent.howItWorks;

  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="space-y-12">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
            {content.eyebrow}
          </div>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            {content.title}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
            {content.description}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {content.steps.map((item, idx) => {
            const Icon = iconMap[idx];

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <GlassCard className="h-full rounded-[2rem] p-10 text-center">
                  <div className="flex flex-col items-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-200 bg-cyan-50 text-cyan-700">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
                      Step {idx + 1}
                    </div>

                    <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-xs text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}