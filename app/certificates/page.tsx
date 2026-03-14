import GlassCard from "@/components/ui/glass-card";
import SectionHeading from "@/components/ui/section-heading";
import { BadgeCheck, FileText } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificates | UniqHelm",
  description:
    "Explore validation, material safety, and trust-building documentation for the UniqHelm product.",
};

const certificateItems = [
  {
    title: "Material Safety",
    description:
      "Documentation related to material validation, origin, and safety references.",
  },
  {
    title: "Product Validation",
    description:
      "Internal or external evaluation showing how the liner performs in fit and comfort contexts.",
  },
  {
    title: "Manufacturing Quality",
    description:
      "Quality control, production process, and manufacturing assurance materials.",
  },
];

export default function CertificatesPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-20 text-slate-900 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="Certificates"
          title="Trust is built through clarity, not just documents"
          description="Use this page to present every certificate in a readable and trustworthy format instead of only uploading raw files."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {certificateItems.map((item) => (
            <GlassCard key={item.title} className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                <BadgeCheck className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
              <button className="mt-5 inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700">
                View document
                <FileText className="h-4 w-4" />
              </button>
            </GlassCard>
          ))}
        </div>
      </div>
    </main>
  );
}