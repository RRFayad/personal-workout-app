"use client";

import Link from "next/link";
import paths from "@/lib/paths";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { CircleUserRound, Loader2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import MobileMenuItem from "./mobile-menu-item";
import LightDarkToggle from "../ui/light-dark-toggle";

interface DesktopNavBarProps {
  isLoggedIn: boolean;
  userImage?: string | null;
}

function MobileMenu({ isLoggedIn, userImage }: DesktopNavBarProps) {
  const router = useRouter();

  return (
    <nav className="flex h-full flex-col items-start justify-start gap-10 overflow-auto p-4">
      <header className="h-26 align-self-center flex w-full justify-center">
        {isLoggedIn ? (
          <Avatar className="h-20 w-20">
            <AvatarImage src={userImage || "https://github.com/shadcn.png"} />
            <AvatarFallback>
              <Loader2 className="h-4 w-4 animate-spin" />
            </AvatarFallback>
          </Avatar>
        ) : (
          <ul>
            <MobileMenuItem
              href={"/"}
              className="flex flex-col items-center justify-center"
            >
              <CircleUserRound size={56} />
              Sign In
            </MobileMenuItem>
          </ul>
        )}
      </header>

      <ul className="w-full flex-col py-4">
        {isLoggedIn && (
          <>
            <MobileMenuItem href={paths.workoutSplit()}>Workout</MobileMenuItem>
            <MobileMenuItem href={paths.showNutritionPlan()}>
              Nutrition
            </MobileMenuItem>
            <MobileMenuItem href={paths.showProfile()}>Profile</MobileMenuItem>
          </>
        )}
      </ul>
      <footer className="w-full">
        <ul
          className={`flex w-full items-center ${isLoggedIn ? "justify-between" : "justify-end"}`}
        >
          {isLoggedIn && (
            <MobileMenuItem href={"/"} className="h-full py-0">
              <button
                onClick={async () => {
                  await signOut({ redirect: false });
                  router.push(paths.home());
                }}
                className="h-full w-full text-start"
              >
                Sign Out
              </button>
            </MobileMenuItem>
          )}
          <li className="my-auto flex items-center">
            <LightDarkToggle />
          </li>
        </ul>
      </footer>
    </nav>
  );
}

export default MobileMenu;
