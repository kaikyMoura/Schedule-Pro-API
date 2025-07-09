/*
  Warnings:

  - The values [0,1,2,3,4,5,6] on the enum `DayOfWeek` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."DayOfWeek_new" AS ENUM ('SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY');
ALTER TABLE "public"."staff_availability" ALTER COLUMN "day_of_week" TYPE "public"."DayOfWeek_new" USING ("day_of_week"::text::"public"."DayOfWeek_new");
ALTER TYPE "public"."DayOfWeek" RENAME TO "DayOfWeek_old";
ALTER TYPE "public"."DayOfWeek_new" RENAME TO "DayOfWeek";
DROP TYPE "public"."DayOfWeek_old";
COMMIT;
