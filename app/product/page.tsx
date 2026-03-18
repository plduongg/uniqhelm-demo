import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Layers3, ShieldCheck } from "lucide-react";
import GlassCard from "@/components/ui/glass-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product | UniqHelm",
  description:
    "Explore the PU Foam comfort liner and discover how UniqHelm enhances helmet fit, comfort, and overall riding experience.",
};

const materialPoints = [
  {
    icon: Layers3,
    title: "Silk-Like Texture",
    text: "A soft-touch surface designed to provide a smoother and more comfortable feel during extended wear.",
  },
  {
    icon: ShieldCheck,
    title: "High-Density PU Foam",
    text: "An advanced material that supports a more refined fit, improved stability, and enhanced everyday comfort.",
  },
];

const aiCards = [
  {
    step: "01",
    title: "Manual Measurement Input",
    image: "/images/product-ai-1.png",
  },
  {
    step: "02",
    title: "Data Analysis",
    image: "/images/product-ai-2.png",
  },
  {
    step: "03",
    title: "Tailored Production",
    image: "/images/product-ai-3.png",
  },
];

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-14">
        {/* Hero */}
        <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100">
          <div className="relative min-h-[300px] overflow-hidden md:min-h-[380px]">
            <Image
              src="/images/product-hero.png"
              alt="UniqHelm product hero"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/45" />

            <div className="absolute inset-0 flex items-center px-8 md:px-12">
              <div className="max-w-3xl text-white">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                  A Better Helmet Experience
                </div>

                <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                  Discover a New Level
                  <br />
                  of Comfort with{" "}
                  <span className="text-blue-300">UniqHelm</span>
                </h1>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 md:text-base">
                  From material innovation to sizing technology, every detail is
                  designed to deliver greater confidence, comfort, and everyday
                  usability for helmet users.
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

        {/* PU Foam section */}
        <section className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100">
            <div className="relative aspect-[1/1] w-full">
              <Image
                src="/images/product-foam.png"
                alt="PU Foam material"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
              Core Material
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
              PU Foam:
              <br />
              Engineered for Comfort
            </h2>

            <p className="max-w-2xl text-sm leading-8 text-slate-600 md:text-base">
              Designed to create a softer, more adaptive interior feel, this
              material helps deliver a more comfortable helmet-wearing
              experience over longer periods of use.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              {materialPoints.map((item) => {
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
        </section>

        {/* AI process */}
        <section className="space-y-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
              Technology Process
            </div>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
              AI-Powered Sizing, Made Simple
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
              In just a few simple steps, users can receive a more informed fit
              recommendation instead of relying on guesswork.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {aiCards.map((item) => (
              <GlassCard
                key={item.step}
                className="overflow-hidden rounded-[1.75rem] p-0"
              >
                <div className="relative aspect-[0.88/1.1] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-950/20" />

                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <div className="text-xl font-bold">{item.step}</div>
                    <div className="mt-1 text-base font-medium">{item.title}</div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="rounded-[2.5rem] bg-slate-100 px-6 py-12 md:px-10 md:py-14">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              More Than a Product Page
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
              Your website should feel like a complete product platform —
              combining material storytelling, measurement guidance, and brand
              trust — rather than just a basic product listing. That is what
              creates a more premium and professional brand experience.
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