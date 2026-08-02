import {
  BarChart3,
  Boxes,
  CreditCard,
  LayoutDashboard,
  ShoppingCart,
  Users,
} from "lucide-react";

const menus = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  {
    label: "Inventory",
    icon: Boxes,
  },
  {
    label: "Sales",
    icon: ShoppingCart,
  },
  {
    label: "Accounts",
    icon: CreditCard,
  },
  {
    label: "Customers",
    icon: Users,
  },
  {
    label: "Reports",
    icon: BarChart3,
  },
];

export function DashboardSidebar() {
  return (
    <aside className="flex w-[108px] shrink-0 flex-col border-r border-border/60 bg-muted/15 p-2.5 lg:w-[116px] lg:p-3">
      <nav className="space-y-1">
        {menus.map(({ label, icon: Icon, active }) => (
          <button
            key={label}
            type="button"
            className={`group flex h-8 w-full items-center gap-2 rounded-lg px-2 text-left transition-all duration-200 ${
              active
                ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                : "text-muted-foreground hover:bg-background hover:text-foreground"
            }`}
          >
            <Icon className="size-3.5 shrink-0" />

            <span className="truncate text-[10px] font-medium">{label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto rounded-xl border border-primary/15 bg-primary/5 p-2.5">
        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-primary">
          Enterprise
        </p>

        <p className="mt-1 text-[10px] leading-4 text-muted-foreground">
          Inventory, Sales & Accounts in one place.
        </p>
      </div>
    </aside>
  );
}
