import { CalendarClock } from "lucide-react";

import { FormSectionCard } from "@/shared/components/platform/forms";

import { cn } from "@/shared/lib/utils";

type Props = {
  value: "monthly" | "yearly";

  onChange: (value: "monthly" | "yearly") => void;
};

export function BillingCycle({ value, onChange }: Props) {
  return (
    <FormSectionCard
      title="Billing Cycle"
      description="Choose how the client will be billed."
      icon={CalendarClock}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <button
          type="button"
          onClick={() => onChange("monthly")}
          className={cn(
            "rounded-2xl border p-6 text-left transition-all",
            value === "monthly"
              ? "border-primary bg-primary/5"
              : "hover:border-primary/40",
          )}
        >
          <h3 className="font-semibold">Monthly Billing</h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Flexible monthly subscription.
          </p>
        </button>

        <button
          type="button"
          onClick={() => onChange("yearly")}
          className={cn(
            "relative rounded-2xl border p-6 text-left transition-all",
            value === "yearly"
              ? "border-primary bg-primary/5"
              : "hover:border-primary/40",
          )}
        >
          <div className="absolute right-4 top-4 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            Save 20%
          </div>

          <h3 className="font-semibold">Yearly Billing</h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Pay yearly and receive discounted pricing.
          </p>
        </button>
      </div>
    </FormSectionCard>
  );
}
