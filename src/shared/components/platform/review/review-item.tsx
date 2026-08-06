import { cn } from "@/shared/lib/utils";

type ReviewItemProps = {
  label: string;

  value?: React.ReactNode;

  className?: string;
};

export function ReviewItem({ label, value, className }: ReviewItemProps) {
  return (
    <div className={cn("space-y-1", className)}>
      <p className="text-sm text-muted-foreground">{label}</p>

      <p className="font-medium break-words">{value || "-"}</p>
    </div>
  );
}
