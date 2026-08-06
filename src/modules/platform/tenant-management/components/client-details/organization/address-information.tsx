import { MapPinned } from "lucide-react";

import {
  ReviewCard,
  ReviewGrid,
  ReviewItem,
} from "@/shared/components/platform/review";

export function AddressInformation() {
  return (
    <ReviewCard
      title="Address Information"
      description="Registered office address."
      icon={MapPinned}
    >
      <ReviewGrid>
        <ReviewItem label="Country" value="Bangladesh" />

        <ReviewItem label="Division" value="Dhaka" />

        <ReviewItem label="City" value="Dhaka" />

        <ReviewItem label="Postal Code" value="1207" />

        <ReviewItem label="Address" value="House 12, Road 7, Dhanmondi" />
      </ReviewGrid>
    </ReviewCard>
  );
}
