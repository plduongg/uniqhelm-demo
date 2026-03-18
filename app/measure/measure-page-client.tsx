"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GlassCard from "@/components/ui/glass-card";
import { homepageContent } from "@/data/homepage-content";

const stepImageMap = [
  "/images/ai-step-1.png",
  "/images/ai-step-2.png",
  "/images/ai-step-3.png",
];

export default function MeasurePageClient() {
  const [scanMode, setScanMode] = useState<"camera" | "upload">("upload");
  const [step, setStep] = useState(2);

  const content = homepageContent.aiSizing;

  const progress = useMemo(() => {
    if (scanMode === "camera") return 76;
    return 78;
  }, [scanMode]);

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <section className="grid items-start gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
                {content.eyebrow}
              </div>

              <h1 className="max-w-xl text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
                Discover <br /> a Smarter Way
                <br />
                to Find Your Fit
              </h1>

              <p className="max-w-xl text-base leading-8 text-slate-600">
                This page is designed as a dedicated AI sizing experience,
                helping users understand the process more clearly before moving
                toward the final fit recommendation.
              </p>
            </div>

            <div className="grid gap-4">
              {content.steps.map((item, idx) => (
                <GlassCard key={item.title} className="rounded-[1.25rem] p-4">
                  <div className="flex items-start gap-4">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                      <Image
                        src={stepImageMap[idx] ?? "/images/pic1.png"}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <div className="text-sm font-semibold text-slate-900">
                        0{idx + 1}. {item.title}
                      </div>
                      <p className="mt-1.5 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          <GlassCard className="overflow-hidden rounded-[2rem] p-0">
            <div className="border-b border-slate-200 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {content.panel.eyebrow}
                </div>

                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-700">
                  {content.panel.badge}
                </div>
              </div>
            </div>

            <div className="grid gap-6 p-6 md:p-8">
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-slate-900">
                  {content.panel.title}
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-2 rounded-xl border border-slate-200 bg-slate-50 p-1.5">
                <button
                  onClick={() => setScanMode("camera")}
                  className={`rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                    scanMode === "camera"
                      ? "bg-white text-slate-950 shadow-sm"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  Camera Scan
                </button>

                <button
                  onClick={() => setScanMode("upload")}
                  className={`rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                    scanMode === "upload"
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  Upload Image
                </button>
              </div>

              <div className="overflow-hidden rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-100">
                <div className="relative aspect-[1.45/0.78] w-full">
                  <Image
                    src="/images/ai-panel-demo.png"
                    alt="AI sizing demo visual"
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-slate-950/35" />

                  <div className="absolute left-1/2 top-1/2 flex w-[240px] -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-2xl bg-white/90 px-5 py-5 text-center shadow-lg backdrop-blur">
                    <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-cyan-200 bg-cyan-50 text-cyan-700">
                      <span className="text-lg font-bold">AI</span>
                    </div>

                    <div className="text-base font-semibold text-slate-900">
                      {scanMode === "camera"
                        ? content.scan.cameraTitle
                        : content.scan.uploadTitle}
                    </div>

                    <p className="mt-2 text-xs leading-6 text-slate-600">
                      Begin with a guided scan experience. Both camera-based
                      input and image upload can be demonstrated through this
                      interface.
                    </p>

                    <button className="mt-4 rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm ring-1 ring-slate-200">
                      Start Camera Scan
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
                  <span>Progress</span>
                  <span>{progress}%</span>
                </div>

                <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-linear-to-r from-cyan-400 via-blue-400 to-fuchsia-400 transition-all duration-700"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep((prev) => Math.max(1, prev - 1))}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </button>

                <button
                  onClick={() => setStep((prev) => Math.min(3, prev + 1))}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  Continue
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </GlassCard>
        </section>
      </div>
    </main>
  );
}