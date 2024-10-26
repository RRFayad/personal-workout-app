/*
  Warnings:

  - You are about to drop the column `height_in_cm` on the `nutrition_program` table. All the data in the column will be lost.
  - Added the required column `height_in_cm` to the `user_profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "nutrition_program" DROP COLUMN "height_in_cm";

-- AlterTable
ALTER TABLE "user_profile" ADD COLUMN     "height_in_cm" INTEGER NOT NULL;
