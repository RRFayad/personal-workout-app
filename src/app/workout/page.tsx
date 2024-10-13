import Image from "next/image";
import MalePic from "@/../public/images/male/push.jpg";
import FemalePic from "@/../public/images/female/push.avif";
import WeekDaysSplit from "@/components/workout/workout-page/weekdays-split";
import OverallWorkoutInstructions from "@/components/workout/workout-page/overall-workout-instructions";

import { Button } from "@/components/ui/button";

function WorkoutSplitPage() {
  return (
    <>
      <header className="relative col-span-12 flex justify-center">
        <h1>Workout Split Name Here</h1>
        {/* <Button className="absolute inset-y-0 right-4 top-0 m-auto bg-project-orange hover:bg-project-orange hover:opacity-75">
          Extract to PDF?
        </Button> */}
      </header>

      <div className="col-span-6 grid grid-rows-2 gap-y-4">
        <div className="relative col-span-6 row-span-1 flex-col overflow-hidden rounded-lg">
          <Image
            src={FemalePic}
            layout="fill"
            objectFit="cover"
            alt="Trainind Day Pic"
          />
          <div className="absolute inset-0 flex items-end justify-end bg-black text-5xl text-white opacity-75">
            <span className="mb-6 mr-12">Push Day</span>
          </div>
        </div>
        <OverallWorkoutInstructions />
      </div>
      <div className="col-span-6">
        <WeekDaysSplit />
      </div>
    </>
  );
}

export default WorkoutSplitPage;
