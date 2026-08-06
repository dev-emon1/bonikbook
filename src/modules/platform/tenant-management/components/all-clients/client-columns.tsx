import type { ColumnDef } from "@tanstack/react-table";
import {
  ArrowUpDown,
  Building2,
  Eye,
  Package,
  Pencil,
  Trash2,
  UserX,
} from "lucide-react";

import type { ClientItem } from "../../types";

import { Button } from "@/shared/ui/button";

import { Status } from "@/shared/components/platform/status";
import { RowActions } from "@/shared/components/platform/actions/row-actions";

export const clientColumns: ColumnDef<ClientItem>[] = [
  {
    accessorKey: "organization",

    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Client
        <ArrowUpDown className="ml-2 size-4" />
      </Button>
    ),

    cell: ({ row }) => {
      const client = row.original;

      return (
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Building2 className="size-5" />
          </div>

          <div>
            <p className="font-semibold">{client.organization}</p>

            <p className="text-xs text-muted-foreground">
              {client.owner.email}
            </p>
          </div>
        </div>
      );
    },
  },

  {
    accessorKey: "package.name",

    header: "Package",

    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Package className="size-4 text-primary" />

        {row.original.package.name}
      </div>
    ),
  },

  {
    accessorKey: "usage.employees",

    header: "Employees",

    cell: ({ row }) => row.original.usage.employees.toLocaleString(),
  },

  {
    accessorKey: "country",

    header: "Country",
  },

  {
    accessorKey: "subscription.billingStatus",

    header: "Billing",

    cell: ({ row }) => (
      <Status status={row.original.subscription.billingStatus} size="sm" />
    ),
  },

  {
    accessorKey: "status",

    header: "Status",

    cell: ({ row }) => (
      <Status status={row.original.status} showDot size="sm" />
    ),
  },

  {
    id: "actions",

    enableHiding: false,

    cell: ({ row }) => (
      <RowActions
        row={row.original}
        actions={[
          {
            id: "view",
            label: "View Details",
            icon: <Eye className="size-4" />,
            onClick: () => {},
          },

          {
            id: "edit",
            label: "Edit Client",
            icon: <Pencil className="size-4" />,
            onClick: () => {},
          },

          {
            id: "package",
            label: "Assign Package",
            separatorBefore: true,
            icon: <Package className="size-4" />,
            onClick: () => {},
          },

          {
            id: "suspend",
            label: "Suspend Client",
            variant: "warning",
            icon: <UserX className="size-4" />,
            onClick: () => {},
          },

          {
            id: "delete",
            label: "Delete Client",
            separatorBefore: true,
            variant: "danger",
            icon: <Trash2 className="size-4" />,
            onClick: () => {},
          },
        ]}
      />
    ),
  },
];
