"use server";

import * as z from "zod";
import { db } from "@/db";
import paths from "@/lib/paths";
import authOptions from "@/lib/auth";
import { revalidatePath } from "next/cache";
import * as formSchemas from "@/lib/form-schemas";
import { getServerSession } from "next-auth/next";
import { calculateMacros } from "@/lib/nutrition/macros-calculator";
import { create } from "domain";

interface CreateNutritionPlanFormState {
  errors: {
    weight?: string[];
    weeklyTrainingHours?: string[];
    dietPhase?: string[];
    _form?: string[];
  };
}

export async function createOrUpdateNutritionPlan(
  data: z.infer<typeof formSchemas.createNutritionPlanFormSchema>,
): Promise<CreateNutritionPlanFormState> {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return { errors: { _form: ["Unauthorized!"] } };
  }

  const { dietPhase, weeklyTrainingHours, weight } = data;

  const userId = session.user.id!;

  const inputValidationResult =
    formSchemas.createNutritionPlanFormSchema.safeParse({
      dietPhase,
      weeklyTrainingHours,
      weight,
    });

  if (!inputValidationResult.success) {
    return { errors: inputValidationResult.error.flatten().fieldErrors };
  }

  try {
    const existingUser = await db.user.findUnique({
      where: { id: userId },
      include: {
        profile: {
          select: { gender: true, date_of_birth: true, height_in_cm: true },
        },
      },
    });

    if (
      !existingUser ||
      !existingUser.profile?.gender ||
      !existingUser.profile?.date_of_birth ||
      !existingUser.profile?.height_in_cm
    ) {
      return { errors: { _form: ["User Not Found!"] } };
    }

    const nutrionalData = {
      ...data,
      gender: existingUser.profile.gender,
      dateOfBirth: existingUser.profile.date_of_birth,
      height: existingUser.profile.height_in_cm,
    };

    const {
      bmr,
      tdee,
      dailyMealPlan: { kcal, carbs, proteins, fats },
    } = calculateMacros(nutrionalData);

    const nutritionPlanResult = await db.nutritionProgram.upsert({
      where: {
        user_id: userId,
      },
      update: {
        weight_in_kg: weight,
        current_diet_phase: dietPhase,
        weekly_training_hours: weeklyTrainingHours,
        basal_metabolic_rate: bmr,
        total_daily_energy_expenditure: tdee,
        daily_kcal: kcal,
        daily_proteins: proteins,
        daily_carbs: carbs,
        daily_fats: fats,
      },
      create: {
        user_id: userId,
        weight_in_kg: weight,
        current_diet_phase: dietPhase,
        weekly_training_hours: weeklyTrainingHours,
        basal_metabolic_rate: bmr,
        total_daily_energy_expenditure: tdee,
        daily_kcal: kcal,
        daily_proteins: proteins,
        daily_carbs: carbs,
        daily_fats: fats,
      },
    });
  } catch {
    return {
      errors: {
        _form: ["Error accessing Database... Please, try again later"],
      },
    };
  }

  revalidatePath(paths.showProfile());
  return { errors: {} };
}
