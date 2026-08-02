const orders = [
  {
    id: "#INV-2048",
    customer: "Olivia Smith",
    amount: "$1,240",
    status: "Paid",
  },
  {
    id: "#INV-2049",
    customer: "Liam Johnson",
    amount: "$860",
    status: "Pending",
  },
];

const statusStyles: Record<string, string> = {
  Paid: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  Pending: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
};

export function RecentOrders() {
  return (
    <section className="rounded-xl border border-border/60 bg-background/70 p-3 backdrop-blur-xl">
      <div className="mb-2 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Recent Orders
          </p>

          <h3 className="mt-0.5 text-sm font-semibold text-foreground">
            Latest Transactions
          </h3>
        </div>

        <button
          type="button"
          className="rounded-md px-2 py-1 text-[10px] font-medium text-primary transition-colors hover:bg-primary/10"
        >
          View All
        </button>
      </div>

      <div className="space-y-2">
        {orders.map((order) => (
          <div
            key={order.id}
            className="flex items-center justify-between rounded-lg border border-border/50 px-2.5 py-2 transition-colors hover:border-primary/20 hover:bg-muted/40"
          >
            <div className="min-w-0">
              <p className="truncate text-[11px] font-semibold text-foreground">
                {order.customer}
              </p>

              <p className="truncate text-[10px] text-muted-foreground">
                {order.id}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[11px] font-semibold text-foreground">
                {order.amount}
              </span>

              <span
                className={`rounded-full px-2 py-0.5 text-[9px] font-semibold ${statusStyles[order.status]}`}
              >
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
