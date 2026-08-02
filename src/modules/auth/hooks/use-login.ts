import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { useAppDispatch } from "@/app/store";
import { useLoginMutation, useLazyMeQuery } from "../api";
import { loginSuccess } from "../store";
import type { LoginFormValues } from "../schemas";
import type { AuthSession } from "../types";
import { ROUTE_PATHS } from "@/app/router";

export function useLogin() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [login, { isLoading }] = useLoginMutation();
  const [getMe] = useLazyMeQuery();

  const handleLogin = async (values: LoginFormValues) => {
    try {
      const loginResponse = await login({
        email: values.email,
        password: values.password,
        remember: values.remember,
      }).unwrap();

      const meResponse = await getMe().unwrap();

      const session: AuthSession = {
        accessToken: loginResponse.data.access_token,
        refreshToken: null,

        user: meResponse.data.user,
        role: meResponse.data.role,

        permissions: meResponse.data.permissions,
      };

      dispatch(loginSuccess(session));

      toast.success(`Welcome back, ${session.user?.name}!`);

      navigate(ROUTE_PATHS.PLATFORM_OWNER.DASHBOARD, {
        replace: true,
      });
    } catch (error) {
      const message =
        error && typeof error === "object" && "data" in error
          ? (error.data as { message?: string })?.message
          : "Unable to sign in.";

      toast.error(message ?? "Unable to sign in.");
    }
  };

  return {
    isLoading,
    handleLogin,
  };
}
