import type { ReactNode } from "react";

import { useAppSelector } from "@/shared/hooks";
import { selectPermissions } from "@/modules/auth/store";

type PermissionGuardProps = {
  permission: string;
  children: ReactNode;
  fallback?: ReactNode;
};

export default function PermissionGuard({
  permission,
  children,
  fallback = null,
}: PermissionGuardProps) {
  const permissions = useAppSelector(selectPermissions);

  const hasPermission = permissions.some((item) => item.name === permission);

  if (!hasPermission) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
