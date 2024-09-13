/*
  Warnings:

  - You are about to drop the column `height_in_cm` on the `user_profile` table. All the data in the column will be lost.
  - Added the required column `height_in_cm` to the `nutrition_program` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "nutrition_program" ADD COLUMN     "height_in_cm" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "user_profile" DROP COLUMN "height_in_cm";
