// shared/components/layout/header/app-search.tsx

import { Command, Search } from "lucide-react";

import { motion } from "motion/react";

import { Button } from "@/shared/ui/button";

import { HEADER_ANIMATION } from "./constants";

export function AppSearch() {
  return (
    <motion.div layout transition={HEADER_ANIMATION} className="w-[360px]">
      <Button
        type="button"
        variant="outline"
        className="group h-11 w-full justify-between rounded-2xl border-border/60 bg-background/60 px-4 shadow-sm backdrop-blur-md transition-all duration-200 hover:border-primary/30 hover:bg-accent/50"
      >
        <div className="flex items-center gap-3">
          <Search
            size={17}
            className="text-muted-foreground transition-colors group-hover:text-primary"
          />

          <span className="text-sm font-normal text-muted-foreground">
            Search anything...
          </span>
        </div>

        <div className="flex items-center gap-1 rounded-lg border border-border bg-muted px-2 py-1 text-[11px] font-semibold text-muted-foreground">
          <Command size={12} />

          <span>K</span>
        </div>
      </Button>
    </motion.div>
  );
}
