"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { CircleUserRound } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";

function Header() {
  const session = useSession();

  return (
    <header className="flex h-16 items-center justify-between bg-project-blue px-[120px]">
      <h1 className="text-white">Workout Planner</h1>
      <nav className="flex flex-row items-center justify-between gap-10">
        {session.data?.user && (
          <>
            <Link href={"/"}>
              <h5 className="text-white">WORKOUT</h5>
            </Link>
            <Link href={"/"}>
              <h5 className="text-white">PROFILE</h5>
            </Link>

            <Popover>
              <PopoverTrigger>
                {session.data.user.image && (
                  <Avatar>
                    <AvatarImage src={session.data.user.image} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                )}
                {!session.data.user.image && (
                  <Link href={"/"}>
                    <CircleUserRound size={36} className="text-white" />
                  </Link>
                )}
              </PopoverTrigger>
              <PopoverContent className="p-0" side="bottom">
                <Button className="h-7 px-1" onClick={() => signOut()}>
                  Sign Out
                </Button>
              </PopoverContent>
            </Popover>
          </>
        )}
        {!session.data?.user && (
          <>
            <Link href={"/"}>
              <h5 className="text-white">SIGN IN</h5>
            </Link>
            <Link href={"/"}>
              <CircleUserRound size={36} className="text-white" />
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
