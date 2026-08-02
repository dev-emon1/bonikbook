import * as React from "react";

import { Input } from "@/shared/ui/input";
import { cn } from "@/shared/lib/utils";

export interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactNode;
}

export const AuthInput = React.forwardRef<HTMLInputElement, AuthInputProps>(
  ({ className, startIcon, disabled, ...props }, ref) => {
    return (
      <div className="relative">
        {startIcon && (
          <span className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-muted-foreground">
            {startIcon}
          </span>
        )}

        <Input
          ref={ref}
          disabled={disabled}
          className={cn(
            "h-11 rounded-xl shadow-sm transition-all duration-200",
            startIcon && "pl-10",
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);

AuthInput.displayName = "AuthInput";
