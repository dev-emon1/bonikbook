import { CreditCard } from "lucide-react";

import {
  ReviewCard,
  ReviewGrid,
  ReviewItem,
} from "@/shared/components/platform/review";

export function PaymentHistory() {
  return (
    <ReviewCard
      title="Payment Summary"
      description="Overall payment statistics."
      icon={CreditCard}
    >
      <ReviewGrid columns={3}>
        <ReviewItem label="Paid Invoices" value="24" />

        <ReviewItem label="Pending" value="0" />

        <ReviewItem label="Failed" value="0" />

        <ReviewItem label="Refunded" value="0" />

        <ReviewItem label="Last Payment" value="01 Aug 2026" />

        <ReviewItem label="Method" value="Bank Transfer" />
      </ReviewGrid>
    </ReviewCard>
  );
}
