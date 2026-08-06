import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table";

import type { DataTableProps } from "./table.types";

import { DataTableEmpty } from "./data-table-empty";
import { DataTableLoading } from "./data-table-loading";

export function DataTable<TData, TValue>({
  columns,
  data,
  loading = false,
  emptyTitle = "No data found",
  emptyDescription,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,

    columns,

    getCoreRowModel: getCoreRowModel(),
  });

  if (loading) {
    return <DataTableLoading />;
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card card-shadow">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((group) => (
            <TableRow key={group.id}>
              {group.headers.map((header) => (
                <TableHead key={header.id} className="h-12 whitespace-nowrap">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <DataTableEmpty
              title={emptyTitle}
              description={emptyDescription}
              colSpan={columns.length}
            />
          )}
        </TableBody>
      </Table>
    </div>
  );
}
