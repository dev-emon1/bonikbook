import { cn } from "@/shared/lib/utils";

import { STATUS_CONFIG } from "./status.config";
import type { PlatformStatus } from "./status.types";

type StatusProps = {
  status: PlatformStatus;

  label?: string;

  size?: "sm" | "md" | "lg";

  variant?: "soft" | "outline";

  showIcon?: boolean;

  showDot?: boolean;

  rounded?: "full" | "md";

  className?: string;
};

const sizeClasses = {
  sm: {
    container: "h-6 px-2.5 text-xs gap-1.5",
    icon: "size-3.5",
    dot: "size-1.5",
  },

  md: {
    container: "h-8 px-3 text-sm gap-2",
    icon: "size-4",
    dot: "size-2",
  },

  lg: {
    container: "h-10 px-4 text-sm gap-2.5",
    icon: "size-5",
    dot: "size-2.5",
  },
} as const;

export function Status({
  status,
  label,
  size = "md",
  variant = "soft",
  showIcon = false,
  showDot = false,
  rounded = "full",
  className,
}: StatusProps) {
  const config = STATUS_CONFIG[status];

  const Icon = config.icon;

  const styles = sizeClasses[size];

  return (
    <span
      className={cn(
        "inline-flex items-center border font-medium transition-default",

        rounded === "full" ? "rounded-full" : "rounded-md",

        styles.container,

        variant === "soft" ? config.className : "border-current bg-transparent",

        className,
      )}
    >
      {showDot && (
        <span className={cn("rounded-full", styles.dot, config.dotClassName)} />
      )}

      {showIcon && Icon && <Icon className={styles.icon} />}

      {label ?? config.label}
    </span>
  );
}
