"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import * as actions from "@/actions";
import * as formSchemas from "@/lib/form-schemas";
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
import { Loader2, Mail } from "lucide-react";
import { signIn } from "next-auth/react";

interface CredentialsSignInFormProps {
  className?: string;
}

function CredentialsSignUpForm({ className }: CredentialsSignInFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchemas.credentialsSignUp>>({
    resolver: zodResolver(formSchemas.credentialsSignUp),
  });

  const submitHandler = async (data: any) => {
    setIsSubmitting(true);

    const result = await actions.credentialsSignUp(data); // Signup action

    if (result?.errors) {
      if (result.errors.email) {
        form.setError("email", { message: result.errors.email[0] });
      }
      if (result.errors.password) {
        form.setError("password", { message: result.errors.password[0] });
      }
      if (result.errors.passwordConfirm) {
        form.setError("passwordConfirm", {
          message: result.errors.passwordConfirm[0],
        });
      }
      if (result.errors._form) {
        form.setError("root", {
          type: "value",
          message: result.errors._form[0],
        });
      }
    }

    signIn("credentials", result.user);

    setIsSubmitting(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submitHandler)}
        className="mt-2 flex flex-col gap-4"
      >
        <FormDescription className="mx-auto">
          Or sign up with email and password
        </FormDescription>
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

        <FormField
          control={form.control}
          name="passwordConfirm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input placeholder="••••••••" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {form.formState.errors.root && (
          <div className="mx-auto text-sm font-medium text-destructive">
            {form.formState.errors.root.message}
          </div>
        )}

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Signing Up...
            </>
          ) : (
            <>
              <Mail className="mr-3 h-5 w-5" />
              Sign Up With Email
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}

export default CredentialsSignUpForm;