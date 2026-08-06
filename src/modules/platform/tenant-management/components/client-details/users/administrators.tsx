import { ShieldCheck } from "lucide-react";

import {
  ReviewCard,
  ReviewGrid,
  ReviewItem,
} from "@/shared/components/platform/review";

export function Administrators() {
  return (
    <ReviewCard
      title="Administrators"
      description="Primary workspace administrators."
      icon={ShieldCheck}
    >
      <ReviewGrid>
        <ReviewItem label="Primary Admin" value="John Doe" />

        <ReviewItem label="Email" value="john@technova.com" />

        <ReviewItem label="Role" value="HR Administrator" />

        <ReviewItem label="Status" value="Active" />

        <ReviewItem label="Last Login" value="2 Hours Ago" />

        <ReviewItem label="Two Factor" value="Enabled" />
      </ReviewGrid>
    </ReviewCard>
  );
}
