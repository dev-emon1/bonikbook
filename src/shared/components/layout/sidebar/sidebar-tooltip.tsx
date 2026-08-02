import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface SidebarTooltipProps {
  label: string;
  disabled?: boolean;
  children: React.ReactNode;
}

export function SidebarTooltip({
  label,
  disabled = false,
  children,
}: SidebarTooltipProps) {
  const [open, setOpen] = useState(false);

  const timer = useRef<number | null>(null);

  const handleMouseEnter = () => {
    if (disabled) return;

    timer.current = window.setTimeout(() => {
      setOpen(true);
    }, 180);
  };

  const handleMouseLeave = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    setOpen(false);
  };

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  return (
    <div
      className="relative flex"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      <AnimatePresence>
        {!disabled && open && (
          <motion.div
            initial={{
              opacity: 0,
              x: -4,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              x: -4,
              scale: 0.98,
            }}
            transition={{
              duration: 0.16,
            }}
            className="pointer-events-none absolute left-full top-1/2 z-[999] ml-3 -translate-y-1/2 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-medium text-white shadow-xl ring-1 ring-white/10 backdrop-blur-sm"
          >
            {label}

            <div className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1 -translate-y-1/2 rotate-45 bg-slate-900" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
