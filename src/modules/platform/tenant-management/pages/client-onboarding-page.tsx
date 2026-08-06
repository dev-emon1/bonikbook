import { useState } from "react";

import { WizardFooter } from "@/shared/components/platform/wizard";

import { OnboardingHeader } from "../components/client-onboarding/onboarding-header";
import { OnboardingStepper } from "../components/client-onboarding/onboarding-stepper";

import { AdministratorStep } from "../components/client-onboarding/steps/administrator-step";
import { OrganizationStep } from "../components/client-onboarding/steps/organization-step";
import { PackageStep } from "../components/client-onboarding/steps/package-step";
import { ReviewStep } from "../components/client-onboarding/steps/review-step";
import { SubscriptionStep } from "../components/client-onboarding/steps/subscription-step";
import { SuccessStep } from "../components/client-onboarding/steps/success-step";

const TOTAL_STEPS = 6;

export default function ClientOnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const STEPS = [
    <OrganizationStep key="organization" />,
    <AdministratorStep key="administrator" />,
    <PackageStep key="package" />,
    <SubscriptionStep key="subscription" />,
    <ReviewStep key="review" />,
    <SuccessStep key="success" />,
  ];

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    if (currentStep === TOTAL_STEPS) return;

    // TODO:
    // Step validation
    // Review step API call
    // Create Client mutation

    setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
  };

  const nextLabel =
    currentStep === 5
      ? "Create Client"
      : currentStep === TOTAL_STEPS
        ? "Done"
        : "Continue";

  return (
    <div className="space-y-6">
      <OnboardingHeader />

      <OnboardingStepper currentStep={currentStep} />

      {STEPS[currentStep - 1]}

      {currentStep < TOTAL_STEPS && (
        <WizardFooter
          previousLabel="Previous"
          nextLabel={nextLabel}
          showPrevious={currentStep > 1}
          showDraft
          onPrevious={handlePrevious}
          onDraft={() => {
            // TODO: Save Draft API
          }}
          onNext={handleNext}
        />
      )}
    </div>
  );
}
