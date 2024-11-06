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
      <Card className="mx-auto md:col-span-12 md:w-[600px]">
        <CardHeader className="">
          <Avatar className="mx-auto mb-2 h-20 w-20 md:h-32 md:w-32">
            <AvatarImage
              src={userData?.image || "https://github.com/shadcn.png"}
            />
            <AvatarFallback>
              <Loader2 className="h-4 w-4 animate-spin" />
            </AvatarFallback>
          </Avatar>
          <CardTitle className="text-center text-xl font-bold capitalize text-card-foreground md:text-2xl">
            {`${userData.profile?.full_name.split(" ")[0]}'s`} Nutritional Info:
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="text-sm text-project-gray">
            <li className="mt-2">
              <span className="">Current weight: </span>
              <span className="font-bold text-card-foreground">
                {userData.NutritionProgram?.weight_in_kg} kg
              </span>
            </li>
            <li className="mt-2">
              <span className="">Weekly Training Hours: </span>
              <span className="font-bold text-card-foreground">
                {userData.NutritionProgram?.weekly_training_hours} hours
              </span>
            </li>
            <li className="mt-2">
              <span className="">Basal Metabolic Rate: </span>
              <span className="font-bold text-card-foreground">
                {userData.NutritionProgram?.basal_metabolic_rate} calories
              </span>
            </li>
            <li className="mt-2">
              <span className="">Total Daily Energy Expenditure: </span>
              <span className="font-bold text-card-foreground">
                {userData.NutritionProgram?.total_daily_energy_expenditure}{" "}
                calories
              </span>
            </li>
          </ul>
        </CardContent>
        <CardFooter className="flex-col items-start">
          <CardDescription className="text-project-gray">
            These are the daily intakes for{" "}
            <span className="font-bold">{dietPhaseName}</span>*:
          </CardDescription>
          <ul className="mt-4 flex w-full min-w-[240px] items-center justify-around rounded bg-project-blue py-2 text-sm font-bold text-white">
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
          <Link
            href={{
              pathname: paths.editNutritionPlan(),
              query: {
                weeklyTrainingHours:
                  userData.NutritionProgram?.weekly_training_hours,
                weight: userData.NutritionProgram?.weight_in_kg,
                dietPhase: userData.NutritionProgram?.current_diet_phase,
              },
            }}
            className="self-center"
          >
            <p className="mt-6 cursor-pointer text-sm hover:font-semibold hover:underline">
              Need to update your <b>nutrition plan or goals?</b>
            </p>
          </Link>
          <p className="mt-6 text-xs text-project-gray">
            <strong>*Tip: </strong>
            Start cutting when your body fat is around{" "}
            <b>
              {userData.profile?.gender === "male"
                ? "15% to 17%"
                : "25% to 27%"}
            </b>{" "}
            (or higher) and bulking when your body fat is around{" "}
            <b>
              {userData.profile?.gender === "male" ? "8% to 10%" : "18% to 20%"}
            </b>
          </p>
        </CardFooter>
      </Card>
    </>
  );
}

export default NutritionPage;
