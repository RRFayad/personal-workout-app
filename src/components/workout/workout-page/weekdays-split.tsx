import Link from "next/link";
import paths from "@/lib/paths";
import { ChevronRight } from "lucide-react";

import { Card } from "@/components/ui/card";

export interface WeekDaysSplitProps {
  trainingDaysData: { dayNumber: number; dayName: string }[];
  workoutProgramId: number;
  className?: string;
}

function WeekDaysSplit({
  trainingDaysData,
  workoutProgramId,
  className,
}: WeekDaysSplitProps) {
  const weekdays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  return (
    <>
      <ul
        className={`h-full gap-y-4 md:min-h-[75vh] md:grid-rows-7 md:gap-y-4 ${className}`}
      >
        {weekdays.map((item, index) => {
          const workoutDayName = trainingDaysData.find(
            (day) => day.dayNumber === index + 1,
          )!.dayName;
          // console.log(redirectPath);

          return (
            <li className="cursor-pointer" key={item}>
              <Link href={paths.workoutDay(workoutProgramId, index + 1)}>
                <Card className="group flex flex-row items-center justify-between px-4 py-2 shadow-md hover:bg-project-light-gray active:bg-project-blue active:opacity-65 dark:hover:bg-project-blue md:h-full">
                  <div className="flex flex-row items-center justify-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-project-blue text-sm font-bold text-white dark:group-hover:bg-project-dark-blue md:h-12 md:w-12">
                      {item}
                    </div>
                    <span className="ml-8 text-lg font-bold">
                      {workoutDayName}
                    </span>
                  </div>
                  <ChevronRight
                    size={30}
                    className="text-project-blue dark:group-hover:text-project-dark-blue"
                  />
                </Card>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default WeekDaysSplit;
