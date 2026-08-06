import type { LucideIcon } from "lucide-react";

type Props = {
  title: string;

  description?: string;

  icon?: LucideIcon;
};

export function PageHeaderTitle({ title, description, icon }: Props) {
  const Icon = icon;

  return (
    <div className="flex items-start gap-5">
      {Icon && (
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border bg-card text-primary shadow-sm">
          <Icon className="size-7" />
        </div>
      )}

      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
          {title}
        </h1>

        {description && (
          <p className="max-w-3xl text-base leading-7 text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
