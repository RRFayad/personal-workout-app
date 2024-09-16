"use server";

import * as formSchemas from "@/lib/form-schemas";
import paths from "@/lib/paths";
import { Prisma, User, Gender } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { db } from "@/db";
import path from "path";
import fs from "fs";
import { redirect } from "next/navigation";

interface CreateProfileFormState {
  errors: {
    fullName?: string[];
    profilePicture?: string[];
    profilePicturePath?: string[];
    dateOfBirth?: string[];
    gender?: string[];
    _form?: string[];
  };
}

export async function createProfile(
  formData: {
    fullName: string;
    profilePicture?: File;
    dateOfBirth: Date;
    gender: Gender;
  },
  email: Prisma.UserGetPayload<true>["email"],
  filePath: string | null,
): Promise<CreateProfileFormState> {
  await new Promise((r) => setTimeout(r, 2500));

  const { fullName, profilePicture, dateOfBirth, gender } = formData;

  const inputValidationResult = formSchemas.createProfileFormSchema.safeParse({
    fullName,
    dateOfBirth,
    gender,
  });

  if (!inputValidationResult.success) {
    return { errors: inputValidationResult.error.flatten().fieldErrors };
  }

  const existingUser = await db.user.findUnique({ where: { email } });

  if (!existingUser) {
    return { errors: { _form: ["User Not Found!"] } };
  }

  try {
    await db.user.update({
      where: { email },
      data: { image: filePath },
    });
  } catch (error) {
    return { errors: { _form: ["Failed to update user image."] } };
  }

  try {
    console.log("here...", existingUser);
    await db.userProfile.upsert({
      where: {
        user_id: existingUser.id,
      },
      update: {
        full_name: fullName,
        gender,
        date_of_birth: dateOfBirth,
      },
      create: {
        user_id: existingUser.id,
        full_name: fullName,
        gender,
        date_of_birth: dateOfBirth,
      },
    });
  } catch (error) {
    return { errors: { _form: ["Failed to create user profile"] } };
  }

  revalidatePath(paths.profile());
  return { errors: { _form: ["Actually it was ok :)"] } };
  // redirect(paths.profile());
}
