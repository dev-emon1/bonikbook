import { CalendarClock } from "lucide-react";

import {
  ReviewCard,
  ReviewGrid,
  ReviewItem,
} from "@/shared/components/platform/review";

export function SubscriptionDetails() {
  return (
    <ReviewCard
      title="Subscription Details"
      description="Current subscription information."
      icon={CalendarClock}
    >
      <ReviewGrid>
        <ReviewItem label="Subscription" value="Enterprise" />

        <ReviewItem label="Status" value="Active" />

        <ReviewItem label="Billing Cycle" value="Yearly" />

        <ReviewItem label="Started" value="01 Aug 2026" />

        <ReviewItem label="Renewal Date" value="01 Aug 2027" />

        <ReviewItem label="Currency" value="BDT" />
      </ReviewGrid>
    </ReviewCard>
  );
}
