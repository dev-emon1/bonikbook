import { useState } from "react";

import { OnboardingHeader } from "../components/client-onboarding/onboarding-header";
import { OnboardingStepper } from "../components/client-onboarding/onboarding-stepper";
// import { OnboardingFooter } from "../components/client-onboarding/onboarding-footer";

import { OrganizationStep } from "../components/client-onboarding/steps/organization-step";
import { AdministratorStep } from "../components/client-onboarding/steps/administrator-step";
import { PackageStep } from "../components/client-onboarding/steps/package-step";
import { SubscriptionStep } from "../components/client-onboarding/steps/subscription-step";
import { ReviewStep } from "../components/client-onboarding/steps/review-step";
import { SuccessStep } from "../components/client-onboarding/steps/success-step";
import { WizardFooter } from "@/shared/components/platform/wizard";

export default function ClientOnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <OrganizationStep />;

      case 2:
        return <AdministratorStep />;

      case 3:
        return <PackageStep />;

      case 4:
        return <SubscriptionStep />;

      case 5:
        return <ReviewStep />;

      case 6:
        return <SuccessStep />;

      default:
        return <OrganizationStep />;
    }
  };

  return (
    <div className="space-y-6">
      <OnboardingHeader />

      <OnboardingStepper currentStep={currentStep} />

      {renderStep()}

      <WizardFooter
        previousLabel="Previous"
        nextLabel={currentStep === 6 ? "Finish" : "Continue"}
        showPrevious={currentStep > 1}
        showDraft={false}
        onPrevious={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
        onNext={() => setCurrentStep((prev) => Math.min(prev + 1, 6))}
      />
    </div>
  );
}
