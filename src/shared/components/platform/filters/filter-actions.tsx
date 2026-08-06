import type { PropsWithChildren } from "react";

export function FilterActions({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-wrap items-center justify-end gap-2">
      {children}
    </div>
  );
}
