import Image from "next/image";
import { FileText } from "lucide-react";
import GlassCard from "@/components/ui/glass-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificates | UniqHelm",
  description:
    "Explore product validation, material safety, and trust-building documentation behind UniqHelm.",
};

const certificateItems = [
  {
    title: "Material Safety",
    description:
      "Documentation that highlights material standards, safety considerations, and verified sourcing behind the product.",
    image: "/images/cert1.png",
    href: "#",
  },
  {
    title: "Product Validation",
    description:
      "A dedicated area for internal testing, technical standards, inspection reports, and fit-related data that support product credibility.",
    image: "/images/cert2.png",
    href: "#",
  },
  {
    title: "Manufacturing Quality",
    description:
      "An overview of production processes, quality control practices, and manufacturing capabilities where applicable.",
    image: "/images/cert3.png",
    href: "#",
  },
];

export default function CertificatesPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="mx-auto max-w-4xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
            Certifications & Trust
          </div>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            More Than Documents
            <br className="hidden md:block" />
            Turn Certification Into Trust
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
            This section demonstrates how certifications and supporting documents
            can be presented in a clearer, more professional format — with
            structured titles, concise explanations, and direct calls to action.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {certificateItems.map((item) => (
            <GlassCard
              key={item.title}
              className="h-full overflow-hidden rounded-[1.75rem] p-0"
            >
              <div className="p-4 pb-0">
                <div className="relative aspect-[1.45/0.62] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="p-6 pt-5">
                <h2 className="text-2xl font-semibold text-slate-900">
                  {item.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                <a
                  href={item.href}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                >
                  View Document
                  <FileText className="h-4 w-4" />
                </a>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </main>
  );
}