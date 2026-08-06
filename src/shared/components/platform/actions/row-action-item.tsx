import {
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/shared/ui/dropdown-menu";

import { cn } from "@/shared/lib/utils";
import type { PlatformAction } from "./action.types";

type Props<TData> = {
  action: PlatformAction<TData>;

  row: TData;
};

export function RowActionMenuItem<TData>({ action, row }: Props<TData>) {
  if (action.hidden) {
    return null;
  }

  return (
    <>
      {action.separatorBefore && <DropdownMenuSeparator />}

      <DropdownMenuItem
        disabled={action.disabled}
        onClick={() => action.onClick(row)}
        className={cn(
          "cursor-pointer",

          action.variant === "warning" && "text-warning focus:text-warning",

          action.variant === "danger" &&
            "text-destructive focus:text-destructive",
        )}
      >
        {action.icon && <span className="mr-2">{action.icon}</span>}

        <span className="flex-1">{action.label}</span>

        {action.shortcut && (
          <span className="text-xs text-muted-foreground">
            {action.shortcut}
          </span>
        )}
      </DropdownMenuItem>
    </>
  );
}
