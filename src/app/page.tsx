import Logo from "@/../public/logo__v2--black.png";
import Image from "next/image";
import AuthCard from "@/components/auth/AuthCard";

export default function Home() {
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
