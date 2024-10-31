import { parseISO } from "date-fns";
import { Gender } from "@prisma/client";
import ProfileForm from "@/components/profile/profile-form";
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
import { db } from "@/db";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";
import { redirect } from "next/navigation";
import paths from "@/lib/paths";

interface EditProfilePageProps {
  params: {};
  searchParams: {
    fullName?: string;
    height?: string;
    gender?: string;
    dateOfBirth?: string;
  };
}

async function EditProfilePage({ params, searchParams }: EditProfilePageProps) {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;

  const isUpdating = Object.keys(searchParams).length > 0;

  const userData = await db.user.findUnique({
    where: { id: userId },
    include: {
      profile: true,
      WorkoutProgramStructure: true,
      NutritionProgram: true,
    },
  });

  if (!isUpdating && userData?.profile) {
    !userData.WorkoutProgramStructure && redirect(paths.createWorkout());
    !userData.NutritionProgram && redirect(paths.editNutritionPlan());
    userData.WorkoutProgramStructure &&
      userData.NutritionProgram &&
      redirect(paths.workoutSplit());
  }

  const updatingUserData = isUpdating
    ? {
        fullName: searchParams.fullName,
        gender: searchParams.gender as Gender,
        height: Number(searchParams.height),
        dateOfBirth: parseISO(searchParams.dateOfBirth!),
      }
    : null;

  return (
    <Card className="col-span-12 mx-auto my-auto mt-[3vh] h-min w-[480px]">
      <CardHeader className="-mb-2 flex items-center justify-center pt-3">
        <LogoLightDarkSwitcher
          DarkModeImage={WhiteLogo}
          LightModeImage={BlackLogo}
          width={92}
          height={92}
          alt="logo"
          className="mb-2"
        />
        <CardTitle>{isUpdating ? "Update" : "Create"} Your Profile</CardTitle>
        {!isUpdating && (
          <CardDescription className="font-semibold">Step 1/3</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <ProfileForm updatingUserData={updatingUserData} />
      </CardContent>
    </Card>
  );
}

export default EditProfilePage;
