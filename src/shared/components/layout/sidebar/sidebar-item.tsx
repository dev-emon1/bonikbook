import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { NavLink, useLocation } from "react-router";

import { useSidebar } from "./context";
import { hasChildren, isItemActive } from "./utils";
import { SIDEBAR_ANIMATION } from "./constants";

import { SidebarButton } from "./sidebar-button";

import type { SidebarItemProps } from "./types";

export function SidebarItem({ item, level = 0 }: SidebarItemProps) {
  const location = useLocation();

  const { collapsed } = useSidebar();

  const [open, setOpen] = useState(false);

  const active = useMemo(
    () => isItemActive(location.pathname, item),
    [location.pathname, item],
  );

  useEffect(() => {
    if (active) {
      setOpen(true);
    }
  }, [active]);

  if (item.hidden) {
    return null;
  }

  const nested = hasChildren(item);

  if (nested) {
    return (
      <div className="space-y-1">
        <SidebarButton
          active={active}
          collapsed={collapsed}
          level={level}
          hasChildren
          open={open}
          icon={item.icon}
          title={item.title}
          badge={item.badge}
          onClick={() => setOpen((prev) => !prev)}
        />

        <AnimatePresence initial={false}>
          {open && !collapsed && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={SIDEBAR_ANIMATION}
              className="overflow-hidden"
            >
              <div className="space-y-1 pt-1">
                {item.children?.map((child) => (
                  <SidebarItem key={child.id} item={child} level={level + 1} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <NavLink to={item.href ?? "#"} target={item.target}>
      {({ isActive }) => (
        <SidebarButton
          active={isActive}
          collapsed={collapsed}
          level={level}
          icon={item.icon}
          title={item.title}
          badge={item.badge}
          external={item.external}
        />
      )}
    </NavLink>
  );
}
