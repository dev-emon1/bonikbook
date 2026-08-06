import type { PropsWithChildren, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { cn } from "@/shared/lib/utils";

type FormSectionCardProps = PropsWithChildren<{
  title: string;

  description?: string;

  icon?: LucideIcon;

  actions?: ReactNode;

  className?: string;

  contentClassName?: string;
}>;

export function FormSectionCard({
  title,
  description,
  icon,
  actions,
  className,
  contentClassName,
  children,
}: FormSectionCardProps) {
  const Icon = icon;

  return (
    <Card className={cn("rounded-3xl border-border shadow-sm", className)}>
      <CardHeader className="pb-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            {Icon && (
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-primary/5 text-primary">
                <Icon className="size-5" />
              </div>
            )}

            <div className="space-y-1">
              <CardTitle className="text-lg">{title}</CardTitle>

              {description && (
                <p className="text-sm text-muted-foreground">{description}</p>
              )}
            </div>
          </div>

          {actions}
        </div>
      </CardHeader>

      <CardContent className={cn("space-y-6", contentClassName)}>
        {children}
      </CardContent>
    </Card>
  );
}
