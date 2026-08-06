import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export interface PageHeaderProps {
  title: string;

  description?: string;

  icon?: LucideIcon;

  actions?: ReactNode;

  className?: string;
}
