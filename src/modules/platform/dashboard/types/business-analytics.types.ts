import type { LucideIcon } from "lucide-react";

export interface AnalyticsKpi {
  id: string;
  title: string;
  value: string | number;
  previousValue?: string | number;
  change: number;
  trend: "up" | "down" | "neutral";
  description?: string;
  icon: LucideIcon;

  color: "primary" | "success" | "warning" | "danger" | "info";
}

export interface RevenueProfitChartData {
  month: string;
  revenue: number;
  expense: number;
  profit: number;
}

export interface SubscriptionGrowthAnalyticsData {
  month: string;
  free: number;
  silver: number;
  gold: number;
  enterprise: number;
}

export interface PackageDistributionData {
  name: string;
  value: number;
}

export interface OrganizationGrowthData {
  month: string;
  organizations: number;
}

export interface RevenueSourceData {
  source: string;
  amount: number;
}

export interface PaymentMethodData {
  method: string;
  value: number;
}

export interface TopRevenueOrganization {
  id: string;
  organization: string;
  package: string;
  revenue: number;
  growth: number;
}

// export interface CustomerLifetimeValue {
//   value: string;
//   growth: number;
// }

// export interface ChurnRate {
//   value: string;
//   change: number;
// }

export interface BusinessKpiSummary {
  id: string;

  title: string;

  value: string;

  change: number;

  trend: "up" | "down";

  color: "primary" | "success" | "warning" | "danger" | "info";
}
