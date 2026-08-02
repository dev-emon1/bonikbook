import * as React from "react";
import { Eye, EyeOff, Lock } from "lucide-react";

import { Input } from "@/shared/ui/input";
import { cn } from "@/shared/lib/utils";

export interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const PasswordInput = React.forwardRef<
  HTMLInputElement,
  PasswordInputProps
>(({ className, disabled, ...props }, ref) => {
  const [visible, setVisible] = React.useState(false);

  return (
    <div className="relative">
      <Lock className="pointer-events-none absolute left-3 top-1/2 z-10 size-4 -translate-y-1/2 text-muted-foreground" />

      <Input
        ref={ref}
        type={visible ? "text" : "password"}
        disabled={disabled}
        className={cn(
          "h-11 rounded-xl pl-10 pr-11 shadow-sm transition-all duration-200",
          className,
        )}
        {...props}
      />

      <button
        type="button"
        onClick={() => setVisible((prev) => !prev)}
        disabled={disabled}
        aria-label={visible ? "Hide password" : "Show password"}
        className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50"
      >
        {visible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
      </button>
    </div>
  );
});

PasswordInput.displayName = "PasswordInput";
