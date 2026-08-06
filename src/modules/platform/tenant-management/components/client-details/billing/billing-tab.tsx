import { BillingInformation } from "./billing-information";
import { CurrentBalance } from "./current-balance";
import { PaymentHistory } from "./payment-history";
import { RecentInvoices } from "./recent-invoices";

export function BillingTab() {
  return (
    <div className="space-y-6">
      <BillingInformation />

      <CurrentBalance />

      <RecentInvoices />

      <PaymentHistory />
    </div>
  );
}
