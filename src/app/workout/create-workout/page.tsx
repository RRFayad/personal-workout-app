import CreateWorkoutForm from "@/components/workout/create-workout-page/CreateWorkoutForm";
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

function CreateWorkoutPage() {
  return (
    <Card className="col-span-12 mx-auto my-auto mt-[5vh] h-min w-[600px]">
      <CardHeader className="flex items-center justify-center pt-3">
        <LogoLightDarkSwitcher
          DarkModeImage={WhiteLogo}
          LightModeImage={BlackLogo}
          width={92}
          height={92}
          alt="logo"
          className="mb-2"
        />
        <CardTitle>Create Your Workout</CardTitle>
        <CardDescription className="font-semibold">Step 2/3</CardDescription>
      </CardHeader>
      <CardContent>
        <CreateWorkoutForm />
      </CardContent>
    </Card>
  );
}

export default CreateWorkoutPage;
