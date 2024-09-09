"use server";

import paths from "@/lib/paths";
import { revalidatePath } from "next/cache";

export async function createWorkoutPlan() {
  revalidatePath(paths.workoutSplit());
  revalidatePath(paths.workoutTracker());
}
