import { db } from "@/db";
import authOptions from "@/lib/auth";
import { ChevronRight } from "lucide-react";
import { getServerSession } from "next-auth";

import { Card } from "@/components/ui/card";

interface WeekDaysSplitProps {
  workoutDaysNames: string[];
}

function WeekDaysSplit({ workoutDaysNames }: WeekDaysSplitProps) {
  const weekdays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  return (
    <>
      <ul className="grid h-full grid-rows-7 gap-y-4">
        {weekdays.map((item, index) => {
          return (
            <li className="cursor-pointer" key={item}>
              <Card className="flex h-full flex-row items-center justify-between px-4 py-2 shadow-md hover:bg-project-light-gray active:bg-project-blue active:opacity-65">
                <div className="flex flex-row items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-project-blue text-sm font-bold text-white">
                    {item}
                  </div>
                  <span className="ml-8 text-lg font-bold">
                    {workoutDaysNames[index]}
                  </span>
                </div>
                <ChevronRight
                  size={30}
                  className="text-project-blue"
                ></ChevronRight>
              </Card>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default WeekDaysSplit;
