"use client";

import { WorkoutProgramDetails } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import * as exercises from "@/lib/workout/exercises";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Exercise = {
  exercise: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

console.log(exercises);

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "exercise",
    header: "",
    cell: ({ row }) => {
      const exerciseName = row.getValue("exercise_name");
      const exerciseEquipment = row.getValue("equipment");
    },
  },
  {
    accessorKey: "gif",
    header: "",
  },
  {
    accessorKey: "set",
    header: "Set",
  },
  {
    accessorKey: "reps",
    header: "Reps",
  },
  {
    accessorKey: "rest",
    header: "Rest",
  },
];
