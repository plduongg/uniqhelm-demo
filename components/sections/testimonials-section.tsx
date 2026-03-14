"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/glass-card";
import SectionHeading from "@/components/ui/section-heading";
import { homepageContent } from "@/data/homepage-content";

export default function TestimonialsSection() {
  const content = homepageContent.testimonials;

  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="space-y-10">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className="grid gap-4 md:grid-cols-3">
          {content.items.map((item, idx) => (
            <motion.div
              key={item.name + item.role}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
            >
              <GlassCard className="h-full p-6">
                <p className="text-sm leading-7 text-slate-700">
                  “{item.quote}”
                </p>

                <div className="mt-6">
                  <div className="text-sm font-semibold text-slate-900">
                    {item.name}
                  </div>
                  <div className="text-sm text-slate-500">{item.role}</div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}