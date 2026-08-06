import { Check } from "lucide-react";

import { cn } from "@/shared/lib/utils";

import { ONBOARDING_STEPS } from "../../mock/onboarding";

type Props = {
  currentStep: number;
};

export function OnboardingStepper({ currentStep }: Props) {
  return (
    <div className="rounded-3xl border bg-card p-6 shadow-sm">
      <div className="grid grid-cols-6 gap-4">
        {ONBOARDING_STEPS.map((step) => {
          const completed = step.id < currentStep;
          const active = step.id === currentStep;

          return (
            <div
              key={step.id}
              className="relative flex flex-col items-center text-center"
            >
              {/* Connector */}
              {step.id !== ONBOARDING_STEPS.length && (
                <div className="absolute left-1/2 top-5 h-[2px] w-full bg-border" />
              )}

              {/* Circle */}
              <div
                className={cn(
                  "relative z-10 flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold transition-all",
                  completed &&
                    "border-primary bg-primary text-primary-foreground",
                  active &&
                    "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/25",
                  !completed &&
                    !active &&
                    "border-border bg-background text-muted-foreground",
                )}
              >
                {completed ? <Check className="size-4" /> : step.id}
              </div>

              <div className="mt-3 space-y-1">
                <h4
                  className={cn(
                    "text-sm font-semibold",
                    active ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {step.title}
                </h4>

                <p className="text-xs text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
