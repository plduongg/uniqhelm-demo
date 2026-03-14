export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-[-10%] top-[-10%] h-[28rem] w-[28rem] rounded-full bg-cyan-200/60 blur-3xl" />
      <div className="absolute right-[-10%] top-[12%] h-[24rem] w-[24rem] rounded-full bg-fuchsia-200/50 blur-3xl" />
      <div className="absolute bottom-[-10%] left-[20%] h-[26rem] w-[26rem] rounded-full bg-blue-200/50 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8),transparent_35%),linear-gradient(to_bottom,rgba(255,255,255,0.6),transparent_30%)]" />
      <div className="absolute inset-0 opacity-[0.25] [background-image:linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:72px_72px]" />
    </div>
  );
}