import * as exercises from "@/lib/workout/exercises";

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

  return true; // Validation succeeded
};
