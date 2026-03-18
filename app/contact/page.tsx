import GlassCard from "@/components/ui/glass-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | UniqHelm",
  description:
    "Get in touch with UniqHelm for partnerships, product inquiries, customer support, or collaboration opportunities.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="mx-auto max-w-4xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
            Contact Us
          </div>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Let customers
            <br className="hidden md:block" />
            connect with UniqHelm with ease
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
            Whether you have a product question, partnership proposal, media
            request, or distribution inquiry, our team is here to help.
          </p>
        </div>

        <GlassCard className="mx-auto max-w-5xl rounded-[2rem] p-6 shadow-xl shadow-slate-200/40 md:p-8">
          <form className="grid gap-5">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              Send Us a Message
            </h2>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-cyan-400/50"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Email Address <span className="text-rose-500">*</span>
              </label>
              <input
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-cyan-400/50"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Message <span className="text-rose-500">*</span>
              </label>
              <textarea
                rows={5}
                maxLength={500}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-cyan-400/50"
                placeholder="Tell us about your inquiry, support request, partnership idea, or anything else you'd like to discuss with the UniqHelm team..."
              />
              <div className="mt-2 text-xs text-slate-400">0/500 characters</div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Send Message
              </button>
            </div>
          </form>
        </GlassCard>
      </div>
    </main>
  );
}