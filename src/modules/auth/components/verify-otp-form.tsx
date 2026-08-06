import { useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Button } from "@/shared/ui/button";

import { verifyOtpSchema, type VerifyOtpFormValues } from "../schemas";

import { OtpInput } from "./otp-input";

import { ROUTE_PATHS } from "@/app/router/route-paths";
import { useAppSelector } from "@/shared/hooks";
import { selectOtpEmail } from "../store";

import { useVerifyOtpMutation, useLazyMeQuery } from "../api";

import { setUser, setEmailVerified, setOtpEmail } from "../store";

import { tokenStorage } from "../utils";

import { useAppDispatch } from "@/shared/hooks";

import { useSendOtpMutation } from "../api";
import { useOtpCountdown } from "../hooks/use-otp-countdown";

export function VerifyOtpForm() {
  const dispatch = useAppDispatch();

  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();
  const [sendOtp, { isLoading: isSendingOtp }] = useSendOtpMutation();

  const { secondsLeft, canResend, restart } = useOtpCountdown(60);

  const [getMe] = useLazyMeQuery();

  const navigate = useNavigate();

  const email = useAppSelector(selectOtpEmail);

  if (!email) {
    return null;
  }

  useEffect(() => {
    if (!email) {
      navigate(ROUTE_PATHS.AUTH.LOGIN, {
        replace: true,
      });
    }
  }, [email, navigate]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyOtpFormValues>({
    resolver: zodResolver(verifyOtpSchema),

    defaultValues: {
      code: "",
    },
  });

  const onSubmit = async (values: VerifyOtpFormValues) => {
    if (!email) return;

    try {
      const response = await verifyOtp({
        email,
        code: values.code,
        purpose: "login_verify",
      }).unwrap();

      tokenStorage.setAccessToken(response.token);

      const me = await getMe().unwrap();

      dispatch(setUser(me.user));

      dispatch(setEmailVerified(me.email_verified));

      dispatch(setOtpEmail(null));

      toast.success(response.message);

      navigate(ROUTE_PATHS.PLATFORM.DASHBOARD, {
        replace: true,
      });
    } catch (error: any) {
      toast.error(error?.data?.message ?? "Invalid verification code.");
    }
  };

  const handleResendOtp = async () => {
    if (!email || !canResend) return;

    try {
      const response = await sendOtp({
        email,
        purpose: "login_verify",
      }).unwrap();

      if (!response.otp_sent) {
        toast.error("Failed to resend verification code.");
        return;
      }

      restart();

      toast.success(response.message);
    } catch (error: any) {
      toast.error(
        error?.data?.message ?? "Failed to resend verification code.",
      );
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
      <div className="space-y-2">
        <p className="text-center text-sm text-muted-foreground">
          Verification code sent to
        </p>

        <p className="text-center font-semibold">{email}</p>
      </div>

      <Controller
        control={control}
        name="code"
        render={({ field }) => (
          <OtpInput value={field.value} onChange={field.onChange} />
        )}
      />

      {errors.code && (
        <p className="text-center text-sm text-destructive">
          {errors.code.message}
        </p>
      )}

      <Button
        type="submit"
        disabled={isLoading}
        className="h-11 w-full rounded-xl"
      >
        {isLoading ? "Verifying..." : "Verify OTP"}
      </Button>

      <div className="space-y-2 text-center">
        <p className="text-sm text-muted-foreground">
          Didn't receive the code?
        </p>

        <Button
          type="button"
          variant="link"
          disabled={!canResend || isSendingOtp}
          onClick={handleResendOtp}
        >
          {canResend ? "Resend OTP" : `Resend in ${secondsLeft}s`}
        </Button>
      </div>

      <div className="text-center">
        <Link
          to={ROUTE_PATHS.AUTH.LOGIN}
          className="text-sm text-primary hover:underline"
        >
          Back to Login
        </Link>
      </div>
    </form>
  );
}
