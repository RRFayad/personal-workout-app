"use client";

import * as z from "zod";
import paths from "@/lib/paths";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import * as formSchemas from "@/lib/form-schemas";
import { zodResolver } from "@hookform/resolvers/zod";

import { Loader2, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
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

interface CredentialsSignInFormProps {
  className?: string;
  authProcess?: "login" | "signup";
  loadingStateData: {
    loadingProvider: "credentials" | "google" | "github" | null;
    setLoadingProvider: React.Dispatch<
      React.SetStateAction<"credentials" | "google" | "github" | null>
    >;
  };
}

function CredentialsSignInForm({
  className,
  loadingStateData,
}: CredentialsSignInFormProps) {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchemas.credentialsSignIn>>({
    resolver: zodResolver(formSchemas.credentialsSignIn),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitHandler = async (data: { email: string; password: string }) => {
    loadingStateData.setLoadingProvider("credentials");

    const response = await signIn("credentials", { ...data, redirect: false });

    if (response?.error) {
      form.setError("root", {
        type: "value",
        message: response.error,
      });

      loadingStateData.setLoadingProvider(null);
    }

    if (response?.ok) {
      router.push(paths.editProfile());
    }
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

        <Button type="submit" disabled={!!loadingStateData.loadingProvider}>
          {loadingStateData.loadingProvider === "credentials" ? (
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
