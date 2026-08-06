import type { PropsWithChildren, ReactNode } from "react";

import { cn } from "@/shared/lib/utils";

type DataTableToolbarProps = PropsWithChildren<{
  actions?: ReactNode;

  className?: string;
}>;

export function DataTableToolbar({
  children,
  actions,
  className,
}: DataTableToolbarProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 border-b border-border bg-card px-6 py-5 lg:flex-row lg:items-center lg:justify-between",
        className,
      )}
    >
      <div className="flex min-w-0 flex-1 flex-wrap items-center gap-3">
        {children}
      </div>

      {actions && (
        <div className="flex shrink-0 flex-wrap items-center gap-2">
          {actions}
        </div>
      )}
    </div>
  );
}
