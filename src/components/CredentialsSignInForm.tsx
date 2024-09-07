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
  const [formState, action] = useFormState(actions.credentialsSignIn, {
    errors: {},
  });

  const form = useForm<z.infer<typeof formSchemas.credentialsLogin>>({
    resolver: zodResolver(formSchemas.credentialsLogin),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(action)}
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
        {formState.errors._form && (
          <div className="mx-auto mt-2 text-green-500">
            {formState.errors._form[0]}
          </div>
        )}
        <Button type="submit">Log In With Email</Button>
      </form>
    </Form>
  );
}

export default CredentialsSignInForm;
