"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/section-heading";
import GlassCard from "@/components/ui/glass-card";
import { homepageContent } from "@/data/homepage-content";

const imageMap = [
  "/images/pic1.png",
  "/images/pic1.png",
  "/images/pic1.png",
];

export default function ProductStorySection() {
  const content = homepageContent.productStory;

  return (
    <section id="product" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="space-y-12">
        <div className="mx-auto max-w-4xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
            {content.eyebrow}
          </div>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            {content.title}
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
            {content.description}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {content.features.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard className="h-full overflow-hidden rounded-[2rem] p-0">
                <div className="relative aspect-[1.25/0.9] w-full overflow-hidden">
                  <Image
                    src={imageMap[idx] ?? "/images/pic1.png"}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  {item.subtitle && (
                    <div className="mt-1 text-sm font-medium text-slate-500">
                      {item.subtitle}
                    </div>
                  )}

                  <p className="mx-auto mt-4 max-w-xs text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}