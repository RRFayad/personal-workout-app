import { IntensityKey } from "@/types/exercise";

export const defineExerciseRestPeriod = (intensity: IntensityKey) => {
  let restingPeriodInMinutes;
  switch (intensity) {
    case "veryHigh":
      restingPeriodInMinutes = 3.5;
      break;
    case "high":
      restingPeriodInMinutes = 3;
      break;
    case "moderate":
      restingPeriodInMinutes = 2;
      break;
    case "low":
      restingPeriodInMinutes = 1.5;
      break;
    default:
      restingPeriodInMinutes = 2;
      break;
  }
  return restingPeriodInMinutes;
};
