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
    dateOfBirth?: string[];
    gender?: string[];
    profilePictureUrl?: string[];
    _form?: string[];
  } | null;
}

export async function createProfile(
  formData: {
    fullName: string;
    dateOfBirth: Date;
    gender: Gender;
    profilePictureUrl?: string | undefined;
  },
  email: Prisma.UserGetPayload<true>["email"],
): Promise<CreateProfileFormState> {
  await new Promise((r) => setTimeout(r, 1500));

  const { fullName, profilePictureUrl, dateOfBirth, gender } = formData;

  console.log(formData);
  // return { errors: { _form: ["Just testing... :))"] } };

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

  if (profilePictureUrl) {
    try {
      await db.user.update({
        where: { email },
        data: { image: profilePictureUrl },
      });
    } catch (error) {
      return { errors: { _form: ["Failed to update user image."] } };
    }
  }

  try {
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
  return { errors: null };
  // redirect(paths.profile());
}
