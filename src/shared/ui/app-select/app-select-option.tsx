import { Check } from "lucide-react";

import { CommandItem } from "@/shared/ui/command";
import { cn } from "@/shared/lib/utils";

import type { AppSelectOption as Option } from "./app-select.types";

type Props = {
  option: Option;

  selected: boolean;

  onSelect: (value: string) => void;
};

export function AppSelectOption({ option, selected, onSelect }: Props) {
  return (
    <CommandItem
      value={option.label}
      disabled={option.disabled}
      onSelect={() => onSelect(option.value)}
      className="cursor-pointer"
    >
      <div className="flex flex-1 items-center gap-2">
        {option.icon}

        <span>{option.label}</span>
      </div>

      <Check
        className={cn(
          "size-4 transition-opacity",
          selected ? "opacity-100" : "opacity-0",
        )}
      />
    </CommandItem>
  );
}
