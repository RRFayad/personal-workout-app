"use server";
import * as formSchemas from "@/lib/form-schemas";

interface CredentialsLoginFormState {
  errors: {
    email?: string[];
    description?: string[];
    _form?: string[]; // used the _ to represent metadata - It's like overallForm
  };
}

export async function credentialsSignIn(
  formState: CredentialsLoginFormState,
  formData: { email: string; password: string },
): Promise<CredentialsLoginFormState> {
  console.log("FORMDATA:", formData);
  const email = formData.email;
  const password = formData.password;

  const inputValidationResult = formSchemas.credentialsLogin.safeParse({
    email,
    password,
  });

  if (!inputValidationResult.success) {
    return { errors: inputValidationResult.error.flatten().fieldErrors };
  }

  //   console.log("Ihaaa - Im the action", values);
  //   return { errors: { _form: "All right in the server side :) " } };
  return { errors: { _form: ["Actually, it's alright in the server! :)"] } };
}
