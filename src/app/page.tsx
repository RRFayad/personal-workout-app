import Image from "next/image";
import AuthCard from "@/components/auth/AuthCard";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";
import paths from "@/lib/paths";
import BlackLogo from "@/../public/Primal Trainer Logos/logo__v2--black.png";
import WhiteLogo from "@/../public/Primal Trainer Logos/logo__v2--white-with-light-gray.png";
import LogoLightDarkSwitcher from "@/components/ui/logo-light-dark-switcher";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect(paths.createProfile());
  }

  return (
    <div>
      <div className="-mt-20">
        <div className="flex flex-col items-center justify-center">
          <LogoLightDarkSwitcher
            DarkModeImage={WhiteLogo}
            LightModeImage={BlackLogo}
            width={92}
            height={92}
            alt="logo"
          />
        </div>
        <AuthCard />
      </div>
    </div>
  );
}
