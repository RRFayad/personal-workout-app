"use server";
import * as formSchemas from "@/lib/form-schemas";

interface CredentialsSignInFormState {
  errors: {
    email?: string[];
    password?: string[];
    _form?: string[]; // used the _ to represent metadata - It's like overallForm
  };
}

export async function credentialsSignIn(
  // formState: CredentialsLoginFormState,
  data: { email: string; password: string },
): Promise<CredentialsSignInFormState> {
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
    errors: {
      email: ["testing from the server"],
      _form: ["Actually, it's alright in the server! :)"],
    },
  };
}
