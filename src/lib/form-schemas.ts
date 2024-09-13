import * as z from "zod";
import { Gender } from "@prisma/client";
const genderValues = Object.values(Gender) as [Gender, ...Gender[]];

export const credentialsSignIn = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, "Your password must contain at least 8 characters")
    .refine((password) => {
      const regex =
        /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

      return regex.test(password);
    }, "Password must contain at least 1 special character and 1 uppercase letter"),
});

export const credentialsSignUp = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, "Your password must contain at least 8 characters")
      .refine((password) => {
        const regex =
          /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

        return regex.test(password);
      }, "Password must contain at least 1 special character and 1 uppercase letter"),
    passwordConfirm: z.string({
      message: "Required and must match with password",
    }),
  })
  .superRefine((data, context) => {
    if (data.password !== data.passwordConfirm) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["passwordConfirm"],
        message: "Password does not match",
      });
    }
  });

export const createProfileFormSchema = z.object({
  fullName: z
    .string()
    .min(3)
    .refine((fullName) => {
      const allowedCharacters = /^[A-Za-z\u00C0-\u017F\s\-']+$/;

      const namesQtd = fullName.split(" ");

      return allowedCharacters.test(fullName) && namesQtd.length > 1;
    }, "Please insert your full name"),
  profilePicture: z
    .instanceof(File, { message: "You must upload a file" })
    .refine((file) => file.size <= 2 * 1024 * 1024, {
      message: "File size must be less than 2MB",
    })
    .optional(),
  dateOfBirth: z.date().refine((date) => {
    const today = new Date();
    const eighteenYrsAgo = new Date(
      today.getFullYear() - 18,
      today.getMonth(),
      today.getDate(),
    );
    return date <= eighteenYrsAgo; // When the callback returns true we say the validation failed
  }, "You must be at least 18 years old"),
  gender: z.enum(genderValues, {
    message: "Gender must be 'Male' of 'Female'",
  }),
  // height: z.coerce
  //   .number()
  //   .gte(140, { message: "Min height allowed is 140" })
  //   .lte(220, { message: "Max height allowed is 220" }),
});
