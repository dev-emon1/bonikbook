import type { NavigationGroup, NavigationItem } from "@/shared/navigation";

export function hasChildren(item: NavigationItem) {
  return !!item.children?.length;
}

export function hasActiveChildren(pathname: string, item: NavigationItem) {
  return (
    item.children?.some((child) => {
      if (!child.href) return false;

      if (child.exact) {
        return pathname === child.href;
      }

      return pathname === child.href || pathname.startsWith(child.href + "/");
    }) ?? false
  );
}

export function isItemActive(pathname: string, item: NavigationItem) {
  if (!item.href) {
    return hasActiveChildren(pathname, item);
  }

  if (item.exact) {
    return pathname === item.href;
  }

  return (
    pathname === item.href ||
    pathname.startsWith(item.href + "/") ||
    hasActiveChildren(pathname, item)
  );
}

export function filterEmptyGroups(groups: NavigationGroup[]) {
  return groups.filter((group) => group.sections.length > 0);
}
