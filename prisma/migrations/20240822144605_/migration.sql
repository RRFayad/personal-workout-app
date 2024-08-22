-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female');

-- CreateEnum
CREATE TYPE "DietPhase" AS ENUM ('bulk', 'maintain', 'cut');

-- CreateTable
CREATE TABLE "user_auth_info" (
    "user_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "google_id" TEXT,
    "facebook_id" TEXT,

    CONSTRAINT "user_auth_info_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "user_profile" (
    "user_id" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "image_url" TEXT,
    "date_of_birth" TIMESTAMP(3) NOT NULL,
    "height_in_cm" INTEGER NOT NULL,

    CONSTRAINT "user_profile_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "workout_program_structure" (
    "workout_program_id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "available_training_days_qty" INTEGER NOT NULL,
    "workout_program_start" TIMESTAMP(3) NOT NULL,
    "workout_program_end" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "workout_program_structure_pkey" PRIMARY KEY ("workout_program_id")
);

-- CreateTable
CREATE TABLE "workout_program_details" (
    "workout_program_id" INTEGER NOT NULL,
    "day_number" INTEGER NOT NULL,
    "day_name" TEXT NOT NULL,
    "exercise_number" INTEGER NOT NULL,
    "exercise_name" TEXT NOT NULL,
    "sets_qty" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "nutrition_program" (
    "user_id" TEXT NOT NULL,
    "weight_in_kg" INTEGER NOT NULL,
    "current_diet_phase" "DietPhase" NOT NULL,
    "weekly_training_hours" INTEGER NOT NULL,
    "basal_metabolic_rate" INTEGER NOT NULL,
    "total_daily_energy_expenditure" INTEGER NOT NULL,
    "daily_kcal" INTEGER NOT NULL,
    "daily_proteins" INTEGER NOT NULL,
    "daily_carbs" INTEGER NOT NULL,
    "daily_fats" INTEGER NOT NULL,

    CONSTRAINT "nutrition_program_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_auth_info_email_key" ON "user_auth_info"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_auth_info_google_id_key" ON "user_auth_info"("google_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_auth_info_facebook_id_key" ON "user_auth_info"("facebook_id");

-- CreateIndex
CREATE UNIQUE INDEX "workout_program_structure_user_id_key" ON "workout_program_structure"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "workout_program_details_workout_program_id_day_number_exerc_key" ON "workout_program_details"("workout_program_id", "day_number", "exercise_number");

-- AddForeignKey
ALTER TABLE "user_profile" ADD CONSTRAINT "user_profile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_auth_info"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workout_program_structure" ADD CONSTRAINT "workout_program_structure_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_auth_info"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workout_program_details" ADD CONSTRAINT "workout_program_details_workout_program_id_fkey" FOREIGN KEY ("workout_program_id") REFERENCES "workout_program_structure"("workout_program_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nutrition_program" ADD CONSTRAINT "nutrition_program_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_auth_info"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;
