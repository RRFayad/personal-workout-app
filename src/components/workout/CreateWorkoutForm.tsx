"use client";

import * as z from "zod";
import paths from "@/lib/paths";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as action from "@/actions/index";
import { useRouter } from "next/navigation";
import * as formSchemas from "@/lib/form-schemas";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

function CreateWorkoutForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchemas.createWorkoutFormSchema>>({
    resolver: zodResolver(formSchemas.createWorkoutFormSchema),
  });

  const submitHandler = async (data: { trainingDays: number }) => {
    setIsSubmitting(true);

    const result = await action.createWorkoutPlan(data);

    if (result?.errors) {
      if (result.errors.trainingDays) {
        form.setError("trainingDays", {
          message: result.errors.trainingDays[0],
        });
      }

      if (result.errors._form) {
        form.setError("root", {
          message: result.errors._form[0],
        });
      }
    }
    setIsSubmitting(false);
    router.push(paths.createNutritionPlan());
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((formData) => submitHandler(formData))}
          className="flex min-w-[320px] flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="trainingDays"
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
                  onValueChange={(value) => field.onChange(Number(value))}
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
