CREATE TYPE "public"."course_statuses_enum" AS ENUM('draft', 'published', 'private', 'archived');--> statement-breakpoint
CREATE TABLE "courses" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"parent_id" uuid,
	"title" varchar(255) NOT NULL,
	"image_url" varchar(255) NOT NULL,
	"sort_description" text NOT NULL,
	"description" text,
	"duration" integer NOT NULL,
	"isFeatured" boolean DEFAULT false NOT NULL,
	"status" "course_statuses_enum" DEFAULT 'draft' NOT NULL,
	"category_id" uuid NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone NOT NULL
);
--> statement-breakpoint
ALTER TABLE "courses" ADD CONSTRAINT "courses_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE no action ON UPDATE no action;