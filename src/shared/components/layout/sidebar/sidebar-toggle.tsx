// shared/components/layout/sidebar/sidebar-toggle.tsx

import { motion, AnimatePresence } from "motion/react";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

import { Button } from "@/shared/ui/button";

import type { SidebarToggleProps } from "./types";

export function SidebarToggle({ collapsed, onToggle }: SidebarToggleProps) {
  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={onToggle}
      className="h-10 w-10 rounded-xl"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={collapsed ? "open" : "close"}
          initial={{
            opacity: 0,
            rotate: -90,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            rotate: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            rotate: 90,
            scale: 0.8,
          }}
          transition={{
            duration: 0.18,
          }}
        >
          {collapsed ? (
            <PanelLeftOpen size={18} />
          ) : (
            <PanelLeftClose size={18} />
          )}
        </motion.div>
      </AnimatePresence>
    </Button>
  );
}
