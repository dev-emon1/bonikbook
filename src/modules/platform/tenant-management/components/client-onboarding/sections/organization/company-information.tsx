import { Building2 } from "lucide-react";

import {
  FormField,
  FormGrid,
  FormSectionCard,
} from "@/shared/components/platform/forms";

import { Input } from "@/shared/ui/input";

export function CompanyInformation() {
  return (
    <FormSectionCard
      title="Company Information"
      description="Basic details used to identify and manage the client organization."
      icon={Building2}
    >
      <FormGrid columns={2}>
        <FormField label="Company Name" required>
          <Input placeholder="Enter company name" />
        </FormField>

        <FormField
          label="Company Code"
          hint="Leave empty to generate automatically."
        >
          <Input placeholder="e.g. TECH-001" />
        </FormField>

        <FormField label="Company Email" required>
          <Input type="email" placeholder="company@example.com" />
        </FormField>

        <FormField label="Phone Number" required>
          <Input placeholder="+8801XXXXXXXXX" />
        </FormField>

        <FormField label="Website" optional>
          <Input placeholder="https://company.com" />
        </FormField>

        <FormField label="Registration Number" optional>
          <Input placeholder="Business registration number" />
        </FormField>
      </FormGrid>
    </FormSectionCard>
  );
}
