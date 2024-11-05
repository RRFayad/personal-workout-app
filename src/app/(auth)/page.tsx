"use client";

import paths from "@/lib/paths";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import AuthButtons from "@/components/auth/subcomponents/AuthButtons";
import CredentialsSignInForm from "@/components/auth/subcomponents/CredentialsSignInForm";
import CredentialsSignUpForm from "@/components/auth/subcomponents/CredentialsSignUpForm";

import LogoLightDarkSwitcher from "@/components/ui/logo-light-dark-switcher";
import BlackLogo from "@/../public/Primal Trainer Logos/logo__v2--black.png";
import WhiteLogo from "@/../public/Primal Trainer Logos/logo__v2--white-with-light-gray.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function HomePage() {
  const router = useRouter();
  const session = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [authProcess, setAuthProcess] = useState<"login" | "signup">("login");

  if (session.data?.user) {
    router.push(paths.editProfile());
  }

  const toggleAuthProcess = () => {
    if (authProcess === "login") {
      setAuthProcess("signup");
    }
    if (authProcess === "signup") {
      setAuthProcess("login");
    }
  };

  return (
    <Card className="mx-auto my-auto h-min w-[90vw] md:col-span-6 md:col-start-4 md:w-[450px]">
      <CardHeader className="flex items-center justify-center pt-3">
        <LogoLightDarkSwitcher
          DarkModeImage={WhiteLogo}
          LightModeImage={BlackLogo}
          width={92}
          height={92}
          alt="logo"
          className="mb-2"
        />
        <CardTitle>Primal Trainer</CardTitle>
        <CardDescription>Unleash your natural strength</CardDescription>
      </CardHeader>
      <CardContent>
        <AuthButtons
          authProcess={authProcess}
          loadingStateData={{ isLoading, setIsLoading }}
        />
        <hr className="my-4 mt-6" />
        {authProcess === "login" && (
          <CredentialsSignInForm
            loadingStateData={{ isLoading, setIsLoading }}
          />
        )}
        {authProcess === "signup" && (
          <CredentialsSignUpForm
            loadingStateData={{ isLoading, setIsLoading }}
          />
        )}
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

export default HomePage;
