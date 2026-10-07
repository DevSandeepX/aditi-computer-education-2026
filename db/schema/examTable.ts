import {
    integer,
    pgEnum,
    pgTable,
    text,
    timestamp,
    uuid,
    varchar,
} from "drizzle-orm/pg-core";

import { courseTable } from "./courseTable";
import { createdAt, updatedAt } from "../schemaHelpers";

export const examStatusEnum = pgEnum("exam_status", [
    "draft",
    "published",
    "archived",
]);

export const examTable = pgTable("exams", {
    id: uuid("id").defaultRandom().primaryKey(),
    courseId: uuid("course_id").notNull().references(() => courseTable.id, { onDelete: "cascade", }),
    title: varchar("title", { length: 255, }).notNull(),
    slug: varchar("slug", { length: 255, }).notNull(),
    description: text("description"),
    instructions: text("instructions"),
    duration: integer("duration").notNull().default(30),
    totalMarks: integer("total_marks").notNull().default(0),
    passingMarks: integer("passing_marks").notNull().default(0),
    totalQuestions: integer("total_questions").notNull().default(0),
    attemptsAllowed: integer("attempts_allowed").notNull().default(1),
    order: integer("order").notNull().default(0),
    status: examStatusEnum("status").notNull().default("draft"),
    startsAt: timestamp("starts_at", { withTimezone: true, }),
    endsAt: timestamp("ends_at", { withTimezone: true, }),
    createdAt,
    updatedAt
});