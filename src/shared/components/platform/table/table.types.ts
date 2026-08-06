import type { ReactNode } from "react";
import type { ColumnDef, Table } from "@tanstack/react-table";

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];

  data: TData[];

  loading?: boolean;

  searchable?: boolean;

  searchPlaceholder?: string;

  toolbar?: React.ReactNode;

  emptyTitle?: string;

  emptyDescription?: string;
}

export interface DataTableToolbarProps<TData> {
  table: Table<TData>;

  children?: React.ReactNode;
}
