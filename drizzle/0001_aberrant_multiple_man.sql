CREATE TYPE "public"."role" AS ENUM('USER', 'ADMIN');--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "password" text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "role" "role" DEFAULT 'USER';