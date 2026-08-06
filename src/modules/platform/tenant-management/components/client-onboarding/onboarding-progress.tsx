import { Progress } from "@/shared/ui/progress";

type Props = {
  currentStep: number;
  totalSteps: number;
};

export function OnboardingProgress({ currentStep, totalSteps }: Props) {
  const progress = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="rounded-3xl border border-border bg-card p-5 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-foreground">
            Step {currentStep} of {totalSteps}
          </p>

          <p className="text-xs text-muted-foreground">
            Complete each section to continue onboarding.
          </p>
        </div>

        <span className="text-sm font-semibold text-primary">{progress}%</span>
      </div>

      <Progress value={progress} className="h-2 rounded-full" />
    </div>
  );
}
