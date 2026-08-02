import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { clearSession, saveSession } from "../utils/auth-storage";
import type { AuthSession, AuthState, AuthUser } from "../types";

const initialState: AuthState = {
  isAuthenticated: false,
  isLoading: false,

  accessToken: null,
  refreshToken: null,

  user: null,
  role: null,

  permissions: [],
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    loginSuccess(state, action: PayloadAction<AuthSession>) {
      state.isAuthenticated = true;

      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;

      state.user = action.payload.user;
      state.role = action.payload.role;

      state.permissions = action.payload.permissions;

      saveSession(action.payload);
    },

    bootstrapSession(state, action: PayloadAction<AuthSession>) {
      state.isAuthenticated = true;

      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;

      state.user = action.payload.user;
      state.role = action.payload.role;

      state.permissions = action.payload.permissions;
    },

    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },

    updateUser(state, action: PayloadAction<AuthUser | null>) {
      state.user = action.payload;
    },

    updatePermissions(state, action: PayloadAction<string[]>) {
      state.permissions = action.payload;
    },

    logout() {
      clearSession();

      return initialState;
    },
  },
});

export const {
  loginSuccess,
  bootstrapSession,
  logout,
  setLoading,
  updateUser,
  updatePermissions,
} = authSlice.actions;

export default authSlice.reducer;
