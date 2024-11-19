import { TrainingWeeklySplit } from "@/types/training-splits";

export const fiveDaysSplit: TrainingWeeklySplit = {
  push: {
    dayName: "Push",
    dayNumber: 1,
    exercisesDescriptions: [
      "Bench Press - 3 Series",
      "An inclined press, randomize between dumbbells or machine - 3 Series",
      "Randomize a shoulders Exercise with Frontal movement with moderate or low intensity - 3 Series",
      "A different chest exercise, using machine or cables - 3 series",
      "A Shoulders Exercise with Lateral movement - 3 series",
      "A random Triceps exercise- 3 series",
      "Another Triceps exercise- 2 series",
      "Any Abs - 2 series",
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
      "Stiff Leg Deadlift - 3 series",
      "A moderate quads exercise - 3 Series",
      "A isolated hamstrings exercise - 3 series",
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
      "Moderate or Low intensity Chest Exercise - 3 series",
      "Moderate or Low intensity Back Exercise - 3 series",
      "Biceps Exercise - 3 series",
      "Triceps Exercise (different movement angle from the Push day) - 3 series",
      "Abs (try to mix from the previous days) - 2 series",
    ],
  },

  legsAndShoulders: {
    dayName: "Legs and Shoulders",
    dayNumber: 6,
    exercisesDescriptions: [
      "Deadlift - 3 Series",
      "Overhead Press (barbell) - 3 Series",
      "A moderate or low quads exercise - 3 Series",
      "A frontal shoulders exercise - 3 Series",
      "A Lateral Shoulders Exercise - 3 Series",
      "A Rear Shoulders Exercise - 3 Series",
      "Calves - 2 Series",
      "Abs (try to mix from the previous days) - 2 series",
    ],
  },
};
export const fiveDaysSplitUpperFocused: TrainingWeeklySplit = {
  pushA: {
    dayName: "Push (A)",
    dayNumber: 1,
    exercisesDescriptions: [
      "Bench Press - 3 Series",
      "A moderate intensity chest exercise (focus in a different movement angle related to the first) - 3 Series",
      "Shoulders - frontal movement with moderate or low intensity - 3 Series",
      "A moderate or low intensity chest exercise - 3 series",
      "Shoulders - lateral movement - 3 series",
      "Triceps - 3 series",
      "Abs - 2 series",
    ],
  },
  pullA: {
    dayName: "Pull (A)",
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
      "High or Moderate intensity quads exercise - 3 series",
      "Stiff Leg Deadlift - 3 series",
      "A moderate quads exercise - 3 Series",
      "A isolated hamstrings exercise - 3 series",
      "Calves exercise - 3 series",
      "Abs (try to mix from the previous days) - 2 series",
    ],
  },
  pushB: {
    dayName: "Push (B)",
    dayNumber: 5,
    exercisesDescriptions: [
      "An Inclined high or moderate intensity chest exercise - 3 Series",
      "Overhead Press - 3 Series",
      "A moderate or low intensity chest exercise - 3 series",
      "Side Deltoid Exercise - 3 series",
      "Frontal shoulders Exercise - 2 series",
      "Triceps Exercise - 3 series",
      "Triceps Exercise (with a different movement angle related to the previous exercise) - 3 series",
      "Abs (try to mix from the previous days) - 2 series",
    ],
  },
  pullB: {
    dayName: "Pull (B)",
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
      "Bench Press - 3 Series",
      "An inclined press, randomize between dumbbells or machine - 3 Series",
      "Randomize a shoulders Exercise with Frontal movement with moderate or low intensity- 3 Series",
      "A different chest exercise, using machine or cables - 3 series",
      "A Shoulders Exercise with Lateral movement - 3 series",
      "A random Triceps exercise- 3 series",
      "Another Triceps exercise- 2 series",
      "Any Abs - 2 series",
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
      "High or Moderate intensity quads exercise - 3 series",
      "Stiff Leg Deadlift - 3 series",
      "A moderate quads exercise - 3 Series",
      "A isolated hamstrings exercise - 3 series",
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
      "Deltoids Exercise - 3 Series",
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
      "Bench Press - 3 Series",
      "An inclined press, randomize between dumbbells or machine - 3 Series",
      "Randomize a shoulders Exercise with Frontal movement - 3 Series",
      "A different chest exercise, using machine or cables - 3 series",
      "A Shoulders Exercise with Lateral movement - 3 series",
      "A random Triceps exercise- 3 series",
      "Another Triceps exercise- 2 series",
      "Any Abs - 2 series",
    ],
  },
  pull: {
    dayName: "Pull",
    dayNumber: 3,
    exercisesDescriptions: [
      "Deadlift - 3 Series",
      "A vertical pull back exercise - 3 Series",
      "A moderate or low intensity horizontal back exercise (focus in a different grip related to the previous exercise) - 3 series",
      "A moderate or low intensity horizontal back exercise (focus in a different grip related to the previous exercise) - 2 series",
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
      "High or Moderate intensity quads exercise - 3 series",
      "Stiff Leg Deadlift - 3 series",
      "A moderate quads exercise - 3 Series",
      "A isolated hamstrings exercise - 3 series",
      "Calves exercise - 3 series",
      "Abs (try to mix from the previous days) - 2 series",
    ],
  },
};
