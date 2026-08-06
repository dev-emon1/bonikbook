import {
  Building2,
  CalendarDays,
  Globe,
  MoreHorizontal,
  Pencil,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/shared/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";

import { Badge } from "@/shared/ui/badge";

type ClientDetailsHeaderProps = {
  companyName: string;

  workspace: string;

  packageName: string;

  status: "active" | "pending" | "suspended";

  createdAt: string;
};

export function ClientDetailsHeader({
  companyName,
  workspace,
  packageName,
  status,
  createdAt,
}: ClientDetailsHeaderProps) {
  return (
    <div className="rounded-3xl border bg-card p-8">
      <div className="flex flex-col gap-8 xl:flex-row xl:items-start xl:justify-between">
        {/* Left */}

        <div className="flex items-start gap-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/10 text-primary">
            <Building2 className="size-8" />
          </div>

          <div className="space-y-4">
            <div>
              <h1 className="text-3xl font-bold">{companyName}</h1>

              <p className="mt-1 text-muted-foreground">Tenant Workspace</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Badge>{packageName}</Badge>

              <Badge
                variant={status === "suspended" ? "destructive" : "secondary"}
                className={
                  status === "active"
                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    : status === "pending"
                      ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                      : undefined
                }
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </Badge>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Globe className="size-4" />

                {workspace}
              </div>

              <div className="flex items-center gap-2">
                <CalendarDays className="size-4" />
                Created {createdAt}
              </div>
            </div>
          </div>
        </div>

        {/* Right */}

        <div className="flex flex-wrap gap-3">
          <Button variant="outline">
            <Pencil className="size-4" />
            Edit
          </Button>

          <Button variant="outline">
            <ShieldCheck className="size-4" />
            Login as Client
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline" size="icon">
                <MoreHorizontal className="size-4" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem>Suspend</DropdownMenuItem>

              <DropdownMenuItem>Reset Password</DropdownMenuItem>

              <DropdownMenuItem>Send Welcome Email</DropdownMenuItem>

              <DropdownMenuItem className="text-destructive">
                Archive Client
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
