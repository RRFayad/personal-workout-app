import * as exercises from "@/lib/workout/exercises";

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
