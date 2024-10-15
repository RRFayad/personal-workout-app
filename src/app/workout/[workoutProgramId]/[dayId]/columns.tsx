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
    header: "Exercise",
    cell: ({ row }) => {
      const exerciseName = row.getValue("exercise_name") as string;
      const exerciseEquipment = row.original.equipment;

      return (
        <div className="flex flex-col items-start justify-between gap-y-4">
          <div className="flex flex-col items-start justify-start">
            <h5 className="text-sm font-bold uppercase">{exerciseName}</h5>
            <span className="mt-[2px] text-xs capitalize text-project-gray">
              {exerciseEquipment}
            </span>
          </div>
          <span className="mt-4 text-xs font-bold text-project-orange">
            <Link href={"/"}>View Details{">"}</Link>
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "imageUrl",
    header: "",
    cell: ({ row }) => {
      return (
        <Image
          src={DummyGif}
          alt={row.original.exercise_name}
          height={120}
          // width={180}
          className="my-0 p-0"
        />
      );
    },
  },
  {
    accessorKey: "sets_qty",
    header: "Sets",
    cell: ({ row }) => {
      const setsQty = row.getValue("sets_qty") as number;
      console.log(setsQty);
      return (
        <div className="flex flex-col items-center justify-around gap-y-4">
          {Array.from({ length: setsQty }, (_, i) => (
            <p key={i + 1}>{i + 1}</p>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "reps",
    header: "Reps",
    cell: ({ row }) => {
      const setsQty = row.getValue("sets_qty") as number;
      return (
        <div className="flex flex-col items-center justify-center gap-y-4">
          {Array.from({ length: setsQty }, (_, i) => (
            <p key={i + 5}>{`${DUMMY_REPS.min} - ${DUMMY_REPS.max}`}</p>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "rest",
    header: "Rest (min)",
    cell: ({ row }) => {
      const setsQty = row.getValue("sets_qty") as number;
      return (
        <div className="flex flex-col items-center justify-center gap-y-4">
          {Array.from({ length: setsQty }, (_, i) => (
            <p key={i}>{`3`}</p>
          ))}
        </div>
      );
    },
  },
];
