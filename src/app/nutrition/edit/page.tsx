import LogoLightDarkSwitcher from "@/components/ui/logo-light-dark-switcher";
import BlackLogo from "@/../public/Primal Trainer Logos/logo__v2--black.png";
import NutritionPlanForm from "@/components/nutrition/nutrition-plan-form";
import WhiteLogo from "@/../public/Primal Trainer Logos/logo__v2--white-with-light-gray.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DietPhase } from "@prisma/client";

interface EditProfilePageProps {
  params: {};
  searchParams: {
    weeklyTrainingHours?: string;
    weight?: string;
    dietPhase?: string;
  };
}

async function EditNutritionPlanPage({
  params,
  searchParams,
}: EditProfilePageProps) {
  const isUpdating = Object.keys(searchParams).length > 0;

  const updatingUserData = isUpdating
    ? {
        weeklyTrainingHours: Number(searchParams.weeklyTrainingHours),
        weight: Number(searchParams.weight),
        dietPhase: searchParams.dietPhase as DietPhase,
      }
    : null;

  return (
    <Card className="col-span-12 mx-auto my-auto mt-[3vh] h-min w-[600px]">
      <CardHeader className="flex items-center justify-center pt-3">
        <LogoLightDarkSwitcher
          DarkModeImage={WhiteLogo}
          LightModeImage={BlackLogo}
          width={92}
          height={92}
          alt="logo"
          className="mb-2"
        />
        <CardTitle>
          {isUpdating ? "Update" : "Create"} Your Nutrition Plan
        </CardTitle>
        {!isUpdating && (
          <CardDescription className="font-semibold">Step 3/3</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <NutritionPlanForm updatingUserData={updatingUserData} />
      </CardContent>
    </Card>
  );
}

export default EditNutritionPlanPage;
