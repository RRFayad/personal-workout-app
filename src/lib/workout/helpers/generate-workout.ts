import { OpenAI } from "openai";
import { DUMMY_WORKOUT, validateWorkoutExercises } from "./";

const openai = new OpenAI({
  apiKey: process.env.GPT_API_KEY,
  organization: process.env.GPT_ORGANIZATION,
  project: process.env.GPT_PROJECT,
});

export const generateWorkout = async (prompt: string, maxRetries = 5) => {
  //   console.log(prompt);
  let retries = 0;
  let workoutProgram;
  while (retries < maxRetries) {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "assistant", content: prompt }],
      response_format: { type: "json_object" },
      temperature: 0,
    });

    workoutProgram = JSON.parse(response.choices[0].message.content as string);
    console.log("Generated Workout:", workoutProgram);
    console.log(response.usage);

    // console.log("DUMMY WORKOUT CREATED!");
    // workoutProgram = DUMMY_WORKOUT;

    const workoutIsValid = validateWorkoutExercises(workoutProgram);

    if (workoutIsValid) {
      console.log(`Workout created with ${retries + 1}/${maxRetries} attempts`);
      return workoutProgram;
    }

    retries += 1;
  }

  throw new Error(`Failed to generate workout... Please try again later`);
};
