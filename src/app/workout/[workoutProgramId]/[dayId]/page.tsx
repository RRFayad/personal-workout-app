import { db } from "@/db";
import * as exercises from "@/lib/workout/exercises";
import { differenceInCalendarWeeks } from "date-fns";
import { populateExerciseDetails } from "@/lib/workout/helpers";
import WorkoutDay from "@/components/workout/daily-plan/workout-day";
import ActiveRestDay from "@/components/workout/daily-plan/active-rest-day";

import { Button } from "@/components/ui/button";

interface WorkoutDayPlanPageProps {
  params: {
    dayId: string;
    workoutProgramId: number;
  };
}

async function WorkoutDayPlanPage({ params }: WorkoutDayPlanPageProps) {
  const { workoutProgramId, dayId } = params;

  const currentDayWorkoutData = await db.workoutProgramStructure.findFirst({
    where: { workout_program_id: Number(workoutProgramId) },
    include: {
      WorkoutProgramDetails: { where: { day_number: Number(dayId) } },
    },
  });

  if (
    currentDayWorkoutData?.WorkoutProgramDetails[0].day_name ===
    "Active Rest Day"
  ) {
    return (
      <div className="col-span-10 col-start-2 mx-auto h-full w-full">
        <ActiveRestDay />
      </div>
    );
  }

  const programStart = new Date(currentDayWorkoutData!.workout_program_start);
  const programEnd = new Date(currentDayWorkoutData!.workout_program_end);
  const today = new Date();

  let currentWeek: number;
  if (today < programEnd) {
    currentWeek = differenceInCalendarWeeks(today, programStart) + 1;
  } else {
    return (
      <div className="col-span-12 flex h-[30%] flex-col items-center justify-around">
        <div className="flex flex-col items-center justify-center">
          <h1>Your current workout plan finished!</h1>
          <p>Take a deload week, and create a new workout</p>
        </div>
        <Button className="mt-20 w-40 bg-project-orange hover:bg-project-orange hover:opacity-80">
          Create New Workout
        </Button>
      </div>
    );
  }

  const populatedWorkoutProgramDetails = populateExerciseDetails(
    currentDayWorkoutData?.WorkoutProgramDetails!,
    exercises,
  );

  return (
    <>
      <div className="mx-auto w-full md:col-span-12 md:col-start-1 xl:col-span-10 xl:col-start-2">
        <WorkoutDay
          currentWeek={currentWeek}
          programStart={programStart}
          programEnd={programEnd}
          workoutData={populatedWorkoutProgramDetails}
        />
      </div>
    </>
  );
}

export default WorkoutDayPlanPage;
