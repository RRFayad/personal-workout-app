"use server";

import * as z from "zod";
import { db } from "@/db";
import bcrypt from "bcrypt";
import { User } from "@prisma/client";
import * as formSchemas from "@/lib/form-schemas";

interface CredentialsSignUpFormState {
  errors: {
    email?: string[];
    password?: string[];
    passwordConfirm?: string[];
    _form?: string[]; // used the _ to represent metadata - It's like overallForm
  };
  user?: User;
}

export async function credentialsSignUp(
  data: z.infer<typeof formSchemas.credentialsSignUp>,
): Promise<CredentialsSignUpFormState> {
  // await new Promise((r) => setTimeout(r, 2500));  // Used to test the loading process

  const email = data.email;
  const password = data.password;
  const passwordConfirm = data.passwordConfirm;

  const inputValidationResult = formSchemas.credentialsSignUp.safeParse({
    email,
    password,
    passwordConfirm,
  });

  if (!inputValidationResult.success) {
    return { errors: inputValidationResult.error.flatten().fieldErrors };
  }

  const existingUser = await db.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return {
      errors: {
        _form: ["E-mail already registered"],
      },
    };
  }

  let user: User;

  const hashedPassword = await bcrypt.hash(password, 12);
  try {
    user = await db.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Something went wrong | User not created"],
        },
      };
    }
  }

  return { errors: {}, user };

  // redirect("/");
}
