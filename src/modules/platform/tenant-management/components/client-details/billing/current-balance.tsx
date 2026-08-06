import { Wallet } from "lucide-react";

import {
  ReviewCard,
  ReviewGrid,
  ReviewItem,
} from "@/shared/components/platform/review";

export function CurrentBalance() {
  return (
    <ReviewCard
      title="Current Balance"
      description="Subscription billing status."
      icon={Wallet}
    >
      <ReviewGrid>
        <ReviewItem label="Current Balance" value="৳ 0.00" />

        <ReviewItem label="Outstanding" value="৳ 0.00" />

        <ReviewItem label="Next Invoice" value="01 Aug 2027" />

        <ReviewItem label="Next Amount" value="৳ 29,990" />
      </ReviewGrid>
    </ReviewCard>
  );
}
