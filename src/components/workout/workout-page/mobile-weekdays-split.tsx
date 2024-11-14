import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import WorkoutInstructions from "./workout-instructions";
import WeekDaysSplit from "./weekdays-split";
import { WeekDaysSplitProps } from "./weekdays-split";

function MobileWeekdaysSplit({
  trainingDaysData,
  workoutProgramId,
  className,
}: WeekDaysSplitProps) {
  return (
    <Card className="relative row-span-1 row-start-2 my-2 flex h-full flex-col lg:hidden">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="flex justify-center">
            <CardTitle className="text-lg font-extrabold">
              Full Training Split:
            </CardTitle>
          </AccordionTrigger>
          <AccordionContent>
            <CardContent className="-mt-2 mb-2 flex-grow py-2">
              <WeekDaysSplit
                trainingDaysData={trainingDaysData!}
                workoutProgramId={workoutProgramId!}
                className="grid"
              />
            </CardContent>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}

export default MobileWeekdaysSplit;
