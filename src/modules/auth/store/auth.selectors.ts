import type { RootState } from "@/app/store";

export const selectAuth = (state: RootState) => state.auth;

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

export const selectCurrentUser = (state: RootState) => state.auth.user;

export const selectCurrentRole = (state: RootState) => state.auth.role;

export const selectPermissions = (state: RootState) => state.auth.permissions;
