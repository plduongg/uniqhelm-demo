"use client";

import { motion } from "framer-motion";
import { BadgeCheck, ChevronRight } from "lucide-react";
import GlassCard from "@/components/ui/glass-card";
import SectionHeading from "@/components/ui/section-heading";
import { homepageContent } from "@/data/homepage-content";

export default function CertificatesSection() {
  const content = homepageContent.certificates;

  return (
    <section
      id="certificates"
      className="mx-auto max-w-7xl px-6 py-20 lg:px-8"
    >
      <div className="space-y-10">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className="grid gap-4 md:grid-cols-3">
          {content.items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <GlassCard className="h-full p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 text-emerald-700">
                  <BadgeCheck className="h-5 w-5" />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                <a
                  href={item.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm text-cyan-700 transition hover:text-cyan-800"
                >
                  {content.ctaLabel}
                  <ChevronRight className="h-4 w-4" />
                </a>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}