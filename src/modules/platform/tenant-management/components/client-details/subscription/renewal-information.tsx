import { RotateCcw } from "lucide-react";

import {
  ReviewCard,
  ReviewGrid,
  ReviewItem,
} from "@/shared/components/platform/review";

export function RenewalInformation() {
  return (
    <ReviewCard
      title="Renewal Information"
      description="Renewal policy."
      icon={RotateCcw}
    >
      <ReviewGrid>
        <ReviewItem label="Renewal" value="Automatic" />

        <ReviewItem label="Reminder" value="7 Days Before" />

        <ReviewItem label="Grace Period" value="Enabled" />

        <ReviewItem label="Suspend On Expiry" value="No" />
      </ReviewGrid>
    </ReviewCard>
  );
}
