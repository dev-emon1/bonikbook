import { ReceiptText } from "lucide-react";

import {
  ReviewCard,
  ReviewGrid,
  ReviewItem,
} from "@/shared/components/platform/review";

export function BillingInformation() {
  return (
    <ReviewCard
      title="Billing Information"
      description="Client billing profile."
      icon={ReceiptText}
    >
      <ReviewGrid>
        <ReviewItem label="Billing Contact" value="John Doe" />

        <ReviewItem label="Billing Email" value="billing@technova.com" />

        <ReviewItem label="Invoice Frequency" value="Yearly" />

        <ReviewItem label="Currency" value="BDT" />
      </ReviewGrid>
    </ReviewCard>
  );
}
