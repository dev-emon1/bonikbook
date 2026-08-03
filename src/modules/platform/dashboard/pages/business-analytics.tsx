import {
  AnalyticsFilter,
  AnalyticsHeader,
  AnalyticsStatsGrid,
  BusinessKpiSummary,
  OrganizationGrowthChart,
  PackageDistributionChart,
  PaymentMethodChart,
  RevenueProfitChart,
  RevenueSourceChart,
  TopRevenueOrganizations,
} from "../components/business-analytics";

export default function BusinessAnalyticsPage() {
  return (
    <div className="space-y-8">
      <AnalyticsHeader />

      <AnalyticsFilter />

      <AnalyticsStatsGrid />

      <RevenueProfitChart />

      <div className="grid gap-6 xl:grid-cols-2">
        <PackageDistributionChart />

        <OrganizationGrowthChart />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <RevenueSourceChart />

        <TopRevenueOrganizations />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <PaymentMethodChart />

        <BusinessKpiSummary />
      </div>
    </div>
  );
}
