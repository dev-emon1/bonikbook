import type { ReactNode } from "react";

import { cn } from "@/shared/lib/utils";

type ChartContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function ChartContainer({
  children,
  className,
}: ChartContainerProps) {
  return (
    <div className={cn("h-[360px] w-full", "rounded-2xl", className)}>
      {children}
    </div>
  );
}
