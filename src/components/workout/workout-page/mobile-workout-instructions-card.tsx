import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import WorkoutInstructions from "./workout-instructions";

function MobileWorkoutInstructionsCard() {
  return (
    <Card className="relative col-span-6 row-span-1 row-start-2 mb-2 flex h-full flex-col lg:hidden">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="flex justify-center">
            <CardTitle className="text-lg font-extrabold">
              Overall Workout Tips:
            </CardTitle>
          </AccordionTrigger>
          <AccordionContent>
            <CardContent className="-mt-2 mb-2 flex-grow py-2">
              <WorkoutInstructions />
            </CardContent>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}

export default MobileWorkoutInstructionsCard;
