import { StaticImageData } from "next/image";
import { WorkoutProgramDetails } from "@prisma/client";
import { EquipmentKey, IntensityKey, MuscularGroupKey } from "@/types/exercise";

export const populateExerciseDetails = (
  workoutProgramDetails: WorkoutProgramDetails[],
  exerciseCompleteData: any,
) => {
  return workoutProgramDetails.map(
    (exerciseDataFromWorkoutDB: WorkoutProgramDetails) => {
      const muscularGroup = Object.keys(exerciseCompleteData).find(
        (key) =>
          exerciseCompleteData[key][exerciseDataFromWorkoutDB.exercise_name],
      ) as MuscularGroupKey;

      const exerciseDetails =
        exerciseCompleteData[muscularGroup!][
          exerciseDataFromWorkoutDB.exercise_name
        ];

      return {
        ...exerciseDataFromWorkoutDB,
        exerciseNameToBeDisplayed: exerciseDetails.exerciseName.en as string,
        intensity: exerciseDetails.intensity as IntensityKey,
        equipment: exerciseDetails.equipment as EquipmentKey,
        imageUrl: exerciseDetails.imageUrl as StaticImageData,
        muscularGroup: muscularGroup as MuscularGroupKey,
      };
    },
  );
};
