import type { ReactNode } from "react";

export interface PlatformAction<T = unknown> {
  id: string;

  label: string;

  icon?: ReactNode;

  variant?: "default" | "warning" | "danger";

  shortcut?: string;

  permission?: string;

  hidden?: boolean;

  disabled?: boolean;

  separatorBefore?: boolean;

  requiresConfirmation?: boolean;

  onClick: (item: T) => void;
}
