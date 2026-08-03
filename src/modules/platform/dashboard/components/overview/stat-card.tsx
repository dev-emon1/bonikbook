import { TrendingDown, TrendingUp } from "lucide-react";

import { cn } from "@/shared/lib/utils";

import type { DashboardStat } from "../../types";

type Props = {
  data: DashboardStat;
};

const colorVariants = {
  primary: {
    wrapper: "bg-primary/10 text-primary",
  },

  success: {
    wrapper: "bg-success/10 text-success",
  },

  warning: {
    wrapper: "bg-warning/10 text-warning",
  },

  danger: {
    wrapper: "bg-destructive/10 text-destructive",
  },

  info: {
    wrapper: "bg-info/10 text-info",
  },
} as const;

export default function StatCard({ data }: Props) {
  const Icon = data.icon;

  const variant = colorVariants[data.color];

  const isPositive = data.trend === "up" || data.trend === "neutral";

  return (
    <article
      className={cn(
        "group rounded-3xl border border-border bg-card",
        "card-shadow transition-default",
        "hover:-translate-y-1 hover:border-primary/20",
        "p-6",
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-muted-foreground">
            {data.title}
          </p>

          <h3 className="mt-2 truncate text-3xl font-bold tracking-tight text-foreground">
            {data.value}
          </h3>

          {data.description && (
            <p className="mt-2 text-sm text-muted-foreground">
              {data.description}
            </p>
          )}
        </div>

        <div
          className={cn(
            "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl",
            "transition-default",
            variant.wrapper,
          )}
        >
          <Icon className="size-6" strokeWidth={2} />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between gap-4 border-t border-border pt-4">
        <div
          className={cn(
            "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold",
            isPositive
              ? "bg-success/10 text-success"
              : "bg-destructive/10 text-destructive",
          )}
        >
          {isPositive ? (
            <TrendingUp className="size-3.5" />
          ) : (
            <TrendingDown className="size-3.5" />
          )}
          {Math.abs(data.change)}%
        </div>

        {data.previousValue && (
          <span className="truncate text-xs text-muted-foreground">
            Previous: {data.previousValue}
          </span>
        )}
      </div>
    </article>
  );
}
