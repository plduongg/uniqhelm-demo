type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4">
      <div className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
        {eyebrow}
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
        {title}
      </h2>

      <p className="text-base leading-8 text-slate-700 md:text-lg">
        {description}
      </p>
    </div>
  );
}