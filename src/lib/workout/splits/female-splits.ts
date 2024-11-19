import { TrainingWeeklySplit } from "@/types/training-splits";

export const fiveDaysSplit: TrainingWeeklySplit = {
  legs: {
    dayName: "Legs",
    dayNumber: 1,
    exercisesDescriptions: [
      "Squat - 3 series",
      "High or Moderate intensity quads exercise - 3 series",
      "Stiff Leg Deadlift - 3 series",
      "A moderate quads exercise - 3 Series",
      "A isolated hamstrings exercise - 3 series",
      "Calves exercise - 3 series",
      "Abs (try to mix from the previous days) - 2 series",
    ],
  },
  push: {
    dayName: "Push",
    dayNumber: 2,
    exercisesDescriptions: [
      "High Intensity Chest or Shoulders Exercise - 3 Series",
      "A moderate chest or shoulders intensity exercise (differing between chest or shoulders from the first exercise) - 3 Series",
      "A low intensity chest exercise - 3 series",
      "Shoulders - lateral movement - 3 series",
      "Triceps - 3 series",
      "Abs - 2 series",
    ],
  },
  pull: {
    dayName: "Pull",
    dayNumber: 3,
    exercisesDescriptions: [
      "Deadlift - 3 Series",
      "A moderate or low intensity back exercise - 3 Series",
      "A moderate or low intensity back exercise (try to focus in a different movement pattern and grip related to the already selected exercise) - 3 series",
      "Biceps - 3 series",
      "Rear deltoid exercise - 3 series",
      "Abs (try to mix from the previous days) - 2 series",
    ],
  },
  lowerBody: {
    dayName: "Lower Body",
    dayNumber: 5,
    exercisesDescriptions: [
      "A very high or high intensity glutes exercise (besides deadlift) - 3 series",
      "A moderate intensity Quads Exercise - 2 Series",
      "A moderate intensity glutes exercise - 3 Series",
      "Leg Extension - 3 Series",
      "Seated or Lying leg curl - 3 Series",
      "Calves - 3 Series",
      "Abs (try to mix from the previous days) - 2 series",
    ],
  },
  upperBody: {
    dayName: "Upper Body",
    dayNumber: 6,
    exercisesDescriptions: [
      "High or Moderate Intensity Chest or Shoulders Exercise (different muscle or movement angle related to the first exercise of the push day) - 3 Series",
      "High or Moderate Intensity Back Exercise - 3 Series",
      "A moderate or low intensity chest exercise - 2 series",
      "A moderate or low intensity back exercise - 2 series",
      "Deltoids Exercise - 2 Series",
      "Side Deltoid Exercise - 2 series",
      "Biceps Exercise (with a different movement angle related to the first exercise of the pull day) - 2 series",
      "Triceps Exercise (with a different movement angle related to the first exercise of the push day) - 2 series",
      "Abs (try to mix from the previous days) - 2 series",
    ],
  },
};

export const fourDaysSplit: TrainingWeeklySplit = {
  legsA: {
    dayName: "Legs (A)",
    dayNumber: 1,
    exercisesDescriptions: [
      "Squat - 3 series",
      "A high or moderate intensity quads exercise - 3 series",
      "An isolated Hamstring exercise - 3 series",
      "Leg Extension - 3 Series",
      "A different isolated hamstring exercise - 3 series",
      "Calves exercise - 3 series",
      "Abs (try to mix from the previous days) - 2 series",
    ],
  },
  push: {
    dayName: "Push",
    dayNumber: 2,
    exercisesDescriptions: [
      "High Intensity Chest or Shoulders Exercise - 3 Series",
      "A moderate chest or shoulders intensity exercise (differing between chest or shoulders from the first exercise) - 3 Series",
      "A moderate or low intensity chest exercise - 3 series",
      "Shoulders - lateral movement - 3 series",
      "Triceps - 3 series",
      "Abs - 2 series",
    ],
  },
  pull: {
    dayName: "Pull",
    dayNumber: 3,
    exercisesDescriptions: [
      "Deadlift - 3 Series",
      "A vertical pull back exercise - 3 Series",
      "A moderate or low intensity horizontal back exercise (try to focus in a different grip related to the previous exercise) - 3 series",
      "Biceps - 3 series",
      "Rear deltoid exercise - 3 series",
      "Abs (try to mix from the previous days) - 2 series",
    ],
  },
  legsB: {
    dayName: "Legs (B)",
    dayNumber: 5,
    exercisesDescriptions: [
      "A very high or high intensity glutes exercise (besides deadlift) - 3 series",
      "A different high or moderate intensity glutes exercise - 3 Series",
      "A moderate intensity Quads Exercise - 2 Series",
      "Seated or Lying leg curl - 3 Series",
      "Leg Extension - 3 Series",
      "Calves - 3 Series",
      "Abs (try to mix from the previous days) - 2 series",
    ],
  },
};

export const threeDaysSplit: TrainingWeeklySplit = {
  legsAndGlutes: {
    dayName: "Legs and Glutes",
    dayNumber: 1,
    exercisesDescriptions: [
      "Squat - 3 series",
      "Stiff Leg Deadlift - 3 series",
      "A moderate intensity quads exercise - 3 series",
      "Leg Extension - 3 Series",
      "A different isolated hamstring exercise - 3 series",
      "Calves exercise - 2 series",
      "Abs (try to mix from the previous days) - 3 series",
    ],
  },
  upperBody: {
    dayName: "Upper Body",
    dayNumber: 3,
    exercisesDescriptions: [
      "High Intensity Chest or Shoulders Exercise - 3 Series",
      "A moderate chest or shoulders intensity exercise (differing between chest or shoulders from the first exercise) - 3 Series",
      "A moderate or low intensity chest exercise - 3 series",
      "Shoulders - lateral movement - 3 series",
      "Triceps - 3 series",
      "Abs (try to mix from the previous days) - 3 series",
    ],
  },
  pullAndGlutes: {
    dayName: "Pull and Glutes",
    dayNumber: 5,
    exercisesDescriptions: [
      "Deadlift - 3 Series",
      "A vertical pull back exercise - 3 Series",
      "A moderate glutes exercise - 3 Series",
      "A moderate or low intensity horizontal back exercise (try to focus in a different grip related to the previous exercise) - 3 series",
      "Biceps - 3 series",
      "Rear Delt Raise - 2 Series",
      "Abs (try to mix from the previous days) - 3 series",
    ],
  },
};
