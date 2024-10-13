import { Card } from "@/components/ui/card";
import authOptions from "@/lib/auth";
import { ChevronRight } from "lucide-react";
import { getServerSession } from "next-auth";

async function WeekDaysSplit() {
  const session = await getServerSession(authOptions);

  const userId = session!.user.id;

  const weekdays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  return (
    <>
      <ul className="grid h-full grid-rows-7 gap-y-4">
        {weekdays.map((item) => {
          return (
            <li className="cursor-pointer" key={item}>
              <Card className="flex h-full flex-row items-center justify-between px-4 py-2 shadow-md active:bg-project-light-gray">
                <div className="flex flex-row items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-project-blue text-sm font-bold text-white">
                    {item}
                  </div>
                  <span className="ml-8 text-lg font-bold">
                    Legs And Glutes
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
