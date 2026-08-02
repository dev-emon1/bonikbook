import { WORKSPACE_PREFIX } from "../constants";

export const workspaceRoutes = {
  root: WORKSPACE_PREFIX,

  dashboard: `${WORKSPACE_PREFIX}/dashboard`,
} as const;
