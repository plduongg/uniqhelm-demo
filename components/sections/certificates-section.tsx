"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import GlassCard from "@/components/ui/glass-card";
import { homepageContent } from "@/data/homepage-content";

const imageMap = [
  "/images/cert1.png",
  "/images/cert2.png",
  "/images/cert3.png",
];

export default function CertificatesSection() {
  const content = homepageContent.certificates;

  return (
    <section
      id="certificates"
      className="mx-auto max-w-7xl px-6 py-20 lg:px-8"
    >
      <div className="space-y-12">
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

        <div className="grid gap-5 md:grid-cols-3">
          {content.items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <GlassCard className="h-full overflow-hidden rounded-[1.75rem] p-0">
                <div className="p-4 pb-0">
                  <div className="relative aspect-[1.45/0.62] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                    <Image
                      src={imageMap[idx] ?? "/images/pic1.png"}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="p-6 pt-5">
                  <h3 className="text-2xl font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <a
                    href={item.href}
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                  >
                    {content.ctaLabel}
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}