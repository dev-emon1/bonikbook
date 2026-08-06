import { useNavigate } from "react-router";
import { toast } from "sonner";

import { ROUTE_PATHS } from "@/app/router/route-paths";
import { useAppDispatch } from "@/shared/hooks";

import { useLogoutMutation } from "../api";
import { resetAuth } from "../store";
import { tokenStorage } from "../utils";

export function useLogout() {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [logout, { isLoading }] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logout().unwrap();
    } catch {
      // Ignore API errors.
      // User should still be logged out locally.
    } finally {
      tokenStorage.clear();

      dispatch(resetAuth());

      toast.success("Logged out successfully.");

      navigate(ROUTE_PATHS.AUTH.LOGIN, {
        replace: true,
      });
    }
  };

  return {
    logout: handleLogout,
    isLoading,
  };
}
