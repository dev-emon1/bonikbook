import { CircleAlert } from "lucide-react";

import { FormSectionCard } from "@/shared/components/platform/forms";

import { Checkbox } from "@/shared/ui/checkbox";
import { Label } from "@/shared/ui/label";

export function Confirmation() {
  return (
    <FormSectionCard
      title="Confirmation"
      description="Review and confirm before creating the client workspace."
      icon={CircleAlert}
    >
      <div className="space-y-5">
        <div className="flex items-start gap-3 rounded-2xl border border-border p-5">
          <Checkbox id="confirm-information" defaultChecked />

          <div className="space-y-1">
            <Label htmlFor="confirm-information" className="cursor-pointer">
              I confirm that all information is correct.
            </Label>

            <p className="text-sm text-muted-foreground">
              Please verify the organization, administrator, package and
              subscription information before creating the client.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-2xl border border-border p-5">
          <Checkbox id="create-workspace" defaultChecked />

          <div className="space-y-1">
            <Label htmlFor="create-workspace" className="cursor-pointer">
              Create workspace immediately
            </Label>

            <p className="text-sm text-muted-foreground">
              Automatically provision the client workspace after successful
              onboarding.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-2xl border border-border p-5">
          <Checkbox id="send-email" defaultChecked />

          <div className="space-y-1">
            <Label htmlFor="send-email" className="cursor-pointer">
              Send welcome email
            </Label>

            <p className="text-sm text-muted-foreground">
              Send the administrator account information to the registered email
              address.
            </p>
          </div>
        </div>
      </div>
    </FormSectionCard>
  );
}
