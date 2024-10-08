import Image from "next/image";
import FemalePic from "@/../public/images/female/push.avif";
import MalePic from "@/../public/images/male/push.jpg";
import { Button } from "@/components/ui/button";

function WorkoutSplitPage() {
  return (
    <>
      <header className="relative col-span-12 flex justify-center bg-yellow-200">
        <h1>Workout Split Name Here</h1>
        <Button className="absolute inset-y-0 right-4 top-0 m-auto bg-project-orange">
          Extract to PDF?
        </Button>
      </header>

      <div className="col-span-6 flex-col bg-blue-100">
        <Image src={FemalePic} alt="Trainind Day Pic"></Image>
        <Image src={FemalePic} alt="Trainind Day Pic"></Image>
      </div>
      <div className="col-span-6 flex-col bg-red-100">aa</div>
    </>
  );
}

export default WorkoutSplitPage;
