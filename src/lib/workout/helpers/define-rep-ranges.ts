import { IntensityKey } from "@/types/exercise";

type SpecificVariable = "plank" | "absCore";

export const defineExerciseWeeklyRepRanges = (
  intensity: IntensityKey,
  week: number,
  specificVariable?: SpecificVariable,
) => {
  let weeklyRepRanges = [];
  if (specificVariable === "absCore") {
    weeklyRepRanges = [
      { min: 12, max: 15 },
      { min: 12, max: 15 },
      { min: 12, max: 15 },
      { min: 12, max: 15 },
      { min: 12, max: 15 },
      { min: 12, max: 15 },
      { min: 12, max: 15 },
      { min: 12, max: 15 },
      { min: 12, max: 15 },
      { min: 12, max: 15 },
      { min: 10, max: 12 },
      { min: 10, max: 12 },
      { min: 10, max: 12 },
      { min: 10, max: 12 },
      { min: 10, max: 12 },
      { min: 10, max: 12 },
    ];
  } else if (specificVariable === "plank") {
    weeklyRepRanges = [
      { min: 60, max: 90 },
      { min: 60, max: 90 },
      { min: 60, max: 90 },
      { min: 60, max: 90 },
      { min: 60, max: 90 },
      { min: 60, max: 90 },
      { min: 60, max: 90 },
      { min: 60, max: 90 },
      { min: 60, max: 90 },
      { min: 60, max: 90 },
      { min: 60, max: 90 },
      { min: 60, max: 90 },
      { min: 60, max: 90 },
      { min: 60, max: 90 },
      { min: 60, max: 90 },
      { min: 60, max: 90 },
    ];
  } else {
    switch (intensity) {
      case "veryHigh":
      case "high":
        weeklyRepRanges = [
          { min: 8, max: 10 },
          { min: 8, max: 10 },
          { min: 6, max: 8 },
          { min: 6, max: 8 },
          { min: 6, max: 8 },
          { min: 6, max: 8 },
          { min: 4, max: 6 },
          { min: 4, max: 6 },
          { min: 4, max: 6 },
          { min: 4, max: 6 },
          { min: 4, max: 6 },
          { min: 4, max: 6 },
          { min: 4, max: 6 },
          { min: 2, max: 4 },
          { min: 2, max: 4 },
          { min: 1, max: 2 },
        ];
        break;
      case "moderate":
      case "low":
      default:
        weeklyRepRanges = [
          { min: 10, max: 12 },
          { min: 10, max: 12 },
          { min: 8, max: 10 },
          { min: 8, max: 10 },
          { min: 8, max: 10 },
          { min: 8, max: 10 },
          { min: 8, max: 10 },
          { min: 8, max: 10 },
          { min: 8, max: 10 },
          { min: 8, max: 10 },
          { min: 6, max: 8 },
          { min: 6, max: 8 },
          { min: 6, max: 8 },
          { min: 6, max: 8 },
          { min: 6, max: 8 },
          { min: 6, max: 8 },
        ];
        break;
    }
  }

  return weeklyRepRanges[week - 1] || weeklyRepRanges[week];
};
