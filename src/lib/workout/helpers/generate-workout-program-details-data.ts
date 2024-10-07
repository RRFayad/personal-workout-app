import { WorkoutProgramDetails } from "@prisma/client";
import { TrainingWeeklySplit, SplitDay } from "@/types/training-splits";

interface WorkoutProgramInsertData {
  [dayName: string]: {
    [exerciseName: string]: number;
  };
}

type CompleteWorkoutDayData = SplitDay & {
  exercises: {
    [exerciseName: string]: number;
  };
};

type CompleteWorkoutWeekData = {
  [dayName: string]: CompleteWorkoutDayData;
};

export const generateWorkoutProgramDetailsData = (
  workoutId: number,
  workoutProgram: WorkoutProgramInsertData,
  trainingWeekSplit: TrainingWeeklySplit,
): WorkoutProgramDetails[] => {
  let completeWorkoutData: CompleteWorkoutWeekData = {};

  for (const [key, value] of Object.entries(workoutProgram)) {
    completeWorkoutData[key] = {
      ...(trainingWeekSplit[key as keyof TrainingWeeklySplit] as SplitDay),
      exercises: value,
    };
  }

  // console.log(completeWorkoutData);

  let dayNumber = 1;
  const workoutDataToInsertInDb = [];

  const addRestDay = (dayNumber: number) => ({
    workout_program_id: workoutId,
    day_number: dayNumber,
    day_name: "rest",
    exercise_number: 1,
    exercise_name: "activeRest",
    sets_qty: 1,
  });

  for (const [day, dayWorkoutData] of Object.entries(completeWorkoutData)) {
    // when the dayNumber is different from the object's day number, it's rest day!
    while (dayNumber !== dayWorkoutData.dayNumber) {
      workoutDataToInsertInDb.push(addRestDay(dayNumber));
      dayNumber++;
    }
    let exerciseNumber = 1;
    for (const [exerciseName, sets] of Object.entries(
      dayWorkoutData.exercises,
    )) {
      workoutDataToInsertInDb.push({
        workout_program_id: workoutId,
        day_number: dayWorkoutData.dayNumber,
        day_name: dayWorkoutData.dayName,
        exercise_number: exerciseNumber,
        exercise_name: exerciseName,
        sets_qty: sets,
      });
      exerciseNumber++;
    }
    dayNumber++;
  }

  // For the last days
  while (dayNumber <= 7) {
    workoutDataToInsertInDb.push(addRestDay(dayNumber));
    dayNumber++;
  }
  // console.log(workoutDataToInsertInDb);
  return workoutDataToInsertInDb;
};
