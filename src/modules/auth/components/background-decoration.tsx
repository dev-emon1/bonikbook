import { FloatingOrb } from "./erp-illustration/floating-orb";

export function BackgroundDecoration() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-background to-background" />

      {/* Top Glow */}
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      {/* Left Glow */}
      <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-sky-400/10 blur-[120px]" />

      {/* Right Glow */}
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-violet-400/10 blur-[140px]" />

      {/* Floating Orbs */}
      <FloatingOrb size="lg" color="primary" className="-left-10 top-20" />

      <FloatingOrb
        size="md"
        color="sky"
        className="right-10 top-32"
        delay={2}
      />

      <FloatingOrb
        size="sm"
        color="violet"
        className="bottom-20 left-1/4"
        delay={4}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Soft Noise Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_65%,rgb(0_0_0_/_0.03)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,transparent_65%,rgb(255_255_255_/_0.02)_100%)]" />
    </div>
  );
}
