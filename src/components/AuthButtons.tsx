"use client";

import { signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button"; // Adjust to your UI setup

export default function AuthButtons() {
  return (
    <div className="flex flex-col space-y-4">
      <Button onClick={() => signIn("google")}>Sign in with Google</Button>
      <Button onClick={() => signIn("github")}>Sign in with GitHub</Button>
      <Button onClick={() => signOut()}>Sign out</Button>
    </div>
  );
}
