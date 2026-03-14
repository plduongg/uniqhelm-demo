import { Cpu, Ruler, ShieldCheck } from "lucide-react";
import GlassCard from "@/components/ui/glass-card";
import SectionHeading from "@/components/ui/section-heading";

export default function MaterialsSection() {
  return (
    <section id="materials" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading
          eyebrow="Materials & Safety"
          title="Kể câu chuyện vật liệu theo cách dễ hiểu, hiện đại và đáng tin"
          description="Người xem thường không bị thuyết phục bởi tên vật liệu đơn thuần. Họ cần hiểu vật liệu đó giúp gì cho trải nghiệm đội mũ, cảm giác đội lâu và độ vừa vặn hằng ngày."
        />

        <div className="grid gap-4 md:grid-cols-2">
          <GlassCard className="p-6 md:col-span-2">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                <Cpu className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  PU Foam, but explained as a benefit
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Thay vì chỉ ghi “PU Foam”, hãy trình bày theo lợi ích:
                  êm hơn khi đội lâu, giúp tinh chỉnh fit tốt hơn, hỗ trợ
                  trải nghiệm cao cấp hơn cho người dùng mũ bảo hiểm.
                </p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 text-slate-700">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Safety narrative
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Thêm lưu ý phạm vi sử dụng, hướng dẫn lắp đặt và đường dẫn đến
              chứng nhận để xây dựng niềm tin với khách hàng.
            </p>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 text-slate-700">
              <Ruler className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Size architecture
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Mô tả hệ size, độ dày foam và logic AI recommendation để
              người dùng cảm thấy minh bạch, dễ hiểu và đáng tin cậy hơn.
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}