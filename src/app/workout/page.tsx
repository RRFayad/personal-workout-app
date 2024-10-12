import Image from "next/image";
import MalePic from "@/../public/images/male/push.jpg";
import FemalePic from "@/../public/images/female/push.avif";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

        <Card className="relative col-span-6 row-span-1 row-start-2 flex-col">
          <CardHeader>
            <CardTitle className="font-extrabold">
              Overall Workout Tips:
            </CardTitle>
          </CardHeader>
          <CardContent className="-mt-2">
            <ul className="flex flex-col gap-y-2">
              <li>
                <ul>
                  ✔ Start every session with a warm-up routine! It should be 3
                  or 4 sets of the 1st exercise of the day, being:
                  <li className="ml-4">
                    ✔ 1° set: 50% of the working weight, for 8 - 10 reps;
                  </li>
                  <li className="ml-4">
                    ✔ 2° set: 50% of the working weight, for 8 - 10 reps (more
                    explosion);
                  </li>
                  <li className="ml-4">
                    ✔ 3° set: 70% of the working weight, for 3 - 5 reps;
                  </li>
                  <li className="ml-4">
                    ✔ 4° set (optional): 100% of the working weight, for 1 rep.
                  </li>
                </ul>
              </li>
              <li>
                ✔ Technique is the most important variable! Don't sacrifice it
                for heavier weights!
              </li>
              <li>✔ Always Focus in Full Range of Motion!</li>
              <li>
                ✔ For each exercise, try to set a new record in the last set!
              </li>
              <li>
                ✔ The other sets should finish with 2 or 1 RIR (Reps in
                Reserve)!
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <div className="col-span-6 flex-col bg-red-100">aa</div>
    </>
  );
}

export default WorkoutSplitPage;
