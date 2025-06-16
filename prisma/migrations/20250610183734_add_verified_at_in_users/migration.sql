-- AlterTable
ALTER TABLE "Appointment" ALTER COLUMN "status" SET DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "verified_at" TIMESTAMP(3),
ALTER COLUMN "role" SET DEFAULT 'CUSTOMER';
