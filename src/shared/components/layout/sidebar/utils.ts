// shared/components/layout/sidebar/utils.ts

import type { NavigationGroup, NavigationItem } from "@/shared/navigation";

export function hasChildren(item: NavigationItem) {
  return !!item.children?.length;
}

export function hasActiveChildren(pathname: string, item: NavigationItem) {
  return (
    item.children?.some((child) =>
      // ensure child.href is defined before calling startsWith
      child.href ? pathname.startsWith(child.href) : false,
    ) ?? false
  );
}

export function isItemActive(pathname: string, item: NavigationItem) {
  if (item.href) {
    if (pathname === item.href) {
      return true;
    }

    if (pathname.startsWith(item.href) && item.href !== "/") {
      return true;
    }
  }

  return hasActiveChildren(pathname, item);
}

export function filterEmptyGroups(groups: NavigationGroup[]) {
  return groups.filter((group) => group.sections.length > 0);
}
