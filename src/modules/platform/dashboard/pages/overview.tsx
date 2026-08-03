import { DashboardCard } from "../components/shared";

import {
  OverviewHeader,
  PendingActions,
  RecentActivity,
  RevenueChart,
  StatsGrid,
  SubscriptionChart,
  SystemSummary,
  TopOrganizations,
} from "../components/overview";

export default function OverviewPage() {
  return (
    <div className="space-y-8">
      <OverviewHeader />

      <StatsGrid />

      <div className="grid gap-6 xl:grid-cols-2">
        <DashboardCard
          title="Revenue Trend"
          description="Monthly recurring revenue over the last 12 months."
        >
          <RevenueChart />
        </DashboardCard>

        <DashboardCard
          title="Subscription Growth"
          description="Growth of active subscription plans."
        >
          <SubscriptionChart />
        </DashboardCard>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <RecentActivity />

        <PendingActions />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <TopOrganizations />

        <SystemSummary />
      </div>
    </div>
  );
}
