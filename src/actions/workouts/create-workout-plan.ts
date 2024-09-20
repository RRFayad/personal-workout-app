"use server";

import * as formSchemas from "@/lib/form-schemas";
import paths from "@/lib/paths";
import { Prisma, User, Gender } from "@prisma/client";
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
  await new Promise((r) => setTimeout(r, 1500));

  const session = await getServerSession(authOptions);

  console.log(formData, session);

  if (!session || !session.user) {
    return { errors: { _form: ["Unauthorized!"] } };
  }
  const email = session.user.email!;

  revalidatePath(paths.workoutSplit());
  revalidatePath(paths.workoutTracker());
  return { errors: {} };
}
