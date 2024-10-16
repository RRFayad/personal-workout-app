"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import Link from "next/link";
import DummyGif from "@/../public/images/bench_press.gif";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

const DUMMY_IMAGE_URL = "https://giphy.com/gifs/jokogif-xUPGcKoAYCn5fHK0Zq";
const DUMMY_REPS = { min: 10, max: 12 };

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "exercise_name",
    header: () => (
      <div className="flex h-full w-64 items-center justify-start gap-x-8">
        <span>Exercise</span>
      </div>
    ),
    cell: ({ row }) => {
      const exerciseName = row.getValue("exercise_name") as string;
      const exerciseEquipment = row.original.equipment;

      return (
        <div className="my-2 flex w-64 flex-col items-start justify-between">
          <div className="flex flex-col items-start justify-start">
            <h5 className="text-sm font-bold uppercase">{exerciseName}</h5>
            <span className="mt-[2px] text-xs capitalize text-project-gray">
              {exerciseEquipment}
            </span>
          </div>
          <span className="mt-8 text-xs font-bold text-project-orange">
            <Link href={"/"}>View Details{">"}</Link>
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "imageUrl",
    header: () => (
      <div className="flex h-full w-64 items-center justify-center gap-x-8">
        <span></span>
      </div>
    ),
    cell: ({ row }) => {
      return (
        <Image
          src={DummyGif}
          alt={row.original.exercise_name}
          height={120}
          // width={180}
          className="-my-2 p-0"
        />
      );
    },
  },
  {
    accessorKey: "sets_qty",
    header: () => (
      <div className="flex h-full items-center justify-center gap-x-8">
        <span className="inline-block w-16 text-center">Sets</span>
        <span className="inline-block w-16 text-center">Reps</span>
        <span className="inline-block w-16 text-center">Rest (min)</span>
      </div>
    ),
    cell: ({ row }) => {
      const setsQty = row.getValue("sets_qty") as number;

      return (
        <div className="flex h-full items-center justify-center gap-x-8">
          <div className="flex w-16 flex-col items-center justify-center gap-y-2 font-semibold text-project-gray">
            {Array.from({ length: setsQty }, (_, i) => (
              <p key={i}>{i + 1}</p>
            ))}
          </div>
          <div className="flex w-16 flex-col items-center gap-y-2 font-semibold text-project-gray">
            {Array.from({ length: setsQty }, (_, i) => (
              <p key={i}>{`${DUMMY_REPS.min} - ${DUMMY_REPS.max}`}</p>
            ))}
          </div>
          <div className="flex w-16 flex-col items-center gap-y-2 font-semibold text-project-gray">
            {Array.from({ length: setsQty }, (_, i) => (
              <p key={i}>{`3`}</p>
            ))}
          </div>
        </div>
      );
    },
  },
];
