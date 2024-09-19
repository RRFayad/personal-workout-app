"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { Gender } from "@prisma/client";

import { Loader2 } from "lucide-react";

import * as formSchemas from "@/lib/form-schemas";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Prisma } from "@prisma/client";
import * as action from "@/actions/index";
import { useSession } from "next-auth/react";

import useDarkModeObserver from "@/hooks/useDarkModeObserver";
import { useRouter } from "next/navigation";
import paths from "@/lib/paths";
import { Slider } from "../ui/slider";

function CreateWorkoutForm() {
  const router = useRouter();
  const isDarkMode = useDarkModeObserver();
  const [uploadedFile, setUploadedFile] = useState<{
    url: string;
    name: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const session = useSession();

  // const form = useForm<z.infer<typeof formSchemas.createProfileFormSchema>>({
  //   resolver: zodResolver(formSchemas.createProfileFormSchema),
  // });
  const form = useForm();

  const submitHandler = async (
    data: {
      fullName: string;
      dateOfBirth: Date;
      gender: Gender;
      profilePictureUrl?: string | undefined;
    },
    email: Prisma.UserGetPayload<true>["email"],
  ) => {
    setIsSubmitting(true);

    const result = await action.createProfile(data, email);

    if (result?.errors) {
      if (result.errors.fullName) {
        form.setError("fullName", { message: result.errors.fullName[0] });
      }
      if (result.errors.gender) {
        form.setError("gender", { message: result.errors.gender[0] });
      }
      if (result.errors.dateOfBirth) {
        form.setError("dateOfBirth", { message: result.errors.dateOfBirth[0] });
      }
      if (result.errors.profilePictureUrl) {
        form.setError("profilePictureUrl", {
          message: result.errors.profilePictureUrl[0],
        });
      }
      if (result.errors._form) {
        form.setError("root", {
          message: result.errors._form[0],
        });
      }
    }

    if (data.profilePictureUrl) {
      session.update();
    }

    setIsSubmitting(false);
    router.push(paths.profile());
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((formData) => console.log(formData))}
          className="flex min-w-[320px] flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="workingOutDays"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  How many days per week do you plan to work out?
                </FormLabel>

                <FormDescription>
                  <b>Important:</b> There must be a rest day after 3 days of
                  continuous workouts.
                </FormDescription>

                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your training frequency (without considering cardio)" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {[3, 4, 5].map((day) => (
                      <SelectItem key={day} value={day.toString()}>
                        {day === 3 && "3 days"}
                        {day === 4 && "4 days"}
                        {day === 5 && "5 days"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />

          {form.formState.errors.root?.message && (
            <div className="mx-auto text-sm font-medium text-destructive">
              {form.formState.errors.root.message}
            </div>
          )}

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </Form>
    </>
  );
}

export default CreateWorkoutForm;
