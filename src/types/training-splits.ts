export type TrainingSplit = {
  push?: string[];
  pull?: string[];
  legs?: string[];
  upperBody?: string[];
  lowerBody?: string[];
  fullBody?: string[];
  pushA?: string[];
  pushB?: string[];
  pullA?: string[];
  pullB?: string[];
  legsA?: string[];
  legsB?: string[];
  legsAndGlutes?: string[];
  pullAndGlutes?: string[];
};

export interface MaleSplits {
  threeDaysSplit: TrainingSplit;
  fourDaysSplit: TrainingSplit;
  fiveDaysSplit: TrainingSplit;
  fiveDaysSplitUpperFocused: TrainingSplit;
}
export interface FemaleSplits {
  threeDaysSplit: TrainingSplit;
  fourDaysSplit: TrainingSplit;
  fiveDaysSplit: TrainingSplit;
}
