import type { NavigationGroup } from "../types";

/**
 * Workspace navigation will be generated
 * dynamically from the backend based on:
 *
 * Package
 * → Modules
 * → Features
 * → Permissions
 * → Role
 */
export const workspaceNavigation: NavigationGroup[] = [];

export default workspaceNavigation;
