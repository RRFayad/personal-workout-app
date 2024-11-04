"use client";

import * as z from "zod";
import paths from "@/lib/paths";
import { useState } from "react";
import { format } from "date-fns";
import { Gender } from "@prisma/client";
import { useForm } from "react-hook-form";
import * as action from "@/actions/index";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import * as formSchemas from "@/lib/form-schemas";
import { UploadDropzone } from "@/lib/uploadthing";
import { zodResolver } from "@hookform/resolvers/zod";
import useDarkModeObserver from "@/hooks/useDarkModeObserver";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { CalendarIcon, Loader2 } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";
import {
  Form,
  FormItem,
  FormLabel,
  FormField,
  FormControl,
  FormMessage,
} from "../ui/form";

interface ProfileFormProps {
  updatingUserData: null | {
    fullName?: string;
    height?: number;
    gender?: Gender;
    dateOfBirth?: Date;
  };
}

function ProfileForm({ updatingUserData }: ProfileFormProps) {
  const router = useRouter();
  const session = useSession();
  const isDarkMode = useDarkModeObserver();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<{
    url: string;
    name: string;
  } | null>(null);

  const form = useForm<z.infer<typeof formSchemas.createProfileFormSchema>>({
    resolver: zodResolver(formSchemas.createProfileFormSchema),
    defaultValues: {
      fullName: updatingUserData?.fullName || "",
      gender: updatingUserData?.gender || undefined,
      height: updatingUserData?.height || undefined,
      dateOfBirth: updatingUserData?.dateOfBirth || undefined,
      profilePictureUrl: undefined,
    },
  });

  const submitHandler = async (data: {
    gender: Gender;
    fullName: string;
    dateOfBirth: Date;
    height: number;
    profilePictureUrl?: string | undefined;
  }) => {
    setIsSubmitting(true);

    const result = await action.createOrUpdateProfile(data);

    if (Object.keys(result?.errors).length > 0) {
      if (result.errors.fullName) {
        form.setError("fullName", { message: result.errors.fullName[0] });
      }
      if (result.errors.gender) {
        form.setError("gender", { message: result.errors.gender[0] });
      }
      if (result.errors.dateOfBirth) {
        form.setError("dateOfBirth", { message: result.errors.dateOfBirth[0] });
      }
      if (result.errors.height) {
        form.setError("height", {
          message: result.errors.height[0],
        });
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
      setIsSubmitting(false);
    } else {
      session.update();
      updatingUserData
        ? router.push(paths.showProfile())
        : router.push(paths.createWorkout());
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((formData) => submitHandler(formData))}
          className="flex flex-col gap-4"
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
            name="height"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Height (in centimeters)</FormLabel>
                <FormControl>
                  <Input placeholder="170" type="number" {...field} />
                </FormControl>
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
                <FormControl className="py-4">
                  {uploadedFile ? (
                    <Input
                      placeholder={uploadedFile.name}
                      type="text"
                      readOnly
                      // {...field}
                    />
                  ) : (
                    <UploadDropzone
                      endpoint="imageUploader"
                      config={{ mode: "auto" }}
                      onUploadError={(error: Error) => {
                        form.setError("profilePictureUrl", {
                          message: error.message,
                        });
                      }}
                      onClientUploadComplete={(res) => {
                        // console.log(res[0].name);
                        setUploadedFile({
                          name: res[0].name,
                          url: res[0].url,
                        });

                        form.setValue("profilePictureUrl", res[0].url);
                      }}
                      appearance={{
                        uploadIcon: { height: 68, width: 68 },
                        button: {
                          backgroundColor: isDarkMode ? "white" : "#18181B",
                          color: !isDarkMode ? "white" : "black",
                          padding: 16,
                          marginTop: 16,
                        },
                      }}
                    />
                  )}
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

export default ProfileForm;
