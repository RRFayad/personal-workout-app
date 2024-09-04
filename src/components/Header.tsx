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
import Image from "next/image";
import whiteHeadLogo from "../../public/logo__head--white.png";

function Header() {
  const session = useSession();

  return (
    <header className="flex h-[68px] items-center justify-between bg-project-blue px-[120px]">
      <div className="-ml-4 flex items-center justify-center">
        <Image
          src={whiteHeadLogo}
          alt="logo"
          width={80}
          height={800}
          className="mr-[6px]"
        ></Image>
        <h2 className="align-middle text-white">Primal Trainer</h2>
      </div>
      <nav className="flex flex-row items-center justify-between gap-10">
        {session.data?.user && (
          <>
            <Link href={"/"}>
              <h5 className="h-full text-white">WORKOUT</h5>
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
              <PopoverContent className="p-3" side="right">
                <Button
                  className="h-7 bg-project-dark-blue px-2 hover:bg-project-dark-blue"
                  onClick={() => signOut()}
                >
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
