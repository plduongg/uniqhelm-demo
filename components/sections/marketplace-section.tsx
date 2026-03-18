"use client";

import { useState } from "react";
import Image from "next/image";
import GlassCard from "@/components/ui/glass-card";

const marketplaces = ["Shopee", "Lazada", "TikTok Shop"];

const marketplaceLogoMap: Record<string, string> = {
  Shopee: "/images/pic1.png",
  Lazada: "/images/pic1.png",
  "TikTok Shop": "/images/pic1.png",
};

export default function MarketplaceSection() {
  const [selectedMarketplace, setSelectedMarketplace] = useState("Shopee");

  return (
    <section id="buy" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid items-start gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="space-y-5">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
            Where to buy
          </div>

          <h2 className="max-w-xl text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
            Website for product storytelling, marketplace for conversion.
          </h2>

          <p className="max-w-xl text-base leading-8 text-slate-600">
            This frontend helps users understand the product on the website before seamlessly directing them to E-Commerces.
          </p>
        </div>

        <GlassCard className="rounded-[1.75rem] p-4 md:p-5">
          <div className="space-y-5">
            <div className="grid grid-cols-3 gap-2 rounded-xl border border-slate-200 bg-slate-50 p-1.5">
              {marketplaces.map((market) => (
                <button
                  key={market}
                  onClick={() => setSelectedMarketplace(market)}
                  className={`rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                    selectedMarketplace === market
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {market}
                </button>
              ))}
            </div>

            <div className="border-t border-slate-200" />

            <div className="space-y-5 rounded-[1.5rem] bg-white p-2">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Selected channel
                  </div>

                  <div className="mt-2 text-3xl font-bold text-slate-900">
                    {selectedMarketplace} Mall
                  </div>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
                    ...
                  </p>
                </div>

                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-md border border-slate-200 bg-slate-50">
                  <Image
                    src={marketplaceLogoMap[selectedMarketplace] ?? "/images/logo.png"}
                    alt={selectedMarketplace}
                    fill
                    className="object-contain p-1.5"
                  />
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-700">
                    Official Store
                  </div>
                  <div className="mt-2 text-sm font-medium text-slate-700">
                    Verified
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-700">
                    Free Shipping
                  </div>
                  <div className="mt-2 text-sm font-medium text-slate-700">
                    Applied
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-700">
                    Cashback
                  </div>
                  <div className="mt-2 text-sm font-medium text-slate-700">
                    10% Off
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#"
                  className="inline-flex flex-1 items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  Go to {selectedMarketplace}
                </a>

                <a
                  href="#ai-size"
                  className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                >
                  Measure first
                </a>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}