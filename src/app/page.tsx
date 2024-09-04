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
import { Form } from "@/components/ui/form";
import CredentialsSignInForm from "@/components/CredentialsSignInForm";

export default function Home() {
  return (
    <div>
      <div className="-mt-80">
        <div className="flex flex-col items-center justify-center">
          <Image src={Logo} width={100} height={100} alt="logo" />
          {/* <h2>Primal Trainer</h2>
          <h4>Unleash your natural strength</h4> */}
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
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
