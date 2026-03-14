"use client";

import { useMemo, useState } from "react";
import { Camera, ScanLine } from "lucide-react";
import GlassCard from "@/components/ui/glass-card";
import SectionHeading from "@/components/ui/section-heading";
import { homepageContent } from "@/data/homepage-content";

export default function AISizingSection() {
  const [scanMode, setScanMode] = useState<"camera" | "upload">("camera");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const content = homepageContent.aiSizing;

  const progress = useMemo(() => {
    return scanMode === "camera" ? 76 : 91;
  }, [scanMode]);

  return (
    <section id="ai-size" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-8">
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />

          <div className="grid gap-4">
            {content.steps.map((step, idx) => (
              <GlassCard key={step.title} className="p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-200 bg-cyan-50 text-sm font-semibold text-cyan-700">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        <GlassCard className="p-6 md:p-8">
          <div className="grid gap-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-cyan-700">
                  {content.panel.eyebrow}
                </div>
                <div className="mt-1 text-2xl font-semibold text-slate-900">
                  {content.panel.title}
                </div>
              </div>
              <div className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs text-slate-600">
                {content.panel.badge}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-2">
              <button
                onClick={() => setScanMode("camera")}
                className={`rounded-2xl px-4 py-3 text-sm transition ${
                  scanMode === "camera"
                    ? "bg-white text-slate-950"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {content.panel.tabs.camera}
              </button>
              <button
                onClick={() => setScanMode("upload")}
                className={`rounded-2xl px-4 py-3 text-sm transition ${
                  scanMode === "upload"
                    ? "bg-white text-slate-950"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {content.panel.tabs.upload}
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm text-slate-600">
                  {content.form.nameLabel}
                </label>
                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder={content.form.namePlaceholder}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm outline-none placeholder:text-slate-500 focus:border-cyan-400/40"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-slate-600">
                  {content.form.emailLabel}
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={content.form.emailPlaceholder}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm outline-none placeholder:text-slate-500 focus:border-cyan-400/40"
                />
              </div>
            </div>

            <div className="rounded-3xl border border-dashed border-cyan-300 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_40%)] p-6">
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
                      ? content.scan.cameraTitle
                      : content.scan.uploadTitle}
                  </div>
                  <div className="mt-2 text-sm leading-7 text-slate-600">
                    {content.scan.description}
                  </div>
                </div>

                <button className="rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950">
                  {scanMode === "camera"
                    ? content.scan.cameraButton
                    : content.scan.uploadButton}
                </button>
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between text-xs text-slate-600">
                <span>{content.progress.label}</span>
                <span>{progress}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-linear-to-r from-cyan-400 via-blue-400 to-fuchsia-400 transition-all duration-700"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-slate-100 p-4">
                <div className="text-xs text-slate-600">
                  {content.results.recommendedLabel}
                </div>
                <div className="mt-2 text-xl font-semibold">
                  {content.results.recommendedValue}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-100 p-4">
                <div className="text-xs text-slate-600">
                  {content.results.thicknessLabel}
                </div>
                <div className="mt-2 text-xl font-semibold">
                  {content.results.thicknessValue}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-100 p-4">
                <div className="text-xs text-slate-600">
                  {content.results.confidenceLabel}
                </div>
                <div className="mt-2 text-xl font-semibold">
                  {content.results.confidenceValue}
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}