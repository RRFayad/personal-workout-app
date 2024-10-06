import { TrainingWeeklySplit } from "@/types/training-splits";

export const fiveDaysSplit: TrainingWeeklySplit = {
  push: {
    dayName: "Push",
    dayNumber: 1,
    exercisesDescriptions: [
      "Chest Exercise - High Intensity - 3 Series",
      "Chest Exercise - High or moderate intensity, and a different movement angle related to the first - 3 Series",
      "Chest Exercise - Moderate or Low intensity - 3 series",
      "Shoulders Exercise - Frontal movement with moderate or low intensity - 3 Series",
      "Shoulders Exercise- Lateral movement - 3 series",
      "Triceps exercise- 3 series",
      "Abs - 2 series",
    ],
  },
  pull: {
    dayName: "Pull",
    dayNumber: 2,
    exercisesDescriptions: [
      "Back Exercise - High Intensity - 3 Series",
      "Back Exercise - Moderate or Low intensity with a different movement pattern or grip from the first - 3 Series",
      "Back Exercise - Moderate or Low intensity with a different movement pattern and grip - 3 series",
      "Biceps - 3 series",
      "Biceps (try to mix the movement type) - 3 series",
      "Rear deltoid exercise - 3 Series",
      "Abs (try to mix from the previous days) - 2 series",
    ],
  },
  legs: {
    dayName: "Legs",
    dayNumber: 3,
    exercisesDescriptions: [
      "Squat - 3 series",
      "High or Moderate intensity quads exercise - 3 series",
      "A Hamstring exercise - 2 series",
      "Leg Extension - 2 Series",
      "A different isolated hamstring exercise - 2 series",
      "Calves exercise - 3 series",
      "Abs (try to mix from the previous days) - 2 series",
    ],
  },

  upperBody: {
    dayName: "Upper Body",
    dayNumber: 5,
    exercisesDescriptions: [
      "High Intensity Chest Exercise (different movement angle from the Push day) - 3 Series",
      "High Intensity Back Exercise (different movement angle from the Pull day) - 3 Series",
      "Moderate or Low intensity Chest Exercise - 2 series",
      "Moderate or Low intensity Back Exercise - 2 series",
      "Deltoids Exercise - 2 Series",
      "Side Deltoid Exercise - 2 series",
      "Biceps Exercise - 3 series",
      "Triceps Exercise (different movement angle from the Push day) - 3 series",
      "Abs (try to mix from the previous days) - 2 series",
    ],
  },

  lowerBody: {
    dayName: "Lower Body",
    dayNumber: 6,
    exercisesDescriptions: [
      "Deadlift - 3 Series",
      "Moderate Intensity Quads Exercise - 2 Series",
      "Lying or Seated Leg Curl - 3 Series",
      "Leg Extension - 2 Series",
      "Different Leg Curl - 2 Series",
      "Calves - 3 Series",
      "Abs (try to mix from the previous days) - 2 series",
    ],
  },
};
export const fiveDaysSplitUpperFocused: TrainingWeeklySplit = {
  pushA: {
    dayName: "Push A",
    dayNumber: 1,
    exercisesDescriptions: [
      "High Intensity Chest Exercise - 3 Series",
      "A moderate intensity chest exercise (focus in a different movement angle related to the first) - 3 Series",
      "A moderate or low intensity chest exercise - 3 series",
      "Shoulders - frontal movement with moderate or low intensity - 3 Series",
      "Shoulders - lateral movement - 3 series",
      "Triceps - 3 series",
      "Abs - 2 series",
    ],
  },
  pullA: {
    dayName: "Pull A",
    dayNumber: 2,
    exercisesDescriptions: [
      "High Intensity back Exercise - 3 Series",
      "A moderate or low intensity back exercise (try to focus in a different movement pattern and grip related to the first) - 3 Series",
      "A moderate or low intensity back exercise (try to focus in a different movement pattern and grip related to the already selected exercises) - 3 series",
      "Biceps - 3 series",
      "Biceps (try to mix the movement type) - 3 series",
      "Rear deltoid exercise",
      "Abs (try to mix from the previous days) - 2 series",
    ],
  },
  legs: {
    dayName: "Legs",
    dayNumber: 3,
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
  pushB: {
    dayName: "Push B",
    dayNumber: 5,
    exercisesDescriptions: [
      "A moderate intensity chest exercise - 3 Series",
      "A moderate or low intensity chest exercise - 3 series",
      "Overhead Press - 3 Series",
      "Side Deltoid Exercise - 3 series",
      "Triceps Exercise - 3 series",
      "Triceps Exercise (with a different movement angle related to the previous exercise) - 3 series",
      "Abs (try to mix from the previous days) - 2 series",
    ],
  },
  pullB: {
    dayName: "Pull B",
    dayNumber: 6,
    exercisesDescriptions: [
      "Deadlift - 3 Series",
      "A vertical pull back exercise - 3 Series",
      "A horizontal pull moderate or low intensity exercise - 3 Series",
      "A Biceps exercise - 2 Series",
      "A Biceps Exercise - 2 Series",
      "Rear Delt Raise - 2 Series",
      "Abs (try to mix from the previous days) - 2 series",
    ],
  },
};

export const fourDaysSplit: TrainingWeeklySplit = {
  push: {
    dayName: "Push",
    dayNumber: 1,
    exercisesDescriptions: [
      "Barbell Bench Press - 3 Series",
      "A moderate intensity chest exercise (focus in a different movement angle related to the first) - 3 Series",
      "A moderate or low intensity chest exercise - 3 series",
      "Shoulders - frontal movement with moderate or low intensity - 3 Series",
      "Shoulders - lateral movement - 3 series",
      "Triceps - 3 series",
      "Abs - 2 series",
    ],
  },
  pull: {
    dayName: "Pull",
    dayNumber: 2,
    exercisesDescriptions: [
      "High Intensity back Exercise - 3 Series",
      "A moderate or low intensity back exercise (try to focus in a different movement pattern and grip related to the first) - 3 Series",
      "A moderate or low intensity back exercise (try to focus in a different movement pattern and grip related to the already selected exercises) - 3 series",
      "Biceps - 3 series",
      "Biceps (try to mix the movement type) - 3 series",
      "Rear deltoid exercise - 3 series",
      "Abs (try to mix from the previous days) - 2 series",
    ],
  },
  legs: {
    dayName: "Legs",
    dayNumber: 3,
    exercisesDescriptions: [
      "Squat - 3 series",
      "A high or moderate intensity quads exercise - 3 series",
      "An isolated Hamstring exercise - 2 series",
      "Leg Extension - 2 Series",
      "A different isolated hamstring exercise - 2 series",
      "Calves exercise - 3 series",
      "Abs (try to mix from the previous days) - 2 series",
    ],
  },
  fullBody: {
    dayName: "Full Body",
    dayNumber: 5,
    exercisesDescriptions: [
      "Deadlift - 3 Series",
      "Moderate Intensity Chest Exercise - 3 Series",
      "A vertical pull back exercise - 3 Series",
      "A moderate or low intensity chest exercise - 2 series",
      "Deltoids Exercise - 2 Series",
      "Side Deltoid Exercise - 2 series",
      "Biceps Exercise - 2 series",
      "Triceps Exercise (with a different movement angle related to the first exercise of the push day) - 2 series",
      "Abs (try to mix from the previous days) - 2 series",
    ],
  },
};

export const threeDaysSplit: TrainingWeeklySplit = {
  push: {
    dayName: "Push",
    dayNumber: 1,
    exercisesDescriptions: [
      "High Intensity Chest Exercise - 3 Series",
      "A moderate intensity chest exercise (focus in a different movement angle related to the first) - 3 Series",
      "A moderate or low intensity chest exercise - 3 series",
      "Shoulders - frontal movement with moderate or low intensity - 3 Series",
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
      "A moderate or low intensity horizontal back exercise (focus in a different grip related to the previous exercise) - 3 series",
      "Biceps - 3 series",
      "Biceps (try to mix the movement type) - 3 series",
      "Rear deltoid exercise - 3 series",
      "Abs (try to mix from the previous days) - 2 series",
    ],
  },
  legs: {
    dayName: "Legs",
    dayNumber: 5,
    exercisesDescriptions: [
      "Squat - 3 series",
      "Stiff Leg Deadlift - 3 series",
      "A high or moderate intensity quads or hamstrings exercise - 3 series",
      "An isolated Hamstring exercise - 2 series",
      "Leg Extension - 2 Series",
      "A different isolated hamstring exercise - 2 series",
      "Calves exercise - 3 series",
      "Abs (try to mix from the previous days) - 2 series",
    ],
  },
};
