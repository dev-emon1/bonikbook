import type {
  NavigationGroup,
  NavigationItem,
  NavigationSection,
} from "./types";

/**
 * Flatten every item including children
 */
export function flattenNavigation(groups: NavigationGroup[]): NavigationItem[] {
  const items: NavigationItem[] = [];

  function walk(list: NavigationItem[]) {
    for (const item of list) {
      items.push(item);

      if (item.children?.length) {
        walk(item.children);
      }
    }
  }

  groups.forEach((group) => {
    group.sections.forEach((section) => {
      walk(section.items);
    });
  });

  return items;
}

/**
 * Find item by id
 */
export function findNavigationItem(
  groups: NavigationGroup[],
  id: string,
): NavigationItem | undefined {
  return flattenNavigation(groups).find((item) => item.id === id);
}

/**
 * Search by title
 */
export function searchNavigation(
  groups: NavigationGroup[],
  keyword: string,
): NavigationItem[] {
  const query = keyword.toLowerCase();

  return flattenNavigation(groups).filter((item) =>
    item.title.toLowerCase().includes(query),
  );
}

/**
 * Remove empty sections
 */
export function removeEmptySections(
  groups: NavigationGroup[],
): NavigationGroup[] {
  return groups
    .map((group) => ({
      ...group,
      sections: group.sections.filter((section) => section.items.length > 0),
    }))
    .filter((group) => group.sections.length > 0);
}

/**
 * Sort
 */
export function sortNavigation(groups: NavigationGroup[]): NavigationGroup[] {
  return groups.map((group) => ({
    ...group,
    sections: [...group.sections]
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
      .map((section) => ({
        ...section,
        items: [...section.items].sort(
          (a, b) => (a.order ?? 0) - (b.order ?? 0),
        ),
      })),
  }));
}

/**
 * Filter hidden
 */
export function filterHidden(groups: NavigationGroup[]): NavigationGroup[] {
  return groups
    .filter((group) => !group.hidden)
    .map((group) => ({
      ...group,
      sections: group.sections
        .filter((section) => !section.hidden)
        .map((section) => ({
          ...section,
          items: section.items.filter((item) => !item.hidden),
        })),
    }));
}

/**
 * Expanded groups
 */
export function getDefaultExpandedGroups(groups: NavigationGroup[]) {
  return groups.map((group) => group.id);
}
