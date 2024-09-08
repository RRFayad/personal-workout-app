"use server";
import * as formSchemas from "@/lib/form-schemas";

interface CredentialsSignInFormState {
  errors: {
    email?: string[];
    password?: string[];
    _form?: string[]; // used the _ to represent metadata - It's like overallForm
  };
}

export async function credentialsSignIn(data: {
  email: string;
  password: string;
}): Promise<CredentialsSignInFormState> {
  await new Promise((r) => setTimeout(r, 2500));

  const email = data.email;
  const password = data.password;

  const inputValidationResult = formSchemas.credentialsSignIn.safeParse({
    email,
    password,
  });

  if (!inputValidationResult.success) {
    return { errors: inputValidationResult.error.flatten().fieldErrors };
  }

  return {
    errors: {},
  };
}
