import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { homepageContent } from "@/data/homepage-content";

export default function FinalCTASection() {
  const content = homepageContent.finalCta;

  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="rounded-[2.5rem] bg-slate-100 px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
            {content.eyebrow}
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            {content.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
            {content.description}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/measure"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              {content.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="/#buy"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              {content.secondaryCta}
              <ShoppingBag className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}