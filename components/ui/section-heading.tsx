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
      <div className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-700">
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
        {title}
      </h2>
      <p className="text-sm leading-7 text-slate-600 md:text-lg">
        {description}
      </p>
    </div>
  );
}