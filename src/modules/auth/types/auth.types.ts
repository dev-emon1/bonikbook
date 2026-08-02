export interface AuthUser {
  id: number;
  uuid: string;
  name: string;
  email: string;
  avatar: string | null;
  status: "active" | "inactive";
  account_type: "platform_owner";
}

export interface AuthRole {
  id: number;
  uuid?: string;
  name: string;
  slug: string;
}

export interface LoginRequest {
  email: string;
  password: string;
  remember: boolean;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    access_token: string;
    token_type: "Bearer";
  };
}

export interface MeResponse {
  success: boolean;
  message: string;
  data: {
    user: AuthUser;
    role: AuthRole;
    permissions: string[];
  };
}

export interface AuthSession {
  accessToken: string | null;
  refreshToken: string | null;
  user: AuthUser | null;
  role: AuthRole | null;
  permissions: string[];
}

export interface AuthState extends AuthSession {
  isAuthenticated: boolean;
  isLoading: boolean;
}
