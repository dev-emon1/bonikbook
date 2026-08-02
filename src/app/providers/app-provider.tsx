// src/app/providers/AppProvider.tsx

import type { ReactNode } from "react";
import { ReduxProvider } from "./redux-provider";
import { ThemeProvider } from "./theme-provider";
import { ToastProvider } from "./toast-provider";

type Props = {
  children: ReactNode;
};

export function AppProvider({ children }: Props) {
  return (
    <ReduxProvider>
      <ThemeProvider>
        {children}
        <ToastProvider />
      </ThemeProvider>
    </ReduxProvider>
  );
}
