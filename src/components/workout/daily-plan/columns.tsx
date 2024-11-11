"use client";

import Link from "next/link";
import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table";
import DummyGif from "@/../public/images/bench_press.gif";
import { ChevronRightIcon } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "exercise_name",
    header: () => (
      <div className="flex h-full w-24 items-center justify-start gap-x-8 lg:w-64 lg:justify-start">
        <span>Exercise</span>
      </div>
    ),
    cell: ({ row }) => {
      const exerciseName = row.getValue("exercise_name") as string;
      const exerciseEquipment = row.original.equipment;

      return (
        <div className="my-2 flex w-24 flex-col items-start justify-between lg:w-64">
          <div className="flex flex-col items-start justify-start">
            <h5 className="text-xs font-bold capitalize lg:text-sm lg:uppercase">
              {exerciseName}
            </h5>
            <span className="mt-[2px] text-[0.675rem] capitalize text-project-gray lg:text-xs">
              {exerciseEquipment}
            </span>
          </div>
          <span className="mt-8 whitespace-nowrap text-[0.675rem] font-bold text-project-orange lg:text-xs">
            <Link
              href={"/workout"}
              className="flex items-center justify-center align-middle"
            >
              View Details{" "}
              <>
                {/* Mobile icon */}
                <ChevronRightIcon
                  size={14}
                  className="-ml-[2px] mt-[2px] block align-middle lg:hidden"
                />

                {/* Desktop icon */}
                <ChevronRightIcon
                  size={16}
                  className="-ml-[2px] mt-[2px] hidden align-middle lg:block"
                />
              </>
            </Link>
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "imageUrl",
    header: (row) => {
      return (
        <div className="hidden h-full items-center justify-center gap-x-8 lg:flex lg:w-64">
          <span>{}</span>
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <Image
          src={row.original.imageUrl}
          alt={row.original.exercise_name}
          height={120}
          width={120}
          className="-my-2 hidden p-0 lg:block"
          unoptimized
        />
      );
    },
  },
  {
    accessorKey: "sets_qty",
    header: () => (
      <div className="flex h-full w-52 items-center justify-end gap-x-8 lg:w-64 lg:justify-center lg:gap-x-8">
        <span className="inline-block w-12 text-center lg:w-16">Sets</span>
        <span className="inline-block w-12 text-center lg:w-16">Reps</span>
        <span className="inline-block w-12 text-center lg:w-16">Rest</span>
      </div>
    ),
    cell: ({ row }) => {
      const setsQty = row.getValue("sets_qty") as number;

      return (
        <div className="flex h-full w-52 items-center justify-center gap-x-8 lg:w-64">
          <div className="flex w-12 flex-col items-center justify-center gap-y-2 font-semibold text-project-gray lg:w-16">
            {Array.from({ length: setsQty }, (_, i) => (
              <p key={i}>{i + 1}</p>
            ))}
          </div>
          <div className="flex w-12 flex-col items-center gap-y-2 font-semibold text-project-gray lg:w-16">
            {Array.from({ length: setsQty }, (_, i) => (
              <p
                key={i}
              >{`${row.original.reps.min} - ${row.original.reps.max}`}</p>
            ))}
          </div>
          <div className="flex w-12 flex-col items-center gap-y-2 font-semibold text-project-gray lg:w-16">
            {Array.from({ length: setsQty }, (_, i) => {
              const minutes = Math.floor(row.original.rest);
              const seconds = Math.round((row.original.rest - minutes) * 60);
              return (
                <p
                  key={i}
                >{`${Math.floor(row.original.rest)}'${seconds < 10 ? "0" : ""}${seconds}"`}</p>
              );
            })}
          </div>
        </div>
      );
    },
  },
];
