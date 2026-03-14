import SectionHeading from "@/components/ui/section-heading";
import GlassCard from "@/components/ui/glass-card";
import { CheckCircle2, Layers3, ShieldCheck, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product | UniqHelm",
  description:
    "Explore the PU Foam comfort liner and understand how UniqHelm improves helmet fit experience.",
};

const features = [
  {
    title: "Comfort for long wear",
    text: "Designed for users who wear helmets for extended periods, helping improve comfort and reduce pressure points.",
  },
  {
    title: "Better interior fit",
    text: "Supports a more stable and refined fit experience inside the helmet through liner thickness options.",
  },
  {
    title: "PU Foam material advantage",
    text: "PU Foam helps create a softer, more adaptive and premium-feeling liner experience.",
  },
];

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-20 text-slate-900 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-12">
        <SectionHeading
          eyebrow="Product"
          title="A smarter comfort layer for helmet users"
          description="This page explains the product more deeply: the material story, the comfort value, and why AI sizing helps users choose better."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((item) => (
            <GlassCard key={item.title} className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
            </GlassCard>
          ))}
        </div>

        <section id="materials" className="grid gap-6 lg:grid-cols-2">
          <GlassCard className="p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 text-slate-700">
              <Layers3 className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-2xl font-semibold">Material Story</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Instead of only naming the material, the website should explain the
              user benefit clearly: softer contact, improved long-wear comfort,
              and a more premium interior feel.
            </p>
          </GlassCard>

          <GlassCard className="p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 text-slate-700">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-2xl font-semibold">Safety & Trust</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Add clear usage notes, compatibility information, fitting guidance,
              and links to certificates so the product feels trustworthy and
              transparent.
            </p>
          </GlassCard>
        </section>

        <GlassCard className="p-8">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-cyan-300" />
            <h3 className="text-2xl font-semibold">Why this product is different</h3>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
            Most users guess liner fit manually. Your website should position this
            product as a comfort-tech solution with AI-assisted sizing, making the
            experience feel more modern, more reliable, and more premium.
          </p>
        </GlassCard>
      </div>
    </main>
  );
}