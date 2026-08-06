import type { ReactNode } from "react";

import { cn } from "@/shared/lib/utils";

type FilterToolbarProps = {
  children: ReactNode;
  className?: string;
};

export function FilterToolbar({ children, className }: FilterToolbarProps) {
  return (
    <section
      className={cn(
        "rounded-3xl border border-border bg-card p-6 shadow-sm",
        className,
      )}
    >
      <div className="grid gap-4 xl:grid-cols-[2fr_1fr_1fr_1fr_auto]">
        {children}
      </div>
    </section>
  );
}
