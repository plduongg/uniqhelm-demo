"use client";

import { motion } from "framer-motion";
import { CircleHelp } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import { homepageContent } from "@/data/homepage-content";

export default function FAQSection() {
  const content = homepageContent.faq;

  return (
    <section id="faq" className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
      <div className="space-y-10">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className="space-y-4">
          {content.items.map((item, idx) => (
            <motion.details
              key={item.q}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="group rounded-3xl border border-slate-200 bg-slate-50 p-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                <span className="text-base font-medium text-slate-900">
                  {item.q}
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 text-slate-600 transition group-open:rotate-45">
                  <CircleHelp className="h-4 w-4" />
                </div>
              </summary>

              <p className="mt-4 pr-12 text-sm leading-7 text-slate-600">
                {item.a}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}