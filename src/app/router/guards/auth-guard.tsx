import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router";

import { useAppSelector } from "@/shared/hooks";
import { selectIsAuthenticated } from "@/modules/auth/store";

type Props = {
  children: ReactNode;
};

export default function AuthGuard({ children }: Props) {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <>{children}</>;
}
