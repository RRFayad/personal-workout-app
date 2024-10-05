import { Gender } from "@prisma/client";
import { promptExercisesList } from "./prompt-exercises-list";
import { maleSplits, maleSplitsRestDays } from "../splits/male-splits";
import { femaleSplits, femaleSplitsRestDays } from "../splits/female-splits";
import {
  MaleSplits,
  FemaleSplits,
  TrainingSplit,
} from "@/types/training-splits";

export const getTrainingSplitSpecifications = (
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
  let trainingSpecification: TrainingSplit;

  if (gender === "male") {
    trainingSpecification = maleSplits[trainingSplitName!] as TrainingSplit;
  } else {
    trainingSpecification = femaleSplits[
      trainingSplitName! as keyof FemaleSplits
    ] as TrainingSplit;
  }

  let restDays: number[];

  if (gender === "male") {
    restDays = maleSplitsRestDays[trainingSplitName!];
  } else {
    restDays = femaleSplitsRestDays[trainingSplitName! as keyof FemaleSplits];
  }

  return {
    trainingSpecification,
    restDays,
  };
};
