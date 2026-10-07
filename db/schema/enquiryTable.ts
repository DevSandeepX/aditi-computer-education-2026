import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { courseTable } from "./courseTable";
import { relations } from "drizzle-orm";

export const enquiryTable = pgTable('enquiries', {
    id: uuid('id').primaryKey().notNull().defaultRandom(),
    interestedCourseId: uuid('interested_course_id').references(() => courseTable.id).notNull(),
    fullName: text('full_name').notNull(),
    email: text('email').notNull(),
    phone: text('phone').notNull(),
    message: text('message').notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).$onUpdate(() => new Date())
})



export const enquiryTableRelation = relations(enquiryTable, ({ one }) => ({
    course: one(courseTable, {
        fields: [enquiryTable.interestedCourseId],
        references: [courseTable.id],
        relationName: 'course_enquiry'
    })
}))