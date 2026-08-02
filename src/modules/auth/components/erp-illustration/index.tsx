import { DashboardPreview } from "./dashboard-preview";
import { FloatingCard } from "../floating-card";
import { FloatingOrb } from "./floating-orb";

export function ErpIllustration() {
  return (
    <div className="relative mx-auto flex w-full max-w-[680px] items-center justify-center px-4 lg:px-6">
      {/* Background Glow */}
      <FloatingOrb size="lg" color="primary" className="-left-12 top-8" />

      <FloatingOrb
        size="md"
        color="sky"
        className="-right-8 top-16"
        delay={1.5}
      />

      <FloatingOrb
        size="sm"
        color="violet"
        className="bottom-6 left-20"
        delay={3}
      />

      {/* Floating Cards */}
      <FloatingCard
        className="absolute -left-2 top-10 z-20 hidden lg:block"
        title="Today's Sales"
        value="$18,420"
        badge="+12.8%"
      />

      <FloatingCard
        className="absolute -right-3 bottom-10 z-20 hidden xl:block"
        title="New Orders"
        value="248"
        badge="+18"
      />

      {/* Dashboard */}
      <div className="relative z-10 w-full">
        <DashboardPreview />
      </div>
    </div>
  );
}
