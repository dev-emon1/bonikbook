import { Mail } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import { Label } from "@/shared/ui/label";

import { useAppDispatch } from "@/shared/hooks";
import { ROUTE_PATHS } from "@/app/router/route-paths";

import { useLoginMutation, useSendOtpMutation } from "../api";
import { DEV_DEFAULT_LOGIN } from "../constants";
import { loginSchema, type LoginFormValues } from "../schemas";
import { setOtpEmail } from "../store";

import { AuthInput } from "./auth-input";
import { PasswordInput } from "./password-input";

export function LoginForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [login, { isLoading: isLoginLoading }] = useLoginMutation();

  const [sendOtp, { isLoading: isOtpSending }] = useSendOtpMutation();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: DEV_DEFAULT_LOGIN,
  });

  const remember = watch("remember");

  const onSubmit = async (values: LoginFormValues) => {
    try {
      await login({
        email: values.email,
        password: values.password,
      }).unwrap();

      await sendOtp({
        email: values.email,
        purpose: "login_verify",
      }).unwrap();

      dispatch(setOtpEmail(values.email));

      toast.success("Verification code sent to your email.");

      navigate(ROUTE_PATHS.AUTH.VERIFY_OTP);
    } catch (error: any) {
      toast.error(error?.data?.message ?? "Invalid email or password.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>

        <AuthInput
          type="email"
          autoComplete="email"
          placeholder="Enter your email"
          startIcon={<Mail className="size-4" />}
          disabled={isLoginLoading || isOtpSending}
          {...register("email")}
        />

        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Password</label>

        <PasswordInput
          autoComplete="current-password"
          placeholder="Enter your password"
          disabled={isLoginLoading || isOtpSending}
          {...register("password")}
        />

        {errors.password && (
          <p className="text-sm text-destructive">{errors.password.message}</p>
        )}
      </div>

      {/* Remember */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Checkbox
            checked={remember}
            onCheckedChange={(checked) =>
              setValue("remember", Boolean(checked))
            }
          />

          <label className="cursor-pointer text-sm">Remember me</label>
        </div>

        <Link
          to={ROUTE_PATHS.AUTH.FORGOT_PASSWORD}
          className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          Forgot Password?
        </Link>
      </div>

      <Button
        type="submit"
        size="lg"
        className="h-11 w-full rounded-xl"
        disabled={isLoginLoading || isOtpSending}
      >
        {isLoginLoading ? "Signing In..." : "Sign In"}
      </Button>
    </form>
  );
}
