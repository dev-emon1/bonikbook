import { MapPinned } from "lucide-react";

import {
  FormField,
  FormGrid,
  FormSectionCard,
} from "@/shared/components/platform/forms";

import { AppSelect } from "@/shared/ui/app-select";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";

const countryOptions = [
  { label: "Bangladesh", value: "bd" },
  { label: "United States", value: "us" },
  { label: "United Kingdom", value: "uk" },
  { label: "Canada", value: "ca" },
];

const divisionOptions = [
  { label: "Dhaka", value: "dhaka" },
  { label: "Chattogram", value: "chattogram" },
  { label: "Rajshahi", value: "rajshahi" },
  { label: "Khulna", value: "khulna" },
];

export function AddressInformation() {
  return (
    <FormSectionCard
      title="Address Information"
      description="Business location and mailing address."
      icon={MapPinned}
    >
      <FormGrid columns={2}>
        <FormField label="Country" required>
          <AppSelect
            value=""
            placeholder="Select country"
            options={countryOptions}
            searchable
            onChange={() => {}}
          />
        </FormField>

        <FormField label="State / Division" required>
          <AppSelect
            value=""
            placeholder="Select state"
            options={divisionOptions}
            searchable={false}
            onChange={() => {}}
          />
        </FormField>

        <FormField label="City" required>
          <Input placeholder="Enter city" />
        </FormField>

        <FormField label="Postal Code">
          <Input placeholder="Postal code" />
        </FormField>
      </FormGrid>

      <FormField label="Business Address" required>
        <Textarea
          placeholder="Enter full business address"
          className="min-h-28 resize-none"
        />
      </FormField>

      <FormField
        label="Google Map URL"
        optional
        hint="Paste the Google Maps location link if available."
      >
        <Input placeholder="https://maps.google.com/..." />
      </FormField>
    </FormSectionCard>
  );
}
