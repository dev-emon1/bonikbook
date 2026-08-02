import { ErpIllustration } from "./erp-illustration";

export function BrandPanel() {
  return (
    <section className="relative hidden h-full flex-col justify-between overflow-hidden xl:flex">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1.5">
          <span className="h-2 w-2 rounded-full bg-primary" />

          <span className="text-[11px] font-semibold tracking-wide text-primary">
            Next Generation ERP Platform
          </span>
        </div>

        <h1 className="mt-6 max-w-xl text-4xl font-bold leading-tight tracking-tight text-foreground">
          Manage your entire business from a single platform.
        </h1>

        <p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground">
          BonikBook helps businesses manage inventory, sales, accounting,
          customers, purchasing, and reporting with a modern enterprise
          experience.
        </p>
      </div>

      <div className="my-2 flex justify-center">
        <ErpIllustration />
      </div>
    </section>
  );
}
