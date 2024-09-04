import AuthButtons from "@/components/AuthButtons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Logo from "../../public/logo__v2--black.png";
import Image from "next/image";
import CredentialsSignInForm from "@/components/CredentialsSignInForm";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="-mt-40">
        <div className="flex flex-col items-center justify-center">
          <Image src={Logo} width={92} height={92} alt="logo" />
        </div>

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
            <AuthButtons />
            <hr className="mt-6" />
            <CredentialsSignInForm />
          </CardContent>
          <CardFooter className="flex items-center justify-center">
            <Link href="/">
              <p className="text-sm text-project-gray">
                Don't have an account?
              </p>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
