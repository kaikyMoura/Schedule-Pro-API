-- AlterTable
ALTER TABLE "public"."notifications" ALTER COLUMN "deleted_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."payments" ALTER COLUMN "deleted_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."reviews" ALTER COLUMN "deleted_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."staff_availability" ALTER COLUMN "deleted_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."staff_services" ALTER COLUMN "deleted_at" DROP NOT NULL;
