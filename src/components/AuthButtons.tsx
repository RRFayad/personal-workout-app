"use client";

import { signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button"; // Adjust to your UI setup

export default function AuthButtons() {
  return (
    <>
      <div className="w-100 m-auto flex flex-col items-center justify-center space-y-4">
        <Button onClick={() => signIn("google")}>Sign in with Google</Button>
        <Button onClick={() => signIn("github")}>Sign in with GitHub</Button>
      </div>
    </>
  );
}
