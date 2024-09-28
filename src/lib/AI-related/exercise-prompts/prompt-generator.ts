import { maleSplits } from "./male-splits";
import { femaleSplits } from "./female-splits";
import { promptExercisesList } from "./prompt-exercises-list";
import { Gender } from "@prisma/client";

export const generateTrainingPrompt = (days: number, gender: Gender) => {
  const trainingStructureByGender =
    gender === "male" ? maleSplits : femaleSplits;

  let trainingSpecification;
  days === 3 &&
    (trainingSpecification = trainingStructureByGender.threeDaysSplit);
  days === 4 &&
    (trainingSpecification = trainingStructureByGender.fourDaysSplit);
  if (days === 5) {
    if (gender === "female") {
      trainingSpecification = trainingStructureByGender.fiveDaysSplit;
    } else if (gender === "male") {
      const randomNum = Math.floor(Math.random() * 2) + 1;
      if (randomNum === 1) {
        trainingSpecification = trainingStructureByGender.fiveDaysSplit;
      } else {
        trainingSpecification = maleSplits.fiveDaysSplitUpperFocused;
      }
    }
  }

  const prompt = `
I need you to generate a workout plan based on the given 'Valid Exercises List' and 'Training Specification'. Follow these steps:

Select exercises from the 'Valid Exercises List' according to the 'Training Specification' for each day.

Never repeat the same exercise for the same day.

Ensure the plan adheres to the specific instructions and general rules.

Valid Exercises List (by muscle group):
  "
  ${JSON.stringify(promptExercisesList)}
  "
  
  Training Specification (guidelines for exercise selection):
  "
  ${JSON.stringify(trainingSpecification)}
  "
  
General Rules:

- Maximum 20 sets per session + 2 sets of abs.
- Use exercises only from the 'Valid Exercises List'.
- Avoid Squat and Deadlift on the same day.
- If there's only one leg day, start pull day with Deadlift.

Example Output:
{
  push:{  
    benchPress:3,
    dumbbell bench press:3,
    ...
  },
  pull:{
    bent over row (overhand grip):3,
    one-arm dumbbell row:3,
  },
  ... and so on...
}
  Provide the output as a JSON object, without any additional text, and with the exercise names mathching the exact names given in the 'Valid Exercises List'
`;
  // console.log(prompt);
  return prompt;
};
