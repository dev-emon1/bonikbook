import { BriefcaseBusiness } from "lucide-react";

import {
  FormField,
  FormGrid,
  FormSectionCard,
} from "@/shared/components/platform/forms";

import { AppSelect } from "@/shared/ui/app-select";
import { Input } from "@/shared/ui/input";

const industryOptions = [
  { label: "Software & IT", value: "software" },
  { label: "Garments & Textile", value: "garments" },
  { label: "Healthcare", value: "healthcare" },
  { label: "Education", value: "education" },
  { label: "Manufacturing", value: "manufacturing" },
  { label: "Retail", value: "retail" },
  { label: "Construction", value: "construction" },
  { label: "Financial Services", value: "finance" },
];

const businessTypeOptions = [
  { label: "Private Limited", value: "private" },
  { label: "Public Limited", value: "public" },
  { label: "Partnership", value: "partnership" },
  { label: "Sole Proprietorship", value: "sole" },
  { label: "NGO / Non-Profit", value: "ngo" },
];

const companySizeOptions = [
  { label: "1 - 10 Employees", value: "1-10" },
  { label: "11 - 50 Employees", value: "11-50" },
  { label: "51 - 200 Employees", value: "51-200" },
  { label: "201 - 500 Employees", value: "201-500" },
  { label: "500+ Employees", value: "500+" },
];

const fiscalYearOptions = [
  { label: "January - December", value: "jan-dec" },
  { label: "July - June", value: "jul-jun" },
  { label: "April - March", value: "apr-mar" },
];

export function BusinessInformation() {
  return (
    <FormSectionCard
      title="Business Information"
      description="Business classification and organizational profile."
      icon={BriefcaseBusiness}
    >
      <FormGrid columns={2}>
        <FormField label="Industry" required>
          <AppSelect
            value=""
            placeholder="Select industry"
            options={industryOptions}
            searchable={false}
            onChange={() => {}}
          />
        </FormField>

        <FormField label="Business Type" required>
          <AppSelect
            value=""
            placeholder="Select business type"
            options={businessTypeOptions}
            searchable={false}
            onChange={() => {}}
          />
        </FormField>

        <FormField label="Company Size" required>
          <AppSelect
            value=""
            placeholder="Select company size"
            options={companySizeOptions}
            searchable={false}
            onChange={() => {}}
          />
        </FormField>

        <FormField label="Expected Employee Count">
          <Input placeholder="e.g. 150" />
        </FormField>

        <FormField label="Fiscal Year">
          <AppSelect
            value=""
            placeholder="Select fiscal year"
            options={fiscalYearOptions}
            searchable={false}
            onChange={() => {}}
          />
        </FormField>

        <FormField label="Trade License Number" optional>
          <Input placeholder="Enter trade license number" />
        </FormField>
      </FormGrid>
    </FormSectionCard>
  );
}
