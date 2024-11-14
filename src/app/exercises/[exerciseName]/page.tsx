import Image from "next/image";
import BackButton from "@/components/ui/back-button";
import { getExerciseDataByName } from "@/lib/workout/helpers";

interface ExercisePageProps {
  params: {
    exerciseName: string;
  };
}

function ExercisePage({ params }: ExercisePageProps) {
  const { exerciseName } = params;

  const exercise = getExerciseDataByName(exerciseName);

  return (
    <div className="mx-auto h-full w-full lg:col-span-12 xl:col-span-10 xl:col-start-2">
      <div className="relative flex flex-col items-center justify-center pt-12">
        <BackButton className="absolute left-0 top-1" />
        {!exercise && <h1 className="mt-8">Exercise not found!</h1>}
        {exercise && (
          <>
            <Image
              src={exercise.imageUrl!}
              alt={exerciseName}
              className="my-2 h-[180px] w-[180px] p-0 lg:mt-12 lg:h-[240px] lg:w-[240px]"
              unoptimized
            />
            <h2 className="mt-2 text-center capitalize">
              {exercise.exerciseName.en}
            </h2>
            <p className="mt-6 text-justify text-sm lg:text-start lg:text-base">
              {exercise.execution.en}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default ExercisePage;
