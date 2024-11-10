import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import WorkoutInstructions from "./workout-instructions";

function WorkoutInstructionsCard() {
  return (
    <Card className="relative col-span-6 row-span-1 row-start-2 hidden h-full flex-col md:flex">
      <CardHeader>
        <CardTitle className="font-extrabold">Overall Workout Tips:</CardTitle>
      </CardHeader>
      <CardContent className="-mt-2 mb-2 flex-grow py-2">
        <WorkoutInstructions />
      </CardContent>
    </Card>
  );
}

export default WorkoutInstructionsCard;
