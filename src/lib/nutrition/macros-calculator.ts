import { Gender, DietPhase } from "@prisma/client";
import { differenceInYears, differenceInDays, addYears } from "date-fns";

interface NutritionalInputs {
  weeklyTrainingHours: number;
  height: number;
  weight: number;
  dietPhase: DietPhase;
  gender: Gender;
  dateOfBirth: Date;
}

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
  const dailyMealPlan = { kcal: null, proteins: null, carbs: null, fats: null };
};
