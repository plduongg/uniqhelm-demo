"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { homepageContent } from "@/data/homepage-content";

export default function ImplementationProcessSection() {
  const content = homepageContent.implementationProcess;

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="space-y-16">
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

        <div className="space-y-14">
          {content.items.map((item, idx) => {
            const isTextLeft = idx % 2 === 0;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="grid items-center gap-8 lg:grid-cols-2"
              >
                <div className={isTextLeft ? "order-1" : "order-2 lg:order-2"}>
                  <div className="max-w-xl">
                    {item.eyebrow && (
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
                        {item.eyebrow}
                      </div>
                    )}

                    <h3 className="mt-2 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-8 text-slate-600 md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className={isTextLeft ? "order-2" : "order-1 lg:order-1"}>
                  <div className="relative aspect-[1.45/0.78] w-full overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}