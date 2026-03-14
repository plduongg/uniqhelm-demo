"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { siteContent } from "@/data/site-content";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-slate-200 backdrop-blur-xl transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-md" : "bg-white/80"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 transition-all duration-300 ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/images/logo.png"
            alt={`${siteContent.brand.name} logo`}
            width={56}
            height={56}
            className={`rounded-xl object-contain transition-all duration-300 ${
              isScrolled ? "h-10 w-10" : "h-14 w-14"
            }`}
            priority
          />

          <div>
            <div
              className={`font-bold tracking-[0.08em] text-slate-900 transition-all duration-300 ${
                isScrolled ? "text-lg" : "text-xl"
              }`}
            >
              {siteContent.brand.name}
            </div>

            <div
              className={`text-slate-500 transition-all duration-300 ${
                isScrolled ? "text-xs" : "text-sm"
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
                className={`text-sm transition ${
                  isActive
                    ? "font-semibold text-slate-900"
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
            href="/measure"
            className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-100"
          >
            Try AI Size
          </Link>

          <a
            href="/#buy"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Buy on Marketplace
          </a>
        </div>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white lg:hidden"
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
                className="text-sm text-slate-600"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}