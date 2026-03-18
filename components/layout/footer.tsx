import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center">
                <Image
                  src={siteContent.brand.logo}
                  alt={`${siteContent.brand.name} logo`}
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                  priority
                />
              </div>

              <div>
                <div className="text-xl font-semibold text-slate-900">
                  {siteContent.brand.name}
                </div>
                <div className="text-sm text-slate-500">
                  {siteContent.brand.tagline}
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-600">
              {siteContent.footer.description}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 text-sm">
            <div className="space-y-4">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-900">
                {siteContent.footer.pagesTitle}
              </div>

              <div className="space-y-3 text-slate-500">
                {siteContent.nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block transition hover:text-slate-900"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-900">
                {siteContent.footer.companyTitle}
              </div>

              <div className="space-y-3 text-slate-500">
                {siteContent.footer.companyLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block transition hover:text-slate-900"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-900">
                {siteContent.footer.actionTitle}
              </div>

              <div className="space-y-3 text-slate-500">
                {siteContent.footer.actionLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block transition hover:text-slate-900"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-6">
          <div className="flex flex-col gap-4 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <div>© 2024 {siteContent.brand.name}. All rights reserved.</div>

            <div className="flex items-center gap-6">
              <Link href="/privacy" className="transition hover:text-slate-600">
                Privacy Policy
              </Link>
              <Link href="/terms" className="transition hover:text-slate-600">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}