import { MoreHorizontal } from "lucide-react";

import { Button } from "@/shared/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import type { PlatformAction } from "./action.types";
import { RowActionMenuItem } from "./row-action-item";

type Props<TData> = {
  row: TData;

  actions: PlatformAction<TData>[];
};

export function RowActions<TData>({ row, actions }: Props<TData>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button size="icon" variant="ghost" className="size-9 rounded-xl">
          <MoreHorizontal className="size-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="min-w-56">
        {actions.map((action) => (
          <RowActionMenuItem key={action.id} action={action} row={row} />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
