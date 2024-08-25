/*
  Warnings:

  - The primary key for the `user_auth_info` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `facebook_id` on the `user_auth_info` table. All the data in the column will be lost.
  - You are about to drop the column `google_id` on the `user_auth_info` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `user_auth_info` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - The required column `id` was added to the `user_auth_info` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `updatedAt` to the `user_auth_info` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_userId_fkey";

-- DropForeignKey
ALTER TABLE "Authenticator" DROP CONSTRAINT "Authenticator_userId_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";

-- DropForeignKey
ALTER TABLE "nutrition_program" DROP CONSTRAINT "nutrition_program_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user_profile" DROP CONSTRAINT "user_profile_user_id_fkey";

-- DropForeignKey
ALTER TABLE "workout_program_structure" DROP CONSTRAINT "workout_program_structure_user_id_fkey";

-- DropIndex
DROP INDEX "user_auth_info_facebook_id_key";

-- DropIndex
DROP INDEX "user_auth_info_google_id_key";

-- AlterTable
ALTER TABLE "user_auth_info" DROP CONSTRAINT "user_auth_info_pkey",
DROP COLUMN "facebook_id",
DROP COLUMN "google_id",
DROP COLUMN "user_id",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "emailVerified" TIMESTAMP(3),
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "name" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "user_auth_info_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "User";

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user_auth_info"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user_auth_info"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Authenticator" ADD CONSTRAINT "Authenticator_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user_auth_info"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_profile" ADD CONSTRAINT "user_profile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_auth_info"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workout_program_structure" ADD CONSTRAINT "workout_program_structure_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_auth_info"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nutrition_program" ADD CONSTRAINT "nutrition_program_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_auth_info"("id") ON DELETE CASCADE ON UPDATE CASCADE;
