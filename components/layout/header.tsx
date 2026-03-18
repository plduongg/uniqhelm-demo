"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { siteContent } from "@/data/site";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-slate-200 transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-sm backdrop-blur-xl" : "bg-white/90"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 transition-all duration-300 ${
          isScrolled ? "py-3" : "py-4"
        }`}
      >
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={siteContent.brand.logo}
            alt={`${siteContent.brand.name} logo`}
            width={40}
            height={40}
            className={`object-contain transition-all duration-300 ${
              isScrolled ? "h-8 w-8" : "h-10 w-10"
            }`}
            priority
          />

          <div className="leading-none">
            <div
              className={`font-semibold text-slate-900 transition-all duration-300 ${
                isScrolled ? "text-lg" : "text-xl"
              }`}
            >
              {siteContent.brand.name}
            </div>
            <div
              className={`mt-1 text-slate-500 transition-all duration-300 ${
                isScrolled ? "text-[11px]" : "text-xs"
              }`}
            >
              {siteContent.brand.tagline}
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {siteContent.nav.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition ${
                  isActive
                    ? "text-slate-900"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={siteContent.headerCtas.primary.href}
            className="rounded-xl px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            {siteContent.headerCtas.primary.label}
          </Link>

          <a
            href={siteContent.headerCtas.secondary.href}
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            {siteContent.headerCtas.secondary.label}
          </a>
        </div>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-5 w-5 text-slate-700" />
          ) : (
            <Menu className="h-5 w-5 text-slate-700" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {siteContent.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-2 flex flex-col gap-3">
              <Link
                href={siteContent.headerCtas.primary.href}
                className="rounded-xl border border-slate-200 px-4 py-2.5 text-center text-sm font-medium text-slate-700"
                onClick={() => setMobileOpen(false)}
              >
                {siteContent.headerCtas.primary.label}
              </Link>

              <a
                href={siteContent.headerCtas.secondary.href}
                className="rounded-xl bg-blue-600 px-4 py-2.5 text-center text-sm font-medium text-white"
                onClick={() => setMobileOpen(false)}
              >
                {siteContent.headerCtas.secondary.label}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}