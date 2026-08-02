export function RevenueChart() {
  return (
    <section className="rounded-xl border border-border/60 bg-background/70 p-3 backdrop-blur-xl">
      <div className="mb-3 flex items-start justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Revenue
          </p>

          <h3 className="mt-1 text-lg font-bold tracking-tight lg:text-xl">
            $124,850
          </h3>
        </div>

        <div className="rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold text-emerald-600">
          +18.4%
        </div>
      </div>

      <svg
        viewBox="0 0 320 90"
        className="h-[72px] w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="revenue-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity=".22" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="revenue-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--primary)" />
            <stop offset="100%" stopColor="var(--primary)" />
          </linearGradient>
        </defs>

        {/* Grid */}
        <line
          x1="0"
          y1="25"
          x2="320"
          y2="25"
          stroke="currentColor"
          className="text-border/40"
          strokeDasharray="4 4"
        />

        <line
          x1="0"
          y1="50"
          x2="320"
          y2="50"
          stroke="currentColor"
          className="text-border/40"
          strokeDasharray="4 4"
        />

        <line
          x1="0"
          y1="75"
          x2="320"
          y2="75"
          stroke="currentColor"
          className="text-border/40"
          strokeDasharray="4 4"
        />

        {/* Area */}
        <path
          d="M0 78 L35 70 L70 72 L105 55 L140 60 L175 42 L210 46 L245 30 L280 18 L320 24 L320 90 L0 90 Z"
          fill="url(#revenue-fill)"
        />

        {/* Line */}
        <path
          d="M0 78 L35 70 L70 72 L105 55 L140 60 L175 42 L210 46 L245 30 L280 18 L320 24"
          fill="none"
          stroke="url(#revenue-line)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Last Point */}
        <circle cx="320" cy="24" r="3.5" fill="var(--primary)" />

        <circle cx="320" cy="24" r="7" fill="var(--primary)" opacity=".18" />
      </svg>
    </section>
  );
}
