import { UserRound } from "lucide-react";

import {
  FormField,
  FormGrid,
  FormSectionCard,
} from "@/shared/components/platform/forms";

import { Input } from "@/shared/ui/input";

export function PersonalInformation() {
  return (
    <FormSectionCard
      title="Personal Information"
      description="Primary administrator account details."
      icon={UserRound}
    >
      <FormGrid columns={2}>
        <FormField label="Full Name" required>
          <Input placeholder="Enter full name" />
        </FormField>

        <FormField label="Designation">
          <Input placeholder="HR Manager" />
        </FormField>

        <FormField label="Work Email" required>
          <Input type="email" placeholder="admin@company.com" />
        </FormField>

        <FormField label="Phone Number" required>
          <Input placeholder="+8801XXXXXXXXX" />
        </FormField>

        <FormField label="Employee ID" optional>
          <Input placeholder="Optional" />
        </FormField>

        <FormField
          label="Profile Photo"
          optional
          hint="Profile image can also be uploaded later."
        >
          <Input type="file" />
        </FormField>
      </FormGrid>
    </FormSectionCard>
  );
}
