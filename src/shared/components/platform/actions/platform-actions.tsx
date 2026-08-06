import { Eye, Package, Pencil, Trash2, UserX } from "lucide-react";

import { ACTIONS } from "./action.constants";
import type { PlatformAction } from "./action.types";

export const PlatformActions = {
  view<T>(onClick: PlatformAction<T>["onClick"]): PlatformAction<T> {
    return {
      id: ACTIONS.VIEW,

      label: "View Details",

      icon: <Eye className="size-4" />,

      onClick,
    };
  },

  edit<T>(onClick: PlatformAction<T>["onClick"]): PlatformAction<T> {
    return {
      id: ACTIONS.EDIT,

      label: "Edit",

      icon: <Pencil className="size-4" />,

      onClick,
    };
  },

  assignPackage<T>(onClick: PlatformAction<T>["onClick"]): PlatformAction<T> {
    return {
      id: ACTIONS.ASSIGN_PACKAGE,

      label: "Assign Package",

      icon: <Package className="size-4" />,

      separatorBefore: true,

      onClick,
    };
  },

  suspend<T>(onClick: PlatformAction<T>["onClick"]): PlatformAction<T> {
    return {
      id: ACTIONS.SUSPEND,

      label: "Suspend",

      icon: <UserX className="size-4" />,

      variant: "warning",

      requiresConfirmation: true,

      onClick,
    };
  },

  delete<T>(onClick: PlatformAction<T>["onClick"]): PlatformAction<T> {
    return {
      id: ACTIONS.DELETE,

      label: "Delete",

      icon: <Trash2 className="size-4" />,

      variant: "danger",

      separatorBefore: true,

      requiresConfirmation: true,

      onClick,
    };
  },
};
