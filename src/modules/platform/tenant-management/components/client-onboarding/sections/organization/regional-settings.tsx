import { Globe2, Clock3 } from "lucide-react";

import {
  FormField,
  FormGrid,
  FormSectionCard,
} from "@/shared/components/platform/forms";

import { AppSelect } from "@/shared/ui/app-select";

const languageOptions = [
  { label: "English", value: "en" },
  { label: "বাংলা", value: "bn" },
];

const currencyOptions = [
  { label: "Bangladeshi Taka (BDT)", value: "BDT" },
  { label: "US Dollar (USD)", value: "USD" },
  { label: "Euro (EUR)", value: "EUR" },
];

const timezoneOptions = [
  { label: "(UTC+06:00) Dhaka", value: "Asia/Dhaka" },
  { label: "(UTC+00:00) London", value: "Europe/London" },
  { label: "(UTC-05:00) New York", value: "America/New_York" },
];

const dateFormatOptions = [
  { label: "DD/MM/YYYY", value: "dd-mm-yyyy" },
  { label: "MM/DD/YYYY", value: "mm-dd-yyyy" },
  { label: "YYYY-MM-DD", value: "yyyy-mm-dd" },
];

const timeFormatOptions = [
  { label: "12 Hour", value: "12" },
  { label: "24 Hour", value: "24" },
];

const weekStartOptions = [
  { label: "Sunday", value: "sun" },
  { label: "Monday", value: "mon" },
];

export function RegionalSettings() {
  return (
    <FormSectionCard
      title="Regional Settings"
      description="Default localization settings for this client."
      icon={Globe2}
    >
      <FormGrid columns={2}>
        <FormField label="Language" required>
          <AppSelect
            value="en"
            options={languageOptions}
            placeholder="Select language"
            searchable={false}
            onChange={() => {}}
          />
        </FormField>

        <FormField label="Currency" required>
          <AppSelect
            value="BDT"
            options={currencyOptions}
            placeholder="Select currency"
            searchable
            onChange={() => {}}
          />
        </FormField>

        <FormField label="Timezone" required>
          <AppSelect
            value="Asia/Dhaka"
            options={timezoneOptions}
            placeholder="Select timezone"
            searchable
            onChange={() => {}}
          />
        </FormField>

        <FormField label="Date Format" required>
          <AppSelect
            value="dd-mm-yyyy"
            options={dateFormatOptions}
            placeholder="Select date format"
            searchable={false}
            onChange={() => {}}
          />
        </FormField>

        <FormField label="Time Format">
          <AppSelect
            value="12"
            options={timeFormatOptions}
            placeholder="Select time format"
            searchable={false}
            onChange={() => {}}
          />
        </FormField>

        <FormField label="Week Starts On">
          <AppSelect
            value="sun"
            options={weekStartOptions}
            placeholder="Select first day"
            searchable={false}
            onChange={() => {}}
          />
        </FormField>
      </FormGrid>

      <div className="rounded-2xl border border-primary/15 bg-primary/5 p-4">
        <div className="flex items-start gap-3">
          <Clock3 className="mt-0.5 size-5 text-primary" />

          <div>
            <h4 className="font-medium">Regional Defaults</h4>

            <p className="mt-1 text-sm text-muted-foreground">
              These settings will be used as the default language, currency,
              timezone and date/time format across the client's workspace.
              Individual users can override some preferences from their personal
              profile later.
            </p>
          </div>
        </div>
      </div>
    </FormSectionCard>
  );
}
