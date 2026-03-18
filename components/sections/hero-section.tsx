"use client";

import { motion } from "framer-motion";
import { ArrowRight, Brain, Play } from "lucide-react";
import Image from "next/image";
import GlassCard from "@/components/ui/glass-card";
import { homepageContent } from "@/data/homepage-content";

function HeroProductVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="relative mx-auto w-full max-w-xl"
    >
      <div className="absolute -left-8 top-12 h-36 w-36 rounded-full bg-cyan-200/45 blur-3xl" />
      <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-fuchsia-200/40 blur-3xl" />
      <div className="absolute bottom-[8%] left-[28%] h-36 w-36 rounded-full bg-pink-200/30 blur-3xl" />

      <div className="relative aspect-[4/4.2] w-full">
        <Image
          src="/images/pic1.png"
          alt="UniqHelm product visual"
          fill
          priority
          className="object-contain scale-[1.1]"
        />
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const content = homepageContent.hero;
  const metrics = homepageContent.metrics;

  return (
    <section id="top" className="relative">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <div className="space-y-8">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="space-y-5"
          >
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 md:text-6xl">
              {content.titlePrefix}{" "}
              <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-fuchsia-600 bg-clip-text text-transparent">
                {content.highlight}
              </span>{" "}
              {content.titleSuffix}
            </h1>

            <p className="max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              {content.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#ai-size"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              {content.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#product"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm text-slate-700 transition hover:bg-slate-100"
            >
              {content.secondaryCta}
              <Play className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {metrics.map((item) => (
              <GlassCard key={item.label} className="p-4">
                <div className="text-xl font-semibold text-slate-900 md:text-2xl">
                  {item.value}
                </div>
                <div className="mt-1 text-xs leading-5 text-slate-600">
                  {item.label}
                </div>
              </GlassCard>
            ))}
          </motion.div>
        </div>

        <div className="relative">
          <HeroProductVisual />
        </div>
      </div>
    </section>
  );
}