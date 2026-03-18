"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Brain, ShieldCheck, Sparkles } from "lucide-react";
import GlassCard from "@/components/ui/glass-card";
import { homepageContent } from "@/data/homepage-content";

const iconMap = [Sparkles, ShieldCheck, Brain];

function BrandStoryVisual() {
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className="grid grid-cols-[1.1fr_0.9fr] gap-5">
        <div className="space-y-5">
          <div className="relative aspect-[0.95/1.15] w-full">
            <Image
              src="/images/pic1.png"
              alt="Helmet liner visual"
              fill
              className="object-contain"
            />
          </div>

          <div className="w-20 md:w-24">
            <Image
              src="/images/logo.png"
              alt="UniqHelm logo"
              width={96}
              height={32}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col justify-start gap-5 pt-2">
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-square w-full">
              <Image
                src="/images/pic1.png"
                alt="Product detail visual 1"
                fill
                className="object-contain scale-90"
              />
            </div>

            <div className="relative aspect-square w-full">
              <Image
                src="/images/pic1.png"
                alt="Product detail visual 2"
                fill
                className="object-contain scale-90"
              />
            </div>
          </div>

          <div className="relative aspect-[1/1.05] w-full">
            <Image
              src="/images/pic1.png"
              alt="Helmet use visual"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BrandStoryPreviewSection() {
  const content = homepageContent.brandStory;

  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="order-2 lg:order-1"
        >
          <BrandStoryVisual />
        </motion.div>

        <div className="order-1 space-y-6 lg:order-2">
          <div className="space-y-4">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
              {content.eyebrow}
            </div>

            <h2 className="max-w-xl text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
              {content.title}
            </h2>

            <p className="max-w-xl text-base leading-8 text-slate-600">
              {content.description}
            </p>
          </div>

          <div className="space-y-4">
            {content.points.map((item, idx) => {
              const Icon = iconMap[idx];

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                >
                  <GlassCard className="rounded-2xl p-5">
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-200 bg-cyan-50 text-cyan-700">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="text-base font-semibold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-7 text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>

          <div className="pt-1">
            <Link
              href="/#buy"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Buy on E-Commerces
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}