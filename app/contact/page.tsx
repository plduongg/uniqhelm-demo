import GlassCard from "@/components/ui/glass-card";
import SectionHeading from "@/components/ui/section-heading";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | UniqHelm",
  description:
    "Contact UniqHelm for partnerships, support, product questions, or collaboration opportunities.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-20 text-slate-900 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-10">
        <SectionHeading
          eyebrow="Contact"
          title="Let partners, media, and customers reach you easily"
          description="A real startup website should have a proper contact page so distributors, collaborators, and content teams can reach out quickly."
        />

        <GlassCard className="p-8">
          <form className="grid gap-5">
            <div>
              <label className="mb-2 block text-sm text-slate-600">Full name</label>
              <input
                className="w-full rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm outline-none placeholder:text-slate-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-600">Email</label>
              <input
                className="w-full rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm outline-none placeholder:text-slate-500"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-600">Message</label>
              <textarea
                rows={6}
                className="w-full rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm outline-none placeholder:text-slate-500"
                placeholder="Tell us about your request"
              />
            </div>

            <button className="w-fit rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950">
              Send message
            </button>
          </form>
        </GlassCard>
      </div>
    </main>
  );
}