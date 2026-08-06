import { BackgroundDecoration } from "../components/background-decoration";
import { BrandPanel } from "../components/brand-panel";
import { LoginCard } from "../components/login-card";
import { VerifyOtpForm } from "../components/verify-otp-form";
import { VerifyOtpHeader } from "../components/verify-otp-header";

export default function VerifyOtpPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <BackgroundDecoration />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid w-full max-w-7xl gap-10 xl:grid-cols-[1.15fr_0.85fr]">
          <BrandPanel />

          <section className="flex items-center justify-center">
            <LoginCard>
              <VerifyOtpHeader />

              <VerifyOtpForm />
            </LoginCard>
          </section>
        </div>
      </div>
    </main>
  );
}
