import type { LucideIcon } from "lucide-react";
import type { PropsWithChildren, ReactNode } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

type ReviewCardProps = PropsWithChildren<{
  title: string;

  description?: string;

  icon?: LucideIcon;

  actions?: ReactNode;
}>;

export function ReviewCard({
  title,
  description,
  icon: Icon,
  actions,
  children,
}: ReviewCardProps) {
  return (
    <Card className="rounded-3xl border-border shadow-sm">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            {Icon && (
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-primary/5 text-primary">
                <Icon className="size-5" />
              </div>
            )}

            <div className="space-y-1">
              <CardTitle>{title}</CardTitle>

              {description && (
                <p className="text-sm text-muted-foreground">{description}</p>
              )}
            </div>
          </div>

          {actions && (
            <div className="flex shrink-0 items-center gap-2">{actions}</div>
          )}
        </div>
      </CardHeader>

      <CardContent>{children}</CardContent>
    </Card>
  );
}
