import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState, AuthUser } from "../types";

const initialState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  isLoading: false,
  emailVerified: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },

    setInitialized(state, action: PayloadAction<boolean>) {
      state.isInitialized = action.payload;
    },

    setUser(state, action: PayloadAction<AuthUser>) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },

    clearUser(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.emailVerified = false;
    },

    setEmailVerified(state, action: PayloadAction<boolean>) {
      state.emailVerified = action.payload;
    },

    resetAuth(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.isInitialized = false;
      state.isLoading = false;
      state.emailVerified = false;
    },

    setAuthenticated(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },
  },
});

export const {
  setLoading,
  setInitialized,
  setUser,
  clearUser,
  setEmailVerified,
  resetAuth,
  setAuthenticated,
} = authSlice.actions;

export default authSlice.reducer;
