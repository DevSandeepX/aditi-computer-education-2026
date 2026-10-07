import {
    integer,
    pgEnum,
    pgTable,
    text,
    uuid,
    varchar,
} from "drizzle-orm/pg-core";
import { courseTable } from "./courseTable";
import { createdAt, updatedAt } from "../schemaHelpers";
import { relations } from "drizzle-orm";


export const lessonStatusEnum = pgEnum("lesson_status", [
    "draft",
    "published",
    "archived",
    "private",
]);

export const lessonTable = pgTable("lessons", {
    id: uuid("id").defaultRandom().primaryKey(),
    courseId: uuid("course_id").notNull().references(() => courseTable.id, { onDelete: "cascade", }),
    title: varchar("title", { length: 255 }).notNull(),
    slug: varchar("slug", { length: 255 }).notNull(),
    description: text("description"),
    content: text("content"),
    videoUrl: text("video_url"),
    pdfUrl: text("pdf_url"),
    thumbnailUrl: text("thumbnail_url"),
    order: integer("order").notNull().default(0),
    status: lessonStatusEnum("status").notNull().default("draft"),
    createdAt,
    updatedAt
});


export const lessonTableRelations = relations(lessonTable, ({ one }) => ({
    course: one(courseTable, ({ fields: [lessonTable.courseId], references: [courseTable.id] }))
}))