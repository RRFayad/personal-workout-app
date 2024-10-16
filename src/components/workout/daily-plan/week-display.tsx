"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface WeekDisplayProps {
  currentWeek: number;
}

function WeekDisplay({ currentWeek }: WeekDisplayProps) {
  return (
    <>
      <div className="flex items-center justify-center">
        <ChevronLeftIcon size={28} />
        <h3>Week {currentWeek}</h3>
        <ChevronRightIcon size={28} />
      </div>
      <p className="mx-auto mt-1 text-center text-[0.8rem] text-project-dark-gray">
        Oct 14th to Oct 20th
      </p>
    </>
  );
}

export default WeekDisplay;
