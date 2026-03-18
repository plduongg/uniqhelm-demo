import "./globals.css";
import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { siteContent } from "@/data/site";

export const metadata: Metadata = {
  title: "UniqHelm | Comfort solution for helmet users",
  description: siteContent.brand.description,
};

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  variable: "--font-be-vietnam-pro",
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteContent.brand.name,
    url: "https://your-domain.com",
    logo: "https://your-domain.com/images/logo.png",
    description: siteContent.brand.description,
  };

  return (
    <html
      lang="vi"
      className={beVietnamPro.variable}
      suppressHydrationWarning
    >
      <body className="bg-slate-50 font-sans text-slate-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Header />
        <div className="h-24 lg:h-28" />
        {children}
        <Footer />
      </body>
    </html>
  );
}