import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export type NavigationType = "platform" | "workspace";

export type NavigationStatus = "active" | "disabled" | "hidden";

export interface NavigationMeta {
  description?: string;
  keywords?: string[];

  module?: string;

  subModule?: string;

  feature?: string;

  permission?: string;

  featureFlag?: string;

  tenantOnly?: boolean;

  platformOnly?: boolean;
}

export interface NavigationBadge {
  value: string | number;

  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
}

export interface NavigationItem {
  id: string;

  title: string;

  href?: string;

  icon?: LucideIcon;

  children?: NavigationItem[];

  badge?: NavigationBadge;

  status?: NavigationStatus;

  hidden?: boolean;

  disabled?: boolean;

  order?: number;

  exact?: boolean;

  external?: boolean;

  target?: "_self" | "_blank";

  element?: ReactNode;

  meta?: NavigationMeta;
}

export interface NavigationSection {
  id: string;
  title: string;
  icon?: LucideIcon;
  items: NavigationItem[];
  collapsed?: boolean;
  hidden?: boolean;
  order?: number;
}

export interface NavigationGroup {
  id: string;

  title: string;

  sections: NavigationSection[];

  hidden?: boolean;
  badge?: NavigationBadge;
  order?: number;
}

export interface BuildNavigationOptions {
  type: NavigationType;

  permissions?: string[];

  enabledModules?: string[];

  enabledFeatures?: string[];

  featureFlags?: string[];

  tenantId?: string;

  role?: string;
}
