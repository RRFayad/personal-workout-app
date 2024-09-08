import * as z from "zod";

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
