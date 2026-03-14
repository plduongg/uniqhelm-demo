"use client";

import { motion } from "framer-motion";
import { ArrowRight, Brain, Camera, Play } from "lucide-react";
import GlassCard from "@/components/ui/glass-card";
import { homepageContent } from "@/data/homepage-content";

function FakePhoneMockup() {
  const content = homepageContent.hero.mockup;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="relative mx-auto w-full max-w-sm"
    >
      <div className="absolute inset-0 rounded-[2.5rem] bg-cyan-200/70 blur-2xl" />
      <div className="relative rounded-[2.5rem] border border-slate-200 bg-slate-50/90 p-3 shadow-2xl shadow-slate-300/40">
        <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-4">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-xs text-slate-500">{content.eyebrow}</div>
              <div className="text-sm font-medium text-slate-900">
                {content.title}
              </div>
            </div>
            <div className="rounded-full border border-cyan-200 bg-cyan-50 px-2 py-1 text-[10px] font-medium text-cyan-700">
              {content.live}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-4">
            <div className="aspect-[4/5] rounded-[1.25rem] border border-dashed border-cyan-300 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_40%),linear-gradient(180deg,rgba(248,250,252,1),rgba(240,249,255,1))]">
              <div className="flex h-full flex-col items-center justify-center gap-4">
                <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-slate-200 bg-slate-50">
                  <Camera className="h-8 w-8 text-cyan-600" />
                  <div className="absolute inset-2 rounded-full border border-cyan-300" />
                </div>

                <div className="text-center">
                  <div className="text-sm font-medium text-slate-900">
                    {content.alignmentTitle}
                  </div>
                  <div className="mt-1 text-xs text-slate-500">
                    {content.alignmentDescription}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <div className="text-slate-500">{content.predictedSize}</div>
                <div className="mt-1 text-base font-semibold text-slate-900">
                  {content.predictedValue}
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <div className="text-slate-500">{content.confidence}</div>
                <div className="mt-1 text-base font-semibold text-slate-900">
                  {content.confidenceValue}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[10px]">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-2 text-slate-500">
              {content.capture}
            </div>
            <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-2 text-cyan-700">
              {content.analyze}
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-2 text-slate-500">
              {content.result}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const content = homepageContent.hero;
  const metrics = homepageContent.metrics;

  return (
    <section id="top" className="relative">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-medium text-cyan-700"
          >
            <Brain className="h-4 w-4" />
            {content.badge}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="space-y-6"
          >
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-slate-900 md:text-7xl">
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
          <FakePhoneMockup />
        </div>
      </div>
    </section>
  );
}