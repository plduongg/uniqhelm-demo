"use client";

import { useMemo, useState } from "react";
import { Camera, ScanLine, Brain, ArrowRight } from "lucide-react";
import GlassCard from "@/components/ui/glass-card";
import SectionHeading from "@/components/ui/section-heading";

export default function MeasurePageClient() {
  const [scanMode, setScanMode] = useState<"camera" | "upload">("camera");
  const [step, setStep] = useState(1);

  const progress = useMemo(() => {
    if (step === 1) return 25;
    if (step === 2) return 70;
    return 100;
  }, [step]);

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-20 text-slate-900 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="AI Measure"
          title="Measure your fit in a more modern way"
          description="This page is the dedicated AI sizing experience. Later, you can connect camera upload and inference API here."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {[
              "Choose scan mode",
              "Capture or upload images",
              "Get recommended liner size",
            ].map((label, index) => {
              const current = index + 1;
              const active = step === current;

              return (
                <GlassCard key={label} className="p-5">
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-2xl text-sm font-semibold ${
                        active
                          ? "bg-slate-900 text-white"
                          : "border border-slate-200 bg-slate-100 text-slate-600"
                      }`}
                    >
                      0{current}
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">{label}</div>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>

          <GlassCard className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-cyan-700">
                  AI sizing demo
                </div>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                  Interactive fitting panel
                </h2>
              </div>
              <Brain className="h-6 w-6 text-cyan-700" />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-2">
              <button
                onClick={() => setScanMode("camera")}
                className={`rounded-2xl px-4 py-3 text-sm transition ${
                  scanMode === "camera"
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                Camera
              </button>
              <button
                onClick={() => setScanMode("upload")}
                className={`rounded-2xl px-4 py-3 text-sm transition ${
                  scanMode === "upload"
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                Upload
              </button>
            </div>

            <div className="mt-6 rounded-3xl border border-dashed border-cyan-300 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_40%)] p-8">
              <div className="flex flex-col items-center justify-center gap-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-cyan-200 bg-cyan-50 text-cyan-700">
                  {scanMode === "camera" ? (
                    <Camera className="h-7 w-7" />
                  ) : (
                    <ScanLine className="h-7 w-7" />
                  )}
                </div>

                <div>
                  <div className="text-lg font-semibold text-slate-900">
                    {scanMode === "camera"
                      ? "Ready for camera-based scan"
                      : "Ready for image upload"}
                  </div>
                  <div className="mt-2 text-sm leading-7 text-slate-600">
                    This is the dedicated page where your AI measurement workflow
                    will live later.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="mb-2 flex items-center justify-between text-xs text-slate-600">
                <span>Progress</span>
                <span>{progress}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-linear-to-r from-cyan-400 via-blue-400 to-fuchsia-400 transition-all duration-700"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setStep((prev) => Math.max(1, prev - 1))}
                className="rounded-full border border-slate-200 px-5 py-3 text-sm text-slate-700"
              >
                Back
              </button>
              <button
                onClick={() => setStep((prev) => Math.min(3, prev + 1))}
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white"
              >
                Next
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </GlassCard>
        </div>
      </div>
    </main>
  );
}