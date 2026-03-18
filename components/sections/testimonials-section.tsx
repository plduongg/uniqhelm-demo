"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import GlassCard from "@/components/ui/glass-card";
import { homepageContent } from "@/data/homepage-content";

const avatarMap = [
  "/images/avt.jpg",
  "/images/avt.jpg",
  "/images/avt.jpg",
];

export default function TestimonialsSection() {
  const content = homepageContent.testimonials;

  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="space-y-10">
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
            {content.eyebrow}
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            {content.title}
          </h2>

          <p className="max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
            {content.description}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {content.items.map((item, idx) => (
            <motion.div
              key={item.name + item.role}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
            >
              <GlassCard className="h-full rounded-[1.5rem] p-6">
                <div className="flex h-full flex-col justify-between">
                  <p className="text-base italic leading-8 text-slate-700">
                    “{item.quote}”
                  </p>

                  <div className="mt-8 flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full border border-slate-200 bg-slate-100">
                      <Image
                        src={avatarMap[idx] ?? "/images/logo.png"}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <div className="text-sm font-semibold text-slate-900">
                        {item.name}
                      </div>
                      <div className="text-xs text-slate-500">{item.role}</div>
                    </div>
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