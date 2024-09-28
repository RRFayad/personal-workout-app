"use server";

import * as formSchemas from "@/lib/form-schemas";
import paths from "@/lib/paths";
import { revalidatePath } from "next/cache";
import { db } from "@/db";
import { getServerSession } from "next-auth/next";
import authOptions from "@/lib/auth";

import { generateTrainingPrompt } from "@/lib/AI-related/exercise-prompts/prompt-generator";
import { generateWorkout } from "@/lib/AI-related/generate-workout";

interface CreateWorkoutPlanFormState {
  errors: {
    trainingDays?: string[];
    _form?: string[];
  } | null;
}

export async function createWorkoutPlan(formData: {
  trainingDays: number;
}): Promise<CreateWorkoutPlanFormState> {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return { errors: { _form: ["Unauthorized!"] } };
  }

  const { trainingDays } = formData;
  const email = session.user.email!;

  const inputValidationResult = formSchemas.createWorkoutFormSchema.safeParse({
    trainingDays,
  });

  if (!inputValidationResult.success) {
    return { errors: inputValidationResult.error.flatten().fieldErrors };
  }

  const existingUser = await db.user.findUnique({
    where: { email },
    include: { profile: { select: { gender: true } } },
  });

  if (!existingUser || !existingUser.profile?.gender) {
    return { errors: { _form: ["User Not Found!"] } };
  }

  const prompt = generateTrainingPrompt(
    trainingDays,
    existingUser.profile.gender,
  );

  // console.log(prompt);

  const workoutProgram = await generateWorkout(prompt);
  console.log("IHAAAA");
  console.log(workoutProgram);
  return { errors: { _form: ["Testing..."] } };

  revalidatePath(paths.workoutSplit());
  revalidatePath(paths.workoutTracker());
  return { errors: {} };
}
