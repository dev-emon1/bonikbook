import { ArrowUpRight } from "lucide-react";
import { cn } from "@/shared/lib/utils";

interface FloatingCardProps {
  className?: string;
  title: string;
  value: string;
  badge: string;
}

export function FloatingCard({
  className,
  title,
  value,
  badge,
}: FloatingCardProps) {
  return (
    <div
      className={cn(
        "w-44 rounded-2xl border border-border/60 bg-background/80 p-3 shadow-[0_20px_50px_rgba(15,23,42,0.10)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.14)]",
        className,
      )}
    >
      <div className="flex items-start justify-between">
        <div className="min-w-0">
          <p className="truncate text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            {title}
          </p>

          <h3 className="mt-1 truncate text-lg font-bold tracking-tight text-foreground">
            {value}
          </h3>
        </div>

        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <ArrowUpRight className="size-3.5" />
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
          {badge}
        </span>

        <span className="text-[10px] text-muted-foreground">vs last week</span>
      </div>
    </div>
  );
}
