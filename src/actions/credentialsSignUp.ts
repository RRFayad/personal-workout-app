"use server";
import * as formSchemas from "@/lib/form-schemas";

interface CredentialsSignUpFormState {
  errors: {
    email?: string[];
    password?: string[];
    passwordConfirm?: string[];
    _form?: string[]; // used the _ to represent metadata - It's like overallForm
  };
}

export async function credentialsSignUp(
  // formState: CredentialsLoginFormState,
  data: { email: string; password: string; passwordConfirm: string },
): Promise<CredentialsSignUpFormState> {
  await new Promise((r) => setTimeout(r, 2500));

  const email = data.email;
  const password = data.password;
  const passwordConfirm = data.passwordConfirm;

  const inputValidationResult = formSchemas.credentialsSignUp.safeParse({
    email,
    password,
    passwordConfirm,
  });

  console.log(inputValidationResult);

  if (!inputValidationResult.success) {
    return { errors: inputValidationResult.error.flatten().fieldErrors };
  }

  return {
    errors: {
      // email: ["testing from the server"],
      // _form: ["Actually, it's alright in the server! :)"],
    },
  };
}
