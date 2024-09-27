import * as exercises from "@/lib/workout-exercises";

type ExercisesType = typeof exercises;

export const promptExercisesList: Record<string, any> = {};

Object.keys(exercises).forEach((muscleGroup) => {
  const muscleGroupExercises = exercises[muscleGroup as keyof ExercisesType];

  promptExercisesList[muscleGroup] = {};

  Object.keys(muscleGroupExercises).forEach((exerciseKey) => {
    const exercise =
      muscleGroupExercises[exerciseKey as keyof typeof muscleGroupExercises];

    promptExercisesList[muscleGroup][exerciseKey] = {
      name: exercise.exerciseName.en,
      intensity: exercise.intensity,
      movementVariables: exercise.movementVariables,
    };
  });
});
