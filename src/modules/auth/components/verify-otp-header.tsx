import { ShieldCheck } from "lucide-react";

export function VerifyOtpHeader() {
  return (
    <div className="space-y-3 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
        <ShieldCheck className="size-7 text-primary" />
      </div>

      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Verify Your Identity
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Enter the 6-digit verification code sent to your email.
        </p>
      </div>
    </div>
  );
}
