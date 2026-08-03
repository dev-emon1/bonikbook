import {
  Activity,
  Building2,
  CircleAlert,
  CreditCard,
  Database,
  Server,
  ShieldCheck,
  Users,
} from "lucide-react";

import type {
  DashboardStat,
  PendingAction,
  RecentActivity,
  RevenueChartData,
  SubscriptionGrowthData,
  SystemSummaryItem,
  TopOrganization,
} from "../types";

export const dashboardStats: DashboardStat[] = [
  {
    id: "organizations",
    title: "Organizations",
    value: "1,248",
    previousValue: "1,180",
    change: 5.8,
    trend: "up",
    description: "Total registered organizations",
    icon: Building2,
    color: "primary",
  },
  {
    id: "users",
    title: "Active Users",
    value: "18,540",
    previousValue: "17,920",
    change: 3.5,
    trend: "up",
    description: "Currently active users",
    icon: Users,
    color: "success",
  },
  {
    id: "subscriptions",
    title: "Active Subscriptions",
    value: "1,026",
    previousValue: "988",
    change: 3.8,
    trend: "up",
    description: "Running subscriptions",
    icon: CreditCard,
    color: "info",
  },
  {
    id: "revenue",
    title: "Monthly Revenue",
    value: "৳ 3.28M",
    previousValue: "৳ 3.04M",
    change: 7.9,
    trend: "up",
    description: "Current month revenue",
    icon: Activity,
    color: "success",
  },
  {
    id: "todayRevenue",
    title: "Today's Revenue",
    value: "৳ 126K",
    previousValue: "৳ 118K",
    change: 6.8,
    trend: "up",
    description: "Today's collection",
    icon: CreditCard,
    color: "primary",
  },
  {
    id: "pending",
    title: "Pending Approvals",
    value: 17,
    previousValue: 21,
    change: -19,
    trend: "down",
    description: "Waiting for approval",
    icon: CircleAlert,
    color: "warning",
  },
];

export const revenueChartData: RevenueChartData[] = [
  { month: "Jan", revenue: 2100000 },
  { month: "Feb", revenue: 2350000 },
  { month: "Mar", revenue: 2510000 },
  { month: "Apr", revenue: 2620000 },
  { month: "May", revenue: 2790000 },
  { month: "Jun", revenue: 3010000 },
  { month: "Jul", revenue: 3280000 },
];

export const subscriptionGrowthData: SubscriptionGrowthData[] = [
  {
    month: "Jan",
    free: 410,
    silver: 180,
    gold: 120,
    enterprise: 42,
  },
  {
    month: "Feb",
    free: 430,
    silver: 191,
    gold: 130,
    enterprise: 48,
  },
  {
    month: "Mar",
    free: 445,
    silver: 203,
    gold: 144,
    enterprise: 55,
  },
  {
    month: "Apr",
    free: 458,
    silver: 214,
    gold: 155,
    enterprise: 59,
  },
  {
    month: "May",
    free: 472,
    silver: 228,
    gold: 168,
    enterprise: 64,
  },
  {
    month: "Jun",
    free: 486,
    silver: 239,
    gold: 176,
    enterprise: 69,
  },
  {
    month: "Jul",
    free: 500,
    silver: 252,
    gold: 190,
    enterprise: 84,
  },
];

export const recentActivities: RecentActivity[] = [
  {
    id: "1",
    title: "New Organization Registered",
    description: "ABC Fashion Ltd joined BonikBook.",
    actor: "System",
    createdAt: "2 min ago",
    status: "success",
  },
  {
    id: "2",
    title: "Subscription Upgraded",
    description: "Gold package activated.",
    actor: "Sales Team",
    createdAt: "8 min ago",
    status: "info",
  },
  {
    id: "3",
    title: "Payment Received",
    description: "৳ 25,000 subscription payment.",
    actor: "Payment Gateway",
    createdAt: "15 min ago",
    status: "success",
  },
  {
    id: "4",
    title: "Support Ticket Created",
    description: "Inventory synchronization issue.",
    actor: "Customer",
    createdAt: "27 min ago",
    status: "warning",
  },
];

export const pendingActions: PendingAction[] = [
  {
    id: "1",
    title: "Organization Approvals",
    count: 7,
    href: "/platform/tenants",
    priority: "high",
  },
  {
    id: "2",
    title: "Failed Payments",
    count: 3,
    href: "/platform/billing",
    priority: "medium",
  },
  {
    id: "3",
    title: "Trial Expiring",
    count: 12,
    href: "/platform/subscriptions",
    priority: "low",
  },
];

export const topOrganizations: TopOrganization[] = [
  {
    id: "1",
    organization: "Gold Corp",
    package: "Enterprise",
    employees: 452,
    revenue: 220000,
    status: "active",
  },
  {
    id: "2",
    organization: "ABC Fashion",
    package: "Gold",
    employees: 210,
    revenue: 185000,
    status: "active",
  },
  {
    id: "3",
    organization: "Dream IT",
    package: "Silver",
    employees: 95,
    revenue: 98000,
    status: "trial",
  },
];

export const systemSummary: SystemSummaryItem[] = [
  {
    id: "api",
    title: "API",
    value: "Operational",
    status: "healthy",
  },
  {
    id: "database",
    title: "Database",
    value: "Healthy",
    status: "healthy",
  },
  {
    id: "server",
    title: "Server",
    value: "99.98%",
    status: "healthy",
  },
  {
    id: "security",
    title: "Security",
    value: "Protected",
    status: "healthy",
  },
];
