import type { ReactNode } from "react";
import type { AppSelectProps } from "@/shared/ui/app-select";

export interface FilterOption {
  label: string;
  value: string;
  icon?: ReactNode;
}

export interface FilterToolbarProps {
  children: ReactNode;

  actions?: ReactNode;

  className?: string;
}

export interface FilterSelectProps extends AppSelectProps {
  label?: string;
}
