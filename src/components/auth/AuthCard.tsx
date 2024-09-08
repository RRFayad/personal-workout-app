"use client";

import { useState } from "react";
import AuthButtons from "@/components/AuthButtons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CredentialsSignInForm from "@/components/CredentialsSignInForm";
import CredentialsSignUpForm from "../CredentialsSignUpForm";

function AuthCard() {
  const [authProcess, setAuthProcess] = useState<"login" | "signup">("login");

  const toggleAuthProcess = () => {
    if (authProcess === "login") {
      setAuthProcess("signup");
    }
    if (authProcess === "signup") {
      setAuthProcess("login");
    }
  };

  return (
    <Card className="mt-2 w-[420px]">
      <CardHeader>
        <CardTitle className="flex items-center justify-center">
          Primal Trainer
        </CardTitle>
        <CardDescription className="flex items-center justify-center">
          Unleash your natural strength
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AuthButtons authProcess={authProcess} />
        <hr className="mt-6" />
        {authProcess === "login" && <CredentialsSignInForm />}
        {authProcess === "signup" && <CredentialsSignUpForm />}
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <button onClick={toggleAuthProcess}>
          <p className="text-sm text-project-gray">
            {authProcess === "signup"
              ? "Already have an account?"
              : "Don't have an account?"}
          </p>
        </button>
      </CardFooter>
    </Card>
  );
}

export default AuthCard;
