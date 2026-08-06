import type { PropsWithChildren } from "react";

export function PageHeaderActions({ children }: PropsWithChildren) {
  if (!children) {
    return null;
  }

  return <div className="flex shrink-0 items-center gap-3">{children}</div>;
}
