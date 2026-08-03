import {
  BadgeDollarSign,
  Building2,
  ChartSpline,
  HandCoins,
} from "lucide-react";

import type {
  AnalyticsKpi,
  BusinessKpiSummary,
  //   CustomerLifetimeValue,
  //   ChurnRate,
  OrganizationGrowthData,
  PackageDistributionData,
  PaymentMethodData,
  RevenueProfitChartData,
  RevenueSourceData,
  SubscriptionGrowthAnalyticsData,
  TopRevenueOrganization,
} from "../types";

export const analyticsStats: AnalyticsKpi[] = [
  {
    id: "revenue",
    title: "Total Revenue",
    value: "৳ 32.8M",
    previousValue: "৳ 29.4M",
    change: 11.5,
    trend: "up",
    description: "Current fiscal year",
    icon: BadgeDollarSign,
    color: "success",
  },

  {
    id: "expense",
    title: "Total Expense",
    value: "৳ 8.7M",
    previousValue: "৳ 9.2M",
    change: -5.3,
    trend: "down",
    description: "Operational expenses",
    icon: HandCoins,
    color: "warning",
  },

  {
    id: "profit",
    title: "Net Profit",
    value: "৳ 24.1M",
    previousValue: "৳ 20.2M",
    change: 19.2,
    trend: "up",
    description: "Revenue after expenses",
    icon: ChartSpline,
    color: "primary",
  },

  {
    id: "organizations",
    title: "Paying Organizations",
    value: "1,026",
    previousValue: "978",
    change: 4.9,
    trend: "up",
    description: "Active subscribers",
    icon: Building2,
    color: "info",
  },
];

export const revenueProfitChartData: RevenueProfitChartData[] = [
  { month: "Jan", revenue: 2200000, expense: 780000, profit: 1420000 },
  { month: "Feb", revenue: 2380000, expense: 810000, profit: 1570000 },
  { month: "Mar", revenue: 2510000, expense: 850000, profit: 1660000 },
  { month: "Apr", revenue: 2690000, expense: 910000, profit: 1780000 },
  { month: "May", revenue: 2840000, expense: 930000, profit: 1910000 },
  { month: "Jun", revenue: 3020000, expense: 980000, profit: 2040000 },
  { month: "Jul", revenue: 3280000, expense: 1010000, profit: 2270000 },
];

export const subscriptionGrowthAnalytics: SubscriptionGrowthAnalyticsData[] = [
  { month: "Jan", free: 380, silver: 160, gold: 120, enterprise: 42 },
  { month: "Feb", free: 396, silver: 175, gold: 130, enterprise: 48 },
  { month: "Mar", free: 412, silver: 188, gold: 141, enterprise: 55 },
  { month: "Apr", free: 428, silver: 201, gold: 154, enterprise: 60 },
  { month: "May", free: 446, silver: 219, gold: 168, enterprise: 66 },
  { month: "Jun", free: 465, silver: 235, gold: 180, enterprise: 72 },
  { month: "Jul", free: 482, silver: 252, gold: 194, enterprise: 81 },
];

export const packageDistribution: PackageDistributionData[] = [
  { name: "Free", value: 480 },
  { name: "Silver", value: 252 },
  { name: "Gold", value: 194 },
  { name: "Enterprise", value: 81 },
];

export const organizationGrowth: OrganizationGrowthData[] = [
  { month: "Jan", organizations: 810 },
  { month: "Feb", organizations: 845 },
  { month: "Mar", organizations: 878 },
  { month: "Apr", organizations: 912 },
  { month: "May", organizations: 954 },
  { month: "Jun", organizations: 992 },
  { month: "Jul", organizations: 1026 },
];

export const revenueSources: RevenueSourceData[] = [
  {
    source: "Enterprise",
    amount: 12400000,
  },
  {
    source: "Gold",
    amount: 9300000,
  },
  {
    source: "Silver",
    amount: 6700000,
  },
  {
    source: "Free Upgrade",
    amount: 2100000,
  },
];

export const paymentMethods: PaymentMethodData[] = [
  {
    method: "SSLCommerz",
    value: 42,
  },
  {
    method: "Stripe",
    value: 28,
  },
  {
    method: "Bank",
    value: 18,
  },
  {
    method: "Manual",
    value: 12,
  },
];

export const topRevenueOrganizations: TopRevenueOrganization[] = [
  {
    id: "1",
    organization: "Gold Corp",
    package: "Enterprise",
    revenue: 540000,
    growth: 16.5,
  },
  {
    id: "2",
    organization: "ABC Fashion",
    package: "Gold",
    revenue: 410000,
    growth: 12.2,
  },
  {
    id: "3",
    organization: "Dream IT",
    package: "Enterprise",
    revenue: 382000,
    growth: 9.6,
  },
];

// export const customerLifetimeValue: CustomerLifetimeValue = {
//   value: "৳ 128,500",
//   growth: 12.4,
// };

// export const churnRate: ChurnRate = {
//   value: "2.8%",
//   change: -0.4,
// };

export const businessSummary: BusinessKpiSummary[] = [
  {
    id: "clv",
    title: "Customer Lifetime Value",
    value: "৳128,500",
    change: 12.4,
    trend: "up",
    color: "primary",
  },

  {
    id: "renewal",
    title: "Renewal Rate",
    value: "92.6%",
    change: 3.2,
    trend: "up",
    color: "success",
  },

  {
    id: "churn",
    title: "Churn Rate",
    value: "2.8%",
    change: -0.4,
    trend: "down",
    color: "warning",
  },
];
