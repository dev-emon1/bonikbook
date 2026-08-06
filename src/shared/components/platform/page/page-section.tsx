import type { PropsWithChildren } from "react";

import { cn } from "@/shared/lib/utils";

type PageSectionProps = PropsWithChildren<{
  className?: string;
}>;

export function PageSection({ children, className }: PageSectionProps) {
  return <section className={cn("space-y-5", className)}>{children}</section>;
}
