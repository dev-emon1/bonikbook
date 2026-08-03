import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

import { cn } from "@/shared/lib/utils";

import type { PendingAction } from "../../types";

type Props = {
  action: PendingAction;
};

const priorityClasses = {
  low: "bg-info/10 text-info",

  medium: "bg-warning/10 text-warning",

  high: "bg-destructive/10 text-destructive",
} as const;

export default function PendingActionItem({ action }: Props) {
  return (
    <Link
      to={action.href}
      className={cn(
        "group flex items-center justify-between rounded-2xl border border-border bg-background",
        "transition-default hover:border-primary/20 hover:bg-accent/40",
        "p-4",
      )}
    >
      <div className="min-w-0">
        <h4 className="text-sm font-medium text-foreground">{action.title}</h4>

        <div className="mt-2 flex items-center gap-2">
          <span
            className={cn(
              "rounded-full px-2 py-0.5 text-xs font-semibold",
              priorityClasses[action.priority],
            )}
          >
            {action.priority.toUpperCase()}
          </span>

          <span className="text-xs text-muted-foreground">
            {action.count} pending
          </span>
        </div>
      </div>

      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-default group-hover:bg-primary group-hover:text-primary-foreground">
        <ArrowRight className="size-4" />
      </div>
    </Link>
  );
}
