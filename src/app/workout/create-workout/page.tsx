import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BlackLogo from "@/../public/Primal Trainer Logos/logo__v2--black.png";
import WhiteLogo from "@/../public/Primal Trainer Logos/logo__v2--white-with-light-gray.png";
import LogoLightDarkSwitcher from "@/components/ui/logo-light-dark-switcher";

function CreateWorkoutPage() {
  return (
    <div className="-mt-8 flex flex-col items-center justify-center">
      <LogoLightDarkSwitcher
        DarkModeImage={WhiteLogo}
        LightModeImage={BlackLogo}
        width={92}
        height={92}
        alt="logo"
        className="mb-3"
      />
      <Card>
        <CardHeader className="-mb-2 flex flex-col items-center justify-center">
          <CardTitle>Create Your Workout</CardTitle>
          <CardDescription className="font-semibold">Step 2/3</CardDescription>
        </CardHeader>
        <CardContent>Create workout form...</CardContent>
      </Card>
    </div>
  );
}

export default CreateWorkoutPage;
