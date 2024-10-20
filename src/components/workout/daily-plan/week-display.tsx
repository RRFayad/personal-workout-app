"use client";
import { addDays, differenceInCalendarWeeks, format, subDays } from "date-fns";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";

interface WeekDisplayProps {
  currentWeek: number;
  programStart: Date;
  programEnd: Date;
}

function WeekDisplay({
  currentWeek,
  programStart,
  programEnd,
}: WeekDisplayProps) {
  interface WeekData {
    week: number;
    weekStartDay: Date;
    weekEndDay: Date;
  }

  const [weekDataToBeDisplayed, setWeekDataToBeDisplayed] = useState<WeekData>({
    week: currentWeek,
    weekStartDay: addDays(programStart, 7 * currentWeek),
    weekEndDay: addDays(programStart, 7 * currentWeek + 6),
  });

  const totalWeeks = differenceInCalendarWeeks(programEnd, programStart);

  const decreaseWeekHandler = () => {
    weekDataToBeDisplayed.week > 1 &&
      setWeekDataToBeDisplayed((prevState) => ({
        week: prevState.week - 1,
        weekStartDay: subDays(prevState.weekStartDay, 7),
        weekEndDay: subDays(prevState.weekEndDay, 7),
      }));

    console.log(weekDataToBeDisplayed);
  };

  const increaseWeekHandler = () => {
    weekDataToBeDisplayed.week < totalWeeks &&
      setWeekDataToBeDisplayed((prevState) => ({
        week: prevState.week + 1,
        weekStartDay: addDays(prevState.weekStartDay, 7),
        weekEndDay: addDays(prevState.weekEndDay, 7),
      }));

    console.log(weekDataToBeDisplayed);
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <ChevronLeftIcon
          className="cursor-pointer"
          size={28}
          onClick={decreaseWeekHandler}
        />
        <h3>Week {weekDataToBeDisplayed.week}</h3>
        <ChevronRightIcon
          size={28}
          className="cursor-pointer"
          onClick={increaseWeekHandler}
        />
      </div>
      <p className="mx-auto mt-1 text-center text-[0.8rem] text-project-dark-gray">
        {weekDataToBeDisplayed.week === 0 &&
          "Your workout schedule starts on next Monday!"}
        {weekDataToBeDisplayed.week > 0 &&
          `${format(weekDataToBeDisplayed.weekStartDay, "MMM do")} to ${format(weekDataToBeDisplayed.weekEndDay, "MMM do")}`}
      </p>
    </>
  );
}

export default WeekDisplay;
