import { Building2, Plus } from "lucide-react";

import { PageHeader } from "@/shared/components/platform/page";
import { Button } from "@/shared/ui/button";

export function OnboardingHeader() {
  return (
    <PageHeader
      title="Client Onboarding"
      description="Create a new client organization, assign a package, configure the subscription and provision the administrator account."
      icon={Building2}
      actions={<Button variant="outline">Save Draft</Button>}
    />
  );
}
