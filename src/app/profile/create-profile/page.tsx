import CreateProfileForm from "@/components/profile/CreateProfileForm";
import LogoLightDarkSwitcher from "@/components/ui/logo-light-dark-switcher";

import BlackLogo from "@/../public/Primal Trainer Logos/logo__v2--black.png";
import WhiteLogo from "@/../public/Primal Trainer Logos/logo__v2--white-with-light-gray.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function CreateProfilePage() {
  return (
    <Card className="w-[600px]">
      <CardHeader className="flex items-center justify-center pt-3">
        <LogoLightDarkSwitcher
          DarkModeImage={WhiteLogo}
          LightModeImage={BlackLogo}
          width={92}
          height={92}
          alt="logo"
          className="mb-2"
        />
        <CardTitle>Create Your Profile</CardTitle>
        <CardDescription className="font-semibold">Step 1/3</CardDescription>
      </CardHeader>

      <CardContent>
        <CreateProfileForm />
      </CardContent>
    </Card>
  );
}

export default CreateProfilePage;
