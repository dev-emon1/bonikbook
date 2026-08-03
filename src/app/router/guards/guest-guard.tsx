import type { ReactNode } from "react";
import { Navigate } from "react-router";

import { useAppSelector } from "@/shared/hooks";
import { selectIsAuthenticated } from "@/modules/auth/store";

type Props = {
  children: ReactNode;
};

export default function GuestGuard({ children }: Props) {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  if (isAuthenticated) {
    return <Navigate to="/platform/dashboard" replace />;
  }

  return <>{children}</>;
}
