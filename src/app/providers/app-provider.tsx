import type { ReactNode } from "react";

import { ReduxProvider } from "./redux-provider";
import { ThemeProvider } from "./theme-provider";
import { ToastProvider } from "./toast-provider";

import { AuthInitializer } from "@/modules/auth/components";

type Props = {
  children: ReactNode;
};

export function AppProvider({ children }: Props) {
  return (
    <ReduxProvider>
      <ThemeProvider>
        <AuthInitializer>{children}</AuthInitializer>

        <ToastProvider />
      </ThemeProvider>
    </ReduxProvider>
  );
}
