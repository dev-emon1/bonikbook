import { Inbox } from "lucide-react";

import { TableCell, TableRow } from "@/shared/ui/table";

type DataTableEmptyProps = {
  title: string;
  description?: string;
  colSpan: number;
};

export function DataTableEmpty({
  title,
  description,
  colSpan,
}: DataTableEmptyProps) {
  return (
    <TableRow>
      <TableCell colSpan={colSpan} className="h-72">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
            <Inbox className="size-8 text-muted-foreground" />
          </div>

          <div className="space-y-1">
            <h3 className="text-lg font-semibold">{title}</h3>

            {description && (
              <p className="max-w-md text-sm text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        </div>
      </TableCell>
    </TableRow>
  );
}
