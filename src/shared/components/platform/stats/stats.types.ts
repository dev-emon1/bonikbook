import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export type TrendDirection = "up" | "down" | "neutral";

export interface StatItem {
  id: string;

  title: string;

  value: string | number;

  description?: string;

  icon?: LucideIcon;

  trend?: {
    value: string;

    direction: TrendDirection;
  };

  footer?: ReactNode;
}
