import type {
  NavigationGroup,
  NavigationItem,
  NavigationSection,
} from "@/shared/navigation";
export type SidebarVariant = "platform" | "workspace";

export interface SidebarBrand {
  name: string;
  tagline: string;
  logo: string;
  badge?: string;
  status?: "online" | "offline";
}

export interface AppSidebarProps {
  variant?: SidebarVariant;
}

export interface SidebarHeaderProps {
  collapsed: boolean;
  onToggle: () => void;
}

export interface SidebarLogoProps {
  collapsed: boolean;
  brand: SidebarBrand;
}

export interface SidebarToggleProps {
  collapsed: boolean;
  onToggle: () => void;
}

export interface SidebarContentProps {
  groups: NavigationGroup[];
}

export interface SidebarGroupProps {
  group: NavigationGroup;
}

export interface SidebarSectionProps {
  section: NavigationSection;
}

export interface SidebarItemProps {
  item: NavigationItem;
  level?: number;
}

export interface SidebarFooterProps {
  collapsed: boolean;

  user?: {
    name: string;
    email?: string;
    avatar?: string;
  };

  workspace?: {
    name: string;
    plan: string;
  };
}

import type { ElementType, ReactNode } from "react";

export interface SidebarButtonProps {
  active?: boolean;
  collapsed?: boolean;
  level?: number;

  hasChildren?: boolean;
  open?: boolean;

  icon?: ElementType;

  title: string;

  badge?: NavigationItem["badge"];

  external?: boolean;

  onClick?: () => void;

  children?: ReactNode;
}
