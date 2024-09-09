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
import { redirect, useRouter } from "next/navigation";
import paths from "@/lib/paths";

interface CredentialsSignInFormProps {
  className?: string;
  authProcess?: "login" | "signup";
}

function CredentialsSignInForm({ className }: CredentialsSignInFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchemas.credentialsSignIn>>({
    resolver: zodResolver(formSchemas.credentialsSignIn),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitHandler = async (data: { email: string; password: string }) => {
    setIsSubmitting(true);

    const response = await signIn("credentials", { ...data, redirect: false });

    if (response?.error) {
      form.setError("root", {
        type: "value",
        message: response.error,
      });
    }

    if (response?.ok) {
      console.log("RESPONSE OKKKK");
      router.push(paths.createProfile());
    }

    setIsSubmitting(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submitHandler)}
        className="mt-2 flex flex-col gap-4"
      >
        <FormDescription className="mx-auto">
          Or sign in with email and password
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

        {form.formState.errors.root && (
          <div className="mx-auto text-sm font-medium text-destructive">
            {form.formState.errors.root.message}
          </div>
        )}

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Logging in...
            </>
          ) : (
            <>
              <Mail className="mr-3 h-5 w-5" />
              Log In With Email
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}

export default CredentialsSignInForm;
