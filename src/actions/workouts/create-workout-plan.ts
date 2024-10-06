"use server";

import * as z from "zod";
import { db } from "@/db";
import paths from "@/lib/paths";
import authOptions from "@/lib/auth";
import { revalidatePath } from "next/cache";
import * as formSchemas from "@/lib/form-schemas";
import { getServerSession } from "next-auth/next";
import * as workoutHelpers from "@/lib/workout/helpers";

interface CreateWorkoutPlanFormState {
  errors: {
    trainingDays?: string[];
    _form?: string[];
  } | null;
}

export async function createWorkoutPlan(
  formData: z.infer<typeof formSchemas.createWorkoutFormSchema>,
): Promise<CreateWorkoutPlanFormState> {
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

  const trainingSpecification = workoutHelpers.getTrainingSplitSpecifications(
    trainingDays,
    existingUser.profile.gender,
  );

  const prompt = workoutHelpers.generateTrainingPrompt(trainingSpecification);

  console.log(prompt);

  // let workoutProgram;
  // try {
  //   workoutProgram = await workoutHelpers.generateWorkout(prompt);
  // } catch (error) {
  //   return {
  //     errors: {
  //       _form: [`${error}`],
  //     },
  //   };
  // }

  // // For thesting purposes - to not to consume paid api
  // // const workoutProgram = workoutHelpers.DUMMY_WORKOUT;

  // const { startDate, endDate } = workoutHelpers.setWorkoutPlanDates();

  // try {
  //   await db.$transaction(async (db) => {
  //     // Used deleteMany to not throw an error if there's no data to be deleted
  //     await db.workoutProgramStructure.deleteMany({
  //       where: { user_id: userId },
  //     });

  //     const createWorkoutProgramResult =
  //       await db.workoutProgramStructure.create({
  //         data: {
  //           user_id: userId,
  //           available_training_days_qty: trainingDays,
  //           workout_program_start: startDate,
  //           workout_program_end: endDate,
  //         },
  //       });

  //     const workoutId = createWorkoutProgramResult.workout_program_id;

  //     const workoutDetailsData =
  //       workoutHelpers.generateWorkoutProgramDetailsData(
  //         workoutId,
  //         workoutProgram,
  //       );

  //     await db.workoutProgramDetails.createMany({
  //       data: workoutDetailsData,
  //     });
  //   });
  // } catch (error) {
  //   return { errors: { _form: [`Error: ${error}`] } };
  // }

  // return { errors: { _form: ["Testing..."] } };

  revalidatePath(paths.workoutSplit());
  revalidatePath(paths.workoutTracker());
  return { errors: {} };
}
