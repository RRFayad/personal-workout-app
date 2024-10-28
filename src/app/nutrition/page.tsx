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
          <CardTitle className="mt-4 text-center font-bold capitalize">
            Nutritional Info
          </CardTitle>
          <CardDescription className="mx-auto">
            These are the nutritional guides for{" "}
            <span className="font-bold capitalize">{dietPhaseName}</span>
          </CardDescription>
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
            <li className="mt-2">
              <h5 className="">Daily Intakes: </h5>
              <ul className="flex w-full items-center justify-around bg-project-blue p-2 font-bold text-white">
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
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="mx-auto mt-2 w-44 bg-project-orange hover:brightness-90">
            Update Infos
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default NutritionPage;
