import { RotateCcw } from "lucide-react";

import {
  FormField,
  FormGrid,
  FormSectionCard,
} from "@/shared/components/platform/forms";

import { AppSelect } from "@/shared/ui/app-select";
import { Checkbox } from "@/shared/ui/checkbox";
import { Label } from "@/shared/ui/label";

const renewalTypeOptions = [
  {
    label: "Auto Renewal",
    value: "auto",
  },
  {
    label: "Manual Renewal",
    value: "manual",
  },
];

const reminderOptions = [
  {
    label: "3 Days Before",
    value: "3",
  },
  {
    label: "7 Days Before",
    value: "7",
  },
  {
    label: "15 Days Before",
    value: "15",
  },
  {
    label: "30 Days Before",
    value: "30",
  },
];

export function RenewalSettings() {
  return (
    <FormSectionCard
      title="Renewal Settings"
      description="Configure how this subscription should renew."
      icon={RotateCcw}
    >
      <FormGrid columns={2}>
        <FormField label="Renewal Method" required>
          <AppSelect
            value="auto"
            options={renewalTypeOptions}
            searchable={false}
            onChange={() => {}}
          />
        </FormField>

        <FormField label="Renewal Reminder" required>
          <AppSelect
            value="7"
            options={reminderOptions}
            searchable={false}
            onChange={() => {}}
          />
        </FormField>
      </FormGrid>

      <div className="space-y-4 rounded-2xl border border-border p-5">
        <div className="flex items-start gap-3">
          <Checkbox id="notify-admin" defaultChecked />

          <div className="space-y-1">
            <Label htmlFor="notify-admin" className="cursor-pointer">
              Notify administrator before renewal
            </Label>

            <p className="text-sm text-muted-foreground">
              Send an email reminder before the subscription renewal date.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Checkbox id="grace-period" defaultChecked />

          <div className="space-y-1">
            <Label htmlFor="grace-period" className="cursor-pointer">
              Enable grace period
            </Label>

            <p className="text-sm text-muted-foreground">
              Allow the client to continue using the platform for a limited
              period after subscription expiration.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Checkbox id="suspend-expired" />

          <div className="space-y-1">
            <Label htmlFor="suspend-expired" className="cursor-pointer">
              Suspend workspace after expiration
            </Label>

            <p className="text-sm text-muted-foreground">
              Automatically suspend access if the subscription is not renewed.
            </p>
          </div>
        </div>
      </div>
    </FormSectionCard>
  );
}
