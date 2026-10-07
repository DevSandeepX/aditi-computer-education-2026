import {
    integer,
    pgEnum,
    pgTable,
    timestamp,
    uuid,
    varchar,
} from "drizzle-orm/pg-core";

import { examTable } from "./examTable";
import { createdAt, updatedAt } from "../schemaHelpers";

export const examAttemptStatusEnum = pgEnum("exam_attempt_status", [
    "in_progress",
    "submitted",
    "expired",
    "cancelled",
]);

export const examAttemptTable = pgTable("exam_attempts", {
    id: uuid("id").defaultRandom().primaryKey(),
    examId: uuid("exam_id").notNull().references(() => examTable.id, { onDelete: "cascade", }),
    userId: varchar("user_id", { length: 255, }).notNull(),
    attemptNumber: integer("attempt_number").notNull().default(1),
    status: examAttemptStatusEnum("status").notNull().default("in_progress"),
    totalQuestions: integer("total_questions").notNull().default(0),
    answeredQuestions: integer("answered_questions").notNull().default(0),
    correctAnswers: integer("correct_answers").notNull().default(0),
    wrongAnswers: integer("wrong_answers").notNull().default(0),
    marksObtained: integer("marks_obtained").notNull().default(0),
    totalMarks: integer("total_marks").notNull().default(0),
    startedAt: timestamp("started_at", { withTimezone: true, }).notNull().defaultNow(),
    submittedAt: timestamp("submitted_at", { withTimezone: true, }),
    expiresAt: timestamp("expires_at", { withTimezone: true, }),
    createdAt,
    updatedAt
});