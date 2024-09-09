"use client";

import { signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button"; // Adjust to your UI setup
import Image from "next/image";
import GoogleImage from "@/../public/google.png";
import GithubImage from "@/../public/github (1).png";

interface AuthButtonsProps {
  authProcess: "login" | "signup";
}

export default function AuthButtons({ authProcess }: AuthButtonsProps) {
  return (
    <>
      <div className="m-auto flex w-full items-center justify-center gap-4">
        <Button
          className="h-[36px] w-[240px] bg-black hover:bg-black"
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
          className="h-[36px] w-[240px] bg-black hover:bg-black"
          size={"sm"}
          onClick={() => {
            signIn("github", { redirect: false });
          }}
        >
          <Image
            src={GithubImage}
            width={28}
            height={28}
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
