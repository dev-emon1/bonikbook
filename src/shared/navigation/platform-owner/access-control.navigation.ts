import {
  KeyRound,
  LockKeyhole,
  Shield,
  ShieldCheck,
  Users,
  UserRoundCheck,
  UserCog,
  User,
  UsersRound,
  UserShield,
  BadgeCheck,
  Grid2x2Check,
  UserCheck,
  FileKey,
  Key,
  Fingerprint,
  History,
  ScanSearch,
} from "lucide-react";

import type { NavigationGroup } from "../types";

import { platformRoutes } from "./data";

export const accessControlNavigation: NavigationGroup = {
  id: "access-control",

  title: "Access Control",

  sections: [
    {
      id: "identity-management",

      title: "Identity Management",

      icon: Users,

      items: [
        {
          id: "platform-users",

          title: "Platform Users",

          href: `${platformRoutes.accessControl}/users`,

          icon: User,
        },

        {
          id: "user-groups",

          title: "User Groups",

          href: `${platformRoutes.accessControl}/user-groups`,

          icon: UsersRound,
        },

        {
          id: "administrators",

          title: "Administrators",

          href: `${platformRoutes.accessControl}/administrators`,

          icon: UserCog,
        },
      ],
    },

    {
      id: "authorization",

      title: "Authorization",

      icon: Shield,

      items: [
        {
          id: "roles",

          title: "Roles",

          href: `${platformRoutes.accessControl}/roles`,

          icon: UserShield,
        },

        {
          id: "permissions",

          title: "Permissions",

          href: `${platformRoutes.accessControl}/permissions`,

          icon: BadgeCheck,
        },

        {
          id: "permission-matrix",

          title: "Permission Matrix",

          href: `${platformRoutes.accessControl}/permission-matrix`,

          icon: Grid2x2Check,
        },

        {
          id: "role-assignment",

          title: "Role Assignment",

          href: `${platformRoutes.accessControl}/role-assignment`,

          icon: UserCheck,
        },
      ],
    },

    {
      id: "security",

      title: "Security",

      icon: ShieldCheck,

      items: [
        {
          id: "security-policies",

          title: "Security Policies",

          href: `${platformRoutes.accessControl}/security-policies`,

          icon: Shield,
        },

        {
          id: "password-policy",

          title: "Password Policy",

          href: `${platformRoutes.accessControl}/password-policy`,

          icon: LockKeyhole,
        },

        {
          id: "two-factor-auth",

          title: "Two-Factor Authentication",

          href: `${platformRoutes.accessControl}/2fa`,

          icon: Fingerprint,
        },
      ],
    },

    {
      id: "session-management",

      title: "Session Management",

      icon: UserRoundCheck,

      items: [
        {
          id: "active-sessions",

          title: "Active Sessions",

          href: `${platformRoutes.accessControl}/sessions`,

          icon: UserRoundCheck,
        },

        {
          id: "login-history",

          title: "Login History",

          href: `${platformRoutes.accessControl}/login-history`,

          icon: History,
        },
      ],
    },

    {
      id: "api-security",

      title: "API Security",

      icon: KeyRound,

      items: [
        {
          id: "api-keys",

          title: "API Keys",

          href: `${platformRoutes.accessControl}/api-keys`,

          icon: Key,
        },

        {
          id: "personal-access-tokens",

          title: "Access Tokens",

          href: `${platformRoutes.accessControl}/tokens`,

          icon: FileKey,
        },

        {
          id: "oauth-clients",

          title: "OAuth Clients",

          href: `${platformRoutes.accessControl}/oauth-clients`,

          icon: KeyRound,
        },
      ],
    },

    {
      id: "audit",

      title: "Audit & Compliance",

      icon: LockKeyhole,

      items: [
        {
          id: "audit-logs",

          title: "Audit Logs",

          href: `${platformRoutes.accessControl}/audit-logs`,

          icon: History,
        },

        {
          id: "security-events",

          title: "Security Events",

          href: `${platformRoutes.accessControl}/security-events`,

          icon: ScanSearch,
        },
      ],
    },
  ],
};
