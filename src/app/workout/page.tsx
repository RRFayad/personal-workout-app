import { db } from "@/db";
import Image from "next/image";
import { format, getDay } from "date-fns";
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
import Link from "next/link";

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

  const getWorkoutDaysNumberAndNameList = (
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

    // Sort daysNames by dayNumber to maintain order
    trainingDays.sort((a, b) => a.dayNumber - b.dayNumber);

    return trainingDays;
  };

  const workoutProgramId = user?.WorkoutProgramStructure?.workout_program_id;
  const todaysWeekDay = {
    name: format(new Date(), "EEEE"),
    number: new Date().getDay() === 0 ? 7 : new Date().getDay(),
  };

  let workoutProgramDetails: WorkoutProgramDetails[];
  if (!user?.WorkoutProgramStructure?.WorkoutProgramDetails) {
    redirect(paths.createWorkout());
  } else {
    workoutProgramDetails = user.WorkoutProgramStructure.WorkoutProgramDetails;
  }

  const trainingDaysData = getWorkoutDaysNumberAndNameList(
    workoutProgramDetails!,
  );

  return (
    <>
      <header className="h12 col-span-12 flex justify-center">
        <h1 className="text-center">
          {user?.profile?.full_name.split(" ")[0]}&apos;s Training Program
        </h1>
        {/* <Button className="absolute inset-y-0 right-4 top-0 m-auto bg-project-orange hover:bg-project-orange hover:opacity-75">
          Extract to PDF?
        </Button> */}
      </header>{" "}
      <div className="col-span-6 grid grid-rows-2 gap-y-4">
        <Card className="relative col-span-6 row-span-1 cursor-pointer flex-col overflow-hidden rounded-lg">
          <Link
            href={paths.workoutDay(workoutProgramId!, todaysWeekDay.number)}
          >
            <Image
              src={FemalePic}
              className="absolute inset-0 h-full w-full object-cover"
              alt="Trainind Day Pic"
            />
            <div className="absolute inset-0 flex items-end justify-end bg-black text-4xl text-white opacity-75">
              <span className="mb-6 mr-12">
                {`${todaysWeekDay.name} | ${
                  trainingDaysData.find(
                    (day) =>
                      day.dayNumber === ((new Date().getDay() + 6) % 7) + 1,
                  )!.dayName
                }`}
              </span>
            </div>
          </Link>
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
