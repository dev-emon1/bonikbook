import { CalendarClock, CreditCard, Package, Receipt } from "lucide-react";

import { Separator } from "@/shared/ui/separator";

import { FormSectionCard } from "@/shared/components/platform/forms";

type Props = {
  packageName: string;

  billingCycle: "monthly" | "yearly";

  startDate?: string;

  renewalDate?: string;

  isTrial?: boolean;

  trialDays?: number;

  total: number;
};

export function SubscriptionSummary({
  packageName,
  billingCycle,
  startDate,
  renewalDate,
  isTrial,
  trialDays,
  total,
}: Props) {
  return (
    <FormSectionCard
      title="Subscription Summary"
      description="Review the subscription configuration before continuing."
      icon={Receipt}
    >
      <div className="space-y-6">
        <SummaryRow
          icon={<Package className="size-5" />}
          label="Selected Package"
          value={packageName}
        />

        <SummaryRow
          icon={<CreditCard className="size-5" />}
          label="Billing Cycle"
          value={billingCycle === "monthly" ? "Monthly" : "Yearly"}
        />

        <SummaryRow
          icon={<CalendarClock className="size-5" />}
          label="Subscription Starts"
          value={startDate || "-"}
        />

        <SummaryRow
          icon={<CalendarClock className="size-5" />}
          label="Next Renewal"
          value={renewalDate || "-"}
        />

        <SummaryRow
          icon={<CalendarClock className="size-5" />}
          label="Trial"
          value={isTrial ? `${trialDays} Days` : "Not Enabled"}
        />

        <Separator />

        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Estimated Subscription</span>

          <span className="text-3xl font-bold text-primary">
            ৳{total.toLocaleString()}
          </span>
        </div>
      </div>
    </FormSectionCard>
  );
}

type SummaryRowProps = {
  icon: React.ReactNode;

  label: string;

  value: React.ReactNode;
};

function SummaryRow({ icon, label, value }: SummaryRowProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl border p-4">
      <div className="flex items-center gap-3">
        <div className="text-primary">{icon}</div>

        <span className="font-medium">{label}</span>
      </div>

      <span className="font-semibold">{value}</span>
    </div>
  );
}
