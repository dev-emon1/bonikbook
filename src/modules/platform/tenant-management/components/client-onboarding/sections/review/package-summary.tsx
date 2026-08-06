import { Package, Pencil } from "lucide-react";

import {
  ReviewCard,
  ReviewGrid,
  ReviewItem,
} from "@/shared/components/platform/review";

import { Button } from "@/shared/ui/button";

type Props = {
  onEdit?: () => void;
};

export function PackageSummary({ onEdit }: Props) {
  return (
    <ReviewCard
      title="Package Information"
      description="Review the selected package before creating the client."
      icon={Package}
      actions={
        <Button size="sm" variant="outline" onClick={onEdit}>
          <Pencil className="mr-2 size-4" />
          Edit
        </Button>
      }
    >
      <ReviewGrid>
        <ReviewItem label="Package" value="Professional" />

        <ReviewItem label="Billing Cycle" value="Yearly" />

        <ReviewItem label="Employees" value="500" />

        <ReviewItem label="Branches" value="10" />

        <ReviewItem label="Storage" value="50 GB" />

        <ReviewItem label="Administrators" value="10" />
      </ReviewGrid>
    </ReviewCard>
  );
}
