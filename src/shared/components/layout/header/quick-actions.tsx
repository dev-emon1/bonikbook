import { Plus } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/shared/ui/button";

import { HEADER_ANIMATION } from "./constants";

export function QuickActions() {
  return (
    <motion.div layout transition={HEADER_ANIMATION} className="hidden lg:flex">
      <Button size="sm" className="h-10 rounded-xl px-4 shadow-sm">
        <Plus className="mr-2 h-4 w-4" />

        <span>Create</span>
      </Button>
    </motion.div>
  );
}
