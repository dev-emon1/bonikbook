import { cn } from "@/shared/lib/utils";

import type { PageHeaderProps } from "./page-header.types";

import { PageHeaderActions } from "./page-header-actions";
import { PageHeaderTitle } from "./page-header-title";

export function PageHeader({
  title,
  description,
  icon,
  actions,
  className,
}: PageHeaderProps) {
  return (
    <header
      className={cn(
        "flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between",
        className,
      )}
    >
      <PageHeaderTitle title={title} description={description} icon={icon} />

      <PageHeaderActions>{actions}</PageHeaderActions>
    </header>
  );
}
