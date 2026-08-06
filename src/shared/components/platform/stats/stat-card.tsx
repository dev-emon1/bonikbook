import type { HTMLAttributes } from "react";

import { ChevronRight } from "lucide-react";

import { cn } from "@/shared/lib/utils";

import type { StatItem } from "./stats.types";

import { TrendBadge } from "./trend-badge";

type StatCardProps = HTMLAttributes<HTMLDivElement> & {
  item: StatItem;

  loading?: boolean;

  clickable?: boolean;
};

export function StatCard({
  item,
  loading = false,
  clickable = false,
  className,
  ...props
}: StatCardProps) {
  const Icon = item.icon;

  if (loading) {
    return (
      <div
        className={cn(
          "animate-pulse rounded-3xl border border-border bg-card p-6",
          className,
        )}
      >
        <div className="h-5 w-32 rounded bg-muted" />

        <div className="mt-6 h-9 w-28 rounded bg-muted" />

        <div className="mt-5 h-4 w-44 rounded bg-muted" />
      </div>
    );
  }

  return (
    <article
      className={cn(
        "group rounded-3xl border border-border bg-card p-6 card-shadow transition-default",
        clickable &&
          "cursor-pointer hover:-translate-y-1 hover:border-primary/20",
        className,
      )}
      {...props}
    >
      {/* Header */}

      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">
            {item.title}
          </p>

          <h3 className="text-3xl font-bold tracking-tight text-foreground">
            {item.value}
          </h3>
        </div>

        {Icon && (
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-default group-hover:scale-105">
            <Icon className="size-6" />
          </div>
        )}
      </div>

      {/* Description */}

      {item.description && (
        <p className="mt-5 text-sm leading-6 text-muted-foreground">
          {item.description}
        </p>
      )}

      {/* Footer */}

      {(item.trend || item.footer || clickable) && (
        <div className="mt-6 flex items-center justify-between gap-3 border-t border-border pt-5">
          <div className="flex items-center gap-3">
            {item.trend && (
              <TrendBadge
                value={item.trend.value}
                direction={item.trend.direction}
              />
            )}

            {item.footer}
          </div>

          {clickable && (
            <ChevronRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
          )}
        </div>
      )}
    </article>
  );
}
