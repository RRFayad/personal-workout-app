import * as z from "zod";
import { Gender, DietPhase } from "@prisma/client";

const genderValues = Object.values(Gender) as [Gender, ...Gender[]];
const dietPhaseValues = Object.values(DietPhase) as [DietPhase, ...DietPhase[]];

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
  profilePictureUrl: z.string().optional(),
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
});

export const createWorkoutFormSchema = z.object({
  trainingDays: z
    .number({
      message: "Required: Please, insert your how may days you will workout",
    })
    .min(3, { message: "Minimum value is 3" })
    .max(5, { message: "Maximum value is 5" }),
});

export const createNutritionPlanFormSchema = z.object({
  height: z.coerce
    .number({ message: "Required: Please, insert your height" })
    .gte(140, { message: "Your height must be in centimeters - Min: 140" })
    .lte(220, { message: "Your height must be in centimeters - Max: 220" }),
  weight: z.coerce
    .number({ message: "Required: Please, insert your weight" })
    .gte(45, { message: "Your weight must be in kilograms - Min: 45" })
    .lte(125, { message: "Your weight must be in kilograms - Max: 125" }),
  weeklyTrainingHours: z.coerce
    .number({
      message: "Required: Please, insert your total weekly training hours",
    })
    .gte(3, { message: "Your weekly training hours must be between 3 and 10" })
    .lte(10, {
      message: "Your weekly training hours must be between 3 and 10",
    }),
  dietPhase: z.enum(dietPhaseValues, {
    message: "Required: Diet Phase must be 'Bulk', 'Maintain' or 'Cut'",
  }),
});
