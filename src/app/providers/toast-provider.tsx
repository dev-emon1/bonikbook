// src/app/providers/ToastProvider.tsx

import { Toaster } from "sonner";

export function ToastProvider() {
  return <Toaster position="top-right" richColors closeButton expand />;
}
