import { platformOwnerNavigation } from "./platform-owner";
import { workspaceNavigation } from "./workspace";

import { filterHidden, removeEmptySections, sortNavigation } from "./helpers";

import type { BuildNavigationOptions, NavigationGroup } from "./types";

export function buildPlatformNavigation(): NavigationGroup[] {
  return sortNavigation(
    removeEmptySections(filterHidden(platformOwnerNavigation)),
  );
}

export function buildWorkspaceNavigation(): NavigationGroup[] {
  return sortNavigation(removeEmptySections(filterHidden(workspaceNavigation)));
}

export function buildNavigation(
  options: BuildNavigationOptions,
): NavigationGroup[] {
  if (options.type === "platform") {
    return buildPlatformNavigation();
  }

  return buildWorkspaceNavigation();
}
