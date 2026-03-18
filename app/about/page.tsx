import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Brain, ShieldCheck, Sparkles, Target } from "lucide-react";
import GlassCard from "@/components/ui/glass-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | UniqHelm",
  description:
    "Learn the story, mission, and comfort-tech vision behind the UniqHelm brand.",
};

const problemBlocks = [
  {
    icon: Sparkles,
    title: "The problem",
    text: "Nhiều người dùng phải đội mũ bảo hiểm trong thời gian dài nhưng vẫn xem cảm giác đau đầu, cấn và khó chịu là điều bình thường.",
  },
  {
    icon: Target,
    title: "The mission",
    text: "UniqHelm được tạo ra để mang lại trải nghiệm đội mũ thoải mái hơn, chỉn chu hơn và có chủ đích hơn cho người dùng.",
  },
  {
    icon: ShieldCheck,
    title: "The trust layer",
    text: "Giải thích chất liệu, hướng dẫn tương thích và khu vực chứng nhận giúp khách hàng yên tâm hơn trước khi mua.",
  },
  {
    icon: Brain,
    title: "The innovation layer",
    text: "AI sizing biến một quyết định chọn phụ kiện đơn giản thành trải nghiệm hiện đại, có hướng dẫn và đáng tin cậy hơn.",
  },
];

const aiPoints = [
  "Giải thích vì sao AI không chỉ là hiệu ứng marketing",
  "Mô tả luồng scan và cách hiển thị kết quả",
  "Tạo nền tảng để kết nối model thật sau này",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-14">
        {/* Hero */}
        <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100">
          <div className="relative min-h-[290px] overflow-hidden md:min-h-[360px]">
            <Image
              src="/images/about-hero.png"
              alt="UniqHelm about hero"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/40" />

            <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
              <div className="max-w-3xl text-white">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                  Câu chuyện thương hiệu
                </div>

                <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
                  Sứ mệnh của{" "}
                  <span className="text-blue-300">UniqHelm</span>
                </h1>

                <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-200 md:text-base">
                  Chúng tôi không chỉ tạo ra một phụ kiện cho mũ bảo hiểm. Chúng tôi
                  muốn nâng tầm trải nghiệm đội mũ bằng sự thoải mái, fit tốt hơn và
                  công nghệ hỗ trợ lựa chọn thông minh hơn.
                </p>

                <div className="mt-6">
                  <Link
                    href="/measure"
                    className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
                  >
                    Khám phá ngay
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem / mission section */}
        <section className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
                Brand story
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
                Vấn đề chúng tôi giải quyết
              </h2>
            </div>

            <div className="grid gap-4">
              {problemBlocks.map((item) => {
                const Icon = item.icon;

                return (
                  <GlassCard key={item.title} className="rounded-[1.5rem] p-5">
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-200 bg-cyan-50 text-cyan-700">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="text-base font-semibold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-7 text-slate-600">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <GlassCard className="rounded-[2rem] p-6">
              <div className="grid grid-cols-[1.05fr_0.95fr] gap-5">
                <div className="space-y-5">
                  <div className="relative aspect-[0.95/1.15] w-full">
                    <Image
                      src="/images/pic1.png"
                      alt="Helmet liner visual"
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="w-20 md:w-24">
                    <Image
                      src="/images/logo.png"
                      alt="UniqHelm logo"
                      width={96}
                      height={32}
                      className="h-auto w-full object-contain"
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-start gap-5 pt-2">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative aspect-square w-full">
                      <Image
                        src="/images/pic1.png"
                        alt="Product detail visual 1"
                        fill
                        className="object-contain scale-90"
                      />
                    </div>

                    <div className="relative aspect-square w-full">
                      <Image
                        src="/images/pic1.png"
                        alt="Product detail visual 2"
                        fill
                        className="object-contain scale-90"
                      />
                    </div>
                  </div>

                  <div className="relative aspect-[1/1.05] w-full">
                    <Image
                      src="/images/pic1.png"
                      alt="Helmet use visual"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* AI innovation section */}
        <section className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100">
            <div className="relative aspect-[1.15/0.95] w-full">
              <Image
                src="/images/about-ai.png"
                alt="AI innovation visual"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-5">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
              Innovation
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Công nghệ &amp; Đột phá AI
            </h2>

            <p className="max-w-2xl text-sm leading-8 text-slate-600 md:text-base">
              Chúng tôi ứng dụng AI như một lớp công nghệ bổ trợ để việc chọn liner
              trở nên rõ ràng và hiện đại hơn. Mục tiêu không phải là tạo hiệu ứng,
              mà là giúp người dùng có quyết định tự tin hơn trước khi mua.
            </p>

            <div className="space-y-3">
              {aiPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-cyan-600" />
                  <p className="text-sm leading-7 text-slate-700">{point}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/measure"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
              >
                View more
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="rounded-[2.5rem] bg-slate-100 px-6 py-12 md:px-10 md:py-14">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              More than a product page
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
              The website should feel like a startup brand platform: product,
              story, measurement, trust and emotional connection all working
              together. Đó là điều khiến khách hàng nhớ đến thương hiệu thay vì chỉ
              xem đây là một phụ kiện đơn thuần.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/measure"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Try AI Sizing
              </Link>

              <Link
                href="/#buy"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
              >
                Buy on Marketplace
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}