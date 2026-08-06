import type { ReactNode } from "react";

export interface AppSelectOption {
  label: string;
  value: string;

  icon?: ReactNode;

  disabled?: boolean;
}

export interface AppSelectProps {
  value?: string;

  options: AppSelectOption[];

  placeholder?: string;

  searchPlaceholder?: string;

  emptyMessage?: string;

  loading?: boolean;

  disabled?: boolean;

  searchable?: boolean;

  className?: string;

  width?: string | number;

  onChange: (value: string) => void;
}
