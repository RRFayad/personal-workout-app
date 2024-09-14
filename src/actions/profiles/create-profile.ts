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
): Promise<CreateProfileFormState> {
  await new Promise((r) => setTimeout(r, 2500));

  const { fullName, profilePicture, dateOfBirth, gender } = formData;

  const inputValidationResult = formSchemas.createProfileFormSchema.safeParse({
    fullName,
    profilePicture,
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

  let profilePicturePath: string | null = null;
  let profileUploadErrorMessage: string | null = null;

  console.log("here...", formData);
  if (profilePicture) {
    const fileExtension = path.extname(profilePicture.name);
    const fileName = `${Date.now()}${fileExtension}`;

    // Define where to save the file (publicly accessible path)
    const filePath = path.join(process.cwd(), "public/uploads", fileName);

    // Save the file
    const buffer = Buffer.from(await profilePicture.arrayBuffer());

    await fs.writeFile(filePath, buffer, (err) => {
      if (err) {
        profileUploadErrorMessage = "Could not save the file";
      } else {
        profilePicturePath = `/uploads/${fileName}`;
      }
    });

    //Handle save file result
    if (profileUploadErrorMessage) {
      return { errors: { profilePicture: ["Could not save the file"] } };
    }

    try {
      db.user.update({
        where: { email },
        data: { image: profilePicturePath },
      });
    } catch (error) {
      return { errors: { _form: ["Failed to update user image."] } };
    }
  }

  try {
    db.userProfile.create({
      data: {
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
  return { errors: { _form: ["?"] } };
  // redirect(paths.profile());
}
