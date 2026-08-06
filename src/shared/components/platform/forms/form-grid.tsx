import type { PropsWithChildren } from "react";

import { cn } from "@/shared/lib/utils";

type FormGridColumns = 1 | 2 | 3 | 4;

type FormGridProps = PropsWithChildren<{
  columns?: FormGridColumns;

  className?: string;
}>;

const GRID_COLUMNS: Record<FormGridColumns, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 lg:grid-cols-2",
  3: "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 xl:grid-cols-4",
};

export function FormGrid({ columns = 2, className, children }: FormGridProps) {
  return (
    <div className={cn("grid gap-5", GRID_COLUMNS[columns], className)}>
      {children}
    </div>
  );
}
