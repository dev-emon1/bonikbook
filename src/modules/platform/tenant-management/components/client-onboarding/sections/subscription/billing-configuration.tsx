import { ReceiptText } from "lucide-react";

import {
  FormField,
  FormGrid,
  FormSectionCard,
} from "@/shared/components/platform/forms";

import { AppSelect } from "@/shared/ui/app-select";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";

const invoiceFrequencyOptions = [
  {
    label: "Monthly",
    value: "monthly",
  },
  {
    label: "Quarterly",
    value: "quarterly",
  },
  {
    label: "Yearly",
    value: "yearly",
  },
];

export function BillingConfiguration() {
  return (
    <FormSectionCard
      title="Billing Configuration"
      description="Configure invoice and billing preferences."
      icon={ReceiptText}
    >
      <FormGrid columns={2}>
        <FormField label="Billing Contact" required>
          <Input placeholder="John Doe" />
        </FormField>

        <FormField label="Billing Email" required>
          <Input type="email" placeholder="billing@company.com" />
        </FormField>

        <FormField label="Invoice Frequency" required>
          <AppSelect
            value="monthly"
            searchable={false}
            options={invoiceFrequencyOptions}
            onChange={() => {}}
          />
        </FormField>

        <FormField label="Purchase Order" optional>
          <Input placeholder="PO-10025" />
        </FormField>
      </FormGrid>

      <FormField label="Internal Billing Notes" optional>
        <Textarea
          className="min-h-28 resize-none"
          placeholder="Write internal notes..."
        />
      </FormField>
    </FormSectionCard>
  );
}
