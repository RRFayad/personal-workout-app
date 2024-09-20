"use server";

import * as formSchemas from "@/lib/form-schemas";
import paths from "@/lib/paths";
import { revalidatePath } from "next/cache";
import { db } from "@/db";
import { getServerSession } from "next-auth/next";
import authOptions from "@/lib/auth";

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

  // return { errors: { _form: ["Testing..."] } };

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

  if (!existingUser) {
    return { errors: { _form: ["User Not Found!"] } };
  }

  revalidatePath(paths.workoutSplit());
  revalidatePath(paths.workoutTracker());
  return { errors: {} };
}
