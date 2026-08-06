import { FlaskConical } from "lucide-react";

import {
  FormField,
  FormGrid,
  FormSectionCard,
} from "@/shared/components/platform/forms";

import { Checkbox } from "@/shared/ui/checkbox";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";

export function TrialConfiguration() {
  return (
    <FormSectionCard
      title="Trial Configuration"
      description="Configure the client's trial period before subscription activation."
      icon={FlaskConical}
    >
      <div className="space-y-6">
        <div className="flex items-start gap-3 rounded-2xl border p-5">
          <Checkbox id="enable-trial" defaultChecked />

          <div className="space-y-1">
            <Label htmlFor="enable-trial" className="cursor-pointer">
              Enable Trial Period
            </Label>

            <p className="text-sm text-muted-foreground">
              Allow the client to use the system before paid subscription
              starts.
            </p>
          </div>
        </div>

        <FormGrid columns={2}>
          <FormField
            label="Trial Duration (Days)"
            required
            hint="Common values: 7, 14 or 30 days."
          >
            <Input type="number" placeholder="30" />
          </FormField>

          <FormField
            label="Grace Period (Days)"
            hint="Optional extension after trial expires."
          >
            <Input type="number" placeholder="0" />
          </FormField>

          <FormField label="Trial Start Date">
            <Input type="date" />
          </FormField>

          <FormField label="Trial End Date">
            <Input type="date" />
          </FormField>
        </FormGrid>

        <div className="space-y-4 rounded-2xl border p-5">
          <div className="flex items-start gap-3">
            <Checkbox id="auto-activate" defaultChecked />

            <div>
              <Label htmlFor="auto-activate" className="cursor-pointer">
                Automatically activate subscription
              </Label>

              <p className="text-sm text-muted-foreground">
                Activate the paid subscription automatically after the trial
                period ends.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Checkbox id="notify-before-expire" />

            <div>
              <Label htmlFor="notify-before-expire" className="cursor-pointer">
                Notify before trial expires
              </Label>

              <p className="text-sm text-muted-foreground">
                Send reminder notifications before the trial period ends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </FormSectionCard>
  );
}
