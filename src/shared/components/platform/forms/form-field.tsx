import type { PropsWithChildren, ReactNode } from "react";

import { Label } from "@/shared/ui/label";
import { cn } from "@/shared/lib/utils";

type FormFieldProps = PropsWithChildren<{
  label: string;

  required?: boolean;

  optional?: boolean;

  description?: string;

  error?: string;

  hint?: ReactNode;

  className?: string;
}>;

export function FormField({
  label,
  required,
  optional,
  description,
  error,
  hint,
  className,
  children,
}: FormFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center gap-2">
        <Label className="font-medium">
          {label}

          {required && <span className="ml-1 text-destructive">*</span>}
        </Label>

        {optional && (
          <span className="text-xs text-muted-foreground">Optional</span>
        )}
      </div>

      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}

      {children}

      {hint && !error && (
        <div className="text-xs text-muted-foreground">{hint}</div>
      )}

      {error && <p className="text-sm font-medium text-destructive">{error}</p>}
    </div>
  );
}
