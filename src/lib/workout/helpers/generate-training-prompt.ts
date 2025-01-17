import { promptExercisesList } from "./prompt-exercises-list";

import { TrainingWeeklySplit } from "@/types/training-splits";

export const generateTrainingPrompt = (
  trainingWeeklySplit: TrainingWeeklySplit,
) => {
  const trainingDays = Object.keys(trainingWeeklySplit);

  let trainingSpecification: { [key: string]: string[] } = {}; // Specify the type to hold string arrays for each day.

  for (const day of trainingDays) {
    const dayDetails =
      trainingWeeklySplit[day as keyof typeof trainingWeeklySplit];
    trainingSpecification[day] = dayDetails!.exercisesDescriptions;
  }

  const prompt = `
I need you to generate a workout plan based on the given 'Valid Exercises List' and 'Training Specification'. Follow these steps:

1. Select exercises from the 'Valid Exercises List' according to the 'Training Specification' for each day.

2. Never repeat the same exercise for the same day.

3. Ensure the plan adheres to the specific instructions and general rules.

4. Ensure the exercise selection is randomized, will following the other rules (so each workout plan must be different)

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
