export interface AppHeaderProps {
  title?: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface AppBreadcrumbProps {
  items?: BreadcrumbItem[];
}

export interface AppSearchProps {
  placeholder?: string;
}

export interface NotificationMenuProps {}

export interface QuickActionsProps {}

// export interface ProfileMenuProps {}

export interface ProfileMenuProps {
  user?: {
    name: string;
    email?: string;
    avatar?: string;
    role?: string;
  };
}
