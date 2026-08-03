import { TrendingDown, TrendingUp } from "lucide-react";

import { cn } from "@/shared/lib/utils";

import type { BusinessKpiSummary } from "../../types";

type Props = {
  item: BusinessKpiSummary;
};

const colorVariants = {
  primary: "bg-primary/10 text-primary",

  success: "bg-success/10 text-success",

  warning: "bg-warning/10 text-warning",

  danger: "bg-destructive/10 text-destructive",

  info: "bg-info/10 text-info",
} as const;

export default function BusinessKpiItem({ item }: Props) {
  return (
    <div className="rounded-2xl border border-border bg-background p-4">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{item.title}</p>

          <h3 className="mt-2 text-2xl font-bold text-foreground">
            {item.value}
          </h3>
        </div>

        <div
          className={cn(
            "rounded-full px-2 py-1 text-xs font-semibold",
            colorVariants[item.color],
          )}
        >
          {item.trend === "up" ? (
            <TrendingUp className="inline size-3 mr-1" />
          ) : (
            <TrendingDown className="inline size-3 mr-1" />
          )}
          {Math.abs(item.change)}%
        </div>
      </div>
    </div>
  );
}
