"use client";
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
import { useFormState } from "react-dom";

interface CredentialsSignInFormProps {
  className?: string;
}

function CredentialsSignInForm({ className }: CredentialsSignInFormProps) {
  const form = useForm<z.infer<typeof formSchemas.credentialsSignIn>>({
    resolver: zodResolver(formSchemas.credentialsSignIn),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitHandler = async (
    data: z.infer<typeof formSchemas.credentialsSignIn>,
  ) => {
    const result = await actions.credentialsSignIn(data);

    if (result.errors) {
      if (result.errors.email) {
        form.setError("email", { message: result.errors.email[0] });
      }

      if (result.errors._form) {
        form.setError("root", {
          type: "value",
          message: result.errors._form[0],
        });
      }
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submitHandler)}
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

        {form.formState.errors.root && (
          <div className="mx-auto text-sm font-medium text-destructive">
            {form.formState.errors.root.message}
          </div>
        )}

        <Button type="submit">Log In With Email</Button>
      </form>
    </Form>
  );
}

export default CredentialsSignInForm;
