"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { CircleUserRound, Loader2 } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import Image from "next/image";
import whiteHeadLogo from "../../public/Primal Trainer Logos/logo__head--white.png";
import { useRouter } from "next/navigation";
import paths from "@/lib/paths";

function Header() {
  const session = useSession();
  const router = useRouter();

  return (
    <header className="flex h-[68px] items-center justify-between bg-project-blue px-[120px] dark:bg-background">
      <Link href={"/"}>
        <div className="-ml-4 flex items-center justify-center">
          <Image
            src={whiteHeadLogo}
            alt="logo"
            width={80}
            height={80}
            className="mr-[6px]"
          ></Image>
          <h2 className="align-middle text-white">Primal Trainer</h2>
        </div>
      </Link>
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
                <Avatar>
                  <AvatarImage
                    src={
                      session.data.user.image || "https://github.com/shadcn.png"
                    }
                  />
                  <AvatarFallback>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  </AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="p-3" side="right">
                <Button
                  className="h-7 bg-project-dark-blue px-2 hover:bg-project-dark-blue"
                  onClick={async () => {
                    await signOut({ redirect: false });
                    router.push(paths.home());
                  }}
                >
                  Sign Out
                </Button>
              </PopoverContent>
            </Popover>
          </>
        )}
        {!session.data?.user && (
          <>
            {/* <Link href={"/"}>
              <h5 className="text-white">SIGN IN</h5>
            </Link> */}
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
