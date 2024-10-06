export type SplitDay = {
  dayName: string;
  dayNumber: number;
  exercisesDescriptions: string[];
};

export type TrainingWeeklySplit = {
  push?: SplitDay;
  pull?: SplitDay;
  legs?: SplitDay;
  upperBody?: SplitDay;
  lowerBody?: SplitDay;
  fullBody?: SplitDay;
  pushA?: SplitDay;
  pushB?: SplitDay;
  pullA?: SplitDay;
  pullB?: SplitDay;
  legsA?: SplitDay;
  legsB?: SplitDay;
  legsAndGlutes?: SplitDay;
  pullAndGlutes?: SplitDay;
};

export interface MaleSplits {
  threeDaysSplit: TrainingWeeklySplit;
  fourDaysSplit: TrainingWeeklySplit;
  fiveDaysSplit: TrainingWeeklySplit;
  fiveDaysSplitUpperFocused: TrainingWeeklySplit;
}
export interface FemaleSplits {
  threeDaysSplit: TrainingWeeklySplit;
  fourDaysSplit: TrainingWeeklySplit;
  fiveDaysSplit: TrainingWeeklySplit;
}
