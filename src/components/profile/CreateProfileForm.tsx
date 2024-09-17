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
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";
import { Calendar } from "../ui/calendar";
import * as formSchemas from "@/lib/form-schemas";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Prisma } from "@prisma/client";
import * as action from "@/actions/index";
import { useSession } from "next-auth/react";

import { UploadDropzone } from "@/lib/uploadthing";

function CreateProfileForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const session = useSession();

  const form = useForm<z.infer<typeof formSchemas.createProfileFormSchema>>({
    resolver: zodResolver(formSchemas.createProfileFormSchema),
  });

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
    console.log(data, email);

    // Create logic for uploading the image and return the filePath

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

    if (!result.errors) {
      data.profilePictureUrl &&
        session.update({
          ...session,
          user: { ...session.data?.user, image: data.profilePictureUrl },
        });
    }
    setIsSubmitting(false);
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((formData) =>
            submitHandler(formData, session.data?.user?.email as string),
          )}
          className="flex min-w-[320px] flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dateOfBirth"
            render={({ field }) => (
              <FormItem className="flex flex-col pt-2">
                <FormLabel>Date of birth</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={`pl-3 pr-1 text-left font-normal ${!field.value && "text - muted - foreground"}`}
                      >
                        {field.value ? (
                          format(field.value, "P")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto mr-2 h-5 w-5 dark:text-white" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      // defaultMonth={field.value}
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                      captionLayout="dropdown-buttons"
                      fromDate={new Date(1940, 0, 1)}
                      toDate={new Date()}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your gender" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.values(Gender).map((gender) => (
                      <SelectItem key={gender} value={gender}>
                        {gender.charAt(0).toUpperCase() + gender.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="profilePictureUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Update Your Picture (optional)</FormLabel>
                <FormControl className="py-2">
                  <UploadDropzone
                    endpoint="imageUploader"
                    onUploadError={(error: Error) => {
                      form.setError("profilePictureUrl", {
                        message: error.message,
                      });
                    }}
                    onClientUploadComplete={(res) => {
                      alert("Upload ok");
                      console.log(res[0].url);
                      form.setValue("profilePictureUrl", res[0].url);
                    }}
                    appearance={{
                      uploadIcon: { height: 50, width: 50 },
                      button: {
                        backgroundColor: "black",
                        padding: 16,
                        marginTop: 12,
                        marginBottom: 8,
                      },
                    }}
                  />
                </FormControl>
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

export default CreateProfileForm;
