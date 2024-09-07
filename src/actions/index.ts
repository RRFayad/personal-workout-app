"use server";
import { formSchema } from "@/components/CredentialsSignInForm";

export async function credentialsSignIn(
  //   formState: { message: string },
  values: any,
) {
  //   const email = formData.get("email");
  //   const password = formData.get("password");

  console.log("Ihaaa - Im the action", values);
  return { message: "" };
}
