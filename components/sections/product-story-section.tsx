"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import GlassCard from "@/components/ui/glass-card";
import { homepageContent } from "@/data/homepage-content";

export default function ProductStorySection() {
  const content = homepageContent.productStory;

  return (
    <section id="product" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className="grid gap-4">
          {content.features.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard className="p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 text-slate-700">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}