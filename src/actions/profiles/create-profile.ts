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
    profilePictureUrl?: string[];
    _form?: string[];
  } | null;
}

export async function createProfile(formData: {
  fullName: string;
  dateOfBirth: Date;
  gender: Gender;
  profilePictureUrl?: string | undefined;
}): Promise<CreateProfileFormState> {
  await new Promise((r) => setTimeout(r, 1500));

  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return { errors: { _form: ["Unauthorized!"] } };
  }

  const email = session.user.email!;
  const { fullName, profilePictureUrl, dateOfBirth, gender } = formData;

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
  // redirect(paths.profile());
  return { errors: null };
}
