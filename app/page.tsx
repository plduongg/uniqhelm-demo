import HeroSection from "@/components/sections/hero-section";
import HighlightsSection from "@/components/sections/highlights-section";
import ProductStorySection from "@/components/sections/product-story-section";
import AISizingSection from "@/components/sections/ai-sizing-section";
import ImplementationProcessSection from "@/components/sections/implementation-process-section";
import CertificatesSection from "@/components/sections/certificates-section";
import MarketplaceSection from "@/components/sections/marketplace-section";
import FAQSection from "@/components/sections/faq-section";
import AnimatedBackground from "@/components/ui/animated-background";
import BrandStoryPreviewSection from "@/components/sections/brand-story-preview-section";
import ProductBenefitsSection from "@/components/sections/product-benefits-section";
import FinalCTASection from "@/components/sections/final-cta-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import HowItWorksSection from "@/components/sections/how-it-works-section";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="relative isolate overflow-hidden">
        <AnimatedBackground />
        <HeroSection />
        <HighlightsSection />
        <BrandStoryPreviewSection />
        <HowItWorksSection />
        <ProductStorySection />
        <ProductBenefitsSection />
        <AISizingSection />
        <ImplementationProcessSection/>
        <CertificatesSection />
        <TestimonialsSection />
        <MarketplaceSection />
        <FAQSection />
        <FinalCTASection />
      </div>
    </main>
  );
}

