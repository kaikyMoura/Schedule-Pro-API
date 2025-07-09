/*
  Warnings:

  - You are about to drop the column `full_name` on the `users` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "public"."idx_user_fullname_trgm";

-- AlterTable
ALTER TABLE "public"."users" DROP COLUMN "full_name";
