"use server";

import paths from "@/lib/paths";
import { revalidatePath } from "next/cache";

export async function updateProfile() {
  revalidatePath(paths.profile());
}