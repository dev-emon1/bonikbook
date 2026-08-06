import { CalendarClock, Pencil } from "lucide-react";

import {
  ReviewCard,
  ReviewGrid,
  ReviewItem,
} from "@/shared/components/platform/review";

import { Button } from "@/shared/ui/button";

type Props = {
  onEdit?: () => void;
};

export function SubscriptionSummary({ onEdit }: Props) {
  return (
    <ReviewCard
      title="Subscription Information"
      description="Review the subscription configuration."
      icon={CalendarClock}
      actions={
        <Button size="sm" variant="outline" onClick={onEdit}>
          <Pencil className="mr-2 size-4" />
          Edit
        </Button>
      }
    >
      <ReviewGrid>
        <ReviewItem label="Subscription Status" value="Active" />

        <ReviewItem label="Start Date" value="01 Aug 2026" />

        <ReviewItem label="Renewal Date" value="01 Aug 2027" />

        <ReviewItem label="Trial" value="30 Days" />

        <ReviewItem label="Invoice Frequency" value="Yearly" />

        <ReviewItem label="Renewal" value="Automatic" />
      </ReviewGrid>
    </ReviewCard>
  );
}
