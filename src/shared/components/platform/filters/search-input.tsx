import { Search } from "lucide-react";
import type { ChangeEvent, InputHTMLAttributes } from "react";

import { cn } from "@/shared/lib/utils";
import { Input } from "@/shared/ui/input";

type SearchInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> & {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export function SearchInput({
  className,
  placeholder = "Search...",
  ...props
}: SearchInputProps) {
  return (
    <div className={cn("relative w-full", className)}>
      <Search className="pointer-events-none absolute left-3 top-1/2 z-10 size-4 -translate-y-1/2 text-muted-foreground" />

      <Input
        {...props}
        placeholder={placeholder}
        className="h-11 w-full rounded-xl pl-10 pr-4"
      />
    </div>
  );
}
