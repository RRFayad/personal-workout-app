import * as exercises from "@/lib/workout/exercises";
import { ExerciseDictionary, MuscularGroupKey } from "@/types/exercise";

export const getExerciseDataByName = (exerciseName: string) => {
  for (const muscularGroupKey in exercises) {
    const muscularGroup = muscularGroupKey as MuscularGroupKey;

    const muscleGroupExercises = exercises[muscularGroup] as ExerciseDictionary<
      typeof muscularGroup
    >;

    if (exerciseName in muscleGroupExercises) {
      return muscleGroupExercises[exerciseName];
    }
  }
  return null;
};
