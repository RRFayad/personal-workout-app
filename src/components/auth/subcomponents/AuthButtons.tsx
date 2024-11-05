"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button"; // Adjust to your UI setup
import Image from "next/image";
import GoogleImage from "@/../public/google.png";

import GithubInverted from "@/../public/github-v2.png";
import GithubImage from "@/../public/github-inverted-v2.png";
import LogoLightDarkSwitcher from "@/components/ui/logo-light-dark-switcher";
import { Loader2 } from "lucide-react";

interface AuthButtonsProps {
  authProcess: "login" | "signup";
  loadingStateData: { isLoading: boolean; setIsLoading: Function };
}

export default function AuthButtons({
  authProcess,
  loadingStateData,
}: AuthButtonsProps) {
  const loginHandler = (provider: string) => {
    loadingStateData.setIsLoading(true);
    signIn(provider, { redirect: false });
  };

  return (
    <>
      <div className="m-auto flex w-full items-center justify-center gap-4">
        <Button
          className="h-[36px] w-[220px]"
          onClick={() => loginHandler("google")}
          disabled={loadingStateData.isLoading}
        >
          {loadingStateData.isLoading && (
            <Loader2 className="mx-auto h-4 w-4 animate-spin" />
          )}
          {!loadingStateData.isLoading && (
            <>
              <Image
                src={GoogleImage}
                width={20}
                height={20}
                alt="Google"
                className="mr-2"
              />
              <span className="">
                {authProcess === "signup"
                  ? "Sign up with Google"
                  : "Log in with Google"}
              </span>
            </>
          )}
        </Button>
        <Button
          className="h-[36px] w-[220px]"
          size={"sm"}
          onClick={() => loginHandler("github")}
          disabled={loadingStateData.isLoading}
        >
          {loadingStateData.isLoading && (
            <Loader2 className="mx-auto h-4 w-4 animate-spin" />
          )}
          {!loadingStateData.isLoading && (
            <>
              <LogoLightDarkSwitcher
                DarkModeImage={GithubInverted}
                LightModeImage={GithubImage}
                width={26}
                height={26}
                alt="Github"
                className="mr-2"
              />
              <span className="">
                {authProcess === "signup"
                  ? "Sign up with Github"
                  : "Log in with Github"}
              </span>
            </>
          )}
        </Button>
      </div>
    </>
  );
}
