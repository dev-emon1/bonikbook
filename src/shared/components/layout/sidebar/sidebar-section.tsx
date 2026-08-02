import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { useLocation } from "react-router";

import { useSidebar } from "./context";
import { SIDEBAR_ANIMATION } from "./constants";
import { SidebarItem } from "./sidebar-item";

import type { SidebarSectionProps } from "./types";
import { SidebarTooltip } from "./sidebar-tooltip";
import { cn } from "@/shared/lib/utils";

export function SidebarSection({ section }: SidebarSectionProps) {
  const { pathname } = useLocation();

  const { collapsed } = useSidebar();

  const visibleItems = useMemo(
    () => section.items.filter((item) => !item.hidden),
    [section.items],
  );

  const hasActiveItem = useMemo(
    () =>
      visibleItems.some((item) =>
        item.href ? pathname.startsWith(item.href) : false,
      ),
    [pathname, visibleItems],
  );

  const [open, setOpen] = useState(hasActiveItem);

  useEffect(() => {
    if (hasActiveItem) {
      setOpen(true);
    }
  }, [hasActiveItem]);

  if (section.hidden || visibleItems.length === 0) {
    return null;
  }

  if (collapsed) {
    const Icon = section.icon;

    return (
      <SidebarTooltip label={section.title}>
        <button
          className={cn(
            "flex h-11 w-full items-center justify-center rounded-xl transition-colors",
            hasActiveItem ? "text-primary" : "hover:bg-accent",
          )}
        >
          {Icon && <Icon size={18} />}
        </button>
      </SidebarTooltip>
    );
  }

  const Icon = section.icon;

  return (
    <motion.div layout transition={SIDEBAR_ANIMATION} className="space-y-1">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "flex h-11 w-full items-center rounded-xl px-3 transition-colors",
          hasActiveItem ? "text-primary" : "hover:bg-accent",
        )}
      >
        {Icon && (
          <Icon
            size={18}
            className={cn("mr-3 shrink-0", hasActiveItem && "text-primary")}
          />
        )}

        <span
          className={cn(
            "flex-1 truncate text-left text-sm",
            hasActiveItem ? "font-semibold text-primary" : "font-medium",
          )}
        >
          {section.title}
        </span>

        <motion.div
          animate={{
            rotate: open ? 90 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
        >
          <ChevronRight
            size={16}
            className={cn(hasActiveItem && "text-primary")}
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={SIDEBAR_ANIMATION}
            className="overflow-hidden"
          >
            <div className="space-y-1 pl-2">
              {visibleItems.map((item) => (
                <SidebarItem key={item.id} item={item} level={1} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
