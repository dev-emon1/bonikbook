export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: AuthUser;
  email_verified: boolean;
}

export interface MeResponse {
  user: AuthUser;
  email_verified: boolean;
}

export interface AuthRole {
  id: number;
  organization_id: number | null;
  name: string;
  guard_name: string;
}

export interface AuthPermission {
  id: number;
  name: string;
}

export interface AuthOrganization {
  id: number;
  name: string;
  code: string;
  status: number;
}

export interface AuthPackage {
  id: number;
  name: string;
  slug: string;
  price: string;
  duration_days: number;
  status: number;
}

export interface AuthUser {
  id: number;

  organization_id: number | null;

  branch_id: number | null;

  package_id: number | null;

  name: string;

  email: string;

  phone: string | null;

  company_name: string | null;

  user_type: string;

  status: number;

  approval_status: string;

  roles: AuthRole[];

  permissions: AuthPermission[];

  organization?: AuthOrganization;

  package?: AuthPackage;
}

/* ===========================
   OTP
=========================== */

export type OtpPurpose = "login_verify" | "email_verify" | "password_reset";

export interface SendOtpRequest {
  email: string;
  purpose: OtpPurpose;
}

export interface VerifyOtpRequest {
  email: string;
  code: string;
  purpose: OtpPurpose;
}
