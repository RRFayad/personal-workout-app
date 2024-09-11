"use client";

import { signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button"; // Adjust to your UI setup
import Image from "next/image";
import GoogleImage from "@/../public/google.png";

import GithubInverted from "@/../public/github-v2.png";
import GithubImage from "@/../public/github-inverted-v2.png";
import LogoLightDarkSwitcher from "@/components/ui/logo-light-dark-switcher";

interface AuthButtonsProps {
  authProcess: "login" | "signup";
}

export default function AuthButtons({ authProcess }: AuthButtonsProps) {
  return (
    <>
      <div className="m-auto flex w-full items-center justify-center gap-4">
        <Button
          className="h-[36px] w-[240px]"
          onClick={() => {
            signIn("google", { redirect: false });
          }}
        >
          <Image
            src={GoogleImage}
            width={20}
            height={20}
            alt="Google"
            className="mr-2"
          />
          {authProcess === "signup"
            ? "Sign up with Google"
            : "Log in with Google"}
        </Button>
        <Button
          className="h-[36px] w-[240px]"
          size={"sm"}
          onClick={() => {
            signIn("github", { redirect: false });
          }}
        >
          <LogoLightDarkSwitcher
            DarkModeImage={GithubInverted}
            LightModeImage={GithubImage}
            width={26}
            height={26}
            alt="Github"
            className="mr-2"
          />
          {authProcess === "signup"
            ? "Sign up with Github"
            : "Log in with Github"}
        </Button>
      </div>
    </>
  );
}
