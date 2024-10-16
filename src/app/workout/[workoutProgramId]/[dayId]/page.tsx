import { db } from "@/db";
import { WorkoutProgramDetails, WorkoutProgramStructure } from "@prisma/client";
import { differenceInCalendarWeeks, isWithinInterval } from "date-fns";

import { Button } from "@/components/ui/button";
import { Bold, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { DataTable } from "./data-table";
import { columns } from "./columns";

import * as exercises from "@/lib/workout/exercises";
import { ExerciseDictionary } from "@/types/exercise";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import WeekDisplay from "@/components/workout/daily-plan/week-display";

interface WorkoutDayPlanPageProps {
  params: {
    dayId: string;
    workoutProgramId: number;
  };
}

async function WorkoutDayPlanPage({ params }: WorkoutDayPlanPageProps) {
  const { workoutProgramId, dayId } = params;

  const workoutData = await db.workoutProgramStructure.findFirst({
    where: { workout_program_id: Number(workoutProgramId) },
    include: {
      WorkoutProgramDetails: { where: { day_number: Number(dayId) } },
    },
  });

  const programStart = new Date(workoutData!.workout_program_start);
  const programEnd = new Date(workoutData!.workout_program_end);
  const today = new Date();

  let currentWeek: number;
  if (isWithinInterval(today, { start: programStart, end: programEnd })) {
    currentWeek = differenceInCalendarWeeks(today, programStart) + 1;
  } else {
    return (
      <div className="col-span-12 mx-auto mt-16 flex h-[30%] flex-col items-center justify-around">
        <div className="flex flex-col items-center justify-center">
          <h1>Your current workout plan finished!</h1>
          <p>Take a deload week, and create a new workout</p>
        </div>
        <Button className="w-40 bg-project-orange hover:bg-project-orange hover:opacity-80">
          Create New Workout
        </Button>
      </div>
    );
  }

  const populateExerciseDetails = (
    workoutProgramDetails: WorkoutProgramDetails[],
    exerciseData: any,
  ) => {
    return workoutProgramDetails.map((exercise: WorkoutProgramDetails) => {
      const category = Object.keys(exerciseData).find(
        (key) => exerciseData[key][exercise.exercise_name],
      );

      const exerciseDetails = exerciseData[category!][exercise.exercise_name];

      return {
        ...exercise,
        exercise_name: exerciseDetails.exerciseName?.en,
        intensity: exerciseDetails.intensity,
        equipment: exerciseDetails.equipment,
        imageUrl: exerciseDetails.imageUrl,
      };
    });
  };

  const populatedWorkoutProgramDetails = populateExerciseDetails(
    workoutData?.WorkoutProgramDetails!,
    exercises,
  );

  // console.log(populatedWorkoutProgramDetails);

  return (
    <>
      <div className="col-span-10 col-start-2 mx-auto w-full">
        <WeekDisplay currentWeek={currentWeek} />

        <div className="py-3">
          <DataTable columns={columns} data={populatedWorkoutProgramDetails} />
        </div>
      </div>
    </>
  );
}

export default WorkoutDayPlanPage;
