import { Table, TableBody, TableCell, TableRow } from "@/shared/ui/table";

export function DataTableLoading() {
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card card-shadow">
      <Table>
        <TableBody>
          {Array.from({ length: 8 }).map((_, row) => (
            <TableRow key={row}>
              {Array.from({ length: 7 }).map((_, cell) => (
                <TableCell key={cell}>
                  <div className="h-5 w-full animate-pulse rounded-md bg-muted" />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
