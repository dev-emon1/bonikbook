import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";

import { cn } from "@/shared/lib/utils";

import type { TrendDirection } from "./stats.types";

type Props = {
  value: string;
  direction: TrendDirection;
};

const trendConfig = {
  up: {
    icon: ArrowUpRight,
    className: "bg-success/10 text-success",
  },

  down: {
    icon: ArrowDownRight,
    className: "bg-destructive/10 text-destructive",
  },

  neutral: {
    icon: ArrowRight,
    className: "bg-muted text-muted-foreground",
  },
} as const;

export function TrendBadge({ value, direction }: Props) {
  const config = trendConfig[direction];

  const Icon = config.icon;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium",
        config.className,
      )}
    >
      <Icon className="size-3.5" />

      {value}
    </span>
  );
}
