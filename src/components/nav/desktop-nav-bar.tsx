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

interface DesktopNavBarProps {
  isLoggedIn: boolean;
  userImage?: string | null;
}

function DesktopNavBar({ isLoggedIn, userImage }: DesktopNavBarProps) {
  const router = useRouter();

  return (
    <>
      {isLoggedIn && (
        <nav className="col-end-13 hidden flex-row items-center justify-end gap-10 lg:flex">
          <Link href={paths.workoutSplit()}>
            <h5 className="h-full text-white">WORKOUT</h5>
          </Link>
          <Link href={paths.showNutritionPlan()}>
            <h5 className="h-full text-white">NUTRITION</h5>
          </Link>
          <Link href={paths.showProfile()}>
            <h5 className="text-white">PROFILE</h5>
          </Link>

          <Popover>
            <PopoverTrigger>
              <Avatar>
                <AvatarImage
                  src={userImage || "https://github.com/shadcn.png"}
                />
                <AvatarFallback>
                  <Loader2 className="h-4 w-4 animate-spin" />
                </AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="p-3" side="right">
              <Button
                className="h-7 bg-project-dark-blue px-2 hover:bg-project-dark-blue dark:bg-project-blue dark:text-white"
                onClick={async () => {
                  await signOut({ redirect: false });
                  router.push(paths.home());
                }}
              >
                Sign Out
              </Button>
            </PopoverContent>
          </Popover>
        </nav>
      )}
      {!isLoggedIn && (
        <nav className="col-span-2 col-start-11 hidden flex-row items-center justify-end gap-x-6 lg:flex">
          <Link href={"/"}>
            <h5 className="text-white">SIGN IN</h5>
          </Link>
          <Link href={"/"}>
            <CircleUserRound size={36} className="text-white" />
          </Link>
        </nav>
      )}
    </>
  );
}

export default DesktopNavBar;
