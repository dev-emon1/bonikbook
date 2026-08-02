import { DashboardHeader } from "./dashboard-header";
import { DashboardSidebar } from "./dashboard-sidebar";
import { RevenueChart } from "./revenue-chart";
import { RecentOrders } from "./recent-orders";
import { StatsGrid } from "./stats-grid";

export function DashboardPreview() {
  return (
    <div className="relative mx-auto aspect-[1.18] w-full max-w-[640px] overflow-hidden rounded-[28px] border border-border/60 bg-background/80 shadow-[0_30px_80px_rgba(15,23,42,0.10)] backdrop-blur-2xl">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-background/20 to-transparent" />

      {/* Glass Reflection */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/25 to-transparent dark:from-white/5" />

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative flex h-full flex-col">
        <DashboardHeader />

        <div className="flex min-h-0 flex-1">
          <DashboardSidebar />

          <main className="flex min-w-0 flex-1 flex-col gap-3 p-3 lg:gap-4 lg:p-4">
            <RevenueChart />

            <StatsGrid />

            <RecentOrders />
          </main>
        </div>
      </div>
    </div>
  );
}
