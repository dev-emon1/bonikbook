import { ChevronDown, LogOut, Settings, User } from "lucide-react";
import { motion } from "motion/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";

import { HEADER_ANIMATION } from "./constants";
import type { ProfileMenuProps } from "./types";

import { useLogout } from "@/modules/auth/hooks/use-logout";
import { useAppSelector } from "@/shared/hooks";
import { selectUser } from "@/modules/auth/store";

export function ProfileMenu({ user }: ProfileMenuProps) {
  const { logout, isLoading } = useLogout();

  const authUser = useAppSelector(selectUser);

  const profile = {
    name: user?.name ?? authUser?.name ?? "Platform Owner",

    email: user?.email ?? authUser?.email ?? "owner@bonikbook.com",

    role: user?.role ?? authUser?.user_type ?? "Super Admin",

    avatar: user?.avatar,
  };

  const initials = profile.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <motion.div layout transition={HEADER_ANIMATION}>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="ghost" className="h-10 rounded-xl px-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={profile.avatar} />

              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>

            <div className="hidden min-w-0 text-left xl:flex xl:flex-col">
              <span className="truncate text-sm font-medium">
                {profile.name}
              </span>

              <span className="truncate text-xs text-muted-foreground">
                {profile.role}
              </span>
            </div>

            <ChevronDown className="ml-2 hidden h-4 w-4 text-muted-foreground xl:block" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-64 rounded-xl">
          {/* Profile Info */}
          <div className="space-y-1 px-2 py-2">
            <p className="font-medium">{profile.name}</p>

            <p className="text-xs text-muted-foreground">{profile.email}</p>
          </div>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              My Profile
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              Preferences
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            variant="destructive"
            disabled={isLoading}
            onClick={logout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            {isLoading ? "Signing Out..." : "Sign Out"}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </motion.div>
  );
}
