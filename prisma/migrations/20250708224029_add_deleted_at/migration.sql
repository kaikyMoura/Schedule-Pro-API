/*
  Warnings:

  - Added the required column `deleted_at` to the `notifications` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `notifications` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deleted_at` to the `payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deleted_at` to the `reviews` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deleted_at` to the `staff_services` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."notifications" ADD COLUMN     "deleted_at" TIMESTAMPTZ NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMPTZ NOT NULL;

-- AlterTable
ALTER TABLE "public"."payments" ADD COLUMN     "deleted_at" TIMESTAMPTZ NOT NULL;

-- AlterTable
ALTER TABLE "public"."reviews" ADD COLUMN     "deleted_at" TIMESTAMPTZ NOT NULL;

-- AlterTable
ALTER TABLE "public"."staff_services" ADD COLUMN     "deleted_at" TIMESTAMPTZ NOT NULL;
