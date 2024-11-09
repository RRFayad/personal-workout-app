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
      <header className="fixed top-0 z-10 grid h-[72px] w-[100vw] grid-cols-1 bg-project-blue md:grid-cols-12 md:content-start md:gap-[30px] lg:px-[30px] xl:px-[120px]">
        <div className="fixed right-[5vw] top-[25.5px] md:hidden">
          <div className="mb-[6px] h-[3px] w-[26px] bg-white"></div>
          <div className="mb-[6px] ml-[4px] h-[3px] w-[22px] bg-white"></div>
          <div className="h-[3px] w-[26px] bg-white"></div>
        </div>
        <Link href={"/"} className="md:col-span-5 md:col-start-1">
          <div className="flex h-full items-center justify-center md:justify-start">
            <Image
              src={whiteHeadLogo}
              alt="logo"
              width={80}
              height={80}
              className="-ml-[10px] mr-[6px] hidden md:block"
            />
            <h2 className="align-middle text-[1.375rem] text-white md:text-3xl">
              <Image
                src={whiteHeadLogo}
                alt="logo"
                width={60}
                height={60}
                className="fixed left-[calc(50vw-60px-80px-16px)] top-2 md:hidden"
              />
              Primal Trainer
            </h2>
          </div>
        </Link>
        {session.data?.user && (
          <nav className="col-end-13 hidden flex-row items-center justify-end gap-10 md:flex">
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
                    src={
                      session.data.user.image || "https://github.com/shadcn.png"
                    }
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
        {!session.data?.user && (
          <nav className="col-span-2 col-start-11 hidden flex-row items-center justify-end gap-x-6 md:flex">
            <Link href={"/"}>
              <h5 className="text-white">SIGN IN</h5>
            </Link>
            <Link href={"/"}>
              <CircleUserRound size={36} className="text-white" />
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}

export default Header;
