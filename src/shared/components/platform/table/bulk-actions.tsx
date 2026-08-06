import type { PropsWithChildren } from "react";

import { Button } from "@/shared/ui/button";

type BulkActionsProps = PropsWithChildren<{
  selected: number;

  onClear?: () => void;
}>;

export function BulkActions({ selected, children, onClear }: BulkActionsProps) {
  if (!selected) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-primary/15 bg-primary/5 p-4">
      <div className="text-sm font-medium">
        {selected} item{selected > 1 ? "s" : ""} selected
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {children}

        <Button variant="ghost" size="sm" onClick={onClear}>
          Clear
        </Button>
      </div>
    </div>
  );
}
