import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/shared/lib/utils";

import { Button } from "@/shared/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
} from "@/shared/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";

import type { AppSelectProps } from "./app-select.types";
import { AppSelectOption } from "./app-select-option";

export function AppSelect({
  value,
  options,
  placeholder = "Select...",
  searchPlaceholder = "Search...",
  emptyMessage = "No results found.",
  loading = false,
  disabled = false,
  searchable = true,
  className,
  width = "100%",
  onChange,
}: AppSelectProps) {
  const [open, setOpen] = useState(false);

  const selected = options.find((item) => item.value === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger>
        <Button
          type="button"
          variant="outline"
          disabled={disabled}
          className={cn(
            "h-11 w-full justify-between rounded-xl px-4 font-normal",
            className,
          )}
          style={{
            width,
          }}
        >
          <span className="truncate">{selected?.label ?? placeholder}</span>

          <ChevronDown className="size-4 opacity-60" />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        align="start"
        className="w-[var(--radix-popover-trigger-width)] p-0"
      >
        <Command>
          {searchable && (
            <CommandInput placeholder={searchPlaceholder} className="h-10" />
          )}

          <CommandList>
            {loading ? (
              <div className="p-6 text-center text-sm text-muted-foreground">
                Loading...
              </div>
            ) : (
              <>
                <CommandEmpty>{emptyMessage}</CommandEmpty>

                <CommandGroup>
                  {options.map((option) => (
                    <AppSelectOption
                      key={option.value}
                      option={option}
                      selected={option.value === value}
                      onSelect={(value) => {
                        onChange(value);

                        setOpen(false);
                      }}
                    />
                  ))}
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
