import { Card } from "@/components/ui/card";
import { db } from "@/db";
import authOptions from "@/lib/auth";
import { ChevronRight } from "lucide-react";
import { getServerSession } from "next-auth";

async function WeekDaysSplit() {
  const session = await getServerSession(authOptions);

  const userId = session!.user.id;

  const user = await db.user.findFirst({
    where: { id: userId },
    include: {
      WorkoutProgramStructure: { include: { WorkoutProgramDetails: true } },
    },
  });

  //   console.log(user?.WorkoutProgramStructure?.WorkoutProgramDetails);
  const daysNames: string[] = [];

  if (!user?.WorkoutProgramStructure?.WorkoutProgramDetails) {
    // Define what to do (probably, simply redirect)
  } else {
    let dayNumber = 1;
    for (
      let i = 0;
      i < user?.WorkoutProgramStructure?.WorkoutProgramDetails!.length;
      i++
    ) {
      const element = user?.WorkoutProgramStructure?.WorkoutProgramDetails![i];
      //   console.log(element);
      element.day_number === dayNumber &&
        daysNames.push(element.day_name) &&
        dayNumber++;
    }
  }

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
                    {daysNames[index]}
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
