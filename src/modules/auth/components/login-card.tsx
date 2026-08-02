import type { ReactNode } from "react";
import { cn } from "@/shared/lib/utils";

interface LoginCardProps {
  children: ReactNode;
  className?: string;
}

export function LoginCard({ children, className }: LoginCardProps) {
  return (
    <section
      className={cn(
        "relative w-full max-w-[440px] overflow-hidden rounded-3xl border border-border/60 bg-background/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-2xl sm:p-7",
        className,
      )}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 flex flex-col">{children}</div>
    </section>
  );
}
