import { CalendarDays } from "lucide-react";

import {
  FormField,
  FormGrid,
  FormSectionCard,
} from "@/shared/components/platform/forms";

import { AppSelect } from "@/shared/ui/app-select";
import { Input } from "@/shared/ui/input";

const billingCycleOptions = [
  {
    label: "Monthly",
    value: "monthly",
  },
  {
    label: "Yearly",
    value: "yearly",
  },
];

const statusOptions = [
  {
    label: "Active",
    value: "active",
  },
  {
    label: "Pending",
    value: "pending",
  },
];

export function SubscriptionDetails() {
  return (
    <FormSectionCard
      title="Subscription Details"
      description="Configure the client's subscription."
      icon={CalendarDays}
    >
      <FormGrid columns={2}>
        <FormField label="Billing Cycle" required>
          <AppSelect
            value="yearly"
            options={billingCycleOptions}
            searchable={false}
            onChange={() => {}}
          />
        </FormField>

        <FormField label="Subscription Status" required>
          <AppSelect
            value="active"
            options={statusOptions}
            searchable={false}
            onChange={() => {}}
          />
        </FormField>

        <FormField label="Start Date" required>
          <Input type="date" />
        </FormField>

        <FormField label="Renewal Date">
          <Input type="date" />
        </FormField>
      </FormGrid>
    </FormSectionCard>
  );
}
