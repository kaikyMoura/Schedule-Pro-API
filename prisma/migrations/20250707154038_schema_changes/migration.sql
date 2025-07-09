/*
  Warnings:

  - You are about to drop the `Appointment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ServiceItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StaffAvailability` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StaffService` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserSession` table. If the table is not empty, all the data it contains will be lost.

*/

CREATE EXTENSION IF NOT EXISTS pg_trgm;

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "audit";

-- CreateEnum
CREATE TYPE "public"."PaymentStatus" AS ENUM ('PENDING', 'PAID', 'REFUNDED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "public"."PaymentMethod" AS ENUM ('CASH', 'CARD', 'PAYPAL', 'PIX');

-- CreateEnum
CREATE TYPE "public"."NotificationChannel" AS ENUM ('EMAIL', 'SMS', 'PUSH', 'IN_APP');

-- CreateEnum
CREATE TYPE "public"."NotificationType" AS ENUM ('APPOINTMENT_CONFIRMED', 'APPOINTMENT_CANCELLED', 'REMINDER', 'CUSTOM');

-- CreateEnum
CREATE TYPE "public"."Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateEnum
CREATE TYPE "audit"."AuditAction" AS ENUM ('INSERT', 'UPDATE', 'DELETE');

-- CreateEnum
CREATE TYPE "public"."DayOfWeek" AS ENUM ('0', '1', '2', '3', '4', '5', '6');

-- CreateEnum
CREATE TYPE "public"."AppointmentType" AS ENUM ('REGULAR', 'FOLLOW_UP', 'CONSULTATION', 'EMERGENCY');

-- AlterEnum
ALTER TYPE "public"."Role" ADD VALUE 'MANAGER';

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "public"."Status" ADD VALUE 'RESCHEDULED';
ALTER TYPE "public"."Status" ADD VALUE 'NO_SHOW';

-- DropForeignKey
ALTER TABLE "public"."Appointment" DROP CONSTRAINT "Appointment_customerId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Appointment" DROP CONSTRAINT "Appointment_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Appointment" DROP CONSTRAINT "Appointment_staffId_fkey";

-- DropForeignKey
ALTER TABLE "public"."StaffAvailability" DROP CONSTRAINT "StaffAvailability_staffId_fkey";

-- DropForeignKey
ALTER TABLE "public"."StaffService" DROP CONSTRAINT "StaffService_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "public"."StaffService" DROP CONSTRAINT "StaffService_staffId_fkey";

-- DropForeignKey
ALTER TABLE "public"."UserSession" DROP CONSTRAINT "UserSession_userId_fkey";

-- DropTable
DROP TABLE "public"."Appointment";

-- DropTable
DROP TABLE "public"."ServiceItem";

-- DropTable
DROP TABLE "public"."StaffAvailability";

-- DropTable
DROP TABLE "public"."StaffService";

-- DropTable
DROP TABLE "public"."User";

-- DropTable
DROP TABLE "public"."UserSession";

-- CreateTable
CREATE TABLE "public"."users" (
    "id" UUID NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "role" "public"."Role" NOT NULL DEFAULT 'CUSTOMER',
    "first_name" VARCHAR(100) NOT NULL,
    "last_name" VARCHAR(100) NOT NULL,
    "full_name" VARCHAR(201) NOT NULL,
    "avatar" TEXT,
    "date_of_birth" DATE,
    "gender" "public"."Gender",
    "address" TEXT,
    "city" VARCHAR(100),
    "state" VARCHAR(100),
    "zip_code" VARCHAR(20),
    "country" VARCHAR(100),
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "verified_at" TIMESTAMPTZ,
    "last_login_at" TIMESTAMPTZ,
    "timezone" VARCHAR(50) NOT NULL DEFAULT 'UTC',
    "language" VARCHAR(10) NOT NULL DEFAULT 'en',
    "currency" VARCHAR(3) NOT NULL DEFAULT 'USD',
    "email_notifications" BOOLEAN NOT NULL DEFAULT true,
    "sms_notifications" BOOLEAN NOT NULL DEFAULT false,
    "push_notifications" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "deleted_at" TIMESTAMPTZ,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."user_sessions" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "refresh_token" TEXT NOT NULL,
    "user_agent" TEXT,
    "ip_address" INET,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expires_at" TIMESTAMPTZ NOT NULL,
    "last_used_at" TIMESTAMPTZ,

    CONSTRAINT "user_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."notifications" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "appointment_id" UUID,
    "title" VARCHAR(255) NOT NULL,
    "message" TEXT NOT NULL,
    "type" "public"."NotificationType" NOT NULL,
    "channel" "public"."NotificationChannel" NOT NULL,
    "is_read" BOOLEAN NOT NULL DEFAULT false,
    "read_at" TIMESTAMPTZ,
    "scheduled_for" TIMESTAMPTZ,
    "sent_at" TIMESTAMPTZ,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "audit"."audit_logs" (
    "id" UUID NOT NULL,
    "table_name" VARCHAR(100) NOT NULL,
    "record_id" UUID NOT NULL,
    "action" "audit"."AuditAction" NOT NULL,
    "old_values" JSONB,
    "new_values" JSONB,
    "user_id" UUID,
    "ip_address" INET,
    "user_agent" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "audit_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."payments" (
    "id" UUID NOT NULL,
    "appointment_id" UUID,
    "user_id" UUID NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "currency" VARCHAR(3) NOT NULL DEFAULT 'USD',
    "status" "public"."PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "payment_method" "public"."PaymentMethod" NOT NULL,
    "stripe_payment_id" VARCHAR(255),
    "transaction_id" VARCHAR(255),
    "paid_at" TIMESTAMPTZ,
    "refunded_at" TIMESTAMPTZ,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."reviews" (
    "id" UUID NOT NULL,
    "appointment_id" UUID NOT NULL,
    "customer_id" UUID NOT NULL,
    "staff_id" UUID,
    "service_id" UUID NOT NULL,
    "rating" SMALLINT NOT NULL,
    "title" VARCHAR(255),
    "comment" TEXT,
    "is_approved" BOOLEAN NOT NULL DEFAULT false,
    "is_public" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."appointments" (
    "id" UUID NOT NULL,
    "scheduled_date" DATE NOT NULL,
    "scheduled_time" VARCHAR(5) NOT NULL,
    "start_time" TIMESTAMPTZ NOT NULL,
    "end_time" TIMESTAMPTZ NOT NULL,
    "timezone" VARCHAR(50) NOT NULL DEFAULT 'UTC',
    "status" "public"."Status" NOT NULL DEFAULT 'PENDING',
    "type" "public"."AppointmentType" NOT NULL DEFAULT 'REGULAR',
    "notes" TEXT,
    "internal_notes" TEXT,
    "price" DECIMAL(10,2) NOT NULL,
    "currency" VARCHAR(3) NOT NULL DEFAULT 'USD',
    "discount" DECIMAL(10,2) NOT NULL DEFAULT 0,
    "final_price" DECIMAL(10,2) NOT NULL,
    "customer_id" UUID NOT NULL,
    "staff_id" UUID,
    "service_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "deleted_at" TIMESTAMPTZ,

    CONSTRAINT "appointments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."service_items" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "category" VARCHAR(100) NOT NULL,
    "base_price" DECIMAL(10,2) NOT NULL,
    "currency" VARCHAR(3) NOT NULL DEFAULT 'USD',
    "durationMinutes" INTEGER NOT NULL,
    "buffer_time" INTEGER NOT NULL DEFAULT 0,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "is_online" BOOLEAN NOT NULL DEFAULT false,
    "max_advance_booking" INTEGER,
    "min_advance_booking" INTEGER,
    "color" VARCHAR(7),
    "icon" VARCHAR(50),
    "tags" VARCHAR(50)[],
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,
    "deleted_at" TIMESTAMPTZ,

    CONSTRAINT "service_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."staff_availability" (
    "id" UUID NOT NULL,
    "staff_id" UUID NOT NULL,
    "day_of_week" "public"."DayOfWeek" NOT NULL,
    "start_time" VARCHAR(5) NOT NULL,
    "end_time" VARCHAR(5) NOT NULL,
    "specific_date" DATE,
    "is_available" BOOLEAN NOT NULL DEFAULT true,
    "break_start_time" VARCHAR(5),
    "break_end_time" VARCHAR(5),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "staff_availability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."staff_services" (
    "id" UUID NOT NULL,
    "staff_id" UUID NOT NULL,
    "service_id" UUID NOT NULL,
    "custom_price" DECIMAL(10,2),
    "custom_duration" INTEGER,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "is_preferred" BOOLEAN NOT NULL DEFAULT false,
    "skill_level" SMALLINT NOT NULL DEFAULT 1,
    "experience" SMALLINT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "staff_services_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "public"."users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "public"."users"("phone");

-- CreateIndex
CREATE INDEX "idx_user_email" ON "public"."users"("email");

-- CreateIndex
CREATE INDEX "idx_user_phone" ON "public"."users"("phone");

-- CreateIndex
CREATE INDEX "idx_user_role" ON "public"."users"("role");

-- CreateIndex
CREATE INDEX "idx_user_is_active" ON "public"."users"("is_active");

-- CreateIndex
CREATE INDEX "idx_user_created_at" ON "public"."users"("created_at");

-- CreateIndex
CREATE INDEX "idx_user_deleted_at" ON "public"."users"("deleted_at");

-- CreateIndex
CREATE INDEX "idx_user_fullname_trgm" ON "public"."users" USING GIN ("full_name" gin_trgm_ops);

-- CreateIndex
CREATE INDEX "idx_usersession_user_id" ON "public"."user_sessions"("user_id");

-- CreateIndex
CREATE INDEX "idx_usersession_refresh_token" ON "public"."user_sessions"("refresh_token");

-- CreateIndex
CREATE INDEX "idx_usersession_expires_at" ON "public"."user_sessions"("expires_at");

-- CreateIndex
CREATE INDEX "idx_usersession_is_active" ON "public"."user_sessions"("is_active");

-- CreateIndex
CREATE INDEX "idx_usersession_last_used_at" ON "public"."user_sessions"("last_used_at");

-- CreateIndex
CREATE INDEX "idx_notification_user_id" ON "public"."notifications"("user_id");

-- CreateIndex
CREATE INDEX "idx_notification_appointment_id" ON "public"."notifications"("appointment_id");

-- CreateIndex
CREATE INDEX "idx_notification_is_read" ON "public"."notifications"("is_read");

-- CreateIndex
CREATE INDEX "idx_notification_scheduled_for" ON "public"."notifications"("scheduled_for");

-- CreateIndex
CREATE INDEX "idx_notification_type" ON "public"."notifications"("type");

-- CreateIndex
CREATE INDEX "idx_auditlog_table_name" ON "audit"."audit_logs"("table_name");

-- CreateIndex
CREATE INDEX "idx_auditlog_record_id" ON "audit"."audit_logs"("record_id");

-- CreateIndex
CREATE INDEX "idx_auditlog_action" ON "audit"."audit_logs"("action");

-- CreateIndex
CREATE INDEX "idx_auditlog_user_id" ON "audit"."audit_logs"("user_id");

-- CreateIndex
CREATE INDEX "idx_auditlog_created_at" ON "audit"."audit_logs"("created_at");

-- CreateIndex
CREATE INDEX "idx_payment_appointment_id" ON "public"."payments"("appointment_id");

-- CreateIndex
CREATE INDEX "idx_payment_user_id" ON "public"."payments"("user_id");

-- CreateIndex
CREATE INDEX "idx_payment_status" ON "public"."payments"("status");

-- CreateIndex
CREATE INDEX "idx_payment_created_at" ON "public"."payments"("created_at");

-- CreateIndex
CREATE INDEX "idx_review_appointment_id" ON "public"."reviews"("appointment_id");

-- CreateIndex
CREATE INDEX "idx_review_customer_id" ON "public"."reviews"("customer_id");

-- CreateIndex
CREATE INDEX "idx_review_staff_id" ON "public"."reviews"("staff_id");

-- CreateIndex
CREATE INDEX "idx_review_service_id" ON "public"."reviews"("service_id");

-- CreateIndex
CREATE INDEX "idx_review_rating" ON "public"."reviews"("rating");

-- CreateIndex
CREATE INDEX "idx_review_is_approved" ON "public"."reviews"("is_approved");

-- CreateIndex
CREATE UNIQUE INDEX "reviews_appointment_id_customer_id_key" ON "public"."reviews"("appointment_id", "customer_id");

-- CreateIndex
CREATE INDEX "idx_appointment_customer_id" ON "public"."appointments"("customer_id");

-- CreateIndex
CREATE INDEX "idx_appointment_staff_id" ON "public"."appointments"("staff_id");

-- CreateIndex
CREATE INDEX "idx_appointment_service_id" ON "public"."appointments"("service_id");

-- CreateIndex
CREATE INDEX "idx_appointment_status" ON "public"."appointments"("status");

-- CreateIndex
CREATE INDEX "idx_appointment_scheduled_date" ON "public"."appointments"("scheduled_date");

-- CreateIndex
CREATE INDEX "idx_appointment_start_time" ON "public"."appointments"("start_time");

-- CreateIndex
CREATE INDEX "idx_appointment_created_at" ON "public"."appointments"("created_at");

-- CreateIndex
CREATE UNIQUE INDEX "appointments_staff_id_start_time_key" ON "public"."appointments"("staff_id", "start_time");

-- CreateIndex
CREATE INDEX "idx_serviceitem_category" ON "public"."service_items"("category");

-- CreateIndex
CREATE INDEX "idx_serviceitem_is_active" ON "public"."service_items"("is_active");

-- CreateIndex
CREATE INDEX "idx_serviceitem_name_trgm" ON "public"."service_items" USING GIN ("name" gin_trgm_ops);

-- CreateIndex
CREATE INDEX "idx_staffavailability_staff_id" ON "public"."staff_availability"("staff_id");

-- CreateIndex
CREATE INDEX "idx_staffavailability_day_of_week" ON "public"."staff_availability"("day_of_week");

-- CreateIndex
CREATE INDEX "idx_staffavailability_specific_date" ON "public"."staff_availability"("specific_date");

-- CreateIndex
CREATE UNIQUE INDEX "staff_availability_staff_id_day_of_week_start_time_end_time_key" ON "public"."staff_availability"("staff_id", "day_of_week", "start_time", "end_time", "specific_date");

-- CreateIndex
CREATE INDEX "idx_staffservice_staff_id" ON "public"."staff_services"("staff_id");

-- CreateIndex
CREATE INDEX "idx_staffservice_service_id" ON "public"."staff_services"("service_id");

-- CreateIndex
CREATE INDEX "idx_staffservice_is_active" ON "public"."staff_services"("is_active");

-- CreateIndex
CREATE INDEX "idx_staffservice_is_preferred" ON "public"."staff_services"("is_preferred");

-- CreateIndex
CREATE UNIQUE INDEX "staff_services_staff_id_service_id_key" ON "public"."staff_services"("staff_id", "service_id");

-- AddForeignKey
ALTER TABLE "public"."user_sessions" ADD CONSTRAINT "user_sessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."notifications" ADD CONSTRAINT "notifications_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."notifications" ADD CONSTRAINT "notifications_appointment_id_fkey" FOREIGN KEY ("appointment_id") REFERENCES "public"."appointments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."payments" ADD CONSTRAINT "payments_appointment_id_fkey" FOREIGN KEY ("appointment_id") REFERENCES "public"."appointments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."payments" ADD CONSTRAINT "payments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."reviews" ADD CONSTRAINT "reviews_appointment_id_fkey" FOREIGN KEY ("appointment_id") REFERENCES "public"."appointments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."reviews" ADD CONSTRAINT "reviews_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."reviews" ADD CONSTRAINT "reviews_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "public"."users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."reviews" ADD CONSTRAINT "reviews_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "public"."service_items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."appointments" ADD CONSTRAINT "appointments_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."appointments" ADD CONSTRAINT "appointments_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "public"."users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."appointments" ADD CONSTRAINT "appointments_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "public"."service_items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."staff_availability" ADD CONSTRAINT "staff_availability_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."staff_services" ADD CONSTRAINT "staff_services_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."staff_services" ADD CONSTRAINT "staff_services_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "public"."service_items"("id") ON DELETE CASCADE ON UPDATE CASCADE;
