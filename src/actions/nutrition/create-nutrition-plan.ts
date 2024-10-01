"use server";

import * as z from "zod";
import { db } from "@/db";
import paths from "@/lib/paths";
import authOptions from "@/lib/auth";
import { revalidatePath } from "next/cache";
import * as formSchemas from "@/lib/form-schemas";
import { getServerSession } from "next-auth/next";
import { calculateMacros } from "@/lib/nutrition/macros-calculator";

interface CreateNutritionPlanFormState {
  errors: {
    height?: string[];
    weight?: string[];
    weeklyTrainingHours?: string[];
    dietPhase?: string[];
    _form?: string[];
  };
}

export async function createNutritionPlan(
  data: z.infer<typeof formSchemas.createNutritionPlanFormSchema>,
): Promise<CreateNutritionPlanFormState> {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return { errors: { _form: ["Unauthorized!"] } };
  }

  const { height, dietPhase, weeklyTrainingHours, weight } = data;

  const userId = session.user.id!;

  const inputValidationResult =
    formSchemas.createNutritionPlanFormSchema.safeParse({
      height,
      dietPhase,
      weeklyTrainingHours,
      weight,
    });

  if (!inputValidationResult.success) {
    return { errors: inputValidationResult.error.flatten().fieldErrors };
  }

  const existingUser = await db.user.findUnique({
    where: { id: userId },
    include: { profile: { select: { gender: true, date_of_birth: true } } },
  });

  if (
    !existingUser ||
    !existingUser.profile?.gender ||
    !existingUser.profile?.date_of_birth
  ) {
    return { errors: { _form: ["User Not Found!"] } };
  }

  const nutrionalData = {
    ...data,
    gender: existingUser.profile.gender,
    dateOfBirth: existingUser.profile.date_of_birth,
  };

  calculateMacros(nutrionalData);

  return { errors: { _form: ["Testin..."] } };
  revalidatePath(paths.profile());
}
