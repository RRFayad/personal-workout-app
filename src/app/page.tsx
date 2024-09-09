import Logo from "@/../public/logo__v2--black.png";
import Image from "next/image";
import AuthCard from "@/components/auth/AuthCard";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";
import paths from "@/lib/paths";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect(paths.createProfile());
  }

  return (
    <div>
      <div className="-mt-20">
        <div className="flex flex-col items-center justify-center">
          <Image src={Logo} width={92} height={92} alt="logo" />
        </div>
        <AuthCard />
      </div>
    </div>
  );
}
