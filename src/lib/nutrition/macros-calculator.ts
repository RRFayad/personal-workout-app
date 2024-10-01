import { Gender, DietPhase } from "@prisma/client";
import { differenceInYears, differenceInDays, addYears } from "date-fns";

const calculateAge = (dateOfBirth: Date): number => {
  const today = new Date();
  const years = differenceInYears(today, dateOfBirth);

  const lastBirthday = addYears(dateOfBirth, years);
  const remainingDays = differenceInDays(today, lastBirthday);

  const daysInYear =
    new Date(today.getFullYear(), 11, 31).getDate() === 366 ? 366 : 365;

  const ageWithDecimal = years + remainingDays / daysInYear;
  return ageWithDecimal;
};

// Basal Metabolic Rate
const calculateBMR = (
  gender: Gender,
  weight: number,
  height: number,
  age: number,
): number => {
  const k = gender === "female" ? 161 : 0;
  return 10 * weight + 6.25 * height - 5 * age + 5 - k;
};

// Total Daily Energy Expenditure
const calculateTDEE = (bmr: number, weeklyHoursOfExercise: number) => {
  const tdee = bmr * (1.15 + 0.06 * weeklyHoursOfExercise);
  return Number(tdee.toFixed(0));
};

interface NutritionalInputs {
  weeklyTrainingHours: number;
  height: number;
  weight: number;
  dietPhase: DietPhase;
  gender: Gender;
  dateOfBirth: Date;
}
export const calculateMacros = (data: NutritionalInputs) => {
  const {
    weeklyTrainingHours,
    height,
    weight,
    dietPhase,
    dateOfBirth,
    gender,
  } = data;

  const age = calculateAge(dateOfBirth);
  const bmr = calculateBMR(gender, weight, height, age);
  const tdee = calculateTDEE(bmr, weeklyTrainingHours);

  let dailyKcalIntake: number;
  let dailyProteinIntake: number;
  let dailyCarbsIntake: number;
  let dailyFatsIntake: number;

  if (dietPhase === "cut") {
    dailyKcalIntake = Math.round(tdee * 0.75);
    dailyProteinIntake = Math.round((dailyKcalIntake * 0.4) / 4);
    dailyCarbsIntake = Math.round((dailyKcalIntake * 0.4) / 4);
    dailyFatsIntake = Math.round((dailyKcalIntake * 0.2) / 9);
  }
  if (dietPhase === "bulk") {
    dailyKcalIntake = Math.round(tdee * 1.1);
    dailyProteinIntake = Math.round((dailyKcalIntake * 0.25) / 4);
    dailyCarbsIntake = Math.round((dailyKcalIntake * 0.55) / 4);
    dailyFatsIntake = Math.round((dailyKcalIntake * 0.2) / 9);
  }
  if (dietPhase === "maintain") {
    dailyKcalIntake = Math.round(tdee);
    dailyProteinIntake = Math.round((dailyKcalIntake * 0.3) / 4);
    dailyCarbsIntake = Math.round((dailyKcalIntake * 0.45) / 4);
    dailyFatsIntake = Math.round((dailyKcalIntake * 0.25) / 9);
  }

  return {
    bmr,
    tdee,
    dailyMealPlan: {
      kcal: dailyKcalIntake!,
      proteins: dailyProteinIntake!,
      carbs: dailyCarbsIntake!,
      fats: dailyFatsIntake!,
    },
  };
};
