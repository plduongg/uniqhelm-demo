"use client";

import { motion } from "framer-motion";
import { Check, Settings, BadgeCheck, Headphones } from "lucide-react";
import { homepageContent } from "@/data/homepage-content";

const iconMap = [Check, Settings, BadgeCheck, Headphones];

export default function ProductBenefitsSection() {
  const content = homepageContent.productBenefits;

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="space-y-14">
        <div className="mx-auto max-w-4xl text-center">
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

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {content.items.map((item, idx) => {
            const Icon = iconMap[idx];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center text-cyan-700">
                  <Icon className="h-10 w-10 stroke-[1.8]" />
                </div>

                <h3 className="mx-auto mt-5 max-w-[220px] text-2xl font-semibold leading-tight text-slate-900">
                  {item.title}
                </h3>

                <p className="mx-auto mt-4 max-w-[240px] text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}