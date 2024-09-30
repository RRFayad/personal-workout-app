import * as exercises from "@/lib/workout/exercises";
import { addDays, startOfWeek } from "date-fns";
import { WorkoutProgramDetails } from "@prisma/client";

// The template you're validating
export const DUMMY_WORKOUT = {
  push: {
    benchPress: 3,
    inclinedDumbbellBenchPress: 3,
    crossOver: 3,
    seatedDumbbellPress: 3,
    lateralRaise: 3,
    tricepsDips: 3,
    plank: 2,
  },
  pull: {
    deadlift: 3,
    overhandLatPullDown: 3,
    seatedCableRow: 3,
    barbellCurl: 3,
    dumbbellHammerCurl: 3,
    facePull: 3,
    captainsChairLegRaise: 2,
  },
  legs: {
    squat: 3,
    stiffLegDeadlift: 3,
    lunges: 3,
    lyingLegCurl: 2,
    legExtension: 2,
    seatedLegCurl: 2,
    seatedCalfRaise: 3,
    crunch: 2,
  },
};

export const validateWorkoutExercises = (workoutProgram: any): boolean => {
  // Get exercises list from workout
  const workoutExercisesList = Object.values(workoutProgram)
    .map((muscleGroup) => Object.keys(muscleGroup!))
    .flat();

  // Get all exercise names from exercises list
  const allExercises: string[] = Object.keys(exercises).flatMap((muscleGroup) =>
    Object.keys(exercises[muscleGroup as keyof typeof exercises]),
  );

  // Check if every exercise in the template exists in the exercises list
  const missingExercises = workoutExercisesList.filter(
    (exercise) => !allExercises.includes(exercise),
  );

  // Validation failed
  if (missingExercises.length > 0) {
    console.error(`Missing exercises: ${missingExercises.join(", ")}`);
    return false;
  }

  return true;
};

export const setWorkoutPlanDates = (weeks = 16) => {
  const today = new Date();

  const nextMonday = startOfWeek(addDays(today, 7), { weekStartsOn: 1 });

  const endDate = addDays(nextMonday, weeks * 7 - 1);

  return {
    startDate: nextMonday.toISOString(),
    endDate: endDate.toISOString(),
  };
};

interface WorkoutProgramInsertData {
  [muscleGroup: string]: {
    [exerciseName: string]: number;
  };
}
export const generateWorkoutProgramDetailsData = (
  workoutId: number,
  workoutProgram: WorkoutProgramInsertData,
): WorkoutProgramDetails[] => {
  const dataToInsert = [];
  let dayNumber = 1;

  // Collect all exercises to be inserted
  for (const [dayName, exercises] of Object.entries(workoutProgram)) {
    let exerciseNumber = 1;

    for (const [exerciseName, sets] of Object.entries(exercises)) {
      dataToInsert.push({
        workout_program_id: workoutId,
        day_number: dayNumber,
        day_name: dayName,
        exercise_number: exerciseNumber,
        exercise_name: exerciseName,
        sets_qty: sets,
      });
      exerciseNumber++;
    }
    dayNumber++;
  }
  return dataToInsert;
};
