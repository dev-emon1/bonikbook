import type { ReactNode } from "react";

import { cn } from "@/shared/lib/utils";

type DashboardCardProps = {
  title: string;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
};

export default function DashboardCard({
  title,
  description,
  action,
  children,
  className,
  bodyClassName,
}: DashboardCardProps) {
  return (
    <section
      className={cn(
        "rounded-3xl border border-border bg-card",
        "card-shadow transition-default",
        className,
      )}
    >
      <header className="flex items-start justify-between gap-4 border-b border-border px-6 py-5">
        <div className="min-w-0">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            {title}
          </h2>

          {description && (
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          )}
        </div>

        {action && <div className="shrink-0">{action}</div>}
      </header>

      <div className={cn("p-6", bodyClassName)}>{children}</div>
    </section>
  );
}
