"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { homepageContent } from "@/data/homepage-content";

export default function FAQSection() {
  const content = homepageContent.faq;

  return (
    <section id="faq" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
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

        <div className="space-y-0 border-t border-slate-200">
          {content.items.map((item, idx) => (
            <motion.details
              key={item.q}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              open={idx === 0}
              className="group border-b border-slate-200"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left">
                <span className="pr-6 text-xl font-semibold text-slate-900 md:text-xl">
                  {item.q}
                </span>

                <div className="shrink-0 text-slate-500 transition group-open:rotate-180">
                  <ChevronDown className="h-5 w-5" />
                </div>
              </summary>

              <div className="pb-5 pr-10">
                <p className="max-w-5xl text-sm leading-8 text-slate-600 md:text-base">
                  {item.a}
                </p>
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}