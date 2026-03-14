"use client";

import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import GlassCard from "@/components/ui/glass-card";
import SectionHeading from "@/components/ui/section-heading";

const marketplaces = ["Shopee", "Lazada", "TikTok Shop"];

export default function MarketplaceSection() {
  const [selectedMarketplace, setSelectedMarketplace] = useState("Shopee");

  return (
    <section id="buy" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionHeading
          eyebrow="Where to Buy"
          title="Website giới thiệu, marketplace chốt đơn"
          description="Frontend này được thiết kế để người dùng hiểu sản phẩm trên web, sau đó được điều hướng mượt mà sang Shopee, Lazada hoặc đối tác bán lẻ khác."
        />

        <GlassCard className="p-6 md:p-8">
          <div className="grid gap-4">
            <div className="grid grid-cols-3 gap-3">
              {marketplaces.map((market) => (
                <button
                  key={market}
                  onClick={() => setSelectedMarketplace(market)}
                  className={`rounded-2xl px-4 py-3 text-sm transition ${
                    selectedMarketplace === market
                      ? "bg-white text-slate-950"
                      : "border border-slate-200 bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {market}
                </button>
              ))}
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-600">
                    Selected channel
                  </div>
                  <div className="mt-2 text-2xl font-semibold text-slate-900">
                    {selectedMarketplace}
                  </div>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
                    Đây là nơi bạn đặt link outbound, tracking UTM, CTA mua
                    hàng, combo khuyến mãi hoặc badge của sàn.
                  </p>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-3xl border border-slate-200 bg-slate-100 text-slate-900">
                  <ShoppingBag className="h-6 w-6" />
                </div>
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-100 p-4 text-sm text-slate-600">
                  Official store routing
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-100 p-4 text-sm text-slate-600">
                  Campaign tracking
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-100 p-4 text-sm text-slate-600">
                  Product bundle CTA
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#"
                  className="rounded-full bg-white px-5 py-3 text-center text-sm font-medium text-slate-950 transition hover:opacity-90"
                >
                  Go to {selectedMarketplace}
                </a>

                <a
                  href="#ai-size"
                  className="rounded-full border border-slate-200 px-5 py-3 text-center text-sm text-slate-700 transition hover:bg-slate-100"
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