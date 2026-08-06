import { FileText } from "lucide-react";

import { ReviewCard } from "@/shared/components/platform/review";

const invoices = [
  {
    id: "INV-10025",
    amount: "৳29,990",
    status: "Paid",
  },
  {
    id: "INV-10024",
    amount: "৳29,990",
    status: "Paid",
  },
  {
    id: "INV-10023",
    amount: "৳29,990",
    status: "Paid",
  },
];

export function RecentInvoices() {
  return (
    <ReviewCard
      title="Recent Invoices"
      description="Latest generated invoices."
      icon={FileText}
    >
      <div className="space-y-3">
        {invoices.map((invoice) => (
          <div
            key={invoice.id}
            className="flex items-center justify-between rounded-xl border p-4"
          >
            <div>
              <p className="font-medium">{invoice.id}</p>

              <p className="text-sm text-muted-foreground">{invoice.amount}</p>
            </div>

            <span className="text-sm font-medium text-green-600">
              {invoice.status}
            </span>
          </div>
        ))}
      </div>
    </ReviewCard>
  );
}
