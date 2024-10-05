import { addDays, startOfWeek } from "date-fns";

export const setWorkoutPlanDates = (weeks = 16) => {
  const today = new Date();

  const nextMonday = startOfWeek(addDays(today, 7), { weekStartsOn: 1 });

  const endDate = addDays(nextMonday, weeks * 7 - 1);

  return {
    startDate: nextMonday.toISOString(),
    endDate: endDate.toISOString(),
  };
};
