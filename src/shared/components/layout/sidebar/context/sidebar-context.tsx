import {
  createContext,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";

import type { SidebarVariant } from "../types";

interface SidebarContextValue {
  variant: SidebarVariant;

  collapsed: boolean;

  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;

  toggleSidebar: () => void;
}

export const SidebarContext = createContext<SidebarContextValue | null>(null);

interface SidebarProviderProps extends PropsWithChildren {
  variant: SidebarVariant;
}

export function SidebarProvider({ children, variant }: SidebarProviderProps) {
  const [collapsed, setCollapsed] = useState(false);

  const value = useMemo(
    () => ({
      variant,

      collapsed,

      setCollapsed,

      toggleSidebar() {
        setCollapsed((prev) => !prev);
      },
    }),
    [collapsed, variant],
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}
