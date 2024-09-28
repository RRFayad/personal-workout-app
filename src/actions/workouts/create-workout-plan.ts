"use server";

import * as formSchemas from "@/lib/form-schemas";
import paths from "@/lib/paths";
import { revalidatePath } from "next/cache";
import { db } from "@/db";
import { getServerSession } from "next-auth/next";
import authOptions from "@/lib/auth";

import { generateTrainingPrompt } from "@/lib/AI-related/exercise-prompts/prompt-generator";
import { generateWorkout } from "@/lib/AI-related/generate-workout";
import {
  setWorkoutPlanDates,
  generateWorkoutProgramDetailsData,
} from "@/lib/workout/helpers";

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
  const userId = session.user.id!;

  const inputValidationResult = formSchemas.createWorkoutFormSchema.safeParse({
    trainingDays,
  });

  if (!inputValidationResult.success) {
    return { errors: inputValidationResult.error.flatten().fieldErrors };
  }

  const existingUser = await db.user.findUnique({
    where: { id: userId },
    include: { profile: { select: { gender: true } } },
  });

  if (!existingUser || !existingUser.profile?.gender) {
    return { errors: { _form: ["User Not Found!"] } };
  }

  const prompt = generateTrainingPrompt(
    trainingDays,
    existingUser.profile.gender,
  );

  let workoutProgram;
  try {
    workoutProgram = await generateWorkout(prompt);
  } catch (error) {
    return {
      errors: {
        _form: [`${error}`],
      },
    };
  }

  const { startDate, endDate } = setWorkoutPlanDates();

  try {
    const transactionResult = await db.$transaction(async (db) => {
      // Used deleteMany to not throw an error if there's no data to be deleted
      await db.workoutProgramStructure.deleteMany({
        where: { user_id: userId },
      });

      const createWorkoutProgramResult =
        await db.workoutProgramStructure.create({
          data: {
            user_id: userId,
            available_training_days_qty: trainingDays,
            workout_program_start: startDate,
            workout_program_end: endDate,
          },
        });

      const workoutId = createWorkoutProgramResult.workout_program_id;

      const workoutDetailsData = generateWorkoutProgramDetailsData(
        workoutId,
        workoutProgram,
      );

      const createWorkoutDetailsResult =
        await db.workoutProgramDetails.createMany({
          data: workoutDetailsData,
        });
    });
  } catch (error) {
    return { errors: { _form: [`Error: ${error}`] } };
  }

  return { errors: { _form: ["Testing..."] } };

  revalidatePath(paths.workoutSplit());
  revalidatePath(paths.workoutTracker());
  return { errors: {} };
}
