import { CalendarClock } from "lucide-react";

import {
  ReviewCard,
  ReviewGrid,
  ReviewItem,
} from "@/shared/components/platform/review";

export function OverviewSubscription() {
  return (
    <ReviewCard
      title="Subscription"
      description="Subscription overview."
      icon={CalendarClock}
    >
      <ReviewGrid>
        <ReviewItem label="Status" value="Active" />

        <ReviewItem label="Started" value="01 Aug 2026" />

        <ReviewItem label="Renewal" value="01 Aug 2027" />

        <ReviewItem label="Trial" value="30 Days" />
      </ReviewGrid>
    </ReviewCard>
  );
}
