import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";

import { useLogin } from "../hooks";
import { loginSchema, type LoginFormValues } from "../schemas";

import { AuthInput } from "./auth-input";
import { PasswordInput } from "./password-input";
import { ROUTE_PATHS } from "@/app/router";
import { DEV_DEFAULT_LOGIN } from "../constants";

export function LoginForm() {
  const { handleLogin, isLoading } = useLogin();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: DEV_DEFAULT_LOGIN,
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>

              <FormControl>
                <AuthInput
                  {...field}
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  startIcon={<Mail className="size-4" />}
                  disabled={isLoading}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>

              <FormControl>
                <PasswordInput
                  {...field}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  disabled={isLoading}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center justify-between">
          <FormField
            control={form.control}
            name="remember"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    disabled={isLoading}
                    onCheckedChange={(checked) =>
                      field.onChange(Boolean(checked))
                    }
                  />
                </FormControl>

                <FormLabel className="cursor-pointer font-normal">
                  Remember me
                </FormLabel>
              </FormItem>
            )}
          />

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
          disabled={isLoading}
        >
          {isLoading ? "Signing In..." : "Sign In"}
        </Button>
      </form>
    </Form>
  );
}
