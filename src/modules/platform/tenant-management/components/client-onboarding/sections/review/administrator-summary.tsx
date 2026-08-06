import { Pencil, UserRound } from "lucide-react";

import {
  ReviewCard,
  ReviewGrid,
  ReviewItem,
} from "@/shared/components/platform/review";

import { Button } from "@/shared/ui/button";

type Props = {
  onEdit?: () => void;
};

export function AdministratorSummary({ onEdit }: Props) {
  return (
    <ReviewCard
      title="Administrator Information"
      description="Review the primary administrator account."
      icon={UserRound}
      actions={
        <Button size="sm" variant="outline" onClick={onEdit}>
          <Pencil className="mr-2 size-4" />
          Edit
        </Button>
      }
    >
      <ReviewGrid>
        <ReviewItem label="Full Name" value="John Doe" />

        <ReviewItem label="Designation" value="HR Manager" />

        <ReviewItem label="Username" value="john.doe" />

        <ReviewItem label="Work Email" value="john@technova.com" />

        <ReviewItem label="Phone Number" value="+8801700000000" />

        <ReviewItem label="Recovery Email" value="recovery@technova.com" />
      </ReviewGrid>
    </ReviewCard>
  );
}
