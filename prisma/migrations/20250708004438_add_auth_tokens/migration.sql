/*
  Warnings:

  - A unique constraint covering the columns `[password_reset_token]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[verification_token]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updated_at` to the `user_sessions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."user_sessions" ADD COLUMN     "updated_at" TIMESTAMPTZ NOT NULL;

-- AlterTable
ALTER TABLE "public"."users" ADD COLUMN     "password_reset_token" TEXT,
ADD COLUMN     "password_reset_token_expires_at" TIMESTAMPTZ,
ADD COLUMN     "verification_token" TEXT,
ADD COLUMN     "verification_token_expires_at" TIMESTAMPTZ;

-- CreateIndex
CREATE UNIQUE INDEX "users_password_reset_token_key" ON "public"."users"("password_reset_token");

-- CreateIndex
CREATE UNIQUE INDEX "users_verification_token_key" ON "public"."users"("verification_token");
