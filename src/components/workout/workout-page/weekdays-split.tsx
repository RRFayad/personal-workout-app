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
      <ul className="grid h-full grid-rows-7 gap-y-4">
        {weekdays.map((item, index) => {
          return (
            <li className="cursor-pointer" key={item}>
              <Link href={`/workout/${workoutProgramId}/${index + 1}`}>
                <Card className="flex h-full flex-row items-center justify-between px-4 py-2 shadow-md hover:bg-project-light-gray active:bg-project-blue active:opacity-65">
                  <div className="flex flex-row items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-project-blue text-sm font-bold text-white">
                      {item}
                    </div>
                    <span className="ml-8 text-lg font-bold">
                      {
                        trainingDaysData.find(
                          (day) => day.dayNumber === index + 1,
                        )!.dayName
                      }
                    </span>
                  </div>
                  <ChevronRight
                    size={30}
                    className="text-project-blue"
                  ></ChevronRight>
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
