import { Building2, Plus } from "lucide-react";

import { PageHeader } from "@/shared/components/platform/page";
import { Button } from "@/shared/ui/button";

export function ClientPageHeader() {
  return (
    <PageHeader
      title="Clients"
      description="Manage organizations, subscriptions, packages, and account lifecycle from a single place."
      icon={Building2}
      actions={
        <Button>
          <Plus className="size-4" />
          New Client
        </Button>
      }
    />
  );
}
