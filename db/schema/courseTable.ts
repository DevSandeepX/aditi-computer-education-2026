import { boolean, integer, pgEnum, pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";
import { createdAt, updatedAt } from "../schemaHelpers";
import { categoryTable } from "./categoryTable";
import { relations } from "drizzle-orm";
import { lessonTable } from "./lessonTable";
import { enquiryTable } from "./enquiryTable";

export const courseStatuses = ['draft', 'published', 'private', 'archived'] as const
export type CourseStatus = (typeof courseStatuses)[number]
export const courseStatusesEnum = pgEnum('course_statuses_enum', courseStatuses)

export const courseTable = pgTable('courses', {
    id: uuid('id').primaryKey().notNull().defaultRandom(),
    parentId: uuid("parent_id"),
    title: varchar('title', { length: 255 }).notNull(),
    imageUrl: varchar('image_url', { length: 255 }).notNull(),
    sortDescription: text('sort_description').notNull(),
    description: text('description'),
    duration: integer('duration').notNull(),
    isFeatured: boolean().notNull().default(false),
    status: courseStatusesEnum().default('draft').notNull(),
    categoryId: uuid('category_id').notNull().references(() => categoryTable.id),
    createdAt,
    updatedAt
});



export const courseTableRelations = relations(courseTable, ({ one, many }) => ({
    category: one(categoryTable, ({ fields: [courseTable.categoryId], references: [categoryTable.id] })),
    lessons: many(lessonTable),
    enquiries: many(enquiryTable)
}))