import type { LucideIcon } from "lucide-react";

export interface DashboardStat {
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

export interface RevenueChartData {
  month: string;
  revenue: number;
}

export interface SubscriptionGrowthData {
  month: string;
  free: number;
  silver: number;
  gold: number;
  enterprise: number;
}

export interface RecentActivity {
  id: string;

  title: string;

  description: string;

  actor: string;

  createdAt: string;

  status: "success" | "warning" | "danger" | "info";
}

export interface PendingAction {
  id: string;

  title: string;

  count: number;

  href: string;

  priority: "low" | "medium" | "high";
}

export interface TopOrganization {
  id: string;

  organization: string;

  package: string;

  employees: number;

  revenue: number;

  status: "active" | "trial" | "expired";
}

export interface SystemSummaryItem {
  id: string;

  title: string;

  value: string;

  status: "healthy" | "warning" | "critical";
}
