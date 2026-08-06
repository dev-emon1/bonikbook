import type { PropsWithChildren } from "react";

import { cn } from "@/shared/lib/utils";

type Props = PropsWithChildren<{
  columns?: 1 | 2 | 3;

  className?: string;
}>;

const GRID = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
};

export function ReviewGrid({ columns = 2, className, children }: Props) {
  return (
    <div className={cn("grid gap-5", GRID[columns], className)}>{children}</div>
  );
}
