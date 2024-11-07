import { ChevronRight } from "lucide-react";
import { WorkoutProgramDetails } from "@prisma/client";

import { Card } from "@/components/ui/card";
import Link from "next/link";

interface WeekDaysSplitProps {
  trainingDaysData: { dayNumber: number; dayName: string }[];
  workoutProgramDetails: WorkoutProgramDetails[];
  workoutProgramId: number;
}

function WeekDaysSplit({
  trainingDaysData,
  workoutProgramDetails,
  workoutProgramId,
}: WeekDaysSplitProps) {
  const weekdays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  return (
    <>
      <ul className="grid h-full min-h-[75vh] grid-rows-7 gap-y-4">
        {weekdays.map((item, index) => {
          const workoutDayName = trainingDaysData.find(
            (day) => day.dayNumber === index + 1,
          )!.dayName;
          // console.log(redirectPath);

          const redirectPath = `${workoutProgramId}/${index + 1}`;

          return (
            <li className="cursor-pointer" key={item}>
              <Link href={`/workout/${redirectPath}`}>
                <Card className="group flex h-full flex-row items-center justify-between px-4 py-2 shadow-md hover:bg-project-light-gray active:bg-project-blue active:opacity-65 dark:hover:bg-project-blue">
                  <div className="flex flex-row items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-project-blue text-sm font-bold text-white dark:group-hover:bg-project-dark-blue">
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
