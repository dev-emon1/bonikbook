import { ShieldCheck } from "lucide-react";

import {
  FormField,
  FormGrid,
  FormSectionCard,
} from "@/shared/components/platform/forms";

import { Input } from "@/shared/ui/input";

export function AccountSecurity() {
  return (
    <FormSectionCard
      title="Account Security"
      description="Configure login credentials for the primary administrator."
      icon={ShieldCheck}
    >
      <FormGrid columns={2}>
        <FormField
          label="Username"
          required
          hint="Must be unique across the platform."
        >
          <Input placeholder="admin.technova" />
        </FormField>

        <FormField label="Recovery Email" optional>
          <Input type="email" placeholder="recovery@example.com" />
        </FormField>

        <FormField label="Password" required hint="Minimum 8 characters.">
          <Input type="password" placeholder="Enter password" />
        </FormField>

        <FormField label="Confirm Password" required>
          <Input type="password" placeholder="Confirm password" />
        </FormField>
      </FormGrid>
    </FormSectionCard>
  );
}
