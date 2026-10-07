import {
    pgEnum,
    pgTable,
    timestamp,
    uuid,
    varchar,
} from "drizzle-orm/pg-core";

export const userRoleEnum = pgEnum("user_role", [
    "student",
    "teacher",
    "admin",
]);

export const userStatusEnum = pgEnum("user_status", [
    "active",
    "inactive",
    "blocked",
]);

export const userTable = pgTable("users", {
    id: uuid("id")
        .defaultRandom()
        .primaryKey(),

    registrationNumber: varchar("registration_number", {
        length: 50,
    })
        .notNull()
        .unique(),

    name: varchar("name", {
        length: 255,
    }).notNull(),

    email: varchar("email", {
        length: 255,
    })
        .unique(),

    phone: varchar("phone", {
        length: 20,
    })
        .notNull()
        .unique(),

    password: varchar("password", {
        length: 255,
    }).notNull(),

    role: userRoleEnum("role")
        .notNull()
        .default("student"),

    status: userStatusEnum("status")
        .notNull()
        .default("active"),

    createdAt: timestamp("created_at", {
        withTimezone: true,
    })
        .notNull()
        .defaultNow(),

    updatedAt: timestamp("updated_at", {
        withTimezone: true,
    })
        .notNull()
        .defaultNow(),
});