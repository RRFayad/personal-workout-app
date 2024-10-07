import { Gender } from "@prisma/client";
import * as maleSplits from "../splits/male-splits";
import * as femaleSplits from "../splits/female-splits";
import {
  MaleSplits,
  FemaleSplits,
  TrainingWeeklySplit,
} from "@/types/training-splits";

export const getTrainingWeeklySplit = (
  trainingDays: number,
  gender: Gender,
) => {
  let trainingSplitName: keyof MaleSplits | keyof FemaleSplits;

  if (trainingDays === 3) {
    trainingSplitName = "threeDaysSplit";
  } else if (trainingDays === 4) {
    trainingSplitName = "fourDaysSplit";
  } else if (trainingDays === 5) {
    if (gender === "female") {
      trainingSplitName = "fiveDaysSplit";
    }
    if (gender === "male") {
      const randomNum = Math.floor(Math.random() * 2) + 1;
      if (randomNum === 1) {
        trainingSplitName = "fiveDaysSplit";
      } else {
        trainingSplitName = "fiveDaysSplitUpperFocused";
      }
    }
  }
  let trainingWeeklySplit: TrainingWeeklySplit;

  if (gender === "male") {
    trainingWeeklySplit = maleSplits[trainingSplitName!] as TrainingWeeklySplit;
  } else {
    trainingWeeklySplit = femaleSplits[
      trainingSplitName! as keyof FemaleSplits
    ] as TrainingWeeklySplit;
  }

  return trainingWeeklySplit;
};
