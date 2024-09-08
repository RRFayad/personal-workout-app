"use server";
import * as formSchemas from "@/lib/form-schemas";
import { db } from "@/db";
import { User } from "@prisma/client";
import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";
import bcrypt from "bcrypt";

interface CredentialsSignUpFormState {
  errors: {
    email?: string[];
    password?: string[];
    passwordConfirm?: string[];
    _form?: string[]; // used the _ to represent metadata - It's like overallForm
  };
  user?: User;
}

export async function credentialsSignUp(data: {
  email: string;
  password: string;
  passwordConfirm: string;
}): Promise<CredentialsSignUpFormState> {
  await new Promise((r) => setTimeout(r, 2500));

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
        _form: ["E-mail already exists"],
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
