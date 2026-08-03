import type { AuthUser } from "./auth-api.types";

export interface AuthState {
  isAuthenticated: boolean;

  isInitialized: boolean;

  isLoading: boolean;

  emailVerified: boolean;

  user: AuthUser | null;
}
