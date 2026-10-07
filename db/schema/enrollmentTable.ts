import {
    pgTable,
    timestamp,
    uuid,
    varchar,
    unique,
} from "drizzle-orm/pg-core";

import { userTable } from "./userTable";
import { courseTable } from "./courseTable";

export const enrollmentTable = pgTable(
    "enrollments",
    {
        id: uuid("id")
            .defaultRandom()
            .primaryKey(),

        userId: uuid("user_id")
            .notNull()
            .references(() => userTable.id, {
                onDelete: "cascade",
            }),

        courseId: uuid("course_id")
            .notNull()
            .references(() => courseTable.id, {
                onDelete: "cascade",
            }),

        rollNumber: varchar("roll_number", {
            length: 50,
        }).notNull(),

        enrolledAt: timestamp("enrolled_at", {
            withTimezone: true,
        })
            .notNull()
            .defaultNow(),

        completedAt: timestamp("completed_at", {
            withTimezone: true,
        }),
    },

    (table) => [
        unique("user_course_unique").on(
            table.userId,
            table.courseId,
        ),

        unique("course_roll_number_unique").on(
            table.courseId,
            table.rollNumber,
        ),
    ],
);