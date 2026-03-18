import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Brain, ShieldCheck, Sparkles, Target } from "lucide-react";
import GlassCard from "@/components/ui/glass-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | UniqHelm",
  description:
    "Learn the story, mission, and comfort-tech vision behind the UniqHelm brand.",
};

const problemBlocks = [
  {
    icon: Sparkles,
    title: "The problem",
    text: "Many helmet users wear their helmets for extended periods yet still accept pressure, discomfort, and headaches as a normal part of the experience.",
  },
  {
    icon: Target,
    title: "The mission",
    text: "UniqHelm was created to deliver a more comfortable, refined, and intentional helmet-wearing experience for everyday users.",
  },
  {
    icon: ShieldCheck,
    title: "The trust layer",
    text: "Material transparency, compatibility guidance, and clear certification references help customers feel informed and confident before purchasing.",
  },
  {
    icon: Brain,
    title: "The innovation layer",
    text: "AI sizing transforms a simple accessory decision into a more guided, modern, and reliable user experience.",
  },
];

const aiPoints = [
  "Explain why AI is more than a marketing effect",
  "Show how the scan flow works and how results are presented",
  "Create a strong foundation for integrating a real model later",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-14">
        {/* Hero */}
        <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100">
          <div className="relative min-h-[290px] overflow-hidden md:min-h-[360px]">
            <Image
              src="/images/about1.png"
              alt="UniqHelm about hero"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/40" />

            <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
              <div className="max-w-3xl text-white">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                  Brand Story
                </div>

                <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
                  The Mission of{" "}
                  <span className="text-blue-300">UniqHelm</span>
                </h1>

                <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-200 md:text-base">
                  We are not simply building an accessory for helmets. We aim to
                  elevate the helmet-wearing experience through better comfort,
                  improved fit, and smarter technology-assisted selection.
                </p>

                <div className="mt-6">
                  <Link
                    href="/measure"
                    className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
                  >
                    Open AI Sizing
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem / mission section */}
        <section className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
                Brand Story
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
                The Problem We Set Out to Solve
              </h2>
            </div>

            <div className="grid gap-4">
              {problemBlocks.map((item) => {
                const Icon = item.icon;

                return (
                  <GlassCard key={item.title} className="rounded-[1.5rem] p-5">
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-200 bg-cyan-50 text-cyan-700">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="text-base font-semibold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-7 text-slate-600">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <GlassCard className="rounded-[2rem] p-6">
              <div className="grid grid-cols-[1.05fr_0.95fr] gap-5">
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
                        src="/images/brand1.jpg"
                        alt="Product detail visual 1"
                        fill
                        className="object-contain scale-90"
                      />
                    </div>

                    <div className="relative aspect-square w-full">
                      <Image
                        src="/images/brand2.jpg"
                        alt="Product detail visual 2"
                        fill
                        className="object-contain scale-90"
                      />
                    </div>
                  </div>

                  <div className="relative aspect-[1/1.05] w-full">
                    <Image
                      src="/images/pic2.png"
                      alt="Helmet use visual"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* AI innovation section */}
        <section className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100">
            <div className="relative aspect-[1.15/0.95] w-full">
              <Image
                src="/images/about2.png"
                alt="AI innovation visual"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-5">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
              Innovation
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Technology &amp; AI Innovation
            </h2>

            <p className="max-w-2xl text-sm leading-8 text-slate-600 md:text-base">
              We use AI as a supportive technology layer to make liner selection
              clearer, more modern, and more reliable. The goal is not to create
              a visual gimmick, but to help users make a more confident decision
              before purchase.
            </p>

            <div className="space-y-3">
              {aiPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-cyan-600" />
                  <p className="text-sm leading-7 text-slate-700">{point}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/measure"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
              >
                View More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="rounded-[2.5rem] bg-slate-100 px-6 py-12 md:px-10 md:py-14">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              More than a product page
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
              The website should feel like a startup brand platform where
              product, story, measurement, trust, and emotional connection work
              together. That is what makes customers remember the brand rather
              than see it as just another simple accessory.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/measure"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Try AI Sizing
              </Link>

              <Link
                href="/#buy"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
              >
                Buy on Marketplace
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}