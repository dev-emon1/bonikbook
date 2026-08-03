import type { RootState } from "@/app/store/redux/store";

export const selectAuth = (state: RootState) => state.auth;

export const selectUser = (state: RootState) => state.auth.user;

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

export const selectIsInitialized = (state: RootState) =>
  state.auth.isInitialized;

export const selectIsLoading = (state: RootState) => state.auth.isLoading;

export const selectEmailVerified = (state: RootState) =>
  state.auth.emailVerified;

export const selectRoles = (state: RootState) => state.auth.user?.roles ?? [];

export const selectPermissions = (state: RootState) =>
  state.auth.user?.permissions ?? [];

export const selectOrganization = (state: RootState) =>
  state.auth.user?.organization ?? null;
