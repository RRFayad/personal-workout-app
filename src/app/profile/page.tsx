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

async function ProfilePage() {
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
      <Card className="col-span-12 mx-auto w-[600px]">
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
            {`${userData.profile?.full_name.split(" ")[0]}'s`} Personal Info:
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="text-sm">
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
        </CardContent>
        <CardFooter className="flex-col">
          <Link href={paths.createProfile()}>
            <p className="mt-6 cursor-pointer text-sm text-project-gray hover:font-semibold hover:underline">
              Need to update your{" "}
              <span className="font-bold">Profile Info</span>?
            </p>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}

export default ProfilePage;
