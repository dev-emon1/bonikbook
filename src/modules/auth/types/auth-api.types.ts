import type { AuthRole, AuthUser } from "./auth.types";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  data: {
    access_token: string;
    refresh_token?: string;
  };
}

export interface MeResponse {
  data: {
    user: AuthUser;
    role: AuthRole;
    permissions: string[];
  };
}
