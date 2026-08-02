import { ChevronDown, LogOut, Settings, User } from "lucide-react";

import { motion } from "motion/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";

import { Button } from "@/shared/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";

import { HEADER_ANIMATION } from "./constants";

import type { ProfileMenuProps } from "./types";

export function ProfileMenu({ user }: ProfileMenuProps) {
  const profile = user ?? {
    name: "Platform Owner",
    email: "owner@bonikbook.com",
    role: "Super Admin",
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
          <DropdownMenuLabel>
            <div className="space-y-1">
              <p className="font-medium">{profile.name}</p>

              <p className="text-xs text-muted-foreground">{profile.email}</p>
            </div>
          </DropdownMenuLabel>

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

          <DropdownMenuItem className="text-destructive focus:text-destructive">
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </motion.div>
  );
}
