"use client";
import { useForm } from "react-hook-form";
import * as z from "zod";
import * as actions from "@/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormState } from "react-dom";

interface CredentialsSignInFormProps {
  className?: string;
}

const formSchema = z.object({
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

function CredentialsSignInForm({ className }: CredentialsSignInFormProps) {
  const [formState, action] = useFormState(actions.credentialsSignIn, {
    message: "",
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        action={action}
        className="mt-2 flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="john@doe.com" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="••••••••" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Log In With Email</Button>
      </form>
    </Form>
  );
}

export default CredentialsSignInForm;
