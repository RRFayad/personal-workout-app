"use server";

import paths from "@/lib/paths";
import { revalidatePath } from "next/cache";

export async function createNutritionPlan(data: any) {
  console.log(data);
  revalidatePath(paths.profile());
}
