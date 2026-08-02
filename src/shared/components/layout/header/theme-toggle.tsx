import { Check, Laptop, Moon, Sun } from "lucide-react";

import { motion } from "motion/react";

import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";

import { useTheme } from "@/shared/hooks/use-theme";

import { HEADER_ANIMATION } from "./constants";

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const CurrentIcon = resolvedTheme === "dark" ? Moon : Sun;

  return (
    <motion.div layout transition={HEADER_ANIMATION}>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-xl"
            aria-label="Change theme"
          >
            <CurrentIcon className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-48 rounded-xl">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            <Sun className="mr-2 h-4 w-4" />

            <span className="flex-1">Light</span>

            {theme === "light" && <Check className="h-4 w-4" />}
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setTheme("dark")}>
            <Moon className="mr-2 h-4 w-4" />

            <span className="flex-1">Dark</span>

            {theme === "dark" && <Check className="h-4 w-4" />}
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setTheme("system")}>
            <Laptop className="mr-2 h-4 w-4" />

            <span className="flex-1">System</span>

            {theme === "system" && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </motion.div>
  );
}
