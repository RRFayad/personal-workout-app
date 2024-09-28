import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.GPT_API_KEY,
  organization: process.env.GPT_ORGANIZATION,
  project: process.env.GPT_PROJECT,
});

export const generateWorkout = async (prompt: string) => {
  //   console.log(prompt);
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "assistant", content: prompt }],
    response_format: { type: "json_object" },
    temperature: 0,
  });

  const workoutProgram = JSON.parse(
    response.choices[0].message.content as string,
  );
  // console.log(workoutProgram);
  console.log(response.usage);
  return workoutProgram;
};
