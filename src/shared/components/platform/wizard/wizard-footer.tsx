import { ArrowLeft, ArrowRight, Loader2, Save } from "lucide-react";

import { Button } from "@/shared/ui/button";

type WizardFooterProps = {
  previousLabel?: string;

  nextLabel?: string;

  draftLabel?: string;

  showPrevious?: boolean;

  showDraft?: boolean;

  loading?: boolean;

  disablePrevious?: boolean;

  disableNext?: boolean;

  disableDraft?: boolean;

  onPrevious?: () => void;

  onNext?: () => void;

  onDraft?: () => void;
};

export function WizardFooter({
  previousLabel = "Previous",
  nextLabel = "Continue",
  draftLabel = "Save Draft",

  showPrevious = true,
  showDraft = false,

  loading = false,

  disablePrevious = false,
  disableNext = false,
  disableDraft = false,

  onPrevious,
  onNext,
  onDraft,
}: WizardFooterProps) {
  return (
    <div className="sticky bottom-0 z-20 mt-8 border-t bg-background/95 px-6 py-5 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-3">
          {showPrevious && (
            <Button
              variant="outline"
              onClick={onPrevious}
              disabled={disablePrevious || loading}
            >
              <ArrowLeft className="size-4" />
              {previousLabel}
            </Button>
          )}

          {showDraft && (
            <Button
              variant="secondary"
              onClick={onDraft}
              disabled={disableDraft || loading}
            >
              <Save className="size-4" />
              {draftLabel}
            </Button>
          )}
        </div>

        <Button onClick={onNext} disabled={disableNext || loading}>
          {loading ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Please wait...
            </>
          ) : (
            <>
              {nextLabel}
              <ArrowRight className="size-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
