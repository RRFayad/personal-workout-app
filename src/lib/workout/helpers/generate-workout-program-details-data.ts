import { WorkoutProgramDetails } from "@prisma/client";

interface WorkoutProgramInsertData {
  [muscleGroup: string]: {
    [exerciseName: string]: number;
  };
}
export const generateWorkoutProgramDetailsData = (
  workoutId: number,
  workoutProgram: WorkoutProgramInsertData,
  restDays: number[],
): WorkoutProgramDetails[] => {
  const dataToInsert = [];
  let dayNumber = 1;

  // Collect all exercises to be inserted
  for (const [dayName, exercises] of Object.entries(workoutProgram)) {
    let exerciseNumber = 1;

    if (restDays.includes(dayNumber)) {
      dataToInsert.push({
        workout_program_id: workoutId,
        day_number: dayNumber,
        day_name: "rest",
        exercise_number: 1,
        exercise_name: "activeRest",
        sets_qty: 1,
      });
      dayNumber++;
    }
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

  // For the 7th day
  dataToInsert.push({
    workout_program_id: workoutId,
    day_number: dayNumber,
    day_name: "rest",
    exercise_number: 1,
    exercise_name: "activeRest",
    sets_qty: 1,
  });

  console.log(dataToInsert);
  return dataToInsert;
};
