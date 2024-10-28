import { db } from "@/db";
import Image from "next/image";
import authOptions from "@/lib/auth";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";

import { Loader2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import paths from "@/lib/paths";

async function NutritionPage() {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;

  if (session === null) {
    redirect("/");
  }

  const userData = await db.user.findFirst({
    where: { id: userId },
    include: { profile: true, NutritionProgram: true },
  });

  if (userData === null) {
    redirect("/");
  }

  let dietPhaseName: "cutting" | "bulking" | "maintaining";

  if (userData.NutritionProgram?.current_diet_phase === "cut") {
    dietPhaseName = "cutting";
  } else if (userData.NutritionProgram?.current_diet_phase === "bulk") {
    dietPhaseName = "bulking";
  } else {
    dietPhaseName = "maintaining";
  }

  return (
    <>
      <Card className="col-span-6 col-start-4">
        <CardHeader>
          <Avatar className="mx-auto mb-2 h-32 w-32">
            <AvatarImage
              src={userData?.image || "https://github.com/shadcn.png"}
            />
            <AvatarFallback>
              <Loader2 className="h-4 w-4 animate-spin" />
            </AvatarFallback>
          </Avatar>
          <CardTitle className="text-center font-bold capitalize">
            {`${userData.profile?.full_name.split(" ")[0]}'s`} Nutritional Info:
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* <ul className="text-sm">
            <li className="mt-2">
              <span className="">Name: </span>
              <span className="font-bold">{userData.profile?.full_name}</span>
            </li>
            <li className="mt-2">
              <span className="">E-mail: </span>
              <span className="font-bold">{userData.email}</span>
            </li>
            <li className="mt-2">
              <span className="">Height: </span>
              <span className="font-bold">
                {userData.profile?.height_in_cm} cm
              </span>
            </li>
            <li className="mt-2">
              <span className="">Gender: </span>
              <span className="font-bold capitalize">
                {userData.profile?.gender}
              </span>
            </li>
            <li className="mt-2">
              <span className="">Date of birth: </span>
              <span className="font-bold">
                {format(userData.profile?.date_of_birth!, "MMM dd, yyy")}
              </span>
            </li>
          </ul>
          <CardTitle className="mt-4 text-center font-bold capitalize">
            Nutrition Info
          </CardTitle> */}

          {/* <h5 className="mt-4">Additional Info:</h5> */}
          <ul className="text-sm">
            <li className="mt-2">
              <span className="">Current weight: </span>
              <span className="font-bold">
                {userData.NutritionProgram?.weight_in_kg} kg
              </span>
            </li>
            <li className="mt-2">
              <span className="">Weekly Training Hours: </span>
              <span className="font-bold">
                {userData.NutritionProgram?.weekly_training_hours} hours
              </span>
            </li>
            <li className="mt-2">
              <span className="">Basal Metabolic Rate: </span>
              <span className="font-bold">
                {userData.NutritionProgram?.basal_metabolic_rate} calories
              </span>
            </li>
            <li className="mt-2">
              <span className="">Total Daily Energy Expenditure: </span>
              <span className="font-bold">
                {userData.NutritionProgram?.total_daily_energy_expenditure}{" "}
                calories
              </span>
            </li>
          </ul>
        </CardContent>
        <CardFooter className="flex-col">
          <CardDescription className="mx-auto">
            These are the daily intakes for{" "}
            <span className="font-bold capitalize">{dietPhaseName}:</span>
          </CardDescription>
          <ul className="mt-4 flex w-full items-center justify-around rounded bg-project-blue p-2 font-bold text-white">
            <li className="flex flex-col items-center justify-center">
              <span className="">Calories </span>
              <span className="font-bold">
                {userData.NutritionProgram?.daily_kcal} kcal
              </span>
            </li>
            <li className="flex flex-col items-center justify-center">
              <span className="">Proteins </span>
              <span className="font-bold">
                {userData.NutritionProgram?.daily_proteins} g
              </span>
            </li>
            <li className="flex flex-col items-center justify-center">
              <span className="">Carbs </span>
              <span className="font-bold">
                {userData.NutritionProgram?.daily_carbs} g
              </span>
            </li>
            <li className="flex flex-col items-center justify-center">
              <span className="">Fats </span>
              <span className="font-bold">
                {userData.NutritionProgram?.daily_fats} g
              </span>
            </li>
          </ul>
          <Link href={paths.createNutritionPlan()}>
            <p className="mt-6 cursor-pointer text-sm text-project-gray hover:font-semibold hover:underline">
              Need to update your nutrition plan or goals?
            </p>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}

export default NutritionPage;
