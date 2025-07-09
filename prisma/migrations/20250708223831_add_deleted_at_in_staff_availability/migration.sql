/*
  Warnings:

  - Added the required column `deleted_at` to the `staff_availability` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."staff_availability" ADD COLUMN     "deleted_at" TIMESTAMPTZ NOT NULL;
