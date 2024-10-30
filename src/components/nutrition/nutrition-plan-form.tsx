"use client";

import * as z from "zod";
import paths from "@/lib/paths";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as action from "@/actions/index";
import { DietPhase } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import * as formSchemas from "@/lib/form-schemas";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "../ui/input";
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

interface ProfileFormProps {
  updatingUserData: null | {
    weeklyTrainingHours: number;
    weight: number;
    dietPhase: DietPhase;
  };
}

function NutritionPlanForm({ updatingUserData }: ProfileFormProps) {
  const router = useRouter();
  const session = useSession();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<
    z.infer<typeof formSchemas.createNutritionPlanFormSchema>
  >({
    resolver: zodResolver(formSchemas.createNutritionPlanFormSchema),
    defaultValues: {
      weeklyTrainingHours: updatingUserData?.weeklyTrainingHours || undefined,
      dietPhase: updatingUserData?.dietPhase || undefined,
      weight: updatingUserData?.weight || undefined,
    },
  });

  const submitHandler = async (
    data: z.infer<typeof formSchemas.createNutritionPlanFormSchema>,
  ) => {
    setIsSubmitting(true);

    const result = await action.createOrUpdateNutritionPlan(data);

    if (Object.keys(result?.errors).length > 0) {
      if (result.errors.weight) {
        form.setError("weight", {
          message: result.errors.weight[0],
        });
      }
      if (result.errors.weeklyTrainingHours) {
        form.setError("weeklyTrainingHours", {
          message: result.errors.weeklyTrainingHours[0],
        });
      }
      if (result.errors.dietPhase) {
        form.setError("dietPhase", {
          message: result.errors.dietPhase[0],
        });
      }
      if (result.errors._form) {
        form.setError("root", {
          message: result.errors._form[0],
        });
      }
      setIsSubmitting(false);
    } else {
      updatingUserData
        ? router.push(paths.showNutritionPlan())
        : router.push(paths.workoutSplit());
    }
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
            name="weeklyTrainingHours"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  How many hours per week in total will you exercise?
                </FormLabel>

                <FormDescription>
                  <b>Important:</b> Consider 1 hour per workout day additionally
                  to other activities / sports.
                </FormDescription>

                <Select
                  onValueChange={(value) => field.onChange(Number(value))}
                  defaultValue={field.value.toString()}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your training total volume" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {[3, 4, 5, 6, 7, 8, 9, 10].map((hours) => (
                      <SelectItem key={hours} value={hours.toString()}>
                        {hours === 3 && "3 Hours per week"}
                        {hours === 4 && "4 Hours per week"}
                        {hours === 5 && "5 Hours per week"}
                        {hours === 6 && "6 Hours per week"}
                        {hours === 7 && "7 Hours per week"}
                        {hours === 8 && "8 Hours per week"}
                        {hours === 9 && "9 Hours per week"}
                        {hours === 10 && "10 Hours per week"}
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
            name="weight"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Insert your current weight (in kilograms)</FormLabel>
                <FormControl>
                  <Input placeholder="70" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dietPhase"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Define Your Diet Phase</FormLabel>
                <FormDescription>
                  <b>Obs:</b> We recommend to start cutting when your body fat
                  is around{" "}
                  <b>
                    {session.data?.user.gender === "male"
                      ? "15% to 17%"
                      : "25% to 27%"}
                  </b>{" "}
                  (or higher) and bulking when your body fat is around{" "}
                  <b>
                    {session.data?.user.gender === "male"
                      ? "8% to 10%"
                      : "18% to 20%"}
                  </b>
                </FormDescription>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select current diet phase" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.values(DietPhase).map((dietPhase) => {
                      let dietPhaseDescription: string;
                      if (dietPhase === "bulk") {
                        dietPhaseDescription = "Gain muscle";
                      } else if (dietPhase === "cut") {
                        dietPhaseDescription = "Fat loss";
                      } else {
                        dietPhaseDescription = "Maintain body weight";
                      }

                      return (
                        <SelectItem key={dietPhase} value={dietPhase}>
                          {`${
                            dietPhase.charAt(0).toUpperCase() +
                            dietPhase.slice(1)
                          } 
                          - ${dietPhaseDescription}`}
                        </SelectItem>
                      );
                    })}
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

export default NutritionPlanForm;
