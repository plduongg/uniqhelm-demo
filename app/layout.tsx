import "./globals.css";
import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "UniqHelm | Comfort solution for helmet users",
  description:
    "PU Foam helmet liner with AI-assisted sizing for better comfort and fit.",
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
    name: "UniqHelm",
    url: "https://your-domain.com",
    logo: "https://your-domain.com/images/logo.png",
    description:
      "Comfort solution for helmet users with PU Foam liner and AI-assisted sizing.",
  };

  return (
    <html lang="vi" className={beVietnamPro.variable}>
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