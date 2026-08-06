import type { PropsWithChildren } from "react";

type PageActionsProps = PropsWithChildren;

export function PageActions({ children }: PageActionsProps) {
  return <div className="flex flex-wrap items-center gap-3">{children}</div>;
}
