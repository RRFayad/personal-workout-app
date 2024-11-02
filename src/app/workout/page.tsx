import { db } from "@/db";
import Image from "next/image";
import authOptions from "@/lib/auth";
import { getServerSession } from "next-auth";
import { WorkoutProgramDetails } from "@prisma/client";
import MalePic from "@/../public/images/male/push.jpg";
import FemalePic from "@/../public/images/female/push.avif";
import WeekDaysSplit from "@/components/workout/workout-page/weekdays-split";
import OverallWorkoutInstructions from "@/components/workout/workout-page/overall-workout-instructions";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import paths from "@/lib/paths";

async function WorkoutSplitPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect(paths.home());
  }
  //   Get Days Names From Workout Details
  const userId = session!.user.id;

  const user = await db.user.findFirst({
    where: { id: userId },
    include: {
      profile: { select: { full_name: true } },
      WorkoutProgramStructure: { include: { WorkoutProgramDetails: true } },
    },
  });

  const getWorkoutDaysDataFromWorkoutProgramDetails = (
    WorkoutProgramDetails: WorkoutProgramDetails[],
  ): { dayNumber: number; dayName: string }[] => {
    const trainingDays: { dayNumber: number; dayName: string }[] = [];

    for (let i = 0; i < WorkoutProgramDetails.length; i++) {
      const element = WorkoutProgramDetails[i];

      const dayExists = trainingDays.some(
        (day) => day.dayNumber === element.day_number,
      );

      if (!dayExists) {
        trainingDays.push({
          dayNumber: element.day_number,
          dayName: element.day_name,
        });
      }
    }

    // Fill in any missing days (1 through 7) as "Active Rest"
    for (let i = 1; i <= 7; i++) {
      if (!trainingDays.some((day) => day.dayNumber === i)) {
        trainingDays.push({ dayNumber: i, dayName: "Active Rest" });
      }
    }

    // Sort daysNames by dayNumber to maintain order
    trainingDays.sort((a, b) => a.dayNumber - b.dayNumber);

    // console.log(trainingDays);

    return trainingDays;
  };

  const workoutProgramId = user?.WorkoutProgramStructure?.workout_program_id;
  let workoutProgramDetails: WorkoutProgramDetails[];
  if (!user?.WorkoutProgramStructure?.WorkoutProgramDetails) {
    // Define what to do (probably, simply redirect to CreaeWorkoutPage)
  } else {
    workoutProgramDetails = user.WorkoutProgramStructure.WorkoutProgramDetails;
  }

  const trainingDaysData = getWorkoutDaysDataFromWorkoutProgramDetails(
    workoutProgramDetails!,
  );

  return (
    <>
      <header className="h12 col-span-12 flex justify-center">
        <h1>
          {user?.profile?.full_name.split(" ")[0]}&apos;s Training Program
        </h1>
        {/* <Button className="absolute inset-y-0 right-4 top-0 m-auto bg-project-orange hover:bg-project-orange hover:opacity-75">
          Extract to PDF?
        </Button> */}
      </header>{" "}
      <div className="col-span-6 grid grid-rows-2 gap-y-4">
        <Card className="relative col-span-6 row-span-1 flex-col overflow-hidden rounded-lg">
          <Image
            src={FemalePic}
            className="absolute inset-0 h-full w-full object-cover"
            alt="Trainind Day Pic"
          />
          <div className="absolute inset-0 flex items-end justify-end bg-black text-5xl text-white opacity-75">
            <span className="mb-6 mr-12">
              {
                trainingDaysData.find(
                  (day) =>
                    day.dayNumber === ((new Date().getDay() + 6) % 7) + 1,
                )!.dayName
              }
            </span>
          </div>
        </Card>
        <OverallWorkoutInstructions />
      </div>
      <div className="col-span-6">
        <WeekDaysSplit
          trainingDaysData={trainingDaysData!}
          workoutProgramDetails={workoutProgramDetails!}
          workoutProgramId={workoutProgramId!}
        />
      </div>
    </>
  );
}

export default WorkoutSplitPage;
