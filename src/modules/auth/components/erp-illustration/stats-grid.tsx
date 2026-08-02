const stats = [
  {
    label: "Sales",
    value: "+18%",
    color: "bg-emerald-500",
  },
  {
    label: "Profit",
    value: "$28K",
    color: "bg-sky-500",
  },
  {
    label: "Products",
    value: "1,248",
    color: "bg-amber-500",
  },
  {
    label: "Invoices",
    value: "438",
    color: "bg-violet-500",
  },
];

export function StatsGrid() {
  return (
    <section className="grid grid-cols-2 gap-2.5">
      {stats.map((item) => (
        <article
          key={item.label}
          className="group rounded-xl border border-border/60 bg-background/70 p-2.5 backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/25 hover:bg-primary/[0.025]"
        >
          <div className="flex items-center justify-between">
            <p className="truncate text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {item.label}
            </p>

            <span className={`h-2 w-2 rounded-full ${item.color}`} />
          </div>

          <h4 className="mt-1 text-base font-bold tracking-tight lg:text-lg">
            {item.value}
          </h4>
        </article>
      ))}
    </section>
  );
}
