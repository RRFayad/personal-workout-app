"use client";
import { addDays, differenceInCalendarWeeks, format, subDays } from "date-fns";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";

import { columns } from "@/app/workout/[workoutProgramId]/[dayId]/columns";
import { defineExerciseRestPeriod } from "@/lib/workout/helpers/define-rest";
import { DataTable } from "@/app/workout/[workoutProgramId]/[dayId]/data-table";
import { defineExerciseWeeklyRepRanges } from "@/lib/workout/helpers/define-rep-ranges";

interface WorkoutData {
  exercise_name: any;
  intensity: any;
  equipment: any;
  imageUrl: any;
  workout_program_id: number;
  day_number: number;
  day_name: string;
  exercise_number: number;
  sets_qty: number;
  reps?: { min: number; max: number };
  rest?: number;
}

interface WeekDisplayProps {
  currentWeek: number;
  programStart: Date;
  programEnd: Date;
  workoutData: WorkoutData[];
}

interface WeekData {
  week: number;
  weekStartDay: Date;
  weekEndDay: Date;
}

function WorkoutDay({
  currentWeek,
  programStart,
  programEnd,
  workoutData,
}: WeekDisplayProps) {
  const [weekDataToBeDisplayed, setWeekDataToBeDisplayed] = useState<WeekData>({
    week: currentWeek,
    weekStartDay: addDays(programStart, 7 * (currentWeek - 1)),
    weekEndDay: addDays(programStart, 7 * (currentWeek - 1) + 6),
  });

  const totalWeeks = differenceInCalendarWeeks(programEnd, programStart);

  const decreaseWeekHandler = () => {
    weekDataToBeDisplayed.week > 1 &&
      setWeekDataToBeDisplayed((prevState) => ({
        week: prevState.week - 1,
        weekStartDay: subDays(prevState.weekStartDay, 7),
        weekEndDay: subDays(prevState.weekEndDay, 7),
      }));
  };

  const increaseWeekHandler = () => {
    weekDataToBeDisplayed.week < totalWeeks &&
      setWeekDataToBeDisplayed((prevState) => ({
        week: prevState.week + 1,
        weekStartDay: addDays(prevState.weekStartDay, 7),
        weekEndDay: addDays(prevState.weekEndDay, 7),
      }));
  };

  const workoutDataWithRepsAndRest = workoutData.map((exerciseData) => {
    return {
      ...exerciseData,
      reps: defineExerciseWeeklyRepRanges(
        exerciseData.intensity,
        weekDataToBeDisplayed.week,
      ),
      rest: defineExerciseRestPeriod(exerciseData.intensity),
    };
  });

  return (
    <>
      <div className="flex items-center justify-center">
        <ChevronLeftIcon
          className="cursor-pointer"
          size={28}
          onClick={decreaseWeekHandler}
        />
        <h3>Week {weekDataToBeDisplayed.week}</h3>
        <ChevronRightIcon
          size={28}
          className="cursor-pointer"
          onClick={increaseWeekHandler}
        />
      </div>
      <p className="mx-auto mt-1 text-center text-[0.8rem] text-project-dark-gray">
        {weekDataToBeDisplayed.week === 0 &&
          "Your workout schedule starts on next Monday!"}
        {weekDataToBeDisplayed.week > 0 &&
          `${format(weekDataToBeDisplayed.weekStartDay, "MMM do")} to ${format(weekDataToBeDisplayed.weekEndDay, "MMM do")}`}
      </p>
      <div className="mt-4">
        <DataTable columns={columns} data={workoutDataWithRepsAndRest} />
      </div>
    </>
  );
}

export default WorkoutDay;
