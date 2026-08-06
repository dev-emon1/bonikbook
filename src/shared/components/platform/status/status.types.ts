import type { LucideIcon } from "lucide-react";

export type PlatformStatus =
  | "active"
  | "inactive"
  | "pending"
  | "trial"
  | "approved"
  | "rejected"
  | "suspended"
  | "archived"
  | "published"
  | "draft"
  | "paid"
  | "due"
  | "overdue"
  | "healthy"
  | "warning"
  | "critical"
  | "online"
  | "offline"
  | "enabled"
  | "disabled";

export interface StatusConfig {
  label: string;

  icon?: LucideIcon;

  className: string;

  dotClassName: string;
}
