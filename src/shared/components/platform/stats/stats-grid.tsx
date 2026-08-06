import { cn } from "@/shared/lib/utils";

import type { StatItem } from "./stats.types";

import { StatCard } from "./stat-card";

type Props = {
  items: StatItem[];

  loading?: boolean;

  clickable?: boolean;

  className?: string;
};

export function StatsGrid({ items, loading, clickable, className }: Props) {
  return (
    <div
      className={cn(
        "grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5",
        className,
      )}
    >
      {items.map((item) => (
        <StatCard
          key={item.id}
          item={item}
          loading={loading}
          clickable={clickable}
        />
      ))}
    </div>
  );
}
