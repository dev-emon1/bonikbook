import { Bell, Search } from "lucide-react";

export function DashboardHeader() {
  return (
    <header className="relative flex h-13 shrink-0 items-center justify-between border-b border-border/60 bg-background/40 px-3 backdrop-blur-xl lg:h-14 lg:px-4">
      {/* Left */}
      <div className="flex min-w-0 items-center gap-2.5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <span className="text-xs font-bold">BB</span>
        </div>

        <div className="min-w-0">
          <p className="truncate text-[9px] font-semibold uppercase tracking-[0.22em] text-primary">
            BonikBook
          </p>

          <h3 className="truncate text-xs font-semibold text-foreground lg:text-sm">
            Business Dashboard
          </h3>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/60 bg-background/70 transition-all duration-200 hover:border-primary/30 hover:bg-primary/5"
        >
          <Search className="size-3.5" />
        </button>

        <button
          type="button"
          className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-border/60 bg-background/70 transition-all duration-200 hover:border-primary/30 hover:bg-primary/5"
        >
          <Bell className="size-3.5" />

          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-primary" />
        </button>

        <div className="ml-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/75 text-[10px] font-bold text-primary-foreground shadow-md shadow-primary/20">
          BB
        </div>
      </div>
    </header>
  );
}
