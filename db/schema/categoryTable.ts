import { pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";
import { createdAt, updatedAt } from "../schemaHelpers";
import { relations } from "drizzle-orm";
import { courseTable } from "./courseTable";


export const categoryTable = pgTable('categories', {
    id: uuid('id').primaryKey().notNull().defaultRandom(),
    slug: text('slug').notNull().unique(),
    title: varchar('title', { length: 255 }).notNull(),
    sortDescription: text('sort_description').notNull(),
    createdAt,
    updatedAt
})

export const categoryTableRelations = relations(categoryTable, ({ many }) => ({
    courses: many(courseTable)
}))