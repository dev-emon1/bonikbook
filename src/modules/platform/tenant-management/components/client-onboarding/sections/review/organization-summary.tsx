import { Building2, Pencil } from "lucide-react";

import {
  ReviewCard,
  ReviewGrid,
  ReviewItem,
} from "@/shared/components/platform/review";

import { Button } from "@/shared/ui/button";

type Props = {
  onEdit?: () => void;
};

export function OrganizationSummary({ onEdit }: Props) {
  return (
    <ReviewCard
      title="Organization Information"
      description="Review the organization details before creating the client."
      icon={Building2}
      actions={
        <Button size="sm" variant="outline" onClick={onEdit}>
          <Pencil className="mr-2 size-4" />
          Edit
        </Button>
      }
    >
      <ReviewGrid>
        <ReviewItem label="Company Name" value="TechNova Ltd." />

        <ReviewItem label="Company Code" value="TECH-001" />

        <ReviewItem label="Company Email" value="info@technova.com" />

        <ReviewItem label="Phone Number" value="+8801700000000" />

        <ReviewItem label="Industry" value="Software & IT" />

        <ReviewItem label="Business Type" value="Private Limited" />

        <ReviewItem label="Company Size" value="51 - 200 Employees" />

        <ReviewItem label="Country" value="Bangladesh" />

        <ReviewItem label="Timezone" value="Asia/Dhaka" />

        <ReviewItem label="Currency" value="BDT" />
      </ReviewGrid>
    </ReviewCard>
  );
}
