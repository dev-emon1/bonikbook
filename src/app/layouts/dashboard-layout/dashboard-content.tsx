import type { PropsWithChildren } from "react";

export default function DashboardContent({ children }: PropsWithChildren) {
  return (
    <main className="flex-1 overflow-auto">
      <div className="mx-auto w-full max-w-[1920px] p-6">{children}</div>
    </main>
  );
}
