"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import WalkingGif from "@/../public/images/exercises/Walking.gif";
import { ChevronLeftIcon } from "lucide-react";

function ActiveRestDay() {
  const router = useRouter();
  return (
    <div className="relative flex flex-col items-center justify-center pt-12">
      <span
        className="absolute left-0 top-1 flex cursor-pointer align-middle font-bold text-project-dark-gray"
        onClick={() => router.back()}
      >
        <ChevronLeftIcon />
        Back
      </span>
      <Image
        src={WalkingGif}
        alt={"Active Rest"}
        height={240}
        width={240}
        className="-my-2 p-0"
        unoptimized
      />
      <h1 className="mt-8">Active Rest Day</h1>
      <p className="mt-4 text-start">
        Use this day for light physical activies, such as walking or light
        cardio. If you&apos;ve been skipping abs exercises during the week,
        consider doing some core exercises, or even focus on{" "}
        <strong>small</strong> and stubborn muscles, such as forearms or side
        deltoids.
      </p>
      <p className="mt-2 self-start">
        Don&apos;t forget that rest is crucial for your performance in the next
        workout session and in the long-term progress.
      </p>
    </div>
  );
}

export default ActiveRestDay;
