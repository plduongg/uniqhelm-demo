import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";
import GlassCard from "@/components/ui/glass-card";

export default function FinalCTASection() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <GlassCard className="grid gap-6 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-10">
        <div>
          <div className="inline-flex items-center rounded-full border border-fuchsia-200 bg-fuchsia-50 px-3 py-1 text-xs uppercase tracking-[0.2em] text-fuchsia-700">
            Ready to explore
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Turn product interest into real action
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
            Let visitors understand the product, explore AI sizing, and then move
            naturally to your marketplace channel when they are ready to buy.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-3 sm:flex-row md:flex-col">
          <Link
            href="/measure"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Try AI Sizing
            <ArrowRight className="h-4 w-4" />
          </Link>

          <a
            href="/#buy"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm text-slate-700 transition hover:bg-slate-100"
          >
            Buy on Marketplace
            <ShoppingBag className="h-4 w-4" />
          </a>
        </div>
      </GlassCard>
    </section>
  );
}