"use client";
import { Button } from "./ui/button";
import { signIn, signOut } from "next-auth/react";

function AuthButtons() {
  return (
    <div className="flex flex-col">
      <Button className="mt-4 w-40" onClick={() => signIn("google")}>
        Sign In with Google
      </Button>
      <Button className="mt-4 w-40" onClick={() => signIn("github")}>
        Sign In with Github
      </Button>
      <Button className="mt-4 w-40" onClick={() => signOut()}>
        Sign Out
      </Button>
    </div>
  );
}

export default AuthButtons;
