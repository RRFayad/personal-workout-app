"use client";

import Link from "next/link";
import Image from "next/image";
import paths from "@/lib/paths";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import GridDevTool from "./dev-tools/GridDevTool";

import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import whiteHeadLogo from "../../public/Primal Trainer Logos/logo__head--white.png";
import { CircleUserRound, Loader2 } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function Header() {
  const router = useRouter();
  const session = useSession();

  return (
    <>
      {process.env.NODE_ENV === "development" && <GridDevTool />}
      <header className="fixed top-0 z-10 flex h-[72px] w-[100vw] items-center justify-between bg-project-blue px-[120px] dark:bg-background">
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
              <Link href={paths.workoutSplit()}>
                <h5 className="h-full text-white">WORKOUT</h5>
              </Link>
              <Link href={paths.profile()}>
                <h5 className="text-white">PROFILE</h5>
              </Link>

              <Popover>
                <PopoverTrigger>
                  <Avatar>
                    <AvatarImage
                      src={
                        session.data.user.image ||
                        "https://github.com/shadcn.png"
                      }
                    />
                    <AvatarFallback>
                      <Loader2 className="h-4 w-4 animate-spin" />
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
    </>
  );
}

export default Header;
