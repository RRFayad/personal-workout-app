"use client";

import Link from "next/link";
import Image from "next/image";
import paths from "@/lib/paths";
import { useState } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import GridDevTool from "@/components/dev-tools/GridDevTool";

import { Button } from "@/components/ui/button";
import { CircleUserRound, Loader2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import whiteHeadLogo from "@/../public/Primal Trainer Logos/logo__head--white.png";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import DesktopNavBar from "./desktop-nav-bar";

function Header() {
  const router = useRouter();
  const session = useSession();

  const [mobileMenuIsOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {process.env.NODE_ENV === "development" && <GridDevTool />}
      <header className="fixed top-0 z-10 grid h-[72px] w-[100vw] grid-cols-1 bg-project-blue lg:grid-cols-12 lg:content-start lg:gap-[30px] lg:px-[30px] xl:px-[120px]">
        <div className="fixed right-[5vw] top-[25.5px] lg:hidden">
          <Drawer
            direction="right"
            open={mobileMenuIsOpen}
            onOpenChange={(open) => setMobileMenuOpen(open)}
            onClose={() => setMobileMenuOpen(false)}
          >
            <DrawerTrigger>
              {/* Hamburger Menu */}
              <div className="mb-[6px] h-[3px] w-[26px] bg-white"></div>
              <div className="mb-[6px] ml-[4px] h-[3px] w-[22px] bg-white"></div>
              <div className="h-[3px] w-[26px] bg-white"></div>
            </DrawerTrigger>
            {/* TODO: */}
            <DrawerContent>AAAAAAHHHH</DrawerContent>
          </Drawer>
        </div>
        <Link href={"/"} className="lg:col-span-5 lg:col-start-1">
          <div className="flex h-full items-center justify-center lg:justify-start">
            {/* Desktop Logo */}
            <Image
              src={whiteHeadLogo}
              alt="logo"
              width={80}
              height={80}
              className="-ml-[10px] mr-[6px] hidden lg:block"
            />
            {/* Mobile Logo */}
            <Image
              src={whiteHeadLogo}
              alt="logo"
              width={60}
              height={60}
              className="fixed left-[5vw] top-2 lg:hidden"
            />
            <h2 className="align-middle text-[1.375rem] text-white lg:text-3xl">
              Primal Trainer
            </h2>
          </div>
        </Link>
        <DesktopNavBar
          isLoggedIn={!!session.data?.user}
          userImage={session?.data?.user.image}
        />
      </header>
    </>
  );
}

export default Header;
