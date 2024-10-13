import { db } from "@/db";
import Image from "next/image";
import authOptions from "@/lib/auth";
import { getServerSession } from "next-auth";
import { WorkoutProgramDetails } from "@prisma/client";
import MalePic from "@/../public/images/male/push.jpg";
import FemalePic from "@/../public/images/female/push.avif";
import WeekDaysSplit from "@/components/workout/workout-page/weekdays-split";
import OverallWorkoutInstructions from "@/components/workout/workout-page/overall-workout-instructions";

import { Button } from "@/components/ui/button";

async function WorkoutSplitPage() {
  const session = await getServerSession(authOptions);

  //   Get Days Names From Workout Details
  const userId = session!.user.id;

  const user = await db.user.findFirst({
    where: { id: userId },
    include: {
      profile: { select: { full_name: true } },
      WorkoutProgramStructure: { include: { WorkoutProgramDetails: true } },
    },
  });

  const getWorkoutDaysNamesFromWorkoutProgramDetails = (
    WorkoutProgramDetails: WorkoutProgramDetails[],
  ): string[] => {
    const daysNames: string[] = [];

    for (let i = 0; i < WorkoutProgramDetails.length; i++) {
      const element = WorkoutProgramDetails[i];
      (!daysNames.includes(element.day_name) ||
        element.day_name === "Active Rest") &&
        daysNames.splice(element.day_number - 1, 0, element.day_name);
    }

    return daysNames;
  };

  let daysNames: string[];

  if (!user?.WorkoutProgramStructure?.WorkoutProgramDetails) {
    // Define what to do (probably, simply redirect to CreaeWorkoutPage)
  } else {
    daysNames = getWorkoutDaysNamesFromWorkoutProgramDetails(
      user.WorkoutProgramStructure.WorkoutProgramDetails,
    );
  }

  return (
    <>
      <header className="relative col-span-12 flex justify-center">
        <h1 className="">
          {user?.profile?.full_name.split(" ")[0]}'s Training Program
        </h1>
        {/* <Button className="absolute inset-y-0 right-4 top-0 m-auto bg-project-orange hover:bg-project-orange hover:opacity-75">
          Extract to PDF?
        </Button> */}
      </header>
      <div className="col-span-6 grid grid-rows-2 gap-y-4">
        <div className="relative col-span-6 row-span-1 flex-col overflow-hidden rounded-lg">
          <Image
            src={FemalePic}
            layout="fill"
            objectFit="cover"
            alt="Trainind Day Pic"
          />
          <div className="absolute inset-0 flex items-end justify-end bg-black text-5xl text-white opacity-75">
            <span className="mb-6 mr-12">Push Day</span>
          </div>
        </div>
        <OverallWorkoutInstructions />
      </div>
      <div className="col-span-6">
        <WeekDaysSplit workoutDaysNames={daysNames!} />
      </div>
    </>
  );
}

export default WorkoutSplitPage;
