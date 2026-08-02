import { cn } from "@/shared/lib/utils";

interface FloatingOrbProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "emerald" | "violet" | "sky";
  delay?: number;
}

const sizeVariants = {
  sm: "h-16 w-16",
  md: "h-24 w-24",
  lg: "h-32 w-32",
};

const colorVariants = {
  primary: "bg-primary/20",
  emerald: "bg-emerald-400/20",
  violet: "bg-violet-400/20",
  sky: "bg-sky-400/20",
};

export function FloatingOrb({
  className,
  size = "md",
  color = "primary",
  delay = 0,
}: FloatingOrbProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl will-change-transform animate-[float_8s_ease-in-out_infinite]",
        sizeVariants[size],
        colorVariants[color],
        className,
      )}
      style={{
        animationDelay: `${delay}s`,
      }}
    />
  );
}
