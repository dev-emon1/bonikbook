import type { ReactNode } from "react";

type TenantGuardProps = {
  children: ReactNode;
};

export default function TenantGuard({ children }: TenantGuardProps) {
  return <>{children}</>;
}
