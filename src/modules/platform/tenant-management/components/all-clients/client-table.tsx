import { DataTable } from "@/shared/components/platform/table";

import { clients } from "../../mock";

import { useClientColumns } from "./client-columns";

export function ClientTable() {
  const clientColumns = useClientColumns();

  return (
    <DataTable
      columns={clientColumns}
      data={clients}
      emptyTitle="No clients found"
      emptyDescription="There are no clients matching your current filters."
    />
  );
}
