import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/site-content";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 lg:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-200 bg-cyan-50 p-2">
              <Image
                src="/images/logo.png"
                alt={`${siteContent.brand.name} logo`}
                width={56}
                height={56}
                className="h-14 w-14 object-contain"
                priority
              />
            </div>

            <div>
              <div className="text-lg font-semibold text-slate-900">
                {siteContent.brand.name}
              </div>
              <div className="text-sm text-slate-500">
                {siteContent.brand.tagline}
              </div>
            </div>
          </div>

          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
            {siteContent.footer.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 text-sm text-slate-500 md:grid-cols-3">
          <div className="space-y-3">
            <div className="font-medium text-slate-900">Pages</div>
            {siteContent.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block hover:text-slate-900"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="space-y-3">
            <div className="font-medium text-slate-900">Company</div>
            {siteContent.footer.companyLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block hover:text-slate-900"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="space-y-3">
            <div className="font-medium text-slate-900">Action</div>
            {siteContent.footer.actionLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block hover:text-slate-900"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}