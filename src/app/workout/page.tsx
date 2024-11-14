import { db } from "@/db";
import Link from "next/link";
import Image from "next/image";
import paths from "@/lib/paths";
import authOptions from "@/lib/auth";
import { format } from "date-fns";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { WorkoutProgramDetails } from "@prisma/client";
import MalePic from "@/../public/images/male/push.jpg";
import FemalePic from "@/../public/images/female/push.avif";
import WeekDaysSplit from "@/components/workout/workout-page/weekdays-split";
import MobileWeekdaysSplit from "@/components/workout/workout-page/mobile-weekdays-split";
import WorkoutInstructionsCard from "@/components/workout/workout-page/workout-instructions-card";
import MobileWorkoutInstructionsCard from "@/components/workout/workout-page/mobile-workout-instructions-card";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
        <h1 className="-mt-2 mb-2 text-center lg:mb-0 lg:mt-1">
          {user?.profile?.full_name.split(" ")[0]}&apos;s Training Program
        </h1>
        {/* <Button className="absolute inset-y-0 right-4 top-0 m-auto bg-project-orange hover:bg-project-orange hover:opacity-75">
          Extract to PDF?
        </Button> */}
      </header>{" "}
      <div className="flex flex-col gap-y-4 lg:col-span-6 lg:grid lg:grid-rows-2">
        <Card className="relative min-h-48 cursor-pointer overflow-hidden rounded-lg lg:col-span-6 lg:row-span-1">
          <Link
            href={paths.workoutDay(workoutProgramId!, todaysWeekDay.number)}
          >
            <Image
              src={FemalePic}
              // src={session.user.gender === "male" ? MalePic : FemalePic}
              className="absolute inset-0 w-full lg:h-full lg:object-cover"
              alt="Trainind Day Pic"
            />
            <div className="absolute inset-0 flex items-end justify-end bg-black text-2xl text-white opacity-75 lg:text-4xl">
              <span className="mb-2 mr-4 lg:mb-6 lg:mr-12">
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
        <WorkoutInstructionsCard />
      </div>
      <div className="lg:col-span-6">
        <WeekDaysSplit
          trainingDaysData={trainingDaysData!}
          workoutProgramId={workoutProgramId!}
          className="hidden lg:grid"
        />
        <MobileWeekdaysSplit
          trainingDaysData={trainingDaysData!}
          workoutProgramId={workoutProgramId!}
          className="grid lg:hidden"
        />
        <MobileWorkoutInstructionsCard />
      </div>
    </>
  );
}

export default WorkoutSplitPage;
