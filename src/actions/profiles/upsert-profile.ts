"use server";

import * as formSchemas from "@/lib/form-schemas";
import paths from "@/lib/paths";
import { Gender } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { db } from "@/db";
import { getServerSession } from "next-auth/next";
import authOptions from "@/lib/auth";

interface CreateProfileFormState {
  errors: {
    fullName?: string[];
    dateOfBirth?: string[];
    gender?: string[];
    height?: string[];
    profilePictureUrl?: string[];
    _form?: string[];
  };
}

export async function createOrUpdateProfile(formData: {
  fullName: string;
  dateOfBirth: Date;
  gender: Gender;
  height: number;
  profilePictureUrl?: string | undefined;
}): Promise<CreateProfileFormState> {
  const session = await getServerSession(authOptions);
  const { fullName, profilePictureUrl, dateOfBirth, gender, height } = formData;

  if (!session || !session.user) {
    return { errors: { _form: ["Unauthorized!"] } };
  }
  const userId = session.user.id;

  // return { errors: { _form: ["Just testing... :))"] } };

  const inputValidationResult = formSchemas.createProfileFormSchema.safeParse({
    fullName,
    dateOfBirth,
    height,
    gender,
  });

  if (!inputValidationResult.success) {
    return { errors: inputValidationResult.error.flatten().fieldErrors };
  }

  const existingUser = await db.user.findUnique({ where: { id: userId } });

  if (!existingUser) {
    return { errors: { _form: ["User Not Found!"] } };
  }

  if (profilePictureUrl) {
    try {
      await db.user.update({
        where: { id: userId },
        data: { image: profilePictureUrl },
      });
    } catch (error) {
      return { errors: { _form: ["Failed to update user image."] } };
    }
  }

  try {
    await db.userProfile.upsert({
      where: {
        user_id: userId,
      },
      update: {
        full_name: fullName,
        gender,
        date_of_birth: dateOfBirth,
        height_in_cm: height,
      },
      create: {
        user_id: userId,
        full_name: fullName,
        gender,
        date_of_birth: dateOfBirth,
        height_in_cm: height,
      },
    });
  } catch (error) {
    return { errors: { _form: ["Failed to create user profile"] } };
  }

  revalidatePath(paths.showProfile());
  // redirect(paths.profile());
  return { errors: {} };
}
