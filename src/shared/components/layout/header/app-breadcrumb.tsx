import { ChevronRight, Home } from "lucide-react";

import { Link, useLocation } from "react-router";

import { motion } from "motion/react";

export function AppBreadcrumb() {
  const { pathname } = useLocation();

  const segments = pathname.split("/").filter(Boolean);

  const items = segments.map((segment, index) => ({
    label: segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase()),

    href: "/" + segments.slice(0, index + 1).join("/"),
  }));

  return (
    <nav className="flex items-center gap-2 overflow-hidden">
      <Link
        to="/"
        className="flex h-9 w-9 items-center justify-center rounded-xl transition-colors hover:bg-accent"
      >
        <Home size={16} />
      </Link>

      {items.map((item, index) => {
        const last = index === items.length - 1;

        return (
          <motion.div
            key={item.href}
            layout
            className="flex items-center gap-2"
          >
            <ChevronRight size={14} className="text-muted-foreground" />

            {last ? (
              <span className="truncate text-sm font-semibold text-foreground">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.href}
                className="truncate text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            )}
          </motion.div>
        );
      })}
    </nav>
  );
}
