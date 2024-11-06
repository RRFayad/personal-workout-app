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

  return (
    <>
      {/* mx-auto my-auto mt-[3vh] h-min w-full md:col-span-12 md:w-[480px] */}
      <Card className="mx-auto md:col-span-12 md:w-[600px]">
        <CardHeader>
          <Avatar className="mx-auto mb-2 h-20 w-20 md:h-32 md:w-32">
            <AvatarImage
              src={userData?.image || "https://github.com/shadcn.png"}
            />
            <AvatarFallback>
              <Loader2 className="h-4 w-4 animate-spin" />
            </AvatarFallback>
          </Avatar>
          <CardTitle className="text-center text-xl font-bold capitalize md:text-2xl">
            {`${userData.profile?.full_name.split(" ")[0]}'s`} Personal Info:
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="text-sm">
            <li className="mt-2">
              <span className="text-project-gray">Name: </span>
              <span className="font-bold">{userData.profile?.full_name}</span>
            </li>
            <li className="mt-2">
              <span className="text-project-gray">E-mail: </span>
              <span className="font-bold">{userData.email}</span>
            </li>
            <li className="mt-2">
              <span className="text-project-gray">Height: </span>
              <span className="font-bold">
                {userData.profile?.height_in_cm} cm
              </span>
            </li>
            <li className="mt-2">
              <span className="text-project-gray">Gender: </span>
              <span className="font-bold capitalize">
                {userData.profile?.gender}
              </span>
            </li>
            <li className="mt-2">
              <span className="text-project-gray">Date of birth: </span>
              <span className="font-bold">
                {format(userData.profile?.date_of_birth!, "MMM dd, yyy")}
              </span>
            </li>
          </ul>
        </CardContent>
        <CardFooter className="flex-col">
          <Link
            href={{
              pathname: paths.editProfile(),
              query: {
                fullName: userData.profile?.full_name,
                height: userData.profile?.height_in_cm,
                gender: userData.profile?.gender,
                dateOfBirth: userData.profile?.date_of_birth.toISOString(),
              },
            }}
          >
            <p className="mt-6 cursor-pointer text-sm hover:font-semibold hover:underline">
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
